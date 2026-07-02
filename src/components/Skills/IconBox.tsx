import type { ElementType } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  icon: ElementType;
}

export const IconBox = ({ icon: Icon }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: isDark ? 'grey.300' : 'white',
        borderRadius: 1,
        boxShadow: 2,
        flexShrink: 0,
        width: { xs: 96, lg: 144 },
        height: { xs: 96, lg: 144 },
      }}
    >
      <Icon sx={{ fontSize: { xs: 48, lg: 72 }, color: isDark ? 'grey.800' : 'grey.700' }} />
    </Box>
  );
};
