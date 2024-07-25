import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/Routing/Routing.tsx';
import './index.css';
import darkTheme from './theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  </React.StrictMode>
);
