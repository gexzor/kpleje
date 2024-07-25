import SettingsIcon from '@mui/icons-material/Settings';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { usePages } from '../Pages/usePages';

const SideNav = () => {
  const [open, setOpen] = React.useState(false);
  const pages = usePages();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: (theme) => theme.palette.common.white,
          '&:focus': { outline: 'none' },
        }}
      >
        <SettingsIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            padding: 2,
            width: 350,
            height: '100%',
            bgcolor: (theme) => theme.palette.background.paper,
          }}
          role='presentation'
        >
          <Box
            sx={{
              bgcolor: '#14181b',
              padding: 1,
            }}
          >
            {pages.map((page) => (
              <Accordion key={page.title}>
                <AccordionSummary>{page.title}</AccordionSummary>
                <AccordionDetails>
                  Some stuff regarding the page
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SideNav;
