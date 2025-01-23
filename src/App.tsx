import { Search } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { DrawerHeader } from './layout/DrawerHeader';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Overview from './pages/Overview';
import { Color } from './styles/colors';
import './styles/styles.css';
import { createOaTheme } from './styles/theme';

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
        <Box sx={{ display: 'flex' }}>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />

          <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />

          <Box
            component='main'
            className={'w-full h-full p-2 mt-5 bg-[' + Color.lightPrimary + '}]'}
          >
            <DrawerHeader />

            <Routes>
              <Route path='/' element={<Navigate to='/search' />} />
              <Route path='overview' element={<Overview />} />

              <Route path='*' element={<Search />} />
            </Routes>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
