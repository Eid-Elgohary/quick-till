
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSp35UUsmCSKTD493rgWWGlLk6i3mKPCY",
  authDomain: "pos-app-ad63b.firebaseapp.com",
  projectId: "pos-app-ad63b",
  storageBucket: "pos-app-ad63b.firebasestorage.app",//should be .com
  messagingSenderId: "241448691010",
  appId: "1:241448691010:web:f9072754a5292053acd4db",
  measurementId: "G-MJ8BD3HMH5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);


