import firebase from 'firebase';
export const addHomeless=(homeless)=>{
    return (dispactch,getState, { getFirebase , getFirestore })=>{
        // async call to database
        //console.log(homeless.image);
        const firestore = getFirestore();
        const storageRef=firebase.storage().ref('homeless_images');
        firestore.collection('add_homeless').add({
            name: homeless.name,
            support : homeless.support,
            landmark : homeless.landmark,
            location : homeless.location,
            assigned : homeless.assigned,
            addedAt : new Date()
        }).then((resp)=>{
            return storageRef.child(resp.id).putString(homeless.image,'data_url');
        }).then(()=>{
            dispactch({type : 'ADD_HOMELESS',homeless})
        }).catch( (err)=>{
            dispactch({type : 'ADD_HOMELESS_ERR',err})
        } )
        
    }

}