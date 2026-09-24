// Firebase web configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwE4j0E8sGY9bd-J4w2mGEHyz3RQVjFOQ",
  authDomain: "krushiwish-ai.firebaseapp.com",
  projectId: "krushiwish-ai",
  storageBucket: "krushiwish-ai.firebasestorage.app",
  messagingSenderId: "266300072662",
  appId: "1:266300072662:web:8c16058ebdefcb1dbe1f77",
  measurementId: "G-GJ4GETFLHW"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
