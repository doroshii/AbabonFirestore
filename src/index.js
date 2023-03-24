// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Ola41qw7ICQLEnZ30qLZ0jCdtY2RgWA",
  authDomain: "ababonfirestore.firebaseapp.com",
  projectId: "ababonfirestore",
  storageBucket: "ababonfirestore.appspot.com",
  messagingSenderId: "981851964815",
  appId: "1:981851964815:web:ca0d9ca4b6f925207837fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)