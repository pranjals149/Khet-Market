import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCn4VAI1z3WHcFD093Aa3szJmfwOfkUhfA",
    authDomain: "khet-market.firebaseapp.com",
    projectId: "khet-market",
    storageBucket: "khet-market.appspot.com",
    messagingSenderId: "196940570840",
    appId: "1:196940570840:web:339d0ac43c41a29d2737ad",
    measurementId: "G-GL1JXDTXEH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { db, auth, provider, firebaseApp, storage };