export type { ExecutivePainPoint } from "@/data/executive-content";

import type { ExecutivePainPoint } from "@/data/executive-content";

export const executivePainPointsEs: ExecutivePainPoint[] = [
  {
    id: "pilot-trap",
    title: "La trampa del piloto",
    symptom: "Decenas de experimentos de IA sin impacto en producción sobre ingresos u operaciones.",
    solution:
      "Comience con un flujo de alto valor, defina KPIs de producción desde el inicio y despliegue con gobernanza — no otro demo.",
    category: "delivery",
  },
  {
    id: "governance-paralysis",
    title: "Parálisis por gobernanza",
    symptom: "Legal y cumplimiento bloquean proyectos de IA porque los controles se diseñaron después del hecho.",
    solution:
      "Integre aprobaciones, auditoría, acceso basado en roles y revisión con humano en el loop desde el día uno de la arquitectura.",
    category: "governance",
  },
  {
    id: "integration-debt",
    title: "Pesadillas de integración",
    symptom: "Las herramientas de IA quedan fuera de CRM, ERP e ITSM — generando más trabajo manual, no menos.",
    solution:
      "Diseñe agentes como parte del tejido de sus sistemas con integraciones API-first y rutas de escalamiento claras.",
    category: "delivery",
  },
  {
    id: "shadow-ai",
    title: "Proliferación de IA shadow",
    symptom: "Los equipos adoptan ChatGPT y herramientas no gobernadas, creando riesgo de fuga de IP y datos.",
    solution:
      "Proporcione flujos de IA empresarial gobernados con modelos aprobados, límites de datos y monitoreo.",
    category: "governance",
  },
  {
    id: "roi-invisibility",
    title: "ROI invisible",
    symptom: "El liderazgo no puede vincular el gasto en IA con métricas operativas que el board entiende.",
    solution:
      "Defina KPIs de línea base por flujo — tiempo de ciclo, costo por transacción, tasa de error — antes de iniciar la construcción.",
    category: "cost",
  },
  {
    id: "talent-bottleneck",
    title: "Cuello de botella de talento",
    symptom: "Los ciclos de contratación frenan la entrega mientras competidores despliegan sistemas de IA gobernados más rápido.",
    solution:
      "Integre unidades de entrega nativas en IA con liderazgo de ingeniería senior y transferencia de conocimiento incluida.",
    category: "scale",
  },
  {
    id: "vendor-lockin",
    title: "Vendor lock-in",
    symptom: "Las funciones de IA SaaS lo atrapan en pricing por seat sin ownership de código ni modelos.",
    solution:
      "Construya sistemas personalizados que su organización posea — código, integraciones y playbooks operativos incluidos.",
    category: "cost",
  },
  {
    id: "legacy-drag",
    title: "Arrastre de sistemas legacy",
    symptom: "Flujos críticos aún dependen de email, PDFs y hojas de cálculo entre sistemas.",
    solution:
      "Priorice flujos documento-a-decisión — mayor ROI con límites claros de automatización.",
    category: "delivery",
  },
  {
    id: "change-resistance",
    title: "Resistencia al cambio",
    symptom: "Los equipos de operaciones desconfían de la IA porque se impuso sin rediseño de flujos.",
    solution:
      "Co-diseñe procesos futuros con operadores; la IA maneja volumen, los humanos retienen decisiones de criterio.",
    category: "scale",
  },
  {
    id: "cost-unpredictability",
    title: "Impredecibilidad de costos",
    symptom: "Los costos de LLM y cloud se disparan sin visibilidad ni guardrails.",
    solution:
      "Implemente monitoreo de uso, enrutamiento de modelos y controles de costo como parte de la arquitectura de producción.",
    category: "cost",
  },
];
