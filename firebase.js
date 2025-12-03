import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDSaI72zjnpmrlaMFZiIrzcT8ToZKfbClo",
  authDomain: "private-v2-c753c.firebaseapp.com",
  projectId: "private-v2-c753c",
  storageBucket: "private-v2-c753c.firebasestorage.app",
  messagingSenderId: "268086054398",
  appId: "1:268086054398:web:0b7fa2b1a0ca7de63f04af",
  measurementId: "G-5BMWGQSP3H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);