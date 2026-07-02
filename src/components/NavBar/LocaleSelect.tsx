import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface Props {
  locale: string;
  onChange: (l: 'en' | 'es') => void;
}

export const LocaleSelect = ({ locale, onChange }: Props) => (
  <Select
    value={locale}
    onChange={(e) => onChange(e.target.value as 'en' | 'es')}
    variant="standard"
    disableUnderline
    sx={{ minWidth: 60, fontSize: '0.875rem' }}
    MenuProps={{ disableScrollLock: true }}
  >
    <MenuItem value="en">EN</MenuItem>
    <MenuItem value="es">ES</MenuItem>
  </Select>
);
