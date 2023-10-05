// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdaV-rLobNtTvM97sJRRRDAPyQ3OHt5Bc",
  authDomain: "react-dragon-news-auth-b3ea6.firebaseapp.com",
  projectId: "react-dragon-news-auth-b3ea6",
  storageBucket: "react-dragon-news-auth-b3ea6.appspot.com",
  messagingSenderId: "595152781581",
  appId: "1:595152781581:web:a5c2ad781db73a6f3d3044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;