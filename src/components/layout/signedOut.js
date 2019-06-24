import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

export default function SignedOut() {
  return (
    <div>
        <Toolbar>
          <Button color="inherit"><NavLink to="/signup">Sign Up</NavLink></Button>
          <Button color="inherit"><NavLink to="/signin">Login</NavLink></Button>
        </Toolbar>
    </div>
  );
}

