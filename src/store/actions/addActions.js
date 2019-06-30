export const addHomeless=(homeless)=>{
    return (dispactch,getState, { getFirebase , getFirestore })=>{
        // async call to database
        const firestore = getFirestore();
        firestore.collection('add_homeless').add({
            ...homeless,
            addedAt : new Date()
        }).then(()=>{
            dispactch({type : 'ADD_HOMELESS',homeless})
        }).catch( (err)=>{
            dispactch({type : 'ADD_HOMELESS_ERR',err})
        } )
        
    }

}