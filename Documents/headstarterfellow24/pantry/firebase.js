// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuwAH8DU4aw_akbt6uJUXiAGcxRILUwvQ",
  authDomain: "hspantryapp-77b61.firebaseapp.com",
  projectId: "hspantryapp-77b61",
  storageBucket: "hspantryapp-77b61.appspot.com",
  messagingSenderId: "65113623081",
  appId: "1:65113623081:web:8cb5b1a6d7b0e433022a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}