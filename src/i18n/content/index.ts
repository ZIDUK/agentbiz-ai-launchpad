import type { Locale } from "@/i18n/types";

import {
  aiServices,
  about,
  buyerFaqs,
  bundles,
  caseStudies,
  coreCapabilities,
  engagementModels,
  enterpriseChallenges,
  industries,
  isPublicBundle,
  isPublicIndustry,
  resources,
  services,
  softwareServices,
  strategicPillars,
  workflowPhases,
} from "@/data/site-content";
import { industryDetails } from "@/data/industries-content";
import { engagementDetails } from "@/data/engagement-content";
import { insightArticles } from "@/data/insights-content";
import { executivePainPoints } from "@/data/executive-content";

import {
  aboutEs,
  aiServicesEs,
  bundlesEs,
  buyerFaqsEs,
  caseStudiesEs,
  coreCapabilitiesEs,
  enterpriseChallengesEs,
  industriesEs,
  resourcesEs,
  servicesEs,
  softwareServicesEs,
  strategicPillarsEs,
  workflowPhasesEs,
} from "./site.es";
import { industryDetailsEs } from "./industries.es";
import { engagementDetailsEs } from "./engagement.es";
import { insightArticlesEs } from "./insights.es";
import { executivePainPointsEs } from "./executive.es";

// New content (English) — falls back to English when Spanish is not yet translated
const newContentEn = {
  services,
  bundles,
  industries,
  caseStudies,
  about,
  buyerFaqs,
};

const newContentEs = {
  services: servicesEs ?? services,
  bundles: bundlesEs ?? bundles,
  industries: industriesEs ?? industries,
  caseStudies: caseStudiesEs ?? caseStudies,
  about: aboutEs ?? about,
  buyerFaqs: buyerFaqsEs ?? buyerFaqs,
};

const siteContentEn = {
  aiServices,
  softwareServices,
  engagementModels,
  strategicPillars,
  coreCapabilities,
  enterpriseChallenges,
  workflowPhases,
  resources,
  ...newContentEn,
};

const siteContentEs = {
  aiServices: aiServicesEs,
  softwareServices: softwareServicesEs,
  engagementModels: bundlesEs ?? bundles,
  strategicPillars: strategicPillarsEs,
  coreCapabilities: coreCapabilitiesEs,
  enterpriseChallenges: enterpriseChallengesEs,
  workflowPhases: workflowPhasesEs,
  resources: resourcesEs,
  ...newContentEs,
};

export function getSiteContent(locale: Locale) {
  return locale === "es" ? siteContentEs : siteContentEn;
}

export function getIndustriesContent(locale: Locale) {
  const fromNew = getSiteContent(locale).industries.filter((industry) =>
    isPublicIndustry(industry.slug),
  );
  const source = fromNew.length > 0
    ? fromNew
    : (locale === "es" ? industryDetailsEs : industryDetails).filter((industry) =>
        isPublicIndustry(industry.slug),
      );
  return [...source].sort((a, b) => {
    const order = ["tech-services-latam", "media-entertainment", "sports", "retail"];
    return order.indexOf(a.slug) - order.indexOf(b.slug);
  });
}

export function getEngagementContent(locale: Locale) {
  const source = locale === "es" ? engagementDetailsEs : engagementDetails;
  const published = source.filter((model) => isPublicBundle(model.slug));
  if (published.length > 0) return published;
  return engagementDetails.filter((model) => isPublicBundle(model.slug));
}

export function getInsightsContent(locale: Locale) {
  return locale === "es" ? insightArticlesEs : insightArticles;
}

export function getExecutiveContent(locale: Locale) {
  return locale === "es" ? executivePainPointsEs : executivePainPoints;
}

export function getResourceBySlug(slug: string, locale: Locale) {
  return getSiteContent(locale).resources.find((resource) => resource.slug === slug);
}

export function getServiceBySlug(slug: string, locale: Locale) {
  const content = getSiteContent(locale);
  // Prefer the new "services" array; fall back to legacy aiServices + softwareServices
  const servicesAny = (content as any).services;
  if (servicesAny) {
    return servicesAny.find((service: any) => service.slug === slug);
  }
  const { aiServices: ai, softwareServices: software } = content;
  return [...ai, ...software].find((service) => service.slug === slug);
}

export function getBundleBySlug(slug: string, locale: Locale) {
  const content = getSiteContent(locale) as any;
  return content.bundles?.find((bundle: any) => bundle.slug === slug);
}

export function getIndustryBySlug(slug: string, locale: Locale) {
  // New industries are in site-content; legacy industries in industries-content
  const content = getSiteContent(locale) as any;
  const fromNew = content.industries?.find((industry: any) => industry.slug === slug);
  if (fromNew) return fromNew;
  return getIndustriesContent(locale).find((industry) => industry.slug === slug);
}

export function getCaseStudyBySlug(slug: string, locale: Locale) {
  const content = getSiteContent(locale) as any;
  return content.caseStudies?.find((cs: any) => cs.slug === slug);
}

export function getEngagementBySlug(slug: string, locale: Locale) {
  return getEngagementContent(locale).find((model) => model.slug === slug);
}

export function getInsightBySlug(slug: string, locale: Locale) {
  return getInsightsContent(locale).find((article) => article.slug === slug);
}

export type { Locale } from "@/i18n/types";

export type {
  AboutContent,
  BundleItem,
  CaseStudy,
  CoreCapability,
  EngagementModel,
  Industry,
  ResourceItem,
  ServiceItem,
  StrategicPillar,
} from "@/data/site-content";

export type { IndustryDetail } from "@/data/industries-content";
export type { EngagementDetail } from "@/data/engagement-content";
export type { InsightArticle } from "@/data/insights-content";
export type { ExecutivePainPoint } from "@/data/executive-content";
