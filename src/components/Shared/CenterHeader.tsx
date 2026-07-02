import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  color: string;
  text: string;
}

export const CenterHeader = ({ color, text }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: 6 }}>
    <Typography variant="h3" sx={{ fontWeight: 600, color, letterSpacing: 1.4 }}>
      {text}
    </Typography>
  </Box>
);
