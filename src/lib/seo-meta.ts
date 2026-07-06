import { siteConfig } from "@/data/site-config";
import {
  getEngagementBySlug,
  getIndustryBySlug,
  getInsightBySlug,
  getResourceBySlug,
  getServiceBySlug,
} from "@/i18n/content";
import { messages as messagesEn } from "@/i18n/messages/en";
import { messages as messagesEs } from "@/i18n/messages/es";
import type { Locale } from "@/i18n/types";
import {
  getEnterpriseOpsCaseStudy,
  getFintechCaseStudy,
  getHealthcareCaseStudy,
  getLogisticsCaseStudy,
} from "@/i18n/content/case-studies";

export interface PageSeoMeta {
  title: string;
  description: string;
  ogType: "website" | "article";
  noindex?: boolean;
}

const messagesByLocale = { en: messagesEn, es: messagesEs } as const;

function t(locale: Locale, key: string): string {
  const parts = key.split(".");
  let value: unknown = messagesByLocale[locale];
  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof value === "string" ? value : key;
}

function withBrand(title: string): string {
  if (title.includes("AgentBiz")) return title;
  return `${title} | AgentBiz`;
}

export function resolveSeoMeta(pathname: string, locale: Locale): PageSeoMeta {
  const path = pathname.split("?")[0] || "/";

  if (path.startsWith("/admin")) {
    return {
      title: "Admin | AgentBiz",
      description: t(locale, "meta.description"),
      ogType: "website",
      noindex: true,
    };
  }

  const staticKeys: Record<string, { title: string; description: string }> = {
    "/": { title: "meta.title", description: "meta.description" },
    "/about": { title: "seo.about.title", description: "seo.about.description" },
    "/privacy": { title: "seo.privacy.title", description: "seo.privacy.description" },
    "/terms": { title: "seo.terms.title", description: "seo.terms.description" },
    "/careers": { title: "seo.careers.title", description: "seo.careers.description" },
    "/services": { title: "seo.services.title", description: "seo.services.description" },
    "/resources": { title: "seo.resources.title", description: "seo.resources.description" },
    "/ai-roi-calculator": {
      title: "seo.roi.title",
      description: "seo.roi.description",
    },
    "/executive-briefing": {
      title: "seo.briefing.title",
      description: "seo.briefing.description",
    },
    "/industries": { title: "seo.industries.title", description: "seo.industries.description" },
    "/engagement": { title: "seo.engagement.title", description: "seo.engagement.description" },
    "/insights": { title: "seo.insights.title", description: "seo.insights.description" },
  };

  if (staticKeys[path]) {
    const keys = staticKeys[path];
    return {
      title: t(locale, keys.title),
      description: t(locale, keys.description),
      ogType: "website",
    };
  }

  const serviceMatch = path.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1], locale);
    if (service) {
      return {
        title: withBrand(service.title),
        description: service.shortDescription,
        ogType: "website",
      };
    }
  }

  const resourceMatch = path.match(/^\/resources\/([^/]+)$/);
  if (resourceMatch) {
    const resource = getResourceBySlug(resourceMatch[1], locale);
    if (resource) {
      return {
        title: withBrand(resource.title),
        description: resource.description,
        ogType: "article",
      };
    }
  }

  const industryMatch = path.match(/^\/industries\/([^/]+)$/);
  if (industryMatch) {
    const industry = getIndustryBySlug(industryMatch[1], locale);
    if (industry) {
      return {
        title: withBrand(industry.name),
        description: industry.description,
        ogType: "website",
      };
    }
  }

  const engagementMatch = path.match(/^\/engagement\/([^/]+)$/);
  if (engagementMatch) {
    const model = getEngagementBySlug(engagementMatch[1], locale);
    if (model) {
      return {
        title: withBrand(model.title),
        description: model.shortDescription,
        ogType: "website",
      };
    }
  }

  const insightMatch = path.match(/^\/insights\/([^/]+)$/);
  if (insightMatch) {
    const article = getInsightBySlug(insightMatch[1], locale);
    if (article) {
      return {
        title: withBrand(article.title),
        description: article.excerpt,
        ogType: "article",
      };
    }
  }

  if (path === "/case-studies/enterprise-ops-automation") {
    const content = getEnterpriseOpsCaseStudy(locale);
    return {
      title: withBrand(content.title),
      description: content.lead,
      ogType: "article",
    };
  }

  if (path === "/case-studies/healthcare-prior-auth") {
    const content = getHealthcareCaseStudy(locale);
    return {
      title: withBrand(content.title),
      description: content.lead,
      ogType: "article",
    };
  }

  if (path === "/case-studies/fintech-loan-documents") {
    const content = getFintechCaseStudy(locale);
    return {
      title: withBrand(content.title),
      description: content.lead,
      ogType: "article",
    };
  }

  if (path === "/case-studies/logistics-exception-handling") {
    const content = getLogisticsCaseStudy(locale);
    return {
      title: withBrand(content.title),
      description: content.lead,
      ogType: "article",
    };
  }

  return {
    title: t(locale, "meta.title"),
    description: t(locale, "meta.description"),
    ogType: "website",
  };
}

export function buildCanonicalUrl(pathname: string, locale: Locale): string {
  const path = pathname.split("?")[0] || "/";
  const base = `${siteConfig.siteUrl}${path === "/" ? "" : path}`;
  return `${base}?lang=${locale}`;
}

export function buildAlternateUrls(pathname: string): { en: string; es: string } {
  const path = pathname.split("?")[0] || "/";
  const base = `${siteConfig.siteUrl}${path === "/" ? "" : path}`;
  return {
    en: `${base}?lang=en`,
    es: `${base}?lang=es`,
  };
}
