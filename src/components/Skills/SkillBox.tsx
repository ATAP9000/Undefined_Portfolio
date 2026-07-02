import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { IconBox } from './IconBox';
import { SkillDescription } from './SkillDescription';

interface Props {
  icon: React.ElementType;
  title: string;
  description: string;
  reverse: boolean;
}

export const SkillBox = ({ icon, title, description, reverse }: Props) => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    spacing={5}
    sx={{ alignItems: 'center', my: 8, width: '100%' }}
  >
    {reverse ? (
      <>
        <Box sx={{ flex: 1 }}>
          <SkillDescription header={title} description={description} reverse={reverse} />
        </Box>
        <IconBox icon={icon} />
      </>
    ) : (
      <>
        <IconBox icon={icon} />
        <Box sx={{ flex: 1 }}>
          <SkillDescription header={title} description={description} reverse={reverse} />
        </Box>
      </>
    )}
  </Stack>
);
