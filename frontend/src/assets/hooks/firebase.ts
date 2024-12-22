// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoReP_qaNfKzXAB8Hrfh9B7MQEzOc80oM",
  authDomain: "web3-2a49f.firebaseapp.com",
  projectId: "web3-2a49f",
  storageBucket: "web3-2a49f.firebasestorage.app",
  messagingSenderId: "878394418808",
  appId: "1:878394418808:web:59d89ec381e58aa350af8d",
  measurementId: "G-NMF1TTP1ZV"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE=getFirestore(FIREBASE_APP)
