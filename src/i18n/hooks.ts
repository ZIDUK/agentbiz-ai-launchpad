import { useLanguage } from "./LanguageProvider";
import {
  getSiteContent,
  getIndustriesContent,
  getEngagementContent,
  getInsightsContent,
  getExecutiveContent,
} from "./content";
import { jobPositionsEn, jobPositionsEs } from "./content/careers";

export function useSiteContent() {
  const { locale } = useLanguage();
  return getSiteContent(locale);
}

export function useIndustriesContent() {
  const { locale } = useLanguage();
  return getIndustriesContent(locale);
}

export function useEngagementContent() {
  const { locale } = useLanguage();
  return getEngagementContent(locale);
}

export function useInsightsContent() {
  const { locale } = useLanguage();
  return getInsightsContent(locale);
}

export function useExecutiveContent() {
  const { locale } = useLanguage();
  return getExecutiveContent(locale);
}

export function useJobPositions() {
  const { locale } = useLanguage();
  return locale === "es" ? jobPositionsEs : jobPositionsEn;
}
