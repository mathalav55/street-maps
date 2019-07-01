import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
export class SignUp extends Component {
    state={
        email : '',
        password : '',
        firstName : '',
        lastName : ''
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.id] : event.target.value,
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
       // console.log(this.state);
       this.props.addUser(this.state)
    }

    render() {
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
                            button: {
                                margin: theme.spacing(1),
                            },
                        }));
      
        const {auth , authError}=this.props;
        if(auth.uid) return <Redirect  to="/"/>
        return (
            <div className="sign-in-form">
                    <form className={classes.container} onSubmit={this.handleSubmit} autoComplete="off">
    
                    
                    <TextField
                        id="email"
                        label="email"
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                        onChange={this.handleChange}
                    />
                
                    <TextField
                    id="firstName"
                    label="First Name"
                    placeholder="FirstName"
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    />      

                     <TextField
                    id="lastName"
                    label="LastName"
                    placeholder="Last Name"
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    />                

                    <TextField
                    id="password"
                    label="password"
                    fullWidth
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange}
                    />
                    <div className="error-text">
                        <p> { authError }</p>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Create Account
                    </Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addUser : (newUser)=>{dispatch(signUp(newUser))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
