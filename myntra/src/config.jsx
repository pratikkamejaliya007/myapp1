// src/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZq1TAx3OW6y-KNY4RHlKZzSA6yjFohIE",
  authDomain: "first-4fe17.firebaseapp.com",
  projectId: "first-4fe17",
  storageBucket: "first-4fe17.appspot.com",
  messagingSenderId: "730378517508",
  appId: "1:730378517508:web:a6d747de5fb5ba36eec951",
  measurementId: "G-DPM360RJVS"
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

 const auth = getAuth(app);

 export { auth, googleProvider };
