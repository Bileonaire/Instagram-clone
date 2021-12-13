// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO_2zYlzRIu30PgLKfIEsXBh-uvkRZhxU",
  authDomain: "bileonaire-instagram.firebaseapp.com",
  projectId: "bileonaire-instagram",
  storageBucket: "bileonaire-instagram.appspot.com",
  messagingSenderId: "242154567394",
  appId: "1:242154567394:web:5ad2bdb959c348cf6850bb",
  measurementId: "G-1JHJ1T1GK5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };