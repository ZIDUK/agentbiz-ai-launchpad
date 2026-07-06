import type { Locale } from "@/i18n/types";

export interface CaseStudyContent {
  readTime: string;
  title: string;
  lead: string;
  situation: string;
  constraint: string;
  constraintBullets?: string[];
  approachIntro?: string;
  approachItems: string[];
  resultsMetrics: { value: string; label: string }[];
  whatMadeItStick?: string;
  ctaTitle: string;
  ctaBody: string;
}

const enterpriseOpsEn: CaseStudyContent = {
  readTime: "8 min read",
  title: "Enterprise back-office automation: from 12-day cycles to 4",
  lead: "How a mid-market B2B services company deployed governed AI agents across order processing, vendor onboarding, and exception handling — without replacing their ERP.",
  situation:
    "A 400-person B2B services organization processed 2,800+ vendor and client transactions monthly across NetSuite, Salesforce, and email-driven exception queues. Operations teams spent an estimated 45% of capacity on document review, status updates, and manual handoffs between systems.",
  constraint:
    "Leadership had run three AI pilots — chatbots and RPA scripts — that never reached production. Compliance required full audit trails, role-based approvals, and no autonomous changes to financial records without human sign-off.",
  constraintBullets: [
    "ERP replacement was off the table for 18+ months",
    "Data lived in PDFs, email threads, and three systems of record",
    "Internal engineering was fully allocated to product roadmap",
  ],
  approachIntro:
    "AgentBiz scoped a single production workflow: vendor onboarding document intake → validation → ERP staging → finance approval. The architecture included:",
  approachItems: [
    "Document intelligence agents extracting fields from W-9s, contracts, and banking forms",
    "Rules engine for validation with automatic escalation on low-confidence extractions",
    "Integration layer writing staged records to NetSuite with full request/response logging",
    "Operations dashboard for queue management and SLA tracking",
  ],
  resultsMetrics: [
    { value: "67%", label: "Cycle time reduction" },
    { value: "41%", label: "Manual review hours saved" },
    { value: "99.2%", label: "Extraction accuracy (approved)" },
    { value: "0", label: "Compliance incidents" },
  ],
  whatMadeItStick:
    "The program succeeded because it targeted one measurable workflow, embedded governance from architecture day one, and kept humans in control of exceptions. Phase two expanded to order exception management using the same agent patterns and integration standards.",
  ctaTitle: "Map your first production workflow",
  ctaBody: "Start with the process that costs the most manual hours — not the flashiest AI demo.",
};

const enterpriseOpsEs: CaseStudyContent = {
  readTime: "8 min de lectura",
  title: "Automatización de back-office enterprise: de ciclos de 12 días a 4",
  lead: "Cómo una empresa B2B mid-market desplegó agentes de IA gobernados en procesamiento de órdenes, onboarding de proveedores y manejo de excepciones — sin reemplazar su ERP.",
  situation:
    "Una organización B2B de 400 personas procesaba más de 2,800 transacciones mensuales de proveedores y clientes entre NetSuite, Salesforce y colas de excepción por email. Los equipos de operaciones dedicaban cerca del 45% de su capacidad a revisión de documentos, actualizaciones de estado y handoffs manuales entre sistemas.",
  constraint:
    "La dirección había ejecutado tres pilotos de IA — chatbots y scripts RPA — que nunca llegaron a producción. Cumplimiento exigía trazas de auditoría completas, aprobaciones por rol y ningún cambio autónomo en registros financieros sin firma humana.",
  constraintBullets: [
    "Reemplazo del ERP descartado por 18+ meses",
    "Datos en PDFs, hilos de email y tres sistemas de registro",
    "Ingeniería interna 100% asignada al roadmap de producto",
  ],
  approachIntro:
    "AgentBiz acotó un único flujo en producción: intake de documentos de onboarding de proveedores → validación → staging en ERP → aprobación de finanzas. La arquitectura incluyó:",
  approachItems: [
    "Agentes de inteligencia documental extrayendo campos de W-9, contratos y formularios bancarios",
    "Motor de reglas para validación con escalamiento automático en extracciones de baja confianza",
    "Capa de integración escribiendo registros staged en NetSuite con logging completo",
    "Dashboard de operaciones para gestión de colas y seguimiento de SLA",
  ],
  resultsMetrics: [
    { value: "67%", label: "Reducción de tiempo de ciclo" },
    { value: "41%", label: "Horas de revisión manual ahorradas" },
    { value: "99.2%", label: "Precisión de extracción (aprobada)" },
    { value: "0", label: "Incidentes de cumplimiento" },
  ],
  whatMadeItStick:
    "El programa tuvo éxito porque apuntó a un flujo medible, incorporó gobernanza desde el día uno de arquitectura y mantuvo a humanos en control de excepciones. La fase dos expandió a manejo de excepciones de órdenes con los mismos patrones de agentes.",
  ctaTitle: "Mapee su primer flujo en producción",
  ctaBody: "Comience con el proceso que más horas manuales cuesta — no con la demo de IA más llamativa.",
};

const healthcareEs: CaseStudyContent = {
  readTime: "7 min de lectura",
  title: "Automatización de autorización previa: 38% más rápido con agentes gobernados",
  lead: "Una organización regional de servicios de salud redujo la carga administrativa en flujos de autorización previa manteniendo controles HIPAA y supervisión clínica.",
  situation:
    "Personal clínico y administrativo procesaba más de 1,200 solicitudes de autorización previa al mes entre portales de pagadores, fax y adjuntos en EHR. El tiempo promedio de respuesta era 9.2 días con reprocesos frecuentes por documentación faltante.",
  constraint:
    "Cualquier automatización debía preservar aprobación clínica para decisiones clínicas, mantener límites de PHI y producir logs listos para auditoría de cumplimiento.",
  approachItems: [
    "Agentes de intake clasificaban solicitudes y extraían campos requeridos de notas clínicas",
    "Reglas de validación marcaban documentación faltante específica del pagador antes del envío",
    "Dashboard de colas para staff con alertas SLA y escalamiento a clínicos",
    "Integración con sistema de citas para seguimiento cuando la autorización se retrasaba",
  ],
  resultsMetrics: [
    { value: "38%", label: "Respuesta más rápida" },
    { value: "44%", label: "Horas administrativas ahorradas" },
    { value: "22%", label: "Menos ciclos de reproceso" },
    { value: "100%", label: "Supervisión clínica retenida" },
  ],
  ctaTitle: "Explore entrega de IA en healthcare",
  ctaBody: "Vea cómo abordamos automatización gobernada en entornos de salud regulados.",
};

const healthcareEn: CaseStudyContent = {
  readTime: "7 min read",
  title: "Prior authorization automation: 38% faster turnaround with governed agents",
  lead: "A regional healthcare services organization reduced administrative burden on prior authorization workflows while maintaining HIPAA-aware controls and clinician oversight.",
  situation:
    "Clinical and administrative staff processed 1,200+ prior authorization requests monthly across payer portals, fax, and EHR attachments. Average turnaround was 9.2 days with frequent rework due to missing documentation.",
  constraint:
    "Any automation had to preserve clinician approval for clinical decisions, maintain PHI boundaries, and produce audit-ready logs for compliance reviews.",
  approachItems: [
    "Intake agents classified requests and extracted required fields from clinical notes",
    "Validation rules flagged missing payer-specific documentation before submission",
    "Queue dashboard for staff with SLA alerts and escalation to clinicians",
    "Integration with scheduling system for follow-up appointments when auth delayed",
  ],
  resultsMetrics: [
    { value: "38%", label: "Faster turnaround" },
    { value: "44%", label: "Admin hours saved" },
    { value: "22%", label: "Fewer rework cycles" },
    { value: "100%", label: "Clinician oversight retained" },
  ],
  ctaTitle: "Explore healthcare AI delivery",
  ctaBody: "See how we approach governed automation in regulated healthcare environments.",
};

export function getEnterpriseOpsCaseStudy(locale: Locale): CaseStudyContent {
  return locale === "es" ? enterpriseOpsEs : enterpriseOpsEn;
}

export function getHealthcareCaseStudy(locale: Locale): CaseStudyContent {
  return locale === "es" ? healthcareEs : healthcareEn;
}
