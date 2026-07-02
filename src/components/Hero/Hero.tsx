import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { motion } from 'framer-motion';
import { useLocale } from '../../context/LocaleContext';
import { UnderlineHeader } from './UnderlineHeader';
import { BackgroundHeader } from './BackgroundHeader';
import { UserProfileCard } from './UserProfileCard';

export const Hero = () => {
  const { lang } = useLocale();
  return (
    <Container id="hero" maxWidth="lg" sx={{ mb: 8 }}>
      <Toolbar />
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        sx={{ alignItems: 'center', py: { xs: 4, lg: 2 } }}
        spacing={{ xs: 8, md: 10 }}
      >
        <Stack sx={{ flex: 1 }} spacing={2}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <UnderlineHeader text="Angelo Tarazona" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <BackgroundHeader text={lang.Title} />
          </motion.div>
        </Stack>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
          <UserProfileCard />
        </motion.div>
      </Stack>
    </Container>
  );
};
