import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LayersIcon from '@mui/icons-material/Layers';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLocale } from '../../context/LocaleContext';
import { LocaleSelect } from './LocaleSelect';

interface Props {
  mode: 'light' | 'dark';
  onToggleTheme: () => void;
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const sections = [
  { key: 'Home', id: 'hero', icon: <HomeIcon /> },
  { key: 'Skills', id: 'personal-skill', icon: <PsychologyIcon /> },
  { key: 'Stack', id: 'tech-stack', icon: <LayersIcon /> },
  { key: 'About', id: 'about-me', icon: <InfoIcon /> },
  { key: 'Contact', id: 'contact-me', icon: <EmailIcon /> },
];

export const NavBar = ({ mode, onToggleTheme }: Props) => {
  const { locale, lang, setLocale } = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const nav = (
    <>
      {sections.map((s) => {
        const label = lang[s.key as keyof typeof lang] || s.key;
        const isContact = s.key === 'Contact';
        return (
          <Button
            key={s.key}
            onClick={() => scrollTo(s.id)}
            variant={isContact ? 'contained' : 'text'}
            color={isContact ? 'primary' : 'inherit'}
            sx={{ ml: 0.5 }}
          >
            {label}
          </Button>
        );
      })}
    </>
  );

  const drawerList = (
    <List sx={{ width: 250 }}>
      {sections.map((s) => {
        const label = lang[s.key as keyof typeof lang] || s.key;
        return (
          <ListItemButton
            key={s.key}
            onClick={() => { scrollTo(s.id); setDrawerOpen(false); }}
          >
            <ListItemIcon>{s.icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        );
      })}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ gap: 1 }}>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => setDrawerOpen(true)} edge="start">
              <MenuIcon />
            </IconButton>
          </Box>
          <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
            <IconButton onClick={onToggleTheme} color="inherit" size="small">
              {mode === 'dark' ? <DarkModeIcon fontSize="small" /> : <LightModeIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <LocaleSelect locale={locale} onChange={setLocale} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{nav}</Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};
