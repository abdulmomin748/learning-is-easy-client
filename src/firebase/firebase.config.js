// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN0tsgG3WmLIjfm8s51LO_zicofbPhGpw",
  authDomain: "learning-is-easy-client.firebaseapp.com",
  projectId: "learning-is-easy-client",
  storageBucket: "learning-is-easy-client.appspot.com",
  messagingSenderId: "169132582887",
  appId: "1:169132582887:web:43a5962cd901942bcbff42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;