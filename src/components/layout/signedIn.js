import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
}));

export default function SignedIn() {
  const classes = useStyles();

  return (
    <div >
        <Toolbar>
          <Button color="inherit"><NavLink to="/add">Add+</NavLink></Button>
          <Button color="inherit"><NavLink to="/">Logout</NavLink></Button>
          <Avatar className={classes.purpleAvatar}>OP</Avatar>
        </Toolbar>
    </div>
  );
}


