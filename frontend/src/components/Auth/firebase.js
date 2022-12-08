// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIbZ9s2L2Oe5kw7qHPMR0tbeOY8R5n-v8",
  authDomain: "healthcare-login.firebaseapp.com",
  projectId: "healthcare-login",
  storageBucket: "healthcare-login.appspot.com",
  messagingSenderId: "933241335682",
  appId: "1:933241335682:web:e83aebabf48311bc57a99b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;