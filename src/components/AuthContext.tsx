import { createContext, useContext, useState } from "react";

const AuthContext = createContext<{
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
