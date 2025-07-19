import React, { createContext, useEffect, useState } from "react";
// import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      axios.get("http://localhost:3000/", {
        headers: {
          Authorization: `Bearer ${currentUser.accessToken}`,
        },
      });
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
