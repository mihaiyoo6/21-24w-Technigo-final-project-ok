// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = require('firebase/app'); // needed??

const firebaseConfig = {
  apiKey: "AIzaSyBeE8KfMO2IAAe6YMv5IkotncXqcmK39n4",
  authDomain: "final-project-technigo-5bf9b.firebaseapp.com",
  projectId: "final-project-technigo-5bf9b",
  storageBucket: "final-project-technigo-5bf9b.appspot.com",
  messagingSenderId: "126560165961",
  appId: "1:126560165961:web:5582f150c2e204312c9f98",
  measurementId: "G-9HWQHY80ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Auth and Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//const auth = getAuth(app);

// Detect auth state
// onAuthStateChanged(auth, user => {
//   if(user !== null) {
//     console.log('logged in');
//   } else {
//     console.log('No user');
//   }
// });


