import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface Props {
  header: string;
  description: string;
  reverse: boolean;
}

export const SkillDescription = ({ header, description, reverse }: Props) => {
  const theme = useTheme();
  const txt = theme.palette.mode === 'dark' ? 'black' : 'white';
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 600, color: txt, mb: 1, textAlign: reverse ? 'right' : 'left' }}>
        {header}
      </Typography>
          <Typography variant="body1" sx={{ color: txt, textAlign: reverse ? 'right' : 'left' }}>
        {description}
      </Typography>
    </>
  );
};
