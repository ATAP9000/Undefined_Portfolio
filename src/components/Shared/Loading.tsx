import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'rgba(0,0,0,0.5)',
      zIndex: 10,
      borderRadius: 'inherit',
    }}
  >
    <CircularProgress />
  </Box>
);
