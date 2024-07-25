import { Box, Button, Typography } from '@mui/material';
import { db } from '../../db/firebase';
import { addDoc, collection } from 'firebase/firestore';

export interface PageProps {
  title: string;
  subtitle?: string;
  content: string;
}

const Page = (props: PageProps) => {
  const testDb = async () => {
    try {
      // Create a reference to the 'pages' collection (you can adjust the collection name)
      const pagesCollection = collection(db, 'pages');

      // Write this data to the database
      await addDoc(pagesCollection, {
        title: props.title,
        subtitle: props.subtitle,
        content: props.content,
      });

      console.log('Page data added successfully!');
    } catch (error) {
      console.error('Error adding page data:', error);
    }
  };

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

      <Button variant='outlined' onClick={testDb}>
        Test
      </Button>
    </Box>
  );
};

export default Page;
