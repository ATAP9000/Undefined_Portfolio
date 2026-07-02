import type { ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '../../context/LocaleContext';

interface Props {
  header: string;
  data: string[];
  children: ReactNode;
  rowPos: number;
  total: number;
}

type Align = 'left' | 'center' | 'right';

const getAlign = (pos: number, total: number): Align => {
  if (total <= 1) return 'center';
  const perThird = total / 3;
  if (pos < perThird) return 'left';
  if (pos >= total - perThird) return 'right';
  return 'center';
};

export const TechPopover = ({ header, data, children, rowPos, total }: Props) => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);

  const align = getAlign(rowPos, total);

  const alignStyle: Record<Align, React.CSSProperties> = {
    left: { left: 0, right: 'auto' },
    center: { left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto' },
    right: { left: 'auto', right: 0 },
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '100%',
              zIndex: 1300,
              paddingTop: 6,
              pointerEvents: 'none',
              ...alignStyle[align],
            }}
          >
            <Paper elevation={4} sx={{ width: 220, overflow: 'hidden' }}>
              <Typography variant="subtitle2" sx={{ px: 2, pt: 1.5, pb: 0.5, fontWeight: 600 }}>
                {header} {locale === 'en' ? 'skills' : 'conocimientos'}
              </Typography>
              <List dense sx={{ px: 1, pb: 1 }}>
                {data.map((val, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemIcon sx={{ minWidth: 28 }}>
                      <CheckCircleIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={val} slotProps={{ primary: { variant: 'body2' } }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
