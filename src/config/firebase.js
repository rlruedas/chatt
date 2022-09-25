// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKlNja74CJniIEjxtiI4weWSVp5fLDf3s",
  authDomain: "chatt-b3d49.firebaseapp.com",
  projectId: "chatt-b3d49",
  storageBucket: "chatt-b3d49.appspot.com",
  messagingSenderId: "1065797640556",
  appId: "1:1065797640556:web:1b6299f2f3e89a723a1349",
  measurementId: "G-B32WTCXG9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
