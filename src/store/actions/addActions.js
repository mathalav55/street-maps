export const addHomeless=(homeless)=>{
    return (dispactch,getState, { getFirebase , getFirestore })=>{
        // async call to database
        const firestore = getFirestore();
        const firebase= getFirebase();
        firestore.collection('add_homeless').add({
            ...homeless,
            addedAt : new Date()
        }).then((resp)=>{
            return firebase.storage().ref('homeless_images').child(resp.user.uid).putString(homeless.image);
        }).then(()=>{
            dispactch({type : 'ADD_HOMELESS',homeless})
        }).catch( (err)=>{
            dispactch({type : 'ADD_HOMELESS_ERR',err})
        } )
        
    }

}