import { Box, Typography } from '@mui/material';

export interface PageProps {
  title: string;
  subtitle?: string;
  content: string;
}

const Page = (props: PageProps) => {
  return (
    <Box
      sx={{
        mt: 10,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box>
        <Typography variant='h4'>{props.title}</Typography>
        <Typography variant='subtitle1'>{props.subtitle}</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>{props.content}</Typography>
      </Box>
    </Box>
  );
};

export default Page;
