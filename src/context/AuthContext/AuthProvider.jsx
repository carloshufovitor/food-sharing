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
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (currentUser) {
      try {
        await axios.get("https://food-sharing-website-server-lovat.vercel.app/", {
          headers: {
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        });
      } catch (error) {
        console.error("Axios error:", error);
      }
    }

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
