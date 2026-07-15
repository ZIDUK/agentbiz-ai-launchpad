function readGaMeasurementId(): string | undefined {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  }
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_MEASUREMENT_ID) {
    return import.meta.env.VITE_GA_MEASUREMENT_ID;
  }
  return undefined;
}

export const siteConfig = {
  email: "hello@agentbiz.ai",
  siteUrl: "https://agentbiz.io",
  social: {
    linkedin: "https://www.linkedin.com/company/agentbiz",
    twitter: "https://x.com/agentbiz",
    github: "https://github.com/ZIDUK/agentbiz-ai-launchpad",
  },
  analytics: {
    measurementId: readGaMeasurementId(),
  },
} as const;
