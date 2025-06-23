

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSp35UUsmCSKTD493rgWWGlLk6i3mKPCY",
  authDomain: "pos-app-ad63b.firebaseapp.com",
  projectId: "pos-app-ad63b",
  storageBucket: "pos-app-ad63b.firebasestorage.app",
  messagingSenderId: "241448691010",
  appId: "1:241448691010:web:f9072754a5292053acd4db",
  measurementId: "G-MJ8BD3HMH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);