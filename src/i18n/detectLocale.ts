import type { Locale } from "./types";
import { LOCALE_STORAGE_KEY } from "./types";

export function getStoredLocale(): Locale | null {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : null;
}

export function localeFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  const lang = new URLSearchParams(window.location.search).get("lang");
  return lang === "en" || lang === "es" ? lang : null;
}

export function detectLocale(): Locale {
  const urlLocale = localeFromUrl();
  if (urlLocale) return urlLocale;

  const stored = getStoredLocale();
  if (stored) return stored;

  return "en";
}
