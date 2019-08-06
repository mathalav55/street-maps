import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARIn39mbP5DuZAf7G_-EulNkvMwzOgpMw",
  authDomain: "street-organisation.firebaseapp.com",
  databaseURL: "https://street-organisation.firebaseio.com",
  projectId: "street-organisation",
  storageBucket: "street-organisation.appspot.com",
  messagingSenderId: "894956937702",
  appId: "1:894956937702:web:d27ee9370c7c2e97"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  export default firebase;