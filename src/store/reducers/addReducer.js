const initState={
    homeless : {
        none : 'none'
    },
}
const addReducer=(state=initState,action)=>{
    if(action.type==='ADD_HOMELESS'){
        alert('added successfully');
        return state;
    }
    else if(action.type==='ADD_HOMELSS_ERR'){
        console.log(action.err);
        return state;
    } 
    else{
        return state;
    }
}
export  default addReducer;