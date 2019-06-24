import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import RaisedButton from '@material-ui/core/Button';
class SignIn extends React.Component{
   state={
     email : '',
     password : ''
   }
   handleSubmit=(event)=>{
      event.preventDefault();
      console.log(this.state);
   }
   handleChange=(event)=>{
    
    this.setState({
      [event.target.id] : event.target.value,
    });
      
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
                  <form className={classes.container} onSubmit={this.handleSubmit} >
                  <Typography variant="h6" className={classes.title}>
                    Sign In
                  </Typography>
                      <TextField
                          id="email"
                          label="E-mail"
                          type="text"
                          fullWidth
                          margin="normal"
                          onChange={this.handleChange}
                      />
                          
                      <TextField
                          id="password"
                          label="Password"
                          fullWidth
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          onChange={this.handleChange}
                      />
                      <RaisedButton type="submit" label="login" className="button-submit" >
                        <Typography variant="h6" className={classes.title}>
                            Login
                        </Typography>
                      </RaisedButton>
                  </form>
              </div>
        );
      }
}
export default SignIn;
