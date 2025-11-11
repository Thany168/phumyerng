import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Static credentials
    const validEmail = "test@gmail.com";
    const validPassword = "12345678";

    if (email === validEmail && password === validPassword) {
      const fakeUser = { name: "Thany", email };
      setUser(fakeUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
