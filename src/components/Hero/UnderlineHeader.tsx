import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
  text: string;
}

export const UnderlineHeader = ({ text }: Props) => (
  <Typography variant="h2" sx={{ fontWeight: 600 }}>
    <Box
      component="span"
      sx={(theme) => ({
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 1,
          left: 0,
          width: '100%',
          height: '30%',
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)',
          zIndex: -1,
        },
      })}
    >
      {text}
    </Box>
  </Typography>
);
