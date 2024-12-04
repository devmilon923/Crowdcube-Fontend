import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseSDK";

export const AuthContext = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const close = onAuthStateChanged(auth, (hasUser) => {
      if (hasUser) {
        setLoading(false);
        setUser(hasUser);
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => close();
  }, []);

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const epcreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const eplogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (email, password) => {
    return signOut(auth);
  };

  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        googleLogin,
        facebookLogin,
        githubLogin,
        epcreate,
        eplogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
