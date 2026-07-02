import Box from '@mui/material/Box';
import { CenterHeader } from '../Shared/CenterHeader';
import { TechBoxList } from './TechBoxList';
import type { TechBoxData } from './stack';

interface Props {
  id?: string;
  header: { color: string; text: string };
  backgroundColor: string;
  data: TechBoxData[];
}

export const TechSection = ({ id, header, backgroundColor, data }: Props) => (
  <Box id={id} component="section" sx={{ px: { xs: 1, md: 4 }, py: 2, bgcolor: backgroundColor }}>
    <CenterHeader color={header.color} text={header.text} />
    <TechBoxList data={data} />
  </Box>
);
