import firebase from "firebase";
import "firebase/auth"
var firebaseConfig = {
  apiKey: "AIzaSyDZC6ZmFA7b1vEU23bbFgnFfD_uOV5MRog",
  authDomain: "wallpaper-5e0d2.firebaseapp.com",
  projectId: "wallpaper-5e0d2",
  storageBucket: "wallpaper-5e0d2.appspot.com",
  messagingSenderId: "460181353603",
  appId: "1:460181353603:web:57b36aa779e2667f0457b6",
  measurementId: "G-XNEYH7VMN8"
};

   // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth =firebaseApp.auth();
const projectStorage = firebaseApp.storage();
const projectfirestore = firebaseApp.firestore();
const increments = firebase.firestore.FieldValue.increment(1);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const arrayadd = firebase.firestore.FieldValue;
export {arrayadd, projectfirestore, projectStorage, firebaseApp,auth,timestamp,increments};