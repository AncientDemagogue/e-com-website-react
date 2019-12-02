import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwDb4INwSIFpoSqqsGaSc8YYJAOv1wfPg",
    authDomain: "crwn-database-d968f.firebaseapp.com",
    databaseURL: "https://crwn-database-d968f.firebaseio.com",
    projectId: "crwn-database-d968f",
    storageBucket: "crwn-database-d968f.appspot.com",
    messagingSenderId: "171808563259",
    appId: "1:171808563259:web:319b0451c3c40c86c0bc1e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;