// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZq1TAx3OW6y-KNY4RHlKZzSA6yjFohIE",
  authDomain: "first-4fe17.firebaseapp.com",
  projectId: "first-4fe17",
  storageBucket: "first-4fe17.appspot.com",
  messagingSenderId: "730378517508",
  appId: "1:730378517508:web:a6d747de5fb5ba36eec951",
  measurementId: "G-DPM360RJVS"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
