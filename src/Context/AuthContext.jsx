import React from "react";
import { auth } from "../Firebase/Firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = React.createContext({
    user: null,
    loading : true,
    logout: async ()=>{

    }
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const logout = async () => await signOut(auth);
 
  const value = React.useMemo(() => ({ user, loading, logout }), [user, loading]);
  return (
    <AuthContext.Provider value={ value}>
      {children}
    </AuthContext.Provider>
  );
};
