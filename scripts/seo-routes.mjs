/** Public routes for sitemap generation — keep in sync with App.tsx routes. */

export const siteUrl = "https://agentbiz.io";

export const serviceSlugs = [
  "ai-code-review",
  "ai-assisted-software-development",
  "ai-integration",
  "agentic-ai-development",
  "custom-ai-development",
  "ai-mvp-development",
  "ai-application-development",
  "mobile-app-development",
  "web-development",
  "quality-assurance",
  "digital-transformation",
];

export const industrySlugs = ["fintech", "healthcare", "logistics", "saas-hitech", "energy"];

export const engagementSlugs = [
  "project-based-development",
  "managed-services",
  "staff-augmentation",
  "software-maintenance",
  "rescue-project",
];

export const insightSlugs = [
  "why-enterprise-ai-pilots-fail",
  "governed-agents-human-in-the-loop",
  "document-workflows-highest-roi-ai",
  "build-vs-buy-enterprise-ai",
];

export const resourceGuideSlugs = ["enterprise-ai-roadmap", "pilot-to-production-checklist"];

export const caseStudyPaths = [
  "/case-studies/enterprise-ops-automation",
  "/case-studies/healthcare-prior-auth",
  "/case-studies/fintech-loan-documents",
];

export function getPublicPaths() {
  const paths = [
    "/",
    "/about",
    "/privacy",
    "/terms",
    "/careers",
    "/services",
    "/resources",
    "/ai-roi-calculator",
    "/executive-briefing",
    "/industries",
    "/engagement",
    "/insights",
    ...caseStudyPaths,
  ];

  for (const slug of serviceSlugs) paths.push(`/services/${slug}`);
  for (const slug of resourceGuideSlugs) paths.push(`/resources/${slug}`);
  for (const slug of industrySlugs) paths.push(`/industries/${slug}`);
  for (const slug of engagementSlugs) paths.push(`/engagement/${slug}`);
  for (const slug of insightSlugs) paths.push(`/insights/${slug}`);

  return paths;
}
