// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLOiIW8P2zgCpcIUqJy9nlqEF6gDxlbJw",
    authDomain: "testratt-e4c8a.firebaseapp.com",
    projectId: "testratt-e4c8a",
    storageBucket: "testratt-e4c8a.firebasestorage.app",
    messagingSenderId: "859315538435",
    appId: "1:859315538435:web:ddee417a0785286c13dc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app);


export { auth, db, googleProvider, signInWithPopup };