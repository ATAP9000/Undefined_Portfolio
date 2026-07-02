import type { ReactNode } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Props {
  children: ReactNode;
}

export const ContactMeContainer = ({ children }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Container id="contact-me" component="section" maxWidth={false} sx={{ overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
        <Box
          sx={{
            bgcolor: isDark ? 'grey.100' : 'black',
            color: isDark ? 'black' : 'white',
            borderRadius: { xs: 0, lg: 1 },
            mx: { xs: 0, md: 8 },
            px: { xs: 3, lg: 8 },
            py: { xs: 4, lg: 8 },
            width: '100%',
            maxWidth: 1200,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
