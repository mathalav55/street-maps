import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD13-ZQ-5TyT80xOKcUL0iXdeC0k_vGqkw",
    authDomain: "street-maps-97b34.firebaseapp.com",
    databaseURL: "https://street-maps-97b34.firebaseio.com",
    projectId: "street-maps-97b34",
    storageBucket: "",
    messagingSenderId: "269873191268",
    appId: "1:269873191268:web:14ffca949bb63d9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;