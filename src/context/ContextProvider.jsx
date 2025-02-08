import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState("user");

  return (
    <AuthContext.Provider value={{ user, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
