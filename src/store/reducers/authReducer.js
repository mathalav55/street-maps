const initState={
    authError : null,
}
const authReducer=(state=initState,action)=>{

        if(action.type==='LOGIN_FAILED'){
            console.log('login error:',action.err.message);
            return{
                ...state,
                authError : action.err.message,
            }
        }
        else if(action.type==='LOGIN_SUCCESS'){
            console.log('login successfull ')
            return {
                ...state,
                authError : null
            }
        }
        else if(action.type==='LOGOUT_ERROR'){
            console.log('log out failed');
            return state;
        }
        else if(action.type==='LOGOUT_SUCCESS'){
            console.log('log out success');
            return {
                ...state,
                authError : null
            }
        }
        else if(action.type==='SIGNUP_ERROR'){
            console.log('error while creating user:',action.err);
            return {
                ...state,
                authError : action.err.message
            }
        }
        else if(action.type==='SIGNUP_SUCCESS'){
            console.log('created new user successfully');
            return {
                ...state,
                authError : null
            }
        }
        else {
            return state;
        }
}
export  default authReducer;