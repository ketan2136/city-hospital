// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu0o063HeWDPg8O8zj0dXHg-v0D9lx4fM",
  authDomain: "city-hospital-76ec3.firebaseapp.com",
  projectId: "city-hospital-76ec3",
  storageBucket: "city-hospital-76ec3.appspot.com",
  messagingSenderId: "951959190776",
  appId: "1:951959190776:web:dc562c2b640f768c664f0d",
  measurementId: "G-Y1CXVTPZGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);