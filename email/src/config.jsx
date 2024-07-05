
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyDELrE-YYZry2rw7BSB5rasLhBQD3nSzF0",
  // authDomain: "mobile-854a7.firebaseapp.com",
  // projectId: "mobile-854a7",
  // storageBucket: "mobile-854a7.appspot.com",
  // messagingSenderId: "548540329180",
  // appId: "1:548540329180:web:6357d202e2cc0bf55a9819",
  // measurementId: "G-B2RZ73J2T8"
  apiKey: "AIzaSyAXUb3_clo45PhENorGd7Go3XFl8zWfaMY",
  authDomain: "fir-fe7fb.firebaseapp.com",
  projectId: "fir-fe7fb",
  storageBucket: "fir-fe7fb.appspot.com",
  messagingSenderId: "75892542625",
  appId: "1:75892542625:web:6780e3104676f5b7c874e0",
  measurementId: "G-ZDHT9T3EJW"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export {auth} 