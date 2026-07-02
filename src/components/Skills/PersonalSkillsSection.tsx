import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useLocale } from '../../context/LocaleContext';
import { CenterHeader } from '../Shared/CenterHeader';
import { SkillBoxList } from './SkillBoxList';

export const PersonalSkillsSection = () => {
  const { lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box id="personal-skill" component="section" sx={{ bgcolor: isDark ? 'grey.100' : 'black', px: 4, py: 2 }}>
      <CenterHeader color={isDark ? 'black' : 'white'} text={lang.Skills} />
      <SkillBoxList />
    </Box>
  );
};
