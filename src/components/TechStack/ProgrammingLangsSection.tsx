import { useTheme } from '@mui/material/styles';
import { useLocale } from '../../context/LocaleContext';
import { enLangStack, esLangStack } from './stack';
import { TechSection } from './TechSection';

export const ProgrammingLangsSection = () => {
  const { locale, lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const data = locale === 'en' ? enLangStack : esLangStack;
  return (
    <TechSection
      id="programming-skills"
      backgroundColor={isDark ? 'grey.900' : 'white'}
      header={{ color: isDark ? 'white' : 'black', text: lang.ProgLangs }}
      data={data}
    />
  );
};
