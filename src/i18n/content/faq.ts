import type { Locale } from "@/i18n/types";

export interface FaqItem {
  question: string;
  answer: string;
}

const faqEn: FaqItem[] = [
  {
    question: "How is AgentBiz different from a generic AI dev shop?",
    answer:
      "We focus on production workflows inside your operating model — integrations, governance, human-in-the-loop, and measurable KPIs — not isolated chatbots or demos that never reach operations.",
  },
  {
    question: "Do you replace our internal engineering team?",
    answer:
      "No. Staff augmentation adds people. An AI-Native POD of Agentiers embeds execution discipline to ship one workflow to production, transfer runbooks and patterns, and leave capability your organization owns — not rented headcount.",
  },
  {
    question: "How do you handle compliance and data boundaries?",
    answer:
      "Governance is designed upfront: role-based access, audit logs, approved model providers, data residency constraints, and escalation paths for exceptions. We align with your legal and security review process.",
  },
  {
    question: "What does a typical first engagement look like?",
    answer:
      "AI-Native PODs: 6–10 weeks on one high-volume workflow with baseline KPIs, production deployment, and a roadmap to adjacent processes. Many clients start with document-to-decision or exception-handling workflows.",
  },
  {
    question: "How do you price enterprise AI work?",
    answer:
      "Pricing is package-based — AI-Native PODs, AgentOps Factory, or Function Modernization. We scope against defined outcomes and timeline, not open-ended experimentation or staff hours.",
  },
  {
    question: "Do we own the code and IP?",
    answer:
      "Yes. 100%. You own the code, prompts, integrations, documentation, and runbooks. We build your operating capability — we do not rent it to you.",
  },
];

const faqEs: FaqItem[] = [
  {
    question: "¿En qué se diferencia AgentBiz de una dev shop genérica de IA?",
    answer:
      "Nos enfocamos en flujos en producción dentro de su modelo operativo — integraciones, gobernanza, human-in-the-loop y KPIs medibles — no en chatbots aislados o demos que nunca llegan a operaciones.",
  },
  {
    question: "¿Reemplazan a nuestro equipo de ingeniería interno?",
    answer:
      "No. Staff augmentation suma personas. Un AI-Native POD de Agentiers aporta disciplina de ejecución para llevar un flujo a producción, transferir runbooks y patrones, y dejar capacidad que su organización posee — no headcount rentado.",
  },
  {
    question: "¿Cómo manejan cumplimiento y límites de datos?",
    answer:
      "La gobernanza se diseña desde el inicio: acceso por roles, logs de auditoría, proveedores de modelos aprobados, restricciones de residencia de datos y rutas de escalación para excepciones.",
  },
  {
    question: "¿Cómo es un primer engagement típico?",
    answer:
      "AI-Native PODs: 6–10 semanas en un flujo de alto volumen con KPIs base, despliegue en producción y hoja de ruta a procesos adyacentes. Muchos clientes empiezan con flujos documento-a-decisión o manejo de excepciones.",
  },
  {
    question: "¿Cómo precian el trabajo de IA enterprise?",
    answer:
      "El precio es por paquete — AI-Native PODs, AgentOps Factory o Function Modernization. Cotizamos contra resultados y cronograma definidos, no experimentación abierta ni horas de staff.",
  },
  {
    question: "¿Poseemos el código y la IP?",
    answer:
      "Sí. 100%. Usted posee el código, prompts, integraciones, documentación y runbooks. Construimos su capacidad operativa — no se la rentamos.",
  },
];

export function getExecutiveFaq(locale: Locale): FaqItem[] {
  return locale === "es" ? faqEs : faqEn;
}
