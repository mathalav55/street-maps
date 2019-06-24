import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';
export class SignUp extends Component {


    state={
        email : '',
        name  : '',
        passowrd : '',
    }
    handleChange=(event)=>{
        console.log(event.target.id);
        this.setState({
            [event.target.id] : event.target.value,
        });
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
                        }));
      
          
        return (
            <div className="sign-in-form">
                    <form className={classes.container} noValidate autoComplete="off">
    
                    
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
                    <Button color="primary">SignUp</Button>
                </form>
            </div>
        )
    }
}

export default SignUp;
