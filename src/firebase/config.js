import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA5l5emTfr6AgkLwFbjaRWjSJQRlu-ECY4",
  authDomain: "firegram-react-ninja.firebaseapp.com",
  databaseURL: "https://firegram-react-ninja.firebaseio.com",
  projectId: "firegram-react-ninja",
  storageBucket: "firegram-react-ninja.appspot.com",
  messagingSenderId: "559625931469",
  appId: "1:559625931469:web:f6c983d592d9eeee963784",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
