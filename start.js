// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDga1DCCTQvL0fyuzWkGT6igEOro6LvYz4",
  authDomain: "nlp-todo.firebaseapp.com",
  projectId: "nlp-todo",
  storageBucket: "nlp-todo.appspot.com",
  messagingSenderId: "948722089320",
  appId: "1:948722089320:web:332f5706dc348837a2aadd",
  measurementId: "G-PRLRW56B05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);