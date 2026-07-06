import type { Locale } from "@/i18n/types";

export interface GuideSection {
  title: string;
  items: string[];
}

const roadmapEn: GuideSection[] = [
  {
    title: "Phase 1 — Assess readiness",
    items: [
      "Map high-volume workflows with manual dependencies",
      "Identify systems of record (CRM, ERP, ITSM, data platforms)",
      "Define governance requirements: approvals, audit, data boundaries",
      "Select 1–2 workflows with measurable KPI impact",
    ],
  },
  {
    title: "Phase 2 — Design the AI-native future state",
    items: [
      "Define what AI agents automate vs. what humans approve",
      "Design integration architecture and escalation paths",
      "Establish quality review and monitoring standards",
      "Align executive sponsors and operational owners",
    ],
  },
  {
    title: "Phase 3 — Implement in production",
    items: [
      "Build agents, integrations, and workflow orchestration",
      "Deploy with role-based access and logging",
      "Run parallel operation with existing process where needed",
      "Measure cycle time, error rate, and adoption",
    ],
  },
  {
    title: "Phase 4 — Scale with reusable patterns",
    items: [
      "Document delivery standards and knowledge packs",
      "Expand to adjacent functions with shared components",
      "Train internal teams on operating the system",
      "Establish continuous improvement and governance cadence",
    ],
  },
];

const roadmapEs: GuideSection[] = [
  {
    title: "Fase 1 — Evaluar preparación",
    items: [
      "Mapear flujos de alto volumen con dependencias manuales",
      "Identificar sistemas de registro (CRM, ERP, ITSM, plataformas de datos)",
      "Definir requisitos de gobernanza: aprobaciones, auditoría, límites de datos",
      "Seleccionar 1–2 flujos con impacto medible en KPIs",
    ],
  },
  {
    title: "Fase 2 — Diseñar el estado futuro con IA nativa",
    items: [
      "Definir qué automatizan los agentes vs. qué aprueban los humanos",
      "Diseñar arquitectura de integración y rutas de escalamiento",
      "Establecer estándares de revisión de calidad y monitoreo",
      "Alinear sponsors ejecutivos y dueños operativos",
    ],
  },
  {
    title: "Fase 3 — Implementar en producción",
    items: [
      "Construir agentes, integraciones y orquestación de flujos",
      "Desplegar con acceso por roles y logging",
      "Operar en paralelo con el proceso existente cuando sea necesario",
      "Medir tiempo de ciclo, tasa de error y adopción",
    ],
  },
  {
    title: "Fase 4 — Escalar con patrones reutilizables",
    items: [
      "Documentar estándares de entrega y paquetes de conocimiento",
      "Expandir a funciones adyacentes con componentes compartidos",
      "Capacitar equipos internos para operar el sistema",
      "Establecer cadencia de mejora continua y gobernanza",
    ],
  },
];

const checklistEn: GuideSection[] = [
  {
    title: "Governance",
    items: [
      "Defined data boundaries and approved model providers",
      "Role-based access and approval workflows documented",
      "Audit logging for agent actions and human overrides",
      "Legal/compliance review completed for data handling",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Integration points mapped to systems of record",
      "Human-in-the-loop escalation paths defined",
      "Error handling and fallback behavior specified",
      "Monitoring and alerting for cost, latency, and quality",
    ],
  },
  {
    title: "Operations",
    items: [
      "Baseline KPIs measured before launch (cycle time, error rate, cost)",
      "Operations owners assigned and trained",
      "Runbook for exceptions and model updates",
      "Parallel operation plan during transition",
    ],
  },
  {
    title: "Scale readiness",
    items: [
      "Reusable components identified for adjacent workflows",
      "Knowledge transfer plan for internal teams",
      "90-day expansion roadmap with executive sponsor alignment",
    ],
  },
];

const checklistEs: GuideSection[] = [
  {
    title: "Gobernanza",
    items: [
      "Límites de datos y proveedores de modelos aprobados definidos",
      "Acceso por roles y flujos de aprobación documentados",
      "Logging de auditoría para acciones de agentes y overrides humanos",
      "Revisión legal/cumplimiento completada para manejo de datos",
    ],
  },
  {
    title: "Arquitectura",
    items: [
      "Puntos de integración mapeados a sistemas de registro",
      "Rutas de escalamiento human-in-the-loop definidas",
      "Manejo de errores y comportamiento de fallback especificado",
      "Monitoreo y alertas para costo, latencia y calidad",
    ],
  },
  {
    title: "Operaciones",
    items: [
      "KPIs base medidos antes del lanzamiento (tiempo de ciclo, error, costo)",
      "Dueños de operaciones asignados y capacitados",
      "Runbook para excepciones y actualizaciones de modelos",
      "Plan de operación en paralelo durante la transición",
    ],
  },
  {
    title: "Preparación para escala",
    items: [
      "Componentes reutilizables identificados para flujos adyacentes",
      "Plan de transferencia de conocimiento para equipos internos",
      "Hoja de ruta de expansión a 90 días con sponsor ejecutivo alineado",
    ],
  },
];

export function getResourceGuideSections(slug: string, locale: Locale): GuideSection[] | undefined {
  if (slug === "enterprise-ai-roadmap") {
    return locale === "es" ? roadmapEs : roadmapEn;
  }
  if (slug === "pilot-to-production-checklist") {
    return locale === "es" ? checklistEs : checklistEn;
  }
  return undefined;
}

export function getResourceDownloadPath(slug: string, locale: Locale): string | undefined {
  const files: Record<string, { en: string; es: string }> = {
    "enterprise-ai-roadmap": {
      en: "/downloads/enterprise-ai-roadmap.md",
      es: "/downloads/es/enterprise-ai-roadmap.md",
    },
    "pilot-to-production-checklist": {
      en: "/downloads/pilot-to-production-checklist.md",
      es: "/downloads/es/pilot-to-production-checklist.md",
    },
  };

  const entry = files[slug];
  if (!entry) return undefined;
  return locale === "es" ? entry.es : entry.en;
}

export function getResourcePrintPath(slug: string, locale: Locale): string | undefined {
  const files: Record<string, { en: string; es: string }> = {
    "enterprise-ai-roadmap": {
      en: "/downloads/print/enterprise-ai-roadmap.html",
      es: "/downloads/print/es/enterprise-ai-roadmap.html",
    },
    "pilot-to-production-checklist": {
      en: "/downloads/print/pilot-to-production-checklist.html",
      es: "/downloads/print/es/pilot-to-production-checklist.html",
    },
  };

  const entry = files[slug];
  if (!entry) return undefined;
  return locale === "es" ? entry.es : entry.en;
}