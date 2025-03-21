import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApY4S9VsHJjoG3QnQI0yZm0Ru5bg30S10",
  authDomain: "auth-1bffd.firebaseapp.com",
  projectId: "auth-1bffd",
  storageBucket: "auth-1bffd.firebasestorage.app",
  messagingSenderId: "75369454224",
  appId: "1:75369454224:web:9ce19eae6a4543a7319615",
  measurementId: "G-NL9H7HYDZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};