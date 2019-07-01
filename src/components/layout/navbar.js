import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SignedOut from './signedOut.js';
import SignedIn from './signedIn.js';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function ButtonAppBar(props) {
  const classes = useStyles();
  const  { auth } =props;
  const links = auth.uid ? <SignedIn/> : <SignedOut/>; 
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
             
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             Street
          </Typography>
          { links }
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps= (state)=>{
    return{
      auth : state.firebase.auth,
    }
}
export default connect(mapStateToProps)(ButtonAppBar);