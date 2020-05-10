import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqveEpcnrL6vEI2hH0Zv-d76LTJ5F-zlM",
    authDomain: "crown-db-3f25c.firebaseapp.com",
    databaseURL: "https://crown-db-3f25c.firebaseio.com",
    projectId: "crown-db-3f25c",
    storageBucket: "crown-db-3f25c.appspot.com",
    messagingSenderId: "246747189122",
    appId: "1:246747189122:web:c9dbe3781587910dbe899b",
    measurementId: "G-Q0234H4TCP"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;