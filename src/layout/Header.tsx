import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Button, IconButton, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import AccountSettings from '../components/AccountSettings';

const drawerWidth = 220;

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    }
  ]
}));

const Header = ({ open }: AppBarProps) => {
  const toggleNotification = () => {
    console.log('Notification Clicked');
  };

  return (
    <AppBar position='fixed' open={open} color='primary'>
      <Toolbar className='px-3'>
        <div className='w-full flex justify-between items-center py-2'>
          <div className='w-1/3'>
            <Typography variant='body1'>Welcome back, Ben</Typography>
            <Typography variant='caption'>Here are your stats to date!</Typography>
            <Typography variant='body2'>@ Broker Pty Ltd</Typography>
          </div>

          <div className='w-2/3 flex h-full items-center justify-end gap-2'>
            <Button variant='contained' color='secondary' className='mr-3'>
              Start Application
            </Button>

            <Button variant='outlined' color='secondary' className='mr-3'>
              Quick Quote
            </Button>

            <Tooltip title='Notifications'>
              <IconButton color='secondary' className='mr-3' onClick={() => toggleNotification()}>
                <Badge badgeContent={4} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <AccountSettings />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
