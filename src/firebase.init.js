// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFk_xC2yaO2iwwwZCMohxh6EA4cKoS-F8",
  authDomain: "ema-john-simple-f9733.firebaseapp.com",
  projectId: "ema-john-simple-f9733",
  storageBucket: "ema-john-simple-f9733.appspot.com",
  messagingSenderId: "920373198873",
  appId: "1:920373198873:web:443441cc9b778db5a92a88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
