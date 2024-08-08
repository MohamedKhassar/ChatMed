import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "chatapp-87c45.firebaseapp.com",
  projectId: "chatapp-87c45",
  storageBucket: "chatapp-87c45.appspot.com",
  messagingSenderId: "1059146201341",
  appId: "1:1059146201341:web:e52bd4606b66f3e1612694",
  measurementId: "G-XKWSCZCRM7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();

export { app, auth, db, storage };
