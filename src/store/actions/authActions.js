export const signIn=(credentials)=>{
    return (dispatch,getState,{ getFirebase })=>{
        const firebase= getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({ type : 'LOGIN_SUCCESS' });
        }).catch((err)=>{
            dispatch({ type : 'LOGIN_FAILED', err});
        })
    }
}
export const signOut=()=>{
    return (dispatch,getState,{ getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'LOGOUT_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGOUT_ERROR'})
        })
    }
}
export const signUp=(newUser)=>{
    return (dispatch,getState,{ getFirebase , getFirestore})=>{
        const firebase=getFirebase();
        const firestore= getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('user_data').doc(resp.user.uid).set({
                firstName  :newUser.firstName,
                lastName : newUser.lastName,
                initials : newUser.firstName[0].toUpperCase() + newUser.lastName[0].toUpperCase()
            })
        }).then(()=>{
            dispatch({type : "SIGNUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({ type : "SIGNUP_ERROR" , err})
        })
    }
}