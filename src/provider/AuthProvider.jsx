import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

  const signUp = (email, password) => {
    setLoading(true);
    const createUser = createUserWithEmailAndPassword(auth, email, password);
    setLoading(false);
    return createUser
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
