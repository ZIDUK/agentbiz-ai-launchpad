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
  sisterBrandTitle: string;
  sisterBrandBody: string;
}

const aboutEn: AboutContent = {
  headline: "Engineering partners for production AI",
  subtitle:
    "AgentBiz is the delivery arm for organizations building governed AI systems — not another strategy consultancy. We ship code, integrations, and operational workflows your team can run.",
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
  teamTitle: "Leadership",
  teamSubtitle:
    "Senior engineering and delivery leaders with experience shipping software and AI systems since 2007.",
  team: [
    {
      name: "Engineering Leadership",
      role: "AI Operations & Delivery",
      bio: "Leads architecture, agent design, and production deployment for enterprise workflow automation programs.",
    },
    {
      name: "Delivery Leadership",
      role: "Program & Client Success",
      bio: "Owns engagement models, delivery standards, and executive alignment from assessment through scale.",
    },
  ],
  sisterBrandTitle: "Part of the Agentic Dream ecosystem",
  sisterBrandBody:
    "AgentBiz focuses on engineering and delivery. Our sister brand Agentic Dream addresses AI-native operating model strategy. Together we cover strategy through production — without duplicating either role.",
};

const aboutEs: AboutContent = {
  headline: "Partners de ingeniería para IA en producción",
  subtitle:
    "AgentBiz es el brazo de entrega para organizaciones que construyen sistemas de IA gobernados — no otra consultora de estrategia. Entregamos código, integraciones y flujos operativos que su equipo puede ejecutar.",
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
  teamTitle: "Liderazgo",
  teamSubtitle:
    "Líderes senior de ingeniería y entrega con experiencia entregando software y sistemas de IA desde 2007.",
  team: [
    {
      name: "Liderazgo de Ingeniería",
      role: "Operaciones IA y Entrega",
      bio: "Lidera arquitectura, diseño de agentes y despliegue en producción para programas de automatización enterprise.",
    },
    {
      name: "Liderazgo de Entrega",
      role: "Programa y Éxito del Cliente",
      bio: "Gestiona modelos de engagement, estándares de entrega y alineación ejecutiva desde evaluación hasta escala.",
    },
  ],
  sisterBrandTitle: "Parte del ecosistema Agentic Dream",
  sisterBrandBody:
    "AgentBiz se enfoca en ingeniería y entrega. Nuestra marca hermana Agentic Dream aborda estrategia de modelo operativo con IA nativa. Juntas cubrimos de estrategia a producción sin duplicar roles.",
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "es" ? aboutEs : aboutEn;
}

export const trustedIndustries = {
  en: ["Financial Services", "Healthcare", "B2B SaaS", "Logistics", "Energy"],
  es: ["Servicios financieros", "Salud", "B2B SaaS", "Logística", "Energía"],
};
