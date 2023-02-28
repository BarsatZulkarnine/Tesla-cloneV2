// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh1VygE3Jf0oMer4EVi6Sc6Rgx86J0PuQ",
  authDomain: "tesla-app-414f5.firebaseapp.com",
  projectId: "tesla-app-414f5",
  storageBucket: "tesla-app-414f5.appspot.com",
  messagingSenderId: "857608541678",
  appId: "1:857608541678:web:f1c513cc7246f550f12aff",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
