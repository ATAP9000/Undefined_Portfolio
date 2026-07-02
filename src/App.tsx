import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { getTheme } from './theme';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { PersonalSkillsSection } from './components/Skills/PersonalSkillsSection';
import { TechStackSection } from './components/TechStack/TechStackSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { AboutMeSection } from './components/AboutMe/AboutMeSection';
import { ContactMeSection } from './components/Contact/ContactMeSection';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '::-webkit-scrollbar': { width: 8 },
          '::-webkit-scrollbar-track': { background: 'transparent' },
          '::-webkit-scrollbar-thumb': {
            background: theme.palette.mode === 'dark' ? '#555' : '#bbb',
            borderRadius: 4,
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.mode === 'dark' ? '#777' : '#999',
          },
        }}
      />
      <NavBar mode={mode} onToggleTheme={() => setMode((m) => (m === 'dark' ? 'light' : 'dark'))} />
      <Hero />
      <PersonalSkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactMeSection />
    </ThemeProvider>
  );
}

export default App;
