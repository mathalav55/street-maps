import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Maps from './map/map';
import './add.css';
import Modal from './form/modal';
import { addHomeless } from '../../store/actions/addActions';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
class Add extends Component {
    state={
        name: '',
        support : '',
        landmark :'',
        image : '',
        location : {
            lat : '',
            lng : ''
        }
    }
    formData=(data)=>{
        this.state=data;
        this.props.addHomeless(this.state);
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
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to="/signin"/>
        return (
            <div className={classes.container}>
                    <div id="modal">
                        <Modal data={this.formData}/>
                    </div>
                    <Maps/>
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        auth : state.firebase.auth,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addHomeless : (homeless)=>dispatch(addHomeless(homeless)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Add);
