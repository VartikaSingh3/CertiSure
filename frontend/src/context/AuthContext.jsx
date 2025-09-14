// src/context/AuthContext.jsx
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // user example: { name, email, userType: "student"|"employer"|"university" }

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const updateUser = (patch) => setUser((u) => ({ ...u, ...patch }));

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
