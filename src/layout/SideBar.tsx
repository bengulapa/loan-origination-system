import ChecklistIcon from '@mui/icons-material/Checklist';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TaskIcon from '@mui/icons-material/Task';
import {
  Badge,
  Box,
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { Link, useLocation } from 'react-router-dom';
import { Color } from '../styles/colors';
import { DrawerHeader } from './DrawerHeader';

interface IProps {
  open: boolean;
  handleDrawerClose?: () => void;
  theme: Theme;
}

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  background: Color.darkPrimary
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
      }
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
      }
    }
  ]
}));

const SideBar = ({ open, handleDrawerClose, theme }: IProps) => {
  const { pathname } = useLocation();
  const menuItems = [
    {
      text: 'Overview',
      icon: <SummarizeIcon />,
      path: `overview`
    },
    {
      text: 'MyDeals',
      icon: <CreditScoreIcon />,
      path: `deals`
    },
    { text: 'MyTasks', icon: <TaskIcon />, path: 'tasks', badgeContent: 4 },
    { text: 'MyHub', icon: <ChecklistIcon />, path: 'hub' }
  ];

  return (
    <>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box className='flex flex-column justify-between h-full'>
          <List dense disablePadding>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  selected={pathname.includes(item.path)}
                  component={Link}
                  to={item.path}
                  sx={[
                    {
                      minHeight: 36,
                      px: 2,
                      color: pathname.includes(item.path) ? Color.white : Color.textGray
                    },
                    open
                      ? {
                          justifyContent: 'initial'
                        }
                      : {
                          justifyContent: 'center'
                        }
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'inherit'
                      },
                      open
                        ? {
                            mr: 2
                          }
                        : {
                            mr: 'auto'
                          }
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      item.badgeContent ? (
                        <Badge variant='dot' color='error'>
                          {item.text}
                        </Badge>
                      ) : (
                        item.text
                      )
                    }
                    sx={[
                      open
                        ? {
                            opacity: 1
                          }
                        : {
                            opacity: 0
                          }
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
