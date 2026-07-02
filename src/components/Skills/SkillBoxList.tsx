import Container from '@mui/material/Container';
import { useLocale } from '../../context/LocaleContext';
import { enSkills, esSkills } from './skills';
import { SkillBox } from './SkillBox';

export const SkillBoxList = () => {
  const { locale } = useLocale();
  const skills = locale === 'en' ? enSkills : esSkills;

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      {skills.map((s) => (
        <SkillBox key={s.title} icon={s.icon} title={s.title} description={s.description} reverse={s.reverse} />
      ))}
    </Container>
  );
};
