import type { Metadata } from "next";
import { headers } from "next/headers";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";
import { resolveSeoMeta, buildCanonicalUrl, buildAlternateUrls } from "@/lib/seo-meta";
import { siteConfig } from "@/data/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers();
  const locale = h.get("x-agentbiz-locale") === "es" ? "es" : "en";
  const pathname = h.get("x-agentbiz-path") || "/";
  const meta = resolveSeoMeta(pathname, locale);
  const alternate = buildAlternateUrls(pathname);
  const image = `${siteConfig.siteUrl}/og-image.png`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: buildCanonicalUrl(pathname, locale), languages: { en: alternate.en, es: alternate.es, "x-default": alternate.en } },
    robots: { index: !meta.noindex, follow: !meta.noindex },
    openGraph: { title: meta.title, description: meta.description, url: buildCanonicalUrl(pathname, locale), type: meta.ogType, siteName: "AgentBiz", images: [image], locale: locale === "es" ? "es_ES" : "en_US" },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [image] },
  };
}

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const locale = h.get("x-agentbiz-locale") === "es" ? "es" : "en";
  return <MarketingProviders initialLocale={locale}>{children}</MarketingProviders>;
}
