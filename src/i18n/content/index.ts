import type { Locale } from "@/i18n/types";

import {
  aiServices,
  coreCapabilities,
  engagementModels,
  enterpriseChallenges,
  resources,
  softwareServices,
  strategicPillars,
  workflowPhases,
} from "@/data/site-content";
import { industryDetails } from "@/data/industries-content";
import { engagementDetails } from "@/data/engagement-content";
import { insightArticles } from "@/data/insights-content";
import { executivePainPoints } from "@/data/executive-content";

import {
  aiServicesEs,
  coreCapabilitiesEs,
  engagementModelsEs,
  enterpriseChallengesEs,
  resourcesEs,
  softwareServicesEs,
  strategicPillarsEs,
  workflowPhasesEs,
} from "./site.es";
import { industryDetailsEs } from "./industries.es";
import { engagementDetailsEs } from "./engagement.es";
import { insightArticlesEs } from "./insights.es";
import { executivePainPointsEs } from "./executive.es";

const siteContentEn = {
  aiServices,
  softwareServices,
  engagementModels,
  strategicPillars,
  coreCapabilities,
  enterpriseChallenges,
  workflowPhases,
  resources,
};

const siteContentEs = {
  aiServices: aiServicesEs,
  softwareServices: softwareServicesEs,
  engagementModels: engagementModelsEs,
  strategicPillars: strategicPillarsEs,
  coreCapabilities: coreCapabilitiesEs,
  enterpriseChallenges: enterpriseChallengesEs,
  workflowPhases: workflowPhasesEs,
  resources: resourcesEs,
};

export function getSiteContent(locale: Locale) {
  return locale === "es" ? siteContentEs : siteContentEn;
}

export function getIndustriesContent(locale: Locale) {
  return locale === "es" ? industryDetailsEs : industryDetails;
}

export function getEngagementContent(locale: Locale) {
  return locale === "es" ? engagementDetailsEs : engagementDetails;
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
  const { aiServices: ai, softwareServices: software } = getSiteContent(locale);
  return [...ai, ...software].find((service) => service.slug === slug);
}

export function getIndustryBySlug(slug: string, locale: Locale) {
  return getIndustriesContent(locale).find((industry) => industry.slug === slug);
}

export function getEngagementBySlug(slug: string, locale: Locale) {
  return getEngagementContent(locale).find((model) => model.slug === slug);
}

export function getInsightBySlug(slug: string, locale: Locale) {
  return getInsightsContent(locale).find((article) => article.slug === slug);
}

export type { Locale } from "@/i18n/types";

export type {
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
