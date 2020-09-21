import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBhBAXV_eMD-Avz88NpUp39hQ2vPwdxqgY",
    authDomain: "ninja-firegram-57b83.firebaseapp.com",
    databaseURL: "https://ninja-firegram-57b83.firebaseio.com",
    projectId: "ninja-firegram-57b83",
    storageBucket: "ninja-firegram-57b83.appspot.com",
    messagingSenderId: "981567191379",
    appId: "1:981567191379:web:2f09d1aecd4f5c9de209a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
export {projectFireStore, projectStorage};
/*
 https://git.heroku.com/damp-citadel-67363.git
* */
