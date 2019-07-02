import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { connect }  from 'react-redux';
class Form extends Component {
    state={
        name: '',
        support : '',
        landmark :'',
        image : '',
        location : {
            lat : '',
            lng : ''
        },
        assigned : false
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) =>{
            this.setState({
                ...this.state,
                location :{
                lat : position.coords.latitude,
                lng : position.coords.longitude
             }});
          });
        }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.addData(this.state);
    }
    handleChange=(event)=>{
        this.setState({
            ...this.state,
            [event.target.id] : event.target.value,
        });
    }
    handleUpload=(event)=>{
     console.log(event.target.files[0]);
     
    }
    render() {
        const classes = makeStyles(theme => ({
            paper: {
              position: 'absolute',
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[5],
              padding: theme.spacing(4),
              outline: 'none',
            },
            fab: {
              margin: theme.spacing(1),
            },
            button: {
              margin: theme.spacing(1),
            },
          }));
        
        return (
            <div className="form-container">
                <form  onSubmit={this.handleSubmit} autoComplete="off" >
                    <TextField
                    id="name"
                    label="name"
                    fullWidth
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                    <TextField
                    id="landmark"
                    label="landmark"
                    fullWidth
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    onChange={this.handleChange}
                    value={this.state.landmark}
                    />
                    <TextField
                    id="support"
                    label="support needed"
                    fullWidth
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    onChange={this.handleChange}
                    value={this.state.support}
                    />
                    <input
                    accept="image/*"
                    className={classes.input}
                    id="image"
                    multiple
                    type="file"
                    onChange={this.handleUpload}
                    />
                    <label htmlFor="image">
                    <Button  id="submit-button" variant="contained" component="span" className={classes.button}>
                        Upload image
                    </Button>
                    </label>
                    <div className="error-text">
                        <p>{this.props.error}</p>
                    </div>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        ADD
                    </Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        error : state.auth.authError,
    }
}
export default connect(mapStateToProps)(Form);
