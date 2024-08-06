import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfNEF2FdgGFxmt-i7lGC9fK5sedU_PQIQ",
  authDomain: "chatapp-87c45.firebaseapp.com",
  projectId: "chatapp-87c45",
  storageBucket: "chatapp-87c45.appspot.com",
  messagingSenderId: "1059146201341",
  appId: "1:1059146201341:web:e52bd4606b66f3e1612694",
  measurementId: "G-XKWSCZCRM7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
