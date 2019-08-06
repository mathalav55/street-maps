import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { signIn } from '../../store/actions/authActions';
import { connect }  from 'react-redux';
import { Redirect} from 'react-router-dom';
class SignIn extends React.Component{
   state={
     email : '',
     password : ''
   }
   handleSubmit=(event)=>{
     event.preventDefault();
     // console.log(this.state);
     this.props.signIn(this.state);
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
        error : {
          color : 'red',
        }
      }));
      const { authError }=this.props;
      const { auth} = this.props;
      if(auth.uid) return <Redirect to="/"/> ;
      return (
              
              <div className="sign-in-form">
                  <form className={classes.container} onSubmit={this.handleSubmit} autoComplete="off" >
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
                      <div className="error-text">
                          <p> {authError} </p>
                      </div>
                      <Button type="submit" variant="contained" color="primary" className={classes.button}>
                          Login
                      </Button>
                  </form>
              </div>
        );
      }
}
const mapStateToProps=(state)=>{
  return {
    authError : state.auth.authError,
    auth : state.firebase.auth
  }
}
const mapDispatchTOProps=(dispatch)=>{
  return {
    signIn : (credentials)=>dispatch(signIn(credentials)),
  }
}
export default connect(mapStateToProps,mapDispatchTOProps)(SignIn);
