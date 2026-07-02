import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ElementType } from 'react';
import { TechPopover } from './TechPopover';

interface Props {
  icon: ElementType;
  text: string;
  backgroundColor: string;
  color: string;
  skills: string[];
  rowPos: number;
  total: number;
}

export const TechBox = ({ icon: Icon, text, backgroundColor, color, skills, rowPos, total }: Props) => (
  <TechPopover header={text} data={skills} rowPos={rowPos} total={total}>
    <Box
      sx={{
        width: 128,
        height: 128,
        bgcolor: backgroundColor,
        borderRadius: 1,
        boxShadow: 2,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      <Icon size={36} color={color} />
      <Typography variant="caption" sx={{ fontWeight: 500, color }}>
        {text}
      </Typography>
    </Box>
  </TechPopover>
);
