// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJGL7qYDYrnsBuK5twbr2lcYqcOF-lSAo",
  authDomain: "movies-5e525.firebaseapp.com",
  projectId: "movies-5e525",
  storageBucket: "movies-5e525.appspot.com",
  messagingSenderId: "721446301980",
  appId: "1:721446301980:web:516f50cff362d3c85a0ad9",
  measurementId: "G-7YY1KP8WJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app)
const provider=new GoogleAuthProvider();

export {auth,provider}
