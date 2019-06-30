import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export class SignUp extends Component {


    state={
        email : '',
        name  : '',
        passowrd : '',
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.id] : event.target.value,
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
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
                    id="name"
                    label="name"
                    placeholder="Enter your name"
                    fullWidth
                    margin="normal"
                    onChange={this.handleChange}
                    />                
                    

                    <TextField
                    id="passowrd"
                    label="password"
                    fullWidth
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={this.handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Create Account
                    </Button>
                </form>
            </div>
        )
    }
}

export default SignUp;
