import {combineReducers} from 'redux';
import authReducer from './authReducer';
import addReducer from './addReducer';
const rootReducer=combineReducers({
    auth : authReducer,
    add : addReducer
})
export  default rootReducer;