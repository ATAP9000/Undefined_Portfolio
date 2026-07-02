import Box from '@mui/material/Box';
import { ProgrammingLangsSection } from './ProgrammingLangsSection';
import { FrameworkSection } from './FrameworkSection';
import { DatabasesSection } from './DatabasesSection';

export const TechStackSection = () => (
  <Box id="tech-stack">
    <ProgrammingLangsSection />
    <FrameworkSection />
    <DatabasesSection />
  </Box>
);
