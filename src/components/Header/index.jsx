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
import GitHubIcon from '@material-ui/icons/GitHub';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
  }
}));

export default function Header() {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog 
        disableBackdropClick 
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <Register closeDialog={handleClose}/>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
