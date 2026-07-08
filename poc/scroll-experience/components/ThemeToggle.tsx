import { Moon, Sun } from "lucide-react";
import { usePocTheme } from "../PocThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = usePocTheme();

  return (
    <button
      type="button"
      className="poc-theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <>
          <Sun size={14} aria-hidden="true" />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={14} aria-hidden="true" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
