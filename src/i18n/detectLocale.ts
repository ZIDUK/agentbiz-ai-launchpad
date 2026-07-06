import type { Locale } from "./types";
import { LOCALE_STORAGE_KEY } from "./types";

const SPANISH_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ", "GT", "HN", "MX",
  "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE",
]);

export function getStoredLocale(): Locale | null {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : null;
}

export function localeFromBrowser(): Locale {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  if (languages.some((lang) => lang.toLowerCase().startsWith("es"))) {
    return "es";
  }

  return "en";
}

async function localeFromCountry(): Promise<Locale | null> {
  try {
    const response = await fetch("https://ipapi.co/country_code/", {
      signal: AbortSignal.timeout(2500),
    });

    if (!response.ok) return null;

    const country = (await response.text()).trim().toUpperCase();
    return SPANISH_COUNTRIES.has(country) ? "es" : "en";
  } catch {
    return null;
  }
}

export async function detectLocale(): Promise<Locale> {
  const stored = getStoredLocale();
  if (stored) return stored;

  const browserLocale = localeFromBrowser();
  if (browserLocale === "es") return "es";

  const countryLocale = await localeFromCountry();
  if (countryLocale) return countryLocale;

  return browserLocale;
}
