//reducer to add home less data to redux store
const initState={
    homeless : {
        none : 'none'
    },
}//initial state

//reducer function
const addReducer=(state=initState,action)=>{
    if(action.type==='ADD_HOMELESS'){
        alert('added successfully');
        return state;//returning state when there is no error
    }
    else if(action.type==='ADD_HOMELSS_ERR'){
        console.log(action.err);//showing the error satement
        return state;
    } 
    else{
        return state;
    }
}
export  default addReducer;