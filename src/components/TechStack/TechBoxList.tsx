import Box from '@mui/material/Box';
import type { TechBoxData } from './stack';
import { TechBox } from './TechBox';

interface Props {
  data: TechBoxData[];
}

export const TechBoxList = ({ data }: Props) => (
  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, pb: 2 }}>
    {data.map((tech, i) => (
      <TechBox key={i} rowPos={i} total={data.length} {...tech} />
    ))}
  </Box>
);
