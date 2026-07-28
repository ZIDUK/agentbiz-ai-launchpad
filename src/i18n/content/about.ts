import type { Locale } from "@/i18n/types";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface AboutContent {
  headline: string;
  subtitle: string;
  missionTitle: string;
  missionBody: string;
  values: { title: string; description: string }[];
  teamTitle: string;
  teamSubtitle: string;
  team: TeamMember[];
}

const aboutEn: AboutContent = {
  headline: "Partners for operational AI in production",
  subtitle:
    "AgentBiz helps enterprises redesign, implement, and scale critical operations with governed AI — not another strategy deck or staffed outsourcing bench. We ship workflows your team can run and own.",
  missionTitle: "Our mission",
  missionBody:
    "Help enterprise teams move from AI pilots to production capability with engineering discipline, measurable outcomes, and full ownership of what we build.",
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
};

const aboutEs: AboutContent = {
  headline: "Partners para IA operativa en producción",
  subtitle:
    "AgentBiz ayuda a empresas a rediseñar, implementar y escalar operaciones críticas con IA gobernada — no otra deck de estrategia ni un banco de outsourcing. Entregamos flujos que su equipo puede operar y poseer.",
  missionTitle: "Nuestra misión",
  missionBody:
    "Ayudar a equipos enterprise a pasar de pilotos de IA a capacidad en producción con disciplina de ingeniería, resultados medibles y propiedad total de lo que construimos.",
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
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "es" ? aboutEs : aboutEn;
}

export const trustedClients = {
  en: [
    { name: "Regional Health Network", industry: "Healthcare" },
    { name: "Mid-Market Lender", industry: "FinTech" },
    { name: "B2B Services Co.", industry: "Enterprise Ops" },
    { name: "Logistics Operator", industry: "Supply Chain" },
    { name: "SaaS Platform", industry: "HiTech" },
  ],
  es: [
    { name: "Red de Salud Regional", industry: "Salud" },
    { name: "Prestamista Mid-Market", industry: "FinTech" },
    { name: "Empresa B2B Services", industry: "Ops Enterprise" },
    { name: "Operador Logístico", industry: "Cadena de suministro" },
    { name: "Plataforma SaaS", industry: "HiTech" },
  ],
};

export const trustedIndustries = {
  en: ["Financial Services", "Healthcare", "B2B SaaS", "Logistics", "Energy"],
  es: ["Servicios financieros", "Salud", "B2B SaaS", "Logística", "Energía"],
};
