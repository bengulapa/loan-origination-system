import { Search } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { DrawerHeader } from './layout/DrawerHeader';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import { Color } from './styles/colors';
import './styles/styles.css';
import { createOaTheme } from './styles/theme';
import './styles/utility.css';

const theme = createOaTheme();

const App = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Navigate to='/search' />} />

          <Route path='*' element={<Search />} />
        </Routes>
        <Box sx={{ display: 'flex', backgroundColor: Color.lightPrimary }}>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />

          <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />

          <Box component='main' sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
