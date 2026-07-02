import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useLocale } from '../../context/LocaleContext';

interface Props {
  fullname: string;
  age: number;
}

export const UserProfile = ({ fullname, age }: Props) => {
  const { lang } = useLocale();
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Avatar src="https://github.com/ATAP9000.png" sx={{ width: 56, height: 56 }} />
      <Stack>
        <Typography sx={{ fontWeight: 'bold' }}>{fullname}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {age} {lang.Years}
        </Typography>
      </Stack>
    </Stack>
  );
};
