import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


//here

  var firebaseConfig = {
     apiKey: "AIzaSyAgWGvioLC44-FfvX7TaqQS21cdZWqVhgk",
     authDomain: "wallpy-6981e.firebaseapp.com",
     projectId: "wallpy-6981e",
     storageBucket: "wallpy-6981e.appspot.com",
     messagingSenderId: "45060330082",
     appId: "1:45060330082:web:ceedb38753e69fb115373b",
     measurementId: "G-D84HG6R7BD"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
firebase.analytics();

//here


const projectStorage = firebase.storage();
const projectfirestore = firebase.firestore();
export { projectfirestore, projectStorage };