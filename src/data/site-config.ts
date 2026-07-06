export const siteConfig = {
  email: "hello@agentbiz.ai",
  siteUrl: "https://agentbiz.io",
  social: {
    linkedin: "https://www.linkedin.com/company/agentbiz",
    twitter: "https://x.com/agentbiz",
    github: "https://github.com/ZIDUK/agentbiz-ai-launchpad",
  },
  analytics: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined,
  },
} as const;
