// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from  "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "qwiikorder-8ccde.firebaseapp.com",
  projectId: "qwiikorder-8ccde",
  storageBucket: "qwiikorder-8ccde.firebasestorage.app",
  messagingSenderId: "147435258175",
  appId: "1:147435258175:web:3bfe138f193df08466138a",
  
};

// Initialize Firebase
const app =  getApps().length ==0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};