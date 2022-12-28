    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBiVFtIF50tEMO_XhFlizMUenmVDv59WDA",
  authDomain: "eolito-dfd30.firebaseapp.com",
  projectId: "eolito-dfd30",
  storageBucket: "eolito-dfd30.appspot.com",
  messagingSenderId: "529770421813",
  appId: "1:529770421813:web:54a2b8f824074a19e41b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);