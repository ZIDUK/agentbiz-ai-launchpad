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
    secondaryCta: "View engagement models",
    secondaryHref: "/engagement",
  },
  {
    id: "talent",
    audience: "Candidates",
    title: "Join the team",
    description:
      "Build production AI systems for enterprise clients — governed agents, integrations, and software delivery.",
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
    secondaryCta: "Ver engagement models",
    secondaryHref: "/engagement",
  },
  {
    id: "talent",
    audience: "Candidatos",
    title: "Únase al equipo",
    description:
      "Construya sistemas de IA en producción para clientes enterprise — agentes gobernados, integraciones y entrega de software.",
    cta: "Ver vacantes",
    href: "/careers",
    secondaryCta: "Sobre AgentBiz",
    secondaryHref: "/about",
  },
];

export function getVisitorPaths(locale: Locale): VisitorPath[] {
  return locale === "es" ? pathsEs : pathsEn;
}
