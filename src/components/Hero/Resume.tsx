import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLocale } from '../../context/LocaleContext';

export const Resume = () => {
  const { lang } = useLocale();
  return (
    <Stack spacing={1} sx={{ mt: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
        {lang.Resume}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
        {lang.ResumeText}
      </Typography>
    </Stack>
  );
};
