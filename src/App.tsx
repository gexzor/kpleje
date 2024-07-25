// src/App.tsx
import { AppBar, Box, Typography } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { usePages } from './components/Pages/usePages';
import SideNav from './components/SideNav/SideNav';

const App: React.FC = () => {
  const pages = usePages();

  return (
    <Box sx={{}}>
      <AppBar
        component={'nav'}
        sx={{
          p: 1,
          gap: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
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
        <SideNav />
      </AppBar>
      <Box mt={6.5}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
