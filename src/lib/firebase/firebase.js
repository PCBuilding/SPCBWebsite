// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHHGDdeDNO8OD-7_VmLMKQEU4GL2-wlGM",
  authDomain: "spcb-website.firebaseapp.com",
  projectId: "spcb-website",
  storageBucket: "spcb-website.appspot.com",
  messagingSenderId: "876152936668",
  appId: "1:876152936668:web:e2084eaddc7f57c3d9bc19",
  measurementId: "G-4XERH2860V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };