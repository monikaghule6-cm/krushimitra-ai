// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwE4j0E8sGY9bd-J4w2mGEHyz3RQVjFOQ",
  authDomain: "krushiwish-ai.firebaseapp.com",
  projectId: "krushiwish-ai",
  storageBucket: "krushiwish-ai.firebasestorage.app",
  messagingSenderId: "266300072662",
  appId: "1:266300072662:web:8c16058ebdefcb1dbe1f77",
  measurementId: "G-GJ4GETFLHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
