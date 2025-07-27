import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setIsLoggedIn(true);
      setToken(savedToken);
    }
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};
