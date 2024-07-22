// src/App.tsx
import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { usePages } from './components/Pages/usePages';

const App: React.FC = () => {
  const pages = usePages();

  return (
    <Box sx={{}}>
      <AppBar component={'nav'} color='primary'>
        <Box
          sx={{
            margin: 2,
            gap: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: '100%',
          }}
        >
          <Link to='/'>
            <Typography
              variant='body2'
              color={(theme) => theme.palette.common.white}
            >
              Home
            </Typography>
          </Link>

          {pages.map((page) => (
            <Link key={page.title} to={page.title.toLowerCase()}>
              <Typography
                variant='body2'
                color={(theme) => theme.palette.common.white}
              >
                {page.title}
              </Typography>
            </Link>
          ))}
        </Box>
      </AppBar>
      <Box mt={6.5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
