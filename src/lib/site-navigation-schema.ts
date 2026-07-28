import { siteConfig } from "@/data/site-config";
import type { Locale } from "@/i18n/types";

export interface SiteNavItem {
  name: string;
  description: string;
  path: string;
}

const navigationByLocale: Record<Locale, SiteNavItem[]> = {
  en: [
    {
      name: "Careers at AgentBiz",
      description:
        "Explore AgentBiz roles and learn why Agentiers join us to ship AI-native operations for enterprise clients.",
      path: "/careers",
    },
    {
      name: "About AgentBiz",
      description:
        "Learn how AgentBiz delivers production AI systems, governed agent workflows, and enterprise engineering for regulated organizations.",
      path: "/about",
    },
    {
      name: "AI & Software Services",
      description:
        "Enterprise AI development, agentic workflows, integrations, and software delivery — from code review to production applications.",
      path: "/services",
    },
    {
      name: "Transformation Packages",
      description:
        "AI-Native PODs, AgentOps Factory, and Function Modernization — outcome-based packages for enterprise operational AI transformation.",
      path: "/engagement",
    },
    {
      name: "Industries",
      description:
        "Production AI for FinTech, healthcare, logistics, SaaS, and energy — regulated environments with measurable outcomes.",
      path: "/industries",
    },
    {
      name: "Resources",
      description:
        "Guides, checklists, and frameworks for C-level leaders moving governed AI from pilot to production.",
      path: "/resources",
    },
    {
      name: "Insights",
      description:
        "Practical perspectives on production AI, governed agents, and operational transformation for enterprise leaders.",
      path: "/insights",
    },
  ],
  es: [
    {
      name: "Carreras en AgentBiz",
      description:
        "Explore vacantes en AgentBiz y conozca por qué los Agentiers se unen a nosotros para llevar operaciones AI-Native a producción.",
      path: "/careers",
    },
    {
      name: "Nosotros",
      description:
        "Conozca cómo AgentBiz entrega sistemas de IA en producción, flujos agénticos gobernados e ingeniería enterprise.",
      path: "/about",
    },
    {
      name: "Servicios de IA y software",
      description:
        "Desarrollo de IA enterprise, flujos agénticos, integraciones y entrega de software — de code review a aplicaciones en producción.",
      path: "/services",
    },
    {
      name: "Paquetes de transformación",
      description:
        "AI-Native PODs, AgentOps Factory y Function Modernization — paquetes orientados a outcomes para transformación operativa con IA enterprise.",
      path: "/engagement",
    },
    {
      name: "Industrias",
      description:
        "IA en producción para FinTech, salud, logística, SaaS y energía — entornos regulados con resultados medibles.",
      path: "/industries",
    },
    {
      name: "Recursos",
      description:
        "Guías, checklists y marcos para líderes C-level que llevan IA gobernada de piloto a producción.",
      path: "/resources",
    },
    {
      name: "Insights",
      description:
        "Perspectivas prácticas sobre IA en producción, agentes gobernados y transformación operativa para líderes enterprise.",
      path: "/insights",
    },
  ],
};

export function getSiteNavigationItems(locale: Locale): SiteNavItem[] {
  return navigationByLocale[locale];
}

export function buildSiteNavigationSchema(locale: Locale) {
  const items = getSiteNavigationItems(locale);

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "es" ? "Navegación principal de AgentBiz" : "AgentBiz primary navigation",
    itemListElement: items.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      description: item.description,
      url: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function buildOrganizationSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgentBiz",
    legalName: "AgentBiz",
    url: siteConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    image: `${siteConfig.siteUrl}/og-image.png`,
    description,
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ],
  };
}

export function buildWebSiteSchema(description: string, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AgentBiz",
    alternateName: "AgentBiz AI",
    url: siteConfig.siteUrl,
    description,
    inLanguage: locale === "es" ? "es" : "en",
    publisher: {
      "@type": "Organization",
      name: "AgentBiz",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/apple-touch-icon.png`,
      },
    },
  };
}
