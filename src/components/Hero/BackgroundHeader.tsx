import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface Props {
  text: string;
}

export const BackgroundHeader = ({ text }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 600,
        display: 'inline-block',
        bgcolor: isDark ? 'grey.100' : 'black',
        color: isDark ? 'black' : 'white',
        px: 2,
        py: 0.5,
      }}
    >
      {text}
    </Typography>
  );
};
