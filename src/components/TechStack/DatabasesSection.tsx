import { useTheme } from '@mui/material/styles';
import { useLocale } from '../../context/LocaleContext';
import { enDBStack, esDBStack } from './stack';
import { TechSection } from './TechSection';

export const DatabasesSection = () => {
  const { locale, lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const data = locale === 'en' ? enDBStack : esDBStack;
  return (
    <TechSection
      id="database-skill"
      backgroundColor={isDark ? 'grey.900' : 'white'}
      header={{ color: isDark ? 'white' : 'black', text: lang.Databases }}
      data={data}
    />
  );
};
