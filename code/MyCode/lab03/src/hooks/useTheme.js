import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "orchid-theme";

export default function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEY) || "light");

  // Effect hook: side effect - push the theme onto <html> so every element,
  // including react-bootstrap components, follows it.
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
