import { Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      color: '#fff',
      textDecoration: 'none'
  }, 
  
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1
  }
}));

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
};

export default function Header() {
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">EZ SHOP</Link>
          </Typography>
            <NavLink className={classes.link} to="/"><Button color="inherit">Home</Button></NavLink>
            <NavLink className={classes.link} to="todos"><Button color="inherit">Todo</Button></NavLink>
            <NavLink className={classes.link} to="better-clock"><Button color="inherit">Better Clock</Button></NavLink>
            <NavLink className={classes.link} to="magic-box"><Button color="inherit">Magic Box</Button></NavLink>
            <NavLink className={classes.link} to="post"><Button color="inherit">Post List</Button></NavLink>
            <NavLink className={classes.link} to="albums"><Button color="inherit">Album Music</Button></NavLink>
            <NavLink className={classes.link} to="color-box"><Button color="inherit">Color Box</Button></NavLink>
          
          {!isLoggedIn && (
            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          )}
          {isLoggedIn && (
            <Button>
              <AccountCircle color="inherit" onClick={handleUserClick} />
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
      </Menu>

      <Dialog 
        disableBackdropClick 
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>

        <DialogContent>
          {
            mode == MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose}/>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.LOGIN)}> 
                    Already have an account. Login here
                  </Button>
                </Box>
              </>
            )
          }
          {
            mode == MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose}/>
                <Box textAlign="center">
                  <Button color="primary" onClick={() => setMode(MODE.REGISTER)}> 
                    Don't have an account. Register here
                  </Button>
                </Box>
              </>
            )
          }
          
        </DialogContent>
      </Dialog>

    </div>
  );
}
