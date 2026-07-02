import { useState, useEffect, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLocale } from '../../context/LocaleContext';
import { CenterHeader } from '../Shared/CenterHeader';

interface Repo {
  id: number | string;
  name: string;
  description: string | null;
  html_url: string;
  languages: string[];
}

interface GqlLangEdge {
  size: number;
  node: { name: string };
}

interface GqlNode {
  id: string;
  name: string;
  description: string | null;
  url: string;
  languages: { edges: GqlLangEdge[] };
}

interface GqlResponse {
  data: { user: { pinnedItems: { nodes: GqlNode[] } } };
}

interface RestRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

const langColors: Record<string, string> = {
  'C#': '#512BD4', CSharp: '#512BD4', TypeScript: '#3178C6', JavaScript: '#F7DF1E',
  Python: '#3776AB', Ruby: '#CC342D', PHP: '#777BB4', CSS: '#1572B6',
  HTML: '#E34F26', Java: '#ED8B00', Go: '#00ADD8', Rust: '#DEA584',
  Kotlin: '#7F52FF', Swift: '#F05138', Dart: '#0175C2', Shell: '#89E051',
  Dockerfile: '#2496ED', SCSS: '#CC6699', Vue: '#4FC08D', Svelte: '#FF3E00',
  'C++': '#00599C', C: '#555555', SQL: '#336791', 'PLpgSQL': '#336791',
  TSQL: '#CC2927', HCL: '#844FBA', Makefile: '#427819', PowerShell: '#012456',
  Lua: '#000080', Elixir: '#4B275F', Haskell: '#5E5086', Julia: '#9558B2',
  R: '#276DC3', 'Objective-C': '#438EFF', Assembly: '#6E4C13',
};

const getLangColor = (name: string): string =>
  langColors[name] || langColors[name.toLowerCase()] || '#888';

const mapGql = (nodes: GqlNode[]): Repo[] =>
  nodes.map((n) => ({
    id: n.id,
    name: n.name,
    description: n.description,
    html_url: n.url,
    languages: n.languages?.edges.map((e) => e.node.name) ?? [],
  }));

const mapRest = (data: RestRepo[]): Repo[] =>
  data.map((r) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    html_url: r.html_url,
    languages: r.language ? [r.language] : [],
  }));

const WORKER_URL = import.meta.env.VITE_PROJECTS_API;
const REST_API = 'https://api.github.com/users/ATAP9000/repos?sort=updated&per_page=6';
const INTERVAL = 5000;

export const ProjectsSection = () => {
  const { lang } = useLocale();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const bg = isDark ? 'grey.800' : '#f5f5f5';
  const hdr = isDark ? 'white' : 'black';
  const txt = isDark ? 'white' : 'black';

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fetchPinned = () =>
      fetch(WORKER_URL)
        .then((r) => r.json())
        .then((json: GqlResponse) => {
          setRepos(mapGql(json.data.user.pinnedItems.nodes));
          setLoading(false);
        });

    const fetchRecent = () =>
      fetch(REST_API)
        .then((r) => r.json())
        .then((data: RestRepo[]) => { setRepos(mapRest(data)); setLoading(false); });

    (WORKER_URL ? fetchPinned() : fetchRecent())
      .catch(() => {
        if (WORKER_URL) return fetchRecent();
        setError('Failed to load projects');
        setLoading(false);
      })
      .catch(() => { setError('Failed to load projects'); setLoading(false); });
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % repos.length);
  }, [repos.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + repos.length) % repos.length);
  }, [repos.length]);

  useEffect(() => {
    if (repos.length <= 1 || paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [repos.length, paused, next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  };

  const loadingColor = isDark ? 'white' : 'black';
  const cardBg = isDark ? '#424242' : 'white';
  const dotInactive = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)';

  return (
    <Box id="projects" component="section" sx={{ bgcolor: bg, px: 4, py: 6 }}>
      <CenterHeader color={hdr} text={lang.Projects} />
      <Container maxWidth="md">
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: loadingColor }} />
          </Box>
        )}
        {error && (
          <Typography sx={{ color: txt, textAlign: 'center', py: 4 }}>{error}</Typography>
        )}
        {!loading && !error && repos.length === 0 && (
          <Typography sx={{ color: txt, textAlign: 'center', py: 4 }}>No public repositories found.</Typography>
        )}
        {!loading && repos.length > 0 && (
          <Box
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Box sx={{ position: 'relative', minHeight: 240 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={repos[current].id}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <Paper
                    onClick={() => window.open(repos[current].html_url, '_blank')}
                    sx={{
                      p: { xs: 3, sm: 4 },
                      borderRadius: 3,
                      bgcolor: cardBg,
                      color: isDark ? 'white' : 'black',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                    }}
                  >
                    <Stack direction="row" sx={{ alignItems: 'center', mb: 2 }} spacing={1}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            bgcolor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <GitHubIcon fontSize="small" />
                        </Box>
                        <Link
                          href={repos[current].html_url}
                          target="_blank"
                          underline="hover"
                          sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'inherit' }}
                        >
                          {repos[current].name}
                        </Link>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.75,
                        mb: 3,
                        minHeight: 32,
                        lineHeight: 1.6,
                      }}
                    >
                      {repos[current].description || 'No description available'}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {repos[current].languages.map((lg) => (
                        <Box
                          key={lg}
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.5,
                            px: 1.25,
                            py: 0.35,
                            borderRadius: 1.5,
                            bgcolor: `${getLangColor(lg)}${isDark ? '28' : '14'}`,
                            border: '1px solid',
                            borderColor: `${getLangColor(lg)}${isDark ? '55' : '25'}`,
                            color: getLangColor(lg),
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            letterSpacing: 0.2,
                          }}
                        >
                          <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: getLangColor(lg) }} />
                          {lg}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </AnimatePresence>
            </Box>

            <Stack direction="row" sx={{ justifyContent: 'center', alignItems: 'center', mt: 3, gap: 1.5 }}>
              <IconButton
                onClick={prev}
                size="small"
                sx={{
                  color: txt,
                  opacity: 0.6,
                  '&:hover': { opacity: 1, bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)' },
                }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>
              {repos.map((r, i) => (
                <Box
                  key={r.id}
                  onClick={() => setCurrent(i)}
                  sx={{
                    height: i === current ? 8 : 6,
                    width: i === current ? 24 : 6,
                    borderRadius: i === current ? 4 : '50%',
                    bgcolor: i === current ? txt : dotInactive,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
              <IconButton
                onClick={next}
                size="small"
                sx={{
                  color: txt,
                  opacity: 0.6,
                  '&:hover': { opacity: 1, bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)' },
                }}
              >
                <ArrowForwardIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>
        )}
      </Container>
    </Box>
  );
};
