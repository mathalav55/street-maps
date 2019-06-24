import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Maps from './map.js';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import './add.css';

class Add extends Component {


    state={
        location : {
            lat : 12.000 ,
            lng : 11.00
        },
        pop : false
    }
    handleClick=()=>{
          this.setState({
              pop : true
          });
    }
    handleClose=()=>{
        this.setState({
            pop : false
        });
    }
    ModalStyle() {
        const top = 200;
        const left = 200;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
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
                            paper: {
                                position: 'absolute',
                                width: 400,
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: theme.shadows[5],
                                padding: theme.spacing(4),
                                outline: 'none',
                            },
                        }));
        
        return (
            <div className="">
                    <Fab  id="add-icon" color="primary" ria-label="Add" onClick={this.handleClick}  className={classes.fabButton}>
                        <AddIcon />
                    </Fab>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.pop}
                        onClose={this.handleClose}
                    >
                        <div style={this.modalStyle} className={classes.paper}>
                            
                                <form className={classes.container} id="form-container" noValidate autoComplete="off">
                                    <Input
                                        placeholder="Placeholder"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </form>
                        </div>
                    </Modal>
                    <Maps/>
                    
                
            </div>
        )
    }
}

export default Add;
