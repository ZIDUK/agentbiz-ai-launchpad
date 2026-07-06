import type { LucideIcon } from "lucide-react";
import { Bot, ClipboardList, Gauge, Shield, Workflow } from "lucide-react";

export interface TrainingCohort {
  id: string;
  dates: string;
  format: string;
  location: string;
}

export interface TrainingModule {
  title: string;
  description: string;
}

export interface TrainingCourse {
  id: string;
  number: 1 | 2;
  title: string;
  subtitle: string;
  audience: string;
  duration: string;
  format: string;
  highlights: string[];
  modules: TrainingModule[];
  prerequisite?: string;
  advanced?: boolean;
}

export interface TrainingArtifact {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TrainingProgram {
  slug: string;
  brandName: string;
  title: string;
  heroSubtitle: string;
  locationLabel: string;
  formatLabel: string;
  nextCohortLabel: string;
  nextCohortDate: string;
  coursesIntroTitle: string;
  coursesIntroBody: string;
  valuePropTitle: string;
  valuePropBody: string;
  artifactsTitle: string;
  artifactsSubtitle: string;
  courses: TrainingCourse[];
  artifacts: TrainingArtifact[];
  cohorts: TrainingCohort[];
}

const artifactsEn: TrainingArtifact[] = [
  {
    icon: Workflow,
    title: "Workflow redesign playbook",
    description:
      "A repeatable template to map current-state ops, identify agent-ready steps, and define production KPIs before build starts.",
  },
  {
    icon: ClipboardList,
    title: "Executive requirements pack",
    description:
      "Structured prompts and checklists for scoping AI initiatives, writing approval-ready briefs, and aligning stakeholders.",
  },
  {
    icon: Gauge,
    title: "ROI & ops metrics worksheet",
    description:
      "Baseline and target metrics for cycle time, cost per transaction, error rate, and capacity — tied to board-level language.",
  },
  {
    icon: Shield,
    title: "Governance starter kit",
    description:
      "Role-based access patterns, human-in-the-loop checkpoints, escalation paths, and audit trail requirements you can adapt.",
  },
  {
    icon: Bot,
    title: "Agent workflow patterns library",
    description:
      "Reference architectures for document intake, exception handling, cross-system handoffs, and ops queue automation.",
  },
];

const artifactsEs: TrainingArtifact[] = [
  {
    icon: Workflow,
    title: "Playbook de rediseño de flujos",
    description:
      "Plantilla repetible para mapear operaciones actuales, identificar pasos listos para agentes y definir KPIs de producción antes del build.",
  },
  {
    icon: ClipboardList,
    title: "Pack de requisitos ejecutivos",
    description:
      "Prompts y checklists para acotar iniciativas de IA, redactar briefs listos para aprobación y alinear stakeholders.",
  },
  {
    icon: Gauge,
    title: "Hoja de métricas ROI y operaciones",
    description:
      "Métricas base y objetivo de ciclo, costo por transacción, tasa de error y capacidad — en lenguaje de directorio.",
  },
  {
    icon: Shield,
    title: "Kit inicial de governance",
    description:
      "Patrones de acceso por rol, checkpoints human-in-the-loop, rutas de escalación y requisitos de auditoría adaptables.",
  },
  {
    icon: Bot,
    title: "Biblioteca de patrones agénticos",
    description:
      "Arquitecturas de referencia para intake documental, manejo de excepciones, handoffs entre sistemas y automatización de colas.",
  },
];

export const operationsLeadersProgramEn: TrainingProgram = {
  slug: "ai-for-operations-leaders",
  brandName: "The Agentic Operator",
  title: "AI for Operations Leaders",
  heroSubtitle:
    "2-day intensive workshops for COOs, VPs of Operations, and transformation leaders who need to direct AI on real workflows — not watch another demo.",
  locationLabel: "Virtual & select in-person cohorts",
  formatLabel: "2-day workshop · hands-on · executive cohort",
  nextCohortLabel: "Next cohort starts",
  nextCohortDate: "July 18, 2026",
  coursesIntroTitle: "Start with Course 1. Course 2 unlocks when you're ready.",
  coursesIntroBody:
    "Everyone begins with Course 1 — the hands-on foundation built around the operations work you own every week. Course 2 is the advanced level for leaders scaling AI across functions (unlocked after Course 1 or equivalent experience).",
  valuePropTitle: "AI won't replace operations leaders. Leaders who direct AI will replace the ones who don't.",
  valuePropBody:
    "Status updates, exception triage, cross-system coordination, and first-draft process documentation are exactly what governed AI now handles in minutes. That's leverage — if you're the one designing the workflow, not reacting to it.",
  artifactsTitle: "Concrete tools you can use Monday morning",
  artifactsSubtitle:
    "Not theory. Not slideware. Real artifacts, workflows, and governance patterns — tested against your own operational context during the workshop.",
  courses: [
    {
      id: "applied-ai-ops-leaders",
      number: 1,
      title: "Applied AI for Operations Leaders",
      subtitle: "Foundation · hands-on",
      audience:
        "COOs, VPs of Operations, transformation leads, and ops directors who want to direct AI on real deliverables. No prior AI experience required.",
      duration: "2 days",
      format: "Virtual or in-person cohort",
      highlights: [
        "Map one high-value workflow end-to-end",
        "Design agent-assisted steps with human oversight",
        "Build executive-ready ROI narratives",
        "Leave with reusable prompts and playbooks",
      ],
      modules: [
        {
          title: "From pilots to production ops",
          description: "Where enterprise AI fails — and the operating model shifts that fix it.",
        },
        {
          title: "Workflow mapping lab",
          description: "Document-to-decision and request-to-action patterns on your real process.",
        },
        {
          title: "Governed agent design",
          description: "Permissions, escalation, quality review, and audit trails from day one.",
        },
        {
          title: "Executive communication",
          description: "Briefs, KPIs, and stakeholder alignment that survive legal and finance review.",
        },
      ],
    },
    {
      id: "ai-governance-scale-ops",
      number: 2,
      title: "AI Governance & Scale for Operations Leaders",
      subtitle: "Advanced · unlock after Course 1",
      audience:
        "Senior ops leaders scoping multi-workflow AI programs, sitting in governance forums, and telling the C-suite what's realistic to ship in production.",
      duration: "2 days",
      format: "Virtual or in-person cohort",
      advanced: true,
      prerequisite: "Complete Course 1 or demonstrate equivalent production AI experience.",
      highlights: [
        "Multi-workflow rollout sequencing",
        "Operating model and center-of-excellence design",
        "Vendor build vs. buy decision frameworks",
        "Board-ready transformation roadmaps",
      ],
      modules: [
        {
          title: "Portfolio prioritization",
          description: "Score workflows by ROI, risk, integration complexity, and change management load.",
        },
        {
          title: "Governance at scale",
          description: "Policies, model approval, data boundaries, and monitoring across teams.",
        },
        {
          title: "Team enablement",
          description: "Upskill ops managers and analysts to run agent workflows sustainably.",
        },
        {
          title: "Scale playbook",
          description: "Reusable patterns, knowledge packs, and expansion beyond the first workflow.",
        },
      ],
    },
  ],
  artifacts: artifactsEn,
  cohorts: [
    {
      id: "2026-07-virtual",
      dates: "July 18–19, 2026",
      format: "Virtual",
      location: "Live online · Americas-friendly timezone",
    },
    {
      id: "2026-08-virtual",
      dates: "August 22–23, 2026",
      format: "Virtual",
      location: "Live online · EMEA-friendly timezone",
    },
    {
      id: "2026-09-miami",
      dates: "September 12–13, 2026",
      format: "In-person",
      location: "Miami, FL",
    },
  ],
};

export const operationsLeadersProgramEs: TrainingProgram = {
  slug: "ai-for-operations-leaders",
  brandName: "The Agentic Operator",
  title: "IA para líderes de operaciones",
  heroSubtitle:
    "Workshops intensivos de 2 días para COOs, VPs de Operaciones y líderes de transformación que necesitan dirigir IA en flujos reales — no ver otra demo.",
  locationLabel: "Virtual y cohortes presenciales selectas",
  formatLabel: "Workshop 2 días · hands-on · cohorte ejecutiva",
  nextCohortLabel: "Próxima cohorte inicia",
  nextCohortDate: "18 de julio de 2026",
  coursesIntroTitle: "Empiece con el Curso 1. El Curso 2 se desbloquea cuando esté listo.",
  coursesIntroBody:
    "Todos comienzan con el Curso 1 — la base práctica construida sobre el trabajo de operaciones que usted lidera cada semana. El Curso 2 es el nivel avanzado para escalar IA entre funciones (se desbloquea tras el Curso 1 o experiencia equivalente).",
  valuePropTitle:
    "La IA no reemplazará a los líderes de operaciones. Los que dirijan IA reemplazarán a los que no lo hagan.",
  valuePropBody:
    "Actualizaciones de estado, triage de excepciones, coordinación entre sistemas y documentación de procesos son exactamente lo que la IA gobernada resuelve en minutos. Eso es ventaja — si usted diseña el flujo, no solo reacciona a él.",
  artifactsTitle: "Herramientas concretas para el lunes por la mañana",
  artifactsSubtitle:
    "Sin teoría abstracta ni slideware. Artefactos, flujos y patrones de governance probados contra su contexto operativo durante el workshop.",
  courses: [
    {
      id: "applied-ai-ops-leaders",
      number: 1,
      title: "IA aplicada para líderes de operaciones",
      subtitle: "Fundación · hands-on",
      audience:
        "COOs, VPs de Operaciones, líderes de transformación y directores de ops que quieren dirigir IA en entregables reales. No se requiere experiencia previa en IA.",
      duration: "2 días",
      format: "Cohorte virtual o presencial",
      highlights: [
        "Mapear un flujo de alto valor de punta a punta",
        "Diseñar pasos asistidos por agentes con supervisión humana",
        "Construir narrativas de ROI listas para ejecutivos",
        "Salir con prompts y playbooks reutilizables",
      ],
      modules: [
        {
          title: "De pilotos a operaciones en producción",
          description: "Dónde falla la IA enterprise — y los cambios de modelo operativo que lo corrigen.",
        },
        {
          title: "Lab de mapeo de flujos",
          description: "Patrones documento-a-decisión y solicitud-a-acción sobre su proceso real.",
        },
        {
          title: "Diseño de agentes gobernados",
          description: "Permisos, escalación, revisión de calidad y auditoría desde el día uno.",
        },
        {
          title: "Comunicación ejecutiva",
          description: "Briefs, KPIs y alineación de stakeholders que sobreviven legal y finanzas.",
        },
      ],
    },
    {
      id: "ai-governance-scale-ops",
      number: 2,
      title: "Governance y escala de IA para líderes de operaciones",
      subtitle: "Avanzado · desbloqueo tras Curso 1",
      audience:
        "Líderes senior de ops que acotan programas multi-flujo, participan en governance y comunican al C-suite qué es realista llevar a producción.",
      duration: "2 días",
      format: "Cohorte virtual o presencial",
      advanced: true,
      prerequisite: "Completar Curso 1 o demostrar experiencia equivalente en IA en producción.",
      highlights: [
        "Secuenciación de despliegue multi-flujo",
        "Diseño de modelo operativo y centro de excelencia",
        "Frameworks build vs. buy con proveedores",
        "Roadmaps de transformación listos para directorio",
      ],
      modules: [
        {
          title: "Priorización de portafolio",
          description: "Puntuar flujos por ROI, riesgo, complejidad de integración y carga de cambio.",
        },
        {
          title: "Governance a escala",
          description: "Políticas, aprobación de modelos, límites de datos y monitoreo entre equipos.",
        },
        {
          title: "Enablement de equipos",
          description: "Capacitar managers y analistas de ops para operar flujos agénticos de forma sostenible.",
        },
        {
          title: "Playbook de escala",
          description: "Patrones reutilizables, knowledge packs y expansión más allá del primer flujo.",
        },
      ],
    },
  ],
  artifacts: artifactsEs,
  cohorts: operationsLeadersProgramEn.cohorts.map((c) => ({
    ...c,
    format: c.format === "Virtual" ? "Virtual" : "Presencial",
    location:
      c.id === "2026-07-virtual"
        ? "En vivo online · zona horaria Américas"
        : c.id === "2026-08-virtual"
          ? "En vivo online · zona horaria EMEA"
          : "Miami, FL",
  })),
};

export const trainingProgramsEn = [operationsLeadersProgramEn];
export const trainingProgramsEs = [operationsLeadersProgramEs];

export function getTrainingPrograms(locale: "en" | "es") {
  return locale === "es" ? trainingProgramsEs : trainingProgramsEn;
}

export function getTrainingBySlug(slug: string, locale: "en" | "es") {
  return getTrainingPrograms(locale).find((program) => program.slug === slug);
}
