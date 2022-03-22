import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvsBrnk9xo5n7aEV4fxfdy3_qJfeXNzrk",
    authDomain: "ajudadev-7bc8a.firebaseapp.com",
    projectId: "ajudadev-7bc8a",
    storageBucket: "ajudadev-7bc8a.appspot.com",
    messagingSenderId: "914816677155",
    appId: "1:914816677155:web:258416c2d2cfc0271a4896",
    measurementId: "G-CZ7PRSSQ37"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default {firebaseApp, db}