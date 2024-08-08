import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import upload from "../firebase/upload";

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signUp = async (username, email, password, avatar) => {
    setLoading(true);
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const imgUrl = await upload(avatar)
    await setDoc(doc(db, "users", res.user.uid), {
      username,
      email,
      id: res.user.uid,
      avatar: imgUrl,
      blocked: []
    })

    await setDoc(doc(db, "userChats", res.user.uid), {
      chats: []
    })
    toast.success("account has been created successfully")
    setLoading(false);
    return res
  };

  const signIn = (email, password) => {
    setLoading(true);
    const logUser = signInWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return logUser
  };

  const logout = () => {
    setLoading(true);
    const UserOut = signOut(auth);
    setLoading(false);
    return UserOut
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
