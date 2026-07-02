import { useTheme } from '@mui/material/styles';
import { useLocale } from '../../context/LocaleContext';
import { enFrameworkStack, esFrameworkStack } from './stack';
import { TechSection } from './TechSection';

export const FrameworkSection = () => {
  const { locale, lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const data = locale === 'en' ? enFrameworkStack : esFrameworkStack;
  return (
    <TechSection
      id="framework-skill"
      backgroundColor={isDark ? 'grey.800' : '#f5f5f5'}
      header={{ color: isDark ? 'white' : 'black', text: lang.Frameworks }}
      data={data}
    />
  );
};
