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
      "No. We embed with your team, transfer patterns and runbooks, and build systems your organization can own. Staff augmentation and co-delivery are common starting points.",
  },
  {
    question: "How do you handle compliance and data boundaries?",
    answer:
      "Governance is designed upfront: role-based access, audit logs, approved model providers, data residency constraints, and escalation paths for exceptions. We align with your legal and security review process.",
  },
  {
    question: "What does a typical first engagement look like?",
    answer:
      "A 4–8 week pilot on one high-volume workflow with baseline KPIs, production deployment, and a roadmap to adjacent processes. Many clients start with document-to-decision or exception-handling workflows.",
  },
  {
    question: "How do you price enterprise AI work?",
    answer:
      "Pricing depends on engagement model — fixed-scope project, managed pod, or staff augmentation. We scope against defined outcomes and timeline, not open-ended experimentation.",
  },
  {
    question: "What is the relationship between AgentBiz and Agentic Dream?",
    answer:
      "Agentic Dream focuses on AI-native operating strategy; AgentBiz is the engineering and delivery arm that ships governed systems to production. Many clients engage both for strategy and execution.",
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
      "No. Nos integramos con su equipo, transferimos patrones y runbooks, y construimos sistemas que su organización puede poseer. Staff augmentation y co-entrega son puntos de partida comunes.",
  },
  {
    question: "¿Cómo manejan cumplimiento y límites de datos?",
    answer:
      "La gobernanza se diseña desde el inicio: acceso por roles, logs de auditoría, proveedores de modelos aprobados, restricciones de residencia de datos y rutas de escalación para excepciones.",
  },
  {
    question: "¿Cómo es un primer engagement típico?",
    answer:
      "Un piloto de 4–8 semanas en un flujo de alto volumen con KPIs base, despliegue en producción y hoja de ruta a procesos adyacentes. Muchos clientes empiezan con flujos documento-a-decisión o manejo de excepciones.",
  },
  {
    question: "¿Cómo precian el trabajo de IA enterprise?",
    answer:
      "El precio depende del modelo de engagement — proyecto de alcance fijo, pod gestionado o staff augmentation. Cotizamos contra resultados y cronograma definidos, no experimentación abierta.",
  },
  {
    question: "¿Cuál es la relación entre AgentBiz y Agentic Dream?",
    answer:
      "Agentic Dream se enfoca en estrategia operativa AI-native; AgentBiz es el brazo de ingeniería y entrega que lleva sistemas gobernados a producción. Muchos clientes contratan ambos para estrategia y ejecución.",
  },
];

export function getExecutiveFaq(locale: Locale): FaqItem[] {
  return locale === "es" ? faqEs : faqEn;
}
