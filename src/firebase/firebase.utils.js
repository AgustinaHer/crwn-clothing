import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBYhicW53NQ_2RoYqg8S9ysaL-ONxvv6qs",
        authDomain: "crwn-db-1a980.firebaseapp.com",
        projectId: "crwn-db-1a980",
        storageBucket: "crwn-db-1a980.appspot.com",
        messagingSenderId: "993438986757",
        appId: "1:993438986757:web:2bf799174b1994af6b226c",
        measurementId: "G-9TXH29FVBZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    } catch(error){
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
