import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useLocale } from '../../context/LocaleContext';

export const ContactHeader = () => {
  const { lang } = useLocale();
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'inherit' }}>
        {lang.Contact}
      </Typography>
      <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.75 }}>
        {lang.ContactText}
      </Typography>
    </Box>
  );
};
