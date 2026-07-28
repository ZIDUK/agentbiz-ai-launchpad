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
    slug: "agentops-factory",
    title: "AgentOps Factory",
    eyebrow: "Scale",
    description: "Core infrastructure, patterns, and standards so you can scale beyond the first win.",
    href: "/engagement/agentops-factory",
    highlights: [
      "Reusable workflow & agent patterns",
      "AgentOps standards and runbooks",
      "Internal enablement with your team",
      "Roadmap for the next governed workflows",
    ],
  },
  {
    slug: "function-modernization",
    title: "Function Modernization",
    eyebrow: "Function",
    description: "Modernize Ops, Finance, or Support with AI-native systems that fit your reality.",
    href: "/engagement/function-modernization",
    highlights: [
      "Function assessment & redesign",
      "Production AI-native workflows",
      "Integrations to systems you already use",
      "KPI baseline and ownership transfer",
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
    slug: "agentops-factory",
    title: "AgentOps Factory",
    eyebrow: "Escala",
    description:
      "Infraestructura, patrones y estándares para escalar más allá del primer logro.",
    href: "/engagement/agentops-factory",
    highlights: [
      "Patrones reutilizables de flujos y agentes",
      "Estándares AgentOps y runbooks",
      "Enablement interno con su equipo",
      "Roadmap de los siguientes flujos gobernados",
    ],
  },
  {
    slug: "function-modernization",
    title: "Function Modernization",
    eyebrow: "Función",
    description:
      "Modernice Ops, Finanzas o Soporte con sistemas AI-Native a medida de su realidad.",
    href: "/engagement/function-modernization",
    highlights: [
      "Evaluación y rediseño de la función",
      "Flujos AI-Native en producción",
      "Integraciones a sistemas que ya usa",
      "Línea base de KPIs y transferencia de ownership",
    ],
  },
];

export function getSolutionsMenu(locale: Locale): SolutionMenuColumn[] {
  return locale === "es" ? solutionsEs : solutionsEn;
}
