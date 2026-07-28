import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PocTheme = "dark" | "light";

const PREFERENCE_KEY = "agentbiz-theme-preference";

interface PocThemeContextValue {
  theme: PocTheme;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: PocTheme) => void;
}

const PocThemeContext = createContext<PocThemeContextValue | null>(null);

function getSystemTheme(): PocTheme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function readUserPreference(): PocTheme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(PREFERENCE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function resolveTheme(preference: PocTheme | null): PocTheme {
  return preference ?? getSystemTheme();
}

export function PocThemeProvider({ children }: { children: ReactNode }) {
  const [userPreference, setUserPreference] = useState<PocTheme | null>(readUserPreference);
  const [theme, setThemeState] = useState<PocTheme>(() => resolveTheme(readUserPreference()));

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("poc-light", theme === "light");
    return () => {
      document.documentElement.classList.remove("poc-light");
    };
  }, [theme]);

  useEffect(() => {
    if (userPreference !== null) return;

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      setThemeState(event.matches ? "light" : "dark");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [userPreference]);

  const setTheme = useCallback((next: PocTheme) => {
    setThemeState(next);
    setUserPreference(next);
    localStorage.setItem(PREFERENCE_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      setUserPreference(next);
      localStorage.setItem(PREFERENCE_KEY, next);
      return next;
    });
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
