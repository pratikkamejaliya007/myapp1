

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELrE-YYZry2rw7BSB5rasLhBQD3nSzF0",
  authDomain: "mobile-854a7.firebaseapp.com",
  databaseURL: "https://mobile-854a7-default-rtdb.firebaseio.com",
  projectId: "mobile-854a7",
  storageBucket: "mobile-854a7.appspot.com",
  messagingSenderId: "548540329180",
  appId: "1:548540329180:web:6357d202e2cc0bf55a9819",
  measurementId: "G-B2RZ73J2T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}