// src/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDELrE-YYZry2rw7BSB5rasLhBQD3nSzF0",
  authDomain: "mobile-854a7.firebaseapp.com",
  projectId: "mobile-854a7",
  storageBucket: "mobile-854a7.appspot.com",
  messagingSenderId: "548540329180",
  appId: "1:548540329180:web:6357d202e2cc0bf55a9819",
  measurementId: "G-B2RZ73J2T8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
