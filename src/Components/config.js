// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyCeka8KRdaatqC3wXYhOFkKbk2LWFbcNCA",
  authDomain: "inopen-501e4.firebaseapp.com",
  projectId: "inopen-501e4",
  storageBucket: "inopen-501e4.appspot.com",
  messagingSenderId: "648054940237",
  appId: "1:648054940237:web:ce94a1181d4c0d3977b204",
  measurementId: "G-6X8NZPTHNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
export {auth,provider};