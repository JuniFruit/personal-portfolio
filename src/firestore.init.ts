import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "portfolio-ffaed.firebaseapp.com",
  projectId: "portfolio-ffaed",
  storageBucket: "portfolio-ffaed.appspot.com",
  messagingSenderId: "1061616547336",
  appId: "1:1061616547336:web:3a0a898b0dca62407e83bd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;
