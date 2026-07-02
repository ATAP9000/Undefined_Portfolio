import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: mode === 'dark'
        ? { main: '#94a3b8', light: '#cbd5e1', dark: '#64748b', contrastText: '#0f172a' }
        : { main: '#475569', light: '#64748b', dark: '#334155', contrastText: '#ffffff' },
      ...(mode === 'dark'
        ? {
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#ffffff' },
          }
        : {
            background: { default: '#ffffff', paper: '#ffffff' },
            text: { primary: '#000000' },
          }),
    },
  });
