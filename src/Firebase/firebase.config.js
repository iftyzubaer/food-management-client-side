import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9tq_kv6NPxhrbVYQB9kg0YrdwN0UkM-0",
  authDomain: "food-manager-b0e77.firebaseapp.com",
  projectId: "food-manager-b0e77",
  storageBucket: "food-manager-b0e77.appspot.com",
  messagingSenderId: "296080472161",
  appId: "1:296080472161:web:135e78508680873c5a5220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;