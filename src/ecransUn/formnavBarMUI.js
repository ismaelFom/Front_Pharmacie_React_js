import React, { useState } from 'react';

// import { TextField } from '@mui/material';
// import { LoginOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Auth from './formMui';
import '../style/Style.css';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showInfo, setShowInfo] = useState(false);

  function handleOpenIconMenuPrincipal() {
    setShowInfo(!showInfo);
  }

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* oooooooooooooo Le menu qui ce voit en premier ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}

          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            // component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LACLINIQUE
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              onClick={handleOpenIconMenuPrincipal}
              color="inherit"
            >
              {showInfo && <p>
                <div className='laDivDuBtnPrincipal'>
                  <div className="muiLink2">
                    <Link className="muiClasse2" to="/"><p>Home</p></Link>
                    <Link className="muiClasse2" to="/nosMedicamen"><p>Drugs</p></Link>
                    <Link className="muiClasse2" to="/evenemen"><p>Events</p></Link>
                    <Link className="muiClasse2" to="/aproposDeN"><p>About us</p></Link>
                  </div>
                </div>
              </p>
              }
              {/* <MenuIcon /> */}
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
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <div className="muiLink2">
                  <Link className="muiClasse2" to="/"><p>Home</p></Link>
                  <Link className="muiClasse2" to="/nosMedicamen"><p>Drugs</p></Link>
                  <Link className="muiClasse2" to="/evenemen"><p>Events</p></Link>
                  <Link className="muiClasse2" to="/aproposDeN"><p>About us</p></Link>
                </div>
              </Box>
              {/*// {pages.map((page) => (
              //   <MenuItem key={page} onClick={handleCloseNavMenu}>
              //     <Typography textAlign="center">{page}</Typography>
              //   </MenuItem>
              // ))} */}
            </Menu>
          </Box>

          {/* oooooooooooooo Le 2e menu qui ce voit après retrécissement de la page ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}

           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> 
            {/* <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              onClick={handleOpenIconMenuPrincipal}
              color="inherit"
            >OK</Button> */}
              {showInfo && <p>
                <div className='laDivDuBtnPrincipal'>
                  <div className="muiLink2">
                    <Link className="muiClasse2" to="/"><p>Home</p></Link>
                    <Link className="muiClasse2" to="/nosMedicamen"><p>Drugs</p></Link>
                    <Link className="muiClasse2" to="/evenemen"><p>Events</p></Link>
                    <Link className="muiClasse2" to="/aproposDeN"><p>About us</p></Link>
                  </div>
                </div>
              </p>
              }
              {/* <MenuIcon /> */}
            
          <Typography
            variant="h5"
            onClick={handleOpenIconMenuPrincipal}
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor:'pointer',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <div className="muiLink1">
              <Link className="muiClasse1" underline="none" to="/"><p>Home</p></Link>
              <Link className="muiClasse1" underline="none" to="/nosMedicamen"><p>Drugs</p></Link>
              <Link className="muiClasse1" underline="none" to="/evenemen"><p>Events</p></Link>
              <Link className="muiClasse1" underline="none" to="/aproposDeN"><p>About us</p></Link>

            </div>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>


          {/* oooooooooooooo Le Dropdown qui ce voit à la fin du menu  ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Home">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Ismael Dev" src="/static/images/avatar/2.jpg" />
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


              <Auth />




              {/* <form>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  maxWidth={300}
                  alignItems="center"
                  justifyContent={"center"}
                  margin="auto"
                  margin-top={5}
                  padding={3}
                  borderRadius={5}
                  boxShadow={"5px 5px 10px #ccc"}
                  sx={{
                    ":hover": {
                      boxShadow: "10px 10px 20px #ccc"
                    }
                  }}
                >
                  <Typography textAlign="center" variant='h5' padding={3}>Login</Typography>
                  {/* <TextField margin="dense" type={'text'} variant='outlined' label='Nom' /> */}
              {/* <TextField margin="dense" type={'email'} variant='outlined' label='Email' />
                  <TextField margin="dense" type={'PassWord'} variant='outlined' label='PassWord' />
                  <Button
                    endIcon=<LoginOutlined />
                    sx={{ marginTop: 3, borderRadius: 5 }}
                    variant="container"
                    color="info"
                  >Login</Button>
                </Box>
              </form> */}

              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;