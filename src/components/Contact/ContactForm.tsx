import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useLocale } from '../../context/LocaleContext';
import { useContactForm } from './useContactForm';
import { Loading } from '../Shared/Loading';

export const ContactForm = () => {
  const { lang } = useLocale();
  const { state, loading, toast, setToast, onChange, onFocus, onClick } = useContactForm();

  return (
    <Box sx={{ width: { xs: '100%', md: '70%' } }}>
      <Box sx={{ position: 'relative', p: 3, bgcolor: 'background.paper', borderRadius: 1, boxShadow: 2 }}>
        {loading && <Loading />}
        <Stack spacing={3}>
          <TextField
            label={lang.YourName}
            name="name"
            value={state.name}
            onChange={onChange}
            onFocus={onFocus}
            error={state.error && !state.name}
            helperText={state.error && !state.name ? '*Field cannot be empty' : ''}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label={lang.Email}
            name="email"
            value={state.email}
            onChange={onChange}
            onFocus={onFocus}
            error={state.error && !state.email}
            helperText={state.error && !state.email ? '*Field cannot be empty' : ''}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label={lang.Message}
            name="message"
            value={state.message}
            onChange={onChange}
            onFocus={onFocus}
            multiline
            rows={4}
            error={state.error && !state.message}
            helperText={state.error && !state.message ? '*Field cannot be empty' : ''}
          />
          <Button variant="contained" onClick={onClick} sx={{ alignSelf: 'flex-end' }}>
            {lang.Send}
          </Button>
        </Stack>
      </Box>
      <Snackbar
        open={!!toast}
        autoHideDuration={5000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {toast ? (
          <Alert severity={toast.severity} onClose={() => setToast(null)}>
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </Box>
  );
};
