// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmXSnG4rMTeRhthdneRXFTUiLZeHXwWRk",
  authDomain: "entregafinalrjs-ff5ba.firebaseapp.com",
  projectId: "entregafinalrjs-ff5ba",
  storageBucket: "entregafinalrjs-ff5ba.appspot.com",
  messagingSenderId: "656792168261",
  appId: "1:656792168261:web:93f132e00e9d7a83e0802c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()