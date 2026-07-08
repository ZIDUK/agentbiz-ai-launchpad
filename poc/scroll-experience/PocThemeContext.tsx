import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState, type ReactNode } from "react";

export type PocTheme = "dark" | "light";

const STORAGE_KEY = "agentbiz-theme";

interface PocThemeContextValue {
  theme: PocTheme;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: PocTheme) => void;
}

const PocThemeContext = createContext<PocThemeContextValue | null>(null);

function readStoredTheme(): PocTheme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

export function PocThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PocTheme>(readStoredTheme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("poc-light", theme === "light");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: PocTheme) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isLight: theme === "light",
      toggleTheme,
      setTheme,
    }),
    [theme, toggleTheme, setTheme],
  );

  return <PocThemeContext.Provider value={value}>{children}</PocThemeContext.Provider>;
}

export function usePocTheme(): PocThemeContextValue {
  const ctx = useContext(PocThemeContext);
  if (!ctx) {
    throw new Error("usePocTheme must be used within PocThemeProvider");
  }
  return ctx;
}
