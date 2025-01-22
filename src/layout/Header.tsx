import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, styled, Toolbar, Tooltip, Typography } from '@mui/material';
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

const Header = ({ open, handleDrawerOpen }: AppBarProps) => {
  return (
    <AppBar position='fixed' open={open} color='primary'>
      <Toolbar className='px-3'>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={[
            {
              marginRight: 5
            },
            open && { display: 'none' }
          ]}
        >
          <MenuIcon />
        </IconButton>
        <div className='w-full flex justify-end align-center '>
          <Typography variant='caption' className='mr-3'>
            Broker: Klein Moretti{' '}
            <Tooltip title='Email'>
              <a href='tel:0400000000'>
                <CallSharpIcon sx={{ fontSize: 12 }} />
              </a>
            </Tooltip>{' '}
            <Tooltip title='Call'>
              <a href='email:mr.fool@lotm.com'>
                <AlternateEmailSharpIcon sx={{ fontSize: 12 }} />
              </a>
            </Tooltip>
            <br />
            BDM: Ben Gulapa
          </Typography>

          <AccountSettings />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
