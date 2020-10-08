import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBkTaMPxhunSJrZC6Jg9g6btbJNsk9n_g4",
    authDomain: "meme-31d47.firebaseapp.com",
    databaseURL: "https://meme-31d47.firebaseio.com",
    projectId: "meme-31d47",
    storageBucket: "meme-31d47.appspot.com",
    messagingSenderId: "7630666218",
    appId: "1:7630666218:web:7224cc897d78fe89bc9a93",
    measurementId: "G-LSKD6N897V"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;