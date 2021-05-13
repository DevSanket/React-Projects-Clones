import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDRQ6fbM4Y7COqtoWn9IC3jSR7jw89rloQ",
    authDomain: "reactprojects-f6951.firebaseapp.com",
    projectId: "reactprojects-f6951",
    storageBucket: "reactprojects-f6951.appspot.com",
    messagingSenderId: "1004942694477",
    appId: "1:1004942694477:web:11294f48541e5c2d79a404",
    measurementId: "G-04QGP6JTX0"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export {db};

  