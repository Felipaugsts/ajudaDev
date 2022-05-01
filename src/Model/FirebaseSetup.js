import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const Auth = firebase.auth();
const Provider = new firebase.auth.GoogleAuthProvider();
export { Auth, Provider, db };
export default { firebaseApp, db };
