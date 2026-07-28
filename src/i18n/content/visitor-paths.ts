import type { Locale } from "@/i18n/types";

export interface VisitorPath {
  id: "executive" | "engineering" | "talent";
  audience: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  secondaryCta: string;
  secondaryHref: string;
}

const pathsEn: VisitorPath[] = [
  {
    id: "executive",
    audience: "C-Level / COO / CTO",
    title: "Executive strategy & ROI",
    description:
      "Validate operational impact, governance requirements, and the first workflow worth production investment.",
    cta: "Executive briefing",
    href: "/executive-briefing",
    secondaryCta: "Book a strategy call",
    secondaryHref: "/#contact",
  },
  {
    id: "engineering",
    audience: "VP Engineering / Product",
    title: "Technical discovery",
    description:
      "Map integrations, agent architecture, and delivery approach for your stack and compliance constraints.",
    cta: "Calculate AI ROI",
    href: "/ai-roi-calculator",
    secondaryCta: "View transformation packages",
    secondaryHref: "/engagement",
  },
  {
    id: "talent",
    audience: "Candidates",
    title: "Become an Agentier",
    description:
      "Join Agentiers shipping AI-native operations to production — governed agents, integrations, and ownership transfer.",
    cta: "View open roles",
    href: "/careers",
    secondaryCta: "About AgentBiz",
    secondaryHref: "/about",
  },
];

const pathsEs: VisitorPath[] = [
  {
    id: "executive",
    audience: "C-Level / COO / CTO",
    title: "Estrategia ejecutiva y ROI",
    description:
      "Valide impacto operativo, requisitos de gobernanza y el primer flujo que vale inversión en producción.",
    cta: "Briefing ejecutivo",
    href: "/executive-briefing",
    secondaryCta: "Agendar llamada",
    secondaryHref: "/#contact",
  },
  {
    id: "engineering",
    audience: "VP Engineering / Product",
    title: "Discovery técnico",
    description:
      "Mapee integraciones, arquitectura de agentes y enfoque de entrega para su stack y restricciones de cumplimiento.",
    cta: "Calcular ROI de IA",
    href: "/ai-roi-calculator",
    secondaryCta: "Ver paquetes de transformación",
    secondaryHref: "/engagement",
  },
  {
    id: "talent",
    audience: "Candidatos",
    title: "Conviértase en Agentier",
    description:
      "Únase a los Agentiers que llevan operaciones AI-Native a producción — agentes gobernados, integraciones y transferencia de ownership.",
    cta: "Ver vacantes",
    href: "/careers",
    secondaryCta: "Sobre AgentBiz",
    secondaryHref: "/about",
  },
];

export function getVisitorPaths(locale: Locale): VisitorPath[] {
  return locale === "es" ? pathsEs : pathsEn;
}
