import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =
    {
        apiKey: "AIzaSyBYhicW53NQ_2RoYqg8S9ysaL-ONxvv6qs",
        authDomain: "crwn-db-1a980.firebaseapp.com",
        projectId: "crwn-db-1a980",
        storageBucket: "crwn-db-1a980.appspot.com",
        messagingSenderId: "993438986757",
        appId: "1:993438986757:web:2bf799174b1994af6b226c",
        measurementId: "G-9TXH29FVBZ"
      }; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
