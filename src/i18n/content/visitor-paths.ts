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
    title: "Join the studio",
    description:
      "Two seats: someone who has run an operation, and someone who has shipped the system operators run.",
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
    title: "Únase al estudio",
    description:
      "Dos asientos: alguien que ha corrido una operación, y alguien que ha entregado el sistema que los operadores corren.",
    cta: "Ver vacantes",
    href: "/careers",
    secondaryCta: "Sobre AgentBiz",
    secondaryHref: "/about",
  },
];

export function getVisitorPaths(locale: Locale): VisitorPath[] {
  return locale === "es" ? pathsEs : pathsEn;
}
