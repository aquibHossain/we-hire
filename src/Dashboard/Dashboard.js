import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import AddCategories from '../Pages/AdminPart/AddCategories/AddCategories';
import MakeAdmin from '../Pages/AdminPart/MakeAdmin/MakeAdmin';
import AdminRoute from '../Pages/AdminPart/AdminRoute/AdminRoute';
import { useHistory } from 'react-router-dom';
import TableDashboard from '../TableDashboard/TableDashboard';
import Payment from '../Pages/Payment/Payment';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Dashboard = () => {
    const history=useHistory()
    let { path, url } = useRouteMatch();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const handleClick=(text)=>{
       if(text==='Home'){
           history.push('/home')
       }
       else if(text==='Dashboard'){
           history.push(`${url}`)
       }
       else if(text==='Add Categories'){
           history.push(`${url}/addcategories`)
       }
       else if(text==='Make Admin'){
           history.push(`${url}/makeAdmin`)
       }
    }
    return (
        <div>
             <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Dashboard', 'Add Categories', 'Make Admin'].map((text, index) => (
            <ListItemButton
            onClick={()=>handleClick(text)}
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >

                {index==0 && <img src="https://img.icons8.com/color/40/000000/home.png"/>}
                {index==1 && <img src="https://img.icons8.com/color/40/000000/dashboard-layout.png"/>}
                {index==2 && <img src="https://img.icons8.com/color/40/000000/add-property.png"/>}
                {index==3 && <img src="https://img.icons8.com/color/40/000000/administrator-male-skin-type-7.png"/>}
                
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>
        <Route exact path={path}>
          <TableDashboard></TableDashboard>
        </Route>
        <Route path={`${path}/payment/:id`}>            
            <Payment></Payment>
        </Route>
        <AdminRoute path={`${path}/addcategories`}>            
            <AddCategories></AddCategories>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>            
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
        </div>
    );
};

export default Dashboard;