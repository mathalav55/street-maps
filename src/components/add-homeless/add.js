import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Maps from './map.js';
import './add.css';
import Form from './form.js';
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
    getModalStyle() {
        const top = 50 ;
        const left = 50;
      
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
                            fab: {
                                margin: theme.spacing(1),
                              },
                         
                        }));
        const modalStyle=this.getModalStyle();
        return (
            <div className={classes.container}>
                    <div id="modal">
                        <Form/>
                    </div>
                    <Maps/>
                
            </div>
        )
    }
}

export default Add;
