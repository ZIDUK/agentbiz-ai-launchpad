import { siteConfig } from "@/data/site-config";

const CONSENT_KEY = "agentbiz_analytics_consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function hasAnalyticsConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) === "granted";
}

export function setAnalyticsConsent(granted: boolean): void {
  localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  if (granted) {
    initAnalytics();
  }
}

export function initAnalytics(): void {
  const id = siteConfig.analytics.measurementId;
  if (!id || !hasAnalyticsConsent() || typeof window === "undefined") return;
  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

export function trackPageView(path: string): void {
  const id = siteConfig.analytics.measurementId;
  if (!id || !hasAnalyticsConsent() || !window.gtag) return;
  window.gtag("config", id, { page_path: path });
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!hasAnalyticsConsent() || !window.gtag) return;
  window.gtag("event", action, params);
}
