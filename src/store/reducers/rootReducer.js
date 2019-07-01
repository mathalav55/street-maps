import {combineReducers} from 'redux';
import authReducer from './authReducer';
import addReducer from './addReducer';
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer=combineReducers({
    auth : authReducer,
    add : addReducer,
    firebase : firebaseReducer
})
export  default rootReducer;