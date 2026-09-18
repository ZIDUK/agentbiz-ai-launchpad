/** Public routes for sitemap generation — keep in sync with SiteRoutes.tsx. */

export const siteUrl = "https://agentbiz.io";

export const serviceSlugs = [
  "operating-foundation",
  "process-diagnostic",
  "process-implementation",
  "ai-accelerator",
];

export const industrySlugs = [
  "tech-services-latam",
  "media-entertainment",
  "sports",
  "retail",
];

export const engagementSlugs = [
  "agentic-readiness-sprint",
  "agentic-operations-build",
  "custom-delivery-pod",
];

export const insightSlugs = [
  "why-enterprise-ai-pilots-fail",
  "strategy-operations-then-ai",
  "governed-agents-human-in-the-loop",
];

export const resourceGuideSlugs = ["enterprise-ai-roadmap", "pilot-to-production-checklist"];

export const caseStudyPaths = [
  "/case-studies/avanto-operations",
  "/case-studies/combat-sports-scoring",
  "/case-studies/specialty-retail-ops",
];

export const trainingSlugs = ["ai-for-operations-leaders"];

export function getPublicPaths() {
  const paths = [
    "/",
    "/about",
    "/privacy",
    "/terms",
    "/careers",
    "/contact",
    "/services",
    "/resources",
    "/ai-roi-calculator",
    "/executive-briefing",
    "/industries",
    "/engagement",
    "/insights",
    "/trainings",
    ...caseStudyPaths,
  ];

  for (const slug of serviceSlugs) paths.push(`/services/${slug}`);
  for (const slug of resourceGuideSlugs) paths.push(`/resources/${slug}`);
  for (const slug of industrySlugs) paths.push(`/industries/${slug}`);
  for (const slug of engagementSlugs) paths.push(`/engagement/${slug}`);
  for (const slug of insightSlugs) paths.push(`/insights/${slug}`);
  for (const slug of trainingSlugs) {
    paths.push(`/trainings/${slug}`);
    paths.push(`/trainings/${slug}/enroll`);
  }

  return paths;
}
