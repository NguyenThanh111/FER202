import { useCallback, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const STORAGE_KEY = "orchid-auth-user";

export default function AuthProvider({ children }) {
  // Effect hook: read the saved user from localStorage once on mount, so a
  // page refresh keeps the session.
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  });

  // Effect hook: side effect - mirror the user into localStorage on change.
  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = useCallback((username) => {
    setUser({ username: username.trim() });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: Boolean(user), login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
