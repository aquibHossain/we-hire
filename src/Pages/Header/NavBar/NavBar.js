import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';



const NavBar = () => {
  const {user,logOutUser}=useAuth()
  const history=useHistory()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const beforepages = ['Home', 'Rents','Login'];
    const afterPages= ['Home', 'Rents'];
    const pages = user.email?afterPages:beforepages;
    const settings = [ 'Dashboard','Post Ad', 'Logout'];

    const handleClick=(name)=>{
      if(name==='Home'){
        history.push('/home')
      }
      else if(name==='Login'){
        history.push('/login')
      }
      else if(name==='Rents'){
        history.push('/search')
      }
      else if(name==='Dashboard'){
        history.push('/dashboard')
      }
      else if(name==='Post Ad'){
        history.push('/addrent')
      }
      else if(name==='Logout'){
        logOutUser()
      }
    }
    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
    if(window.location.pathname ===('/home')){
      if(window.scrollY <= 100){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
    }
    else if(window.location.pathname ===('/')){
      if(window.scrollY <= 100){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
    }
    else{
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  
    return (
             <AppBar 
              position="fixed"
              style={colorChange?
              {backgroundColor:'transparent',boxShadow:'0 0 0 transparent'}:
              {backgroundColor:"#09344dc2"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <NavLink to="/home" className='text-white  text-decoration-none '><span className='text-danger fw-bold fs-2'>V</span>ara <span className='text-danger fw-bold fs-2'>K</span>oto</NavLink>
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
          
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              { pages.map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu();
                handleClick(page)}} >
                  <Typography   textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box className='ms-auto'  sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu();
                  handleClick(page)}}
               
                sx={{ my: 1, mr:3,color: 'white', display: 'block' }}
              >
                <NavLink  style={{textDecoration:"none",color:'white'}} to={page}>{page}</NavLink>
              </Button>
            ))}
          </Box>

          {
            user.email && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} >
                <Avatar alt={user.displayName} src={user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
            
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem  key={setting}
                 onClick={()=>{handleCloseUserMenu();
                  handleClick(setting)}}
                 >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default NavBar;