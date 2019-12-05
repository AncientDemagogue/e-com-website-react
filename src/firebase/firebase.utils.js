import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBwDb4INwSIFpoSqqsGaSc8YYJAOv1wfPg',
  authDomain: 'crwn-database-d968f.firebaseapp.com',
  databaseURL: 'https://crwn-database-d968f.firebaseio.com',
  projectId: 'crwn-database-d968f',
  storageBucket: 'crwn-database-d968f.appspot.com',
  messagingSenderId: '171808563259',
  appId: '1:171808563259:web:319b0451c3c40c86c0bc1e',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the uerAuth object does not exist
  if (!userAuth) return;
  // if it does exist we will check if the user exists,
  const userRef = firestore.doc (`users/${userAuth.uid}`);

  const snapShot = await userRef.get ();

  if (!snapShot.exists) {
    // if the authenticaed user object doesnt exists in our database we want to store it
    // to create the object we haveto user the document or collection reference object , since snapshat only represents the datta
    const {displayName, email} = userAuth;
    const createdAt = new Date ();
    // this code now creates that data  from the authetnicated user object
    try {
      await userRef.set ({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log ('error creating user', error.message);
    }
  }
  // this code return userRef since we may want to user user reference in our code for something
  return userRef;
};

firebase.initializeApp (config);

export const auth = firebase.auth ();

export const firestore = firebase.firestore ();

const provider = new firebase.auth.GoogleAuthProvider ();
provider.setCustomParameters ({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup (provider);

export default firebase;
