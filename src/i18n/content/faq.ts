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
      "No. Staff augmentation adds people. We change how the work runs, then put AI only on what your operation can actually own — and we transfer runbooks and patterns so capability stays with your organization.",
  },
  {
    question: "How do you handle compliance and data boundaries?",
    answer:
      "Governance is designed upfront: role-based access, audit logs, approved model providers, data residency constraints, and escalation paths for exceptions. We align with your legal and security review process.",
  },
  {
    question: "What does a typical first engagement look like?",
    answer:
      "Most clients start with the Agentic Readiness Assessment: map the operation, cut the waste, and leave a clear path. When they are ready to change how the work runs, that is the Agentic Operations Build. If they need a system, not another workshop, that is the Custom Delivery Pod.",
  },
  {
    question: "How do you price enterprise AI work?",
    answer:
      "Pricing is package-based — Assessment, Build, or Pod. We scope against defined outcomes and timeline, not open-ended experimentation or staff hours.",
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
      "No. Staff augmentation suma personas. Nosotros cambiamos cómo corre el trabajo y ponemos IA solo en lo que su operación puede poseer — y transferimos runbooks y patrones para que la capacidad se quede en su organización.",
  },
  {
    question: "¿Cómo manejan cumplimiento y límites de datos?",
    answer:
      "La gobernanza se diseña desde el inicio: acceso por roles, logs de auditoría, proveedores de modelos aprobados, restricciones de residencia de datos y rutas de escalación para excepciones.",
  },
  {
    question: "¿Cómo es un primer engagement típico?",
    answer:
      "La mayoría empieza con el Agentic Readiness Assessment: mapear la operación, cortar el desperdicio y dejar un camino claro. Cuando están listos para cambiar cómo corre el trabajo, eso es el Agentic Operations Build. Si necesitan un sistema, no otro taller, eso es el Custom Delivery Pod.",
  },
  {
    question: "¿Cómo precian el trabajo de IA enterprise?",
    answer:
      "El precio es por paquete — Assessment, Build o Pod. Cotizamos contra resultados y cronograma definidos, no experimentación abierta ni horas de staff.",
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
