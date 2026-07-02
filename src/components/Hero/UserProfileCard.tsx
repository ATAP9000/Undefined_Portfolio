import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import { UserProfile } from './UserProfile';
import { Resume } from './Resume';
import { Flag } from './Flag';
import { Blob } from './Blob';

const age = new Date().getFullYear() - 1997;

export const UserProfileCard = () => (
  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
    <Blob />
    <Paper elevation={6} sx={{ maxWidth: 500, width: '100%', p: 3, borderRadius: 4, position: 'relative' }}>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <UserProfile fullname="Angelo Tarazona" age={age} />
        <Flag />
      </Stack>
      <Resume />
      <Stack direction="row" sx={{ justifyContent: 'flex-end', mt: 2 }} spacing={1}>
        <Tooltip title="GitHub">
          <IconButton href="https://github.com/ATAP9000" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Paper>
  </Box>
);
