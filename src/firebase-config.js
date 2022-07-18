// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmzYLxc-07C7Mok0UwRtUkFkmTuyFGxd8",
  authDomain: "fshdq-portofolio.firebaseapp.com",
  projectId: "fshdq-portofolio",
  storageBucket: "fshdq-portofolio.appspot.com",
  messagingSenderId: "1077055741049",
  appId: "1:1077055741049:web:ef796e8ede43dcc01e08a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);