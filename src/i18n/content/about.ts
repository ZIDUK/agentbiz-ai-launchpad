import type { Locale } from "@/i18n/types";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface AboutContent {
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  missionTitle: string;
  missionBody: string;
  valuesTitle: string;
  values: { title: string; description: string }[];
  industriesTitle: string;
  teamTitle: string;
  teamSubtitle: string;
  team: TeamMember[];
  ctaTitle: string;
  ctaBody: string;
}

const aboutEn: AboutContent = {
  headline: "Partners for",
  headlineHighlight: "operational AI in production",
  subtitle:
    "AgentBiz helps enterprises redesign, implement, and scale critical operations with governed AI — not another strategy deck or staffed outsourcing bench. We ship workflows your team can run and own.",
  missionTitle: "Our mission",
  missionBody:
    "Help enterprise teams move from AI pilots to production capability with engineering discipline, measurable outcomes, and full ownership of what we build.",
  valuesTitle: "How we work",
  values: [
    {
      title: "Production over pilots",
      description: "We scope workflows with KPIs and ship to production — not endless demos.",
    },
    {
      title: "Governance by design",
      description: "Approvals, audit trails, and human oversight are architecture requirements, not afterthoughts.",
    },
    {
      title: "Your systems, your IP",
      description: "You own the code, integrations, and operational playbooks we deliver.",
    },
  ],
  industriesTitle: "Where we ship",
  teamTitle: "Our Agentiers",
  teamSubtitle:
    "Agentiers are the people behind AgentBiz — senior practitioners with 15+ years shipping enterprise software and production AI systems across regulated industries.",
  team: [
    {
      name: "Engineering & Architecture",
      role: "AI Operations · Integrations · Agent Design",
      bio: "Agentiers lead technical discovery, system design, and production deployment. Background in enterprise integrations (ERP, CRM, ITSM), document AI, and governed agent workflows.",
    },
    {
      name: "Delivery & Client Success",
      role: "Program Management · Executive Alignment",
      bio: "Agentiers own execution from AI-Native POD scoping through scale. Ensures KPIs, governance checkpoints, and knowledge transfer so your team operates what we build.",
    },
  ],
  ctaTitle: "Talk through your first production workflow",
  ctaBody:
    "Share the process that costs you the most — we'll map a governed path from pilot to something your team can run.",
};

const aboutEs: AboutContent = {
  headline: "Partners para",
  headlineHighlight: "IA operativa en producción",
  subtitle:
    "AgentBiz ayuda a empresas a rediseñar, implementar y escalar operaciones críticas con IA gobernada — no otra deck de estrategia ni un banco de outsourcing. Entregamos flujos que su equipo puede operar y poseer.",
  missionTitle: "Nuestra misión",
  missionBody:
    "Ayudar a equipos enterprise a pasar de pilotos de IA a capacidad en producción con disciplina de ingeniería, resultados medibles y propiedad total de lo que construimos.",
  valuesTitle: "Cómo trabajamos",
  values: [
    {
      title: "Producción sobre pilotos",
      description: "Acotamos flujos con KPIs y desplegamos en producción — no demos interminables.",
    },
    {
      title: "Gobernanza por diseño",
      description: "Aprobaciones, trazas de auditoría y supervisión humana son requisitos de arquitectura.",
    },
    {
      title: "Sus sistemas, su IP",
      description: "Usted posee el código, integraciones y playbooks operativos que entregamos.",
    },
  ],
  industriesTitle: "Dónde entregamos",
  teamTitle: "Nuestros Agentiers",
  teamSubtitle:
    "Los Agentiers son las personas detrás de AgentBiz — practicantes senior con 15+ años entregando software enterprise y sistemas de IA en producción en industrias reguladas.",
  team: [
    {
      name: "Ingeniería y Arquitectura",
      role: "Operaciones IA · Integraciones · Diseño de agentes",
      bio: "Los Agentiers lideran discovery técnico, diseño de sistemas y despliegue en producción. Experiencia en integraciones enterprise (ERP, CRM, ITSM), IA documental y flujos agénticos gobernados.",
    },
    {
      name: "Entrega y Éxito del Cliente",
      role: "Gestión de programas · Alineación ejecutiva",
      bio: "Los Agentiers gestionan la ejecución desde el alcance de AI-Native PODs hasta la escala. Aseguran KPIs, checkpoints de gobernanza y transferencia de conocimiento.",
    },
  ],
  ctaTitle: "Hablemos de su primer flujo en producción",
  ctaBody:
    "Cuéntenos el proceso que más le cuesta — mapeamos un camino gobernado del piloto a algo que su equipo pueda operar.",
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "es" ? aboutEs : aboutEn;
}

export interface TrustedClient {
  name: string;
  industry: string;
  /** Path under /public (e.g. "/clients/foo.svg"). Optional: falls back to text. */
  logo?: string;
}

export const trustedClients: Record<Locale, TrustedClient[]> = {
  en: [
    { name: "Regional Health Network", industry: "Healthcare", logo: "/clients/regional-health-network.svg" },
    { name: "Mid-Market Lender", industry: "FinTech", logo: "/clients/mid-market-lender.svg" },
    { name: "B2B Services Co.", industry: "Enterprise Ops", logo: "/clients/b2b-services-co.svg" },
    { name: "Logistics Operator", industry: "Supply Chain", logo: "/clients/logistics-operator.svg" },
    { name: "SaaS Platform", industry: "HiTech", logo: "/clients/saas-platform.svg" },
  ],
  es: [
    { name: "Red de Salud Regional", industry: "Salud", logo: "/clients/regional-health-network.svg" },
    { name: "Prestamista Mid-Market", industry: "FinTech", logo: "/clients/mid-market-lender.svg" },
    { name: "Empresa B2B Services", industry: "Ops Enterprise", logo: "/clients/b2b-services-co.svg" },
    { name: "Operador Logístico", industry: "Cadena de suministro", logo: "/clients/logistics-operator.svg" },
    { name: "Plataforma SaaS", industry: "HiTech", logo: "/clients/saas-platform.svg" },
  ],
};

export const trustedIndustries = {
  en: ["Financial Services", "Healthcare", "B2B SaaS", "Logistics", "Energy"],
  es: ["Servicios financieros", "Salud", "B2B SaaS", "Logística", "Energía"],
};
