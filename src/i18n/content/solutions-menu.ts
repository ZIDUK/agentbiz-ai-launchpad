import type { Locale } from "@/i18n/types";

export interface SolutionMenuCapability {
  title: string;
  description: string;
}

export interface SolutionMenuColumn {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  capabilities?: SolutionMenuCapability[];
  highlights?: string[];
}

const solutionsEn: SolutionMenuColumn[] = [
  {
    slug: "agentic-readiness-sprint",
    title: "Agentic Readiness Assessment",
    eyebrow: "Start here",
    description:
      "Enterprise architecture for the operating floor — before another dollar on AI.",
    href: "/engagement/agentic-readiness-sprint",
    capabilities: [
      {
        title: "Enterprise architecture",
        description: "TOGAF vision, stakeholders, drivers, and the operating model that matters first.",
      },
      {
        title: "AS-IS / TO-BE maps",
        description: "BPMN process maps with a Lean audit of waste and bottlenecks.",
      },
      {
        title: "Transformation roadmap",
        description: "A signed one-page plan for what to implement, automate, or pause.",
      },
      {
        title: "Decision memo",
        description: "Clear next step: implement, build a workflow, or wait.",
      },
    ],
  },
  {
    slug: "agentic-operations-build",
    title: "Agentic Operations Build",
    eyebrow: "Full journey",
    description:
      "Change how the work runs. Then give it AI. One team, one outcome.",
    href: "/engagement/agentic-operations-build",
    highlights: [
      "Operating Foundation through AI Accelerator",
      "Live KPI dashboards and coaching",
      "1-2 governed workflows in production",
      "One team, one proposal, one operating model",
    ],
  },
  {
    slug: "custom-delivery-pod",
    title: "Custom Delivery Pod",
    eyebrow: "Follow-on",
    description:
      "When the process needs a system, we build it. You own it.",
    href: "/engagement/custom-delivery-pod",
    highlights: [
      "Working software in your repository",
      "Architecture, tests, and handoff",
      "Fixed-fee by outcome, not hours",
      "Used after the process is already clear",
    ],
  },
];

const solutionsEs: SolutionMenuColumn[] = [
  {
    slug: "agentic-readiness-sprint",
    title: "Agentic Readiness Assessment",
    eyebrow: "Empiece aquí",
    description:
      "Arquitectura empresarial en el piso operativo — antes de otro dólar en IA.",
    href: "/engagement/agentic-readiness-sprint",
    capabilities: [
      {
        title: "Arquitectura empresarial",
        description: "Visión TOGAF, stakeholders, drivers y el modelo operativo que importa primero.",
      },
      {
        title: "Mapas AS-IS / TO-BE",
        description: "Procesos en BPMN con auditoría Lean de desperdicio y cuellos de botella.",
      },
      {
        title: "Hoja de ruta de transformación",
        description: "Un plan de una página firmado: implementar, automatizar o pausar.",
      },
      {
        title: "Memo de decisión",
        description: "Siguiente paso claro: implementar, construir un workflow, o esperar.",
      },
    ],
  },
  {
    slug: "agentic-operations-build",
    title: "Agentic Operations Build",
    eyebrow: "Journey completo",
    description:
      "Cambie cómo corre el trabajo. Después póngale IA. Un equipo, un outcome.",
    href: "/engagement/agentic-operations-build",
    highlights: [
      "De Fundación Operativa a Acelerador de IA",
      "Dashboards KPI en vivo y coaching",
      "1-2 workflows gobernados en producción",
      "Un equipo, una propuesta, un modelo operativo",
    ],
  },
  {
    slug: "custom-delivery-pod",
    title: "Custom Delivery Pod",
    eyebrow: "Siguiente paso",
    description:
      "Cuando el proceso necesita un sistema, lo construimos. Usted lo posee.",
    href: "/engagement/custom-delivery-pod",
    highlights: [
      "Software funcionando en su repositorio",
      "Arquitectura, tests y handoff",
      "Fee fijo por resultado, no por horas",
      "Se usa cuando el proceso ya está claro",
    ],
  },
];

export function getSolutionsMenu(locale: Locale): SolutionMenuColumn[] {
  return locale === "es" ? solutionsEs : solutionsEn;
}
