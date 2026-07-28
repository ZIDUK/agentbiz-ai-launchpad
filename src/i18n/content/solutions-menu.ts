import type { Locale } from "@/i18n/types";

export interface SolutionMenuCapability {
  title: string;
  description: string;
}

export interface SolutionMenuColumn {
  slug: string;
  title: string;
  /** Unique short label per column — never reuse the nav "Solutions" word */
  eyebrow: string;
  description: string;
  href: string;
  /** Shown under AI-Native PODs — how Agentiers deliver */
  capabilities?: SolutionMenuCapability[];
  /** Short bullets for Factory / Function columns */
  highlights?: string[];
}

const solutionsEn: SolutionMenuColumn[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    eyebrow: "Execution",
    description:
      "Your execution engine to put AI-native operations in production — staffed by Agentiers.",
    href: "/engagement/ai-native-pods",
    capabilities: [
      {
        title: "AI-Accelerated Planning",
        description: "Requirements interpreted, analyzed, and structured with AI assistance.",
      },
      {
        title: "AI-Augmented Design",
        description: "System skeletons, data mappings, and architecture diagrams in minutes.",
      },
      {
        title: "AI-Enhanced Build",
        description: "Code, APIs, infrastructure, and multi-file implementations produced rapidly.",
      },
      {
        title: "AI-Driven Testing",
        description: "Automated test generation, edge-case detection, and regression coverage.",
      },
      {
        title: "AI-Assisted Code Review",
        description: "First-pass reviews for consistency and structural risk before merge.",
      },
    ],
  },
  {
    slug: "ai-native-operating-system",
    title: "AI-Native Operating System",
    eyebrow: "Scale",
    description:
      "The operating system for AI-native delivery — patterns and standards so you scale beyond the first win.",
    href: "/engagement/ai-native-operating-system",
    highlights: [
      "Reusable workflow & agent patterns",
      "Operating standards and runbooks",
      "Internal enablement with your team",
      "Roadmap for the next governed workflows",
    ],
  },
  {
    slug: "ai-native-stack-upgrade",
    title: "AI-Native Stack Upgrade",
    eyebrow: "Stack",
    description:
      "Replace rented tools with an AI-native stack you own — upgrade how the function runs.",
    href: "/engagement/ai-native-stack-upgrade",
    highlights: [
      "Upgrade systems & tools — not another SaaS seat",
      "Assess → Design → Build → Operate",
      "Built on ERP/CRM you already run",
      "Ops, Finance, Support, and adjacent functions",
    ],
  },
];

const solutionsEs: SolutionMenuColumn[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    eyebrow: "Ejecución",
    description:
      "Su motor de ejecución para llevar operaciones AI-Native a producción — integrado por Agentiers.",
    href: "/engagement/ai-native-pods",
    capabilities: [
      {
        title: "Planning acelerado con IA",
        description: "Requisitos interpretados, analizados y estructurados con asistencia de IA.",
      },
      {
        title: "Diseño aumentado con IA",
        description: "Esqueletos de sistema, mapeos de datos y diagramas de arquitectura en minutos.",
      },
      {
        title: "Build potenciado con IA",
        description: "Código, APIs, infraestructura e implementaciones multi-archivo con velocidad.",
      },
      {
        title: "Testing impulsado por IA",
        description: "Generación de tests, detección de edge cases y cobertura de regresión.",
      },
      {
        title: "Code review asistido por IA",
        description: "Primera pasada de review para consistencia y riesgo estructural antes del merge.",
      },
    ],
  },
  {
    slug: "ai-native-operating-system",
    title: "AI-Native Operating System",
    eyebrow: "Escala",
    description:
      "El sistema operativo para entrega AI-Native — patrones y estándares para escalar más allá del primer logro.",
    href: "/engagement/ai-native-operating-system",
    highlights: [
      "Patrones reutilizables de flujos y agentes",
      "Estándares operativos y runbooks",
      "Enablement interno con su equipo",
      "Roadmap de los siguientes flujos gobernados",
    ],
  },
  {
    slug: "ai-native-stack-upgrade",
    title: "AI-Native Stack Upgrade",
    eyebrow: "Stack",
    description:
      "Reemplace tools alquiladas por un stack AI-Native de su propiedad — actualice cómo opera la función.",
    href: "/engagement/ai-native-stack-upgrade",
    highlights: [
      "Actualice sistemas y tools — no otro asiento SaaS",
      "Evaluar → Diseñar → Construir → Operar",
      "Sobre el ERP/CRM que ya opera",
      "Ops, Finanzas, Soporte y funciones adyacentes",
    ],
  },
];

export function getSolutionsMenu(locale: Locale): SolutionMenuColumn[] {
  return locale === "es" ? solutionsEs : solutionsEn;
}
