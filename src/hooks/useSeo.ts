import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "@/data/site-config";
import { useLanguage } from "@/i18n/LanguageProvider";
import {
  buildAlternateUrls,
  buildCanonicalUrl,
  resolveSeoMeta,
} from "@/lib/seo-meta";
import {
  buildOrganizationSchema,
  buildSiteNavigationSchema,
  buildWebSiteSchema,
} from "@/lib/site-navigation-schema";

const OG_IMAGE = `${siteConfig.siteUrl}/og-image.png`;

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  createTag: "meta" | "link" = "meta",
) {
  const attrKey = createTag === "meta" ? "name" : "rel";
  const attrValue = attributes[attrKey];
  if (!attrValue) return;

  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = document.createElement(createTag);
    Object.entries(attributes).forEach(([key, value]) => {
      element!.setAttribute(key, value);
    });
    document.head.appendChild(element);
    return;
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function useSeo() {
  const location = useLocation();
  const { locale } = useLanguage();
  const pathname = location.pathname;

  useEffect(() => {
    const meta = resolveSeoMeta(pathname, locale);
    const canonical = buildCanonicalUrl(pathname, locale);
    const alternates = buildAlternateUrls(pathname);

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: meta.noindex ? "noindex, nofollow" : "index, follow",
    });

    upsertMeta('link[rel="canonical"]', { rel: "canonical", href: canonical }, "link");

    upsertMeta('link[rel="alternate"][hreflang="en"]', {
      rel: "alternate",
      hreflang: "en",
      href: alternates.en,
    }, "link");

    upsertMeta('link[rel="alternate"][hreflang="es"]', {
      rel: "alternate",
      hreflang: "es",
      href: alternates.es,
    }, "link");

    upsertMeta('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: alternates.en,
    }, "link");

    const ogTags: Record<string, string> = {
      "og:title": meta.title,
      "og:description": meta.description,
      "og:url": canonical,
      "og:image": OG_IMAGE,
      "og:type": meta.ogType,
      "og:site_name": "AgentBiz",
      "og:locale": locale === "es" ? "es_ES" : "en_US",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      upsertMeta(`meta[property="${property}"]`, { property, content });
    });

    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": OG_IMAGE,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      upsertMeta(`meta[name="${name}"]`, { name, content });
    });

    upsertJsonLd("jsonld-organization", buildOrganizationSchema(meta.description));

    if (pathname === "/") {
      upsertJsonLd("jsonld-website", buildWebSiteSchema(meta.description, locale));
      upsertJsonLd("jsonld-navigation", buildSiteNavigationSchema(locale));
    } else {
      document.getElementById("jsonld-website")?.remove();
      document.getElementById("jsonld-navigation")?.remove();
    }

    const insightMatch = pathname.match(/^\/insights\/([^/]+)$/);
    if (insightMatch && meta.ogType === "article") {
      upsertJsonLd("jsonld-article", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: meta.title.replace(" | AgentBiz", ""),
        description: meta.description,
        url: canonical,
        inLanguage: locale,
        publisher: {
          "@type": "Organization",
          name: "AgentBiz",
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.siteUrl}/apple-touch-icon.png`,
          },
        },
      });
    } else {
      document.getElementById("jsonld-article")?.remove();
    }
  }, [pathname, locale]);
}
