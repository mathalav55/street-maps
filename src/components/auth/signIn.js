import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
class SignIn extends React.Component{
   state={
     email : '',
     passowrd : ''
   }
  render(){
      const classes = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        dense: {
          marginTop: 19,
        },
        menu: {
          width: 200,
        },
      }));
    
      return (

              <div className="sign-in-form">
                  <form className={classes.container} noValidate autoComplete="off">
                  <Typography variant="h6" className={classes.title}>
                    Sign In
                  </Typography>
                      <TextField
                          id="standard-full-width"
                          label="E-mail"
                          type="text"
                          fullWidth
                          margin="normal"
                      />
                          
                      <TextField
                          id="standard-full-width"
                          label="Password"
                          fullWidth
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                      />
                       <Button color="inherit">Login</Button>
                  </form>
              </div>
        );
      }
}
export default SignIn;
