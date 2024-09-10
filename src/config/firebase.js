// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3zkKoqGdAPE5qY3haL_c9XgMo37Qb5U",
  authDomain: "finance-tracker-f2875.firebaseapp.com",
  projectId: "finance-tracker-f2875",
  storageBucket: "finance-tracker-f2875.appspot.com",
  messagingSenderId: "691732403324",
  appId: "1:691732403324:web:bcc2ae8b22e2e7e458a5f9",
  measurementId: "G-5ZGEJ472HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
