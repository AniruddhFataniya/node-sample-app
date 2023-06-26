const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDOoM_x5eL58UnWnuTzOq8C48Y3kvDCqtA",
  authDomain: "my-crud-app-859f5.firebaseapp.com",
  projectId: "my-crud-app-859f5",
  firestoreEmulatorHost: "localhost:4000",
  storageBucket: "my-crud-app-859f5.appspot.com",
  messagingSenderId: "62369273253",
  appId: "1:62369273253:web:74565a96a901581102c44c",
  measurementId: "G-FWC4P61VPM"
};

// Use the Firestore emulator running at localhost:4000
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
// db.useEmulator("localhost",'4000')


// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// // firebaseApps previously initialized using initializeApp()
// const db = getFirestore();
// connectFirestoreEmulator(db, '127.0.0.1', 4080);

const User = db.collection("Users");
module.exports = User;