import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Maps from './map.js';
class Add extends Component {


    state={
        email : '',
        name  : '',
        gender : 'male',
        password : '',
        location : {
            lat : 12.000 ,
            lng : 11.00
        }
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
        const genders = [
                            {
                                value: 'female',
                                label: 'Female',
                            },
                            {
                                value: 'male',
                                label: 'Male',
                            },
                            {
                                value: 'others',
                                label: 'Others',
                            },

                        ];
          
        return (
            <div className="sign-in-form">
                    <Maps/>
                    <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="standard-with-placeholder"
                        label="Email"
                        placeholder="Email"
                        fullWidth
                        margin="normal"
                    />
                
                    <TextField
                        id="standard-with-placeholder"
                        label="Name"
                        placeholder="Enter your name"
                        fullWidth
                        margin="normal"
                    />
                
                
                    <TextField
                        id="standard-select-gender"
                        select
                        label="Gender"
                        fullWidth
                        value={genders.gender}
                    
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select your gender"
                        margin="normal"
                    >
                            {genders.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                    
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        fullWidth
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <Button color="inherit">SignUp</Button>
                </form>
                
            </div>
        )
    }
}

export default Add;
