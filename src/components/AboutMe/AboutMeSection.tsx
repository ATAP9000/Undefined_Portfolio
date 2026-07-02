import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useLocale } from '../../context/LocaleContext';
import { CenterHeader } from '../Shared/CenterHeader';

export const AboutMeSection = () => {
  const { lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const bg = isDark ? 'grey.100' : 'black';
  const txt = isDark ? 'black' : 'white';
  return (
    <Box id="about-me" component="section" sx={{ bgcolor: bg, px: 8, pt: 8, pb: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <CenterHeader color={txt} text={lang.About} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', px: 8 }}>
          <Typography variant="body1" sx={{ color: txt, maxWidth: 'md', textAlign: 'center' }}>
            {lang.AboutMeResume}
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};
