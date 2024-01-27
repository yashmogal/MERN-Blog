// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a62c8.firebaseapp.com",
  projectId: "mern-blog-a62c8",
  storageBucket: "mern-blog-a62c8.appspot.com",
  messagingSenderId: "654525531833",
  appId: "1:654525531833:web:aaf4e9faf48c812493bd68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);