import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { DrawerHeader } from './layout/DrawerHeader';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import MyDeals from './pages/MyDeals';
import MyTasks from './pages/MyTasks';
import Overview from './pages/Overview';
import { Color } from './styles/colors';
import './styles/styles.css';
import { createOaTheme } from './styles/theme';
import Application from './pages/application/Application';

const theme = createOaTheme();

const App = () => {
  const [open, setOpen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (location.pathname.includes('application')) {
      setHidden(true);
      setOpen(false);
    } else {
      setHidden(false);
      setOpen(true);
    }
  }, [location]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} />

          {!hidden && <SideBar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />}

          <Box component='main' className={'w-full h-full mt-5 bg-[' + Color.lightPrimary + '}]'}>
            <DrawerHeader />

            <Routes>
              <Route path='/' element={<Navigate to='/overview' />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/deals' element={<MyDeals />} />
              <Route path='/tasks' element={<MyTasks />} />
              <Route path='/application/:id' element={<Application />} />
            </Routes>
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
