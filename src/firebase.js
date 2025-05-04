// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBr3x8guYNQ-1ukWuA8ErhFC9klpsO7whU",
    authDomain: "app-27ab1.firebaseapp.com",
    databaseURL: "https://app-27ab1-default-rtdb.firebaseio.com",
    projectId: "app-27ab1",
    storageBucket: "app-27ab1.firebasestorage.app",
    messagingSenderId: "424931530284",
    appId: "1:424931530284:web:98d5db25f4ddfeed05e389",
    measurementId: "G-R5TQM1S013"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
