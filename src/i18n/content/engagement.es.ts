import { Layers, Rocket, Wrench } from "lucide-react";

export type { EngagementDetail } from "@/data/engagement-content";

import type { EngagementDetail } from "@/data/engagement-content";

export const engagementDetailsEs: EngagementDetail[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    shortDescription:
      "Su motor de ejecución para llevar operaciones AI-Native a producción — con KPIs, gobernanza y transferencia de ownership.",
    icon: Rocket,
    headline: "Su motor de ejecución para operaciones AI-Native en producción",
    description:
      "Los AI-Native PODs son unidades de ejecución integradas por Agentiers — dedicadas a un propósito: llevar un flujo crítico de negocio a producción con IA gobernada — con ritmo enterprise predecible. Se integran a su entorno operativo, se adaptan a sus sistemas y prioridades, y transfieren ownership para que optimice costo y ciclo — no headcount. Los humanos dirigen. La IA acelera. La entrega se convierte en capacidad que usted conserva.",
    bestFor: [
      "Necesita fuerza de ejecución ya — no otro piloto o deck de estrategia",
      "Un proceso de alto volumen quema costo, tiempo o retrabajo cada semana",
      "La contratación o capacidad interna no alcanza la demanda operativa",
      "La dirección quiere outcomes medibles y ownership total de la IP",
      "Está listo para modernizar una función con un flujo AI-Native en vivo",
    ],
    deliverables: [
      "Un flujo crítico en producción con KPIs definidos",
      "Agentes gobernados, integraciones y controles human-in-the-loop",
      "Arquitectura, runbooks y documentación operativa de su propiedad",
      "Transferencia 100% de IP — código, prompts, flujos de datos y playbooks",
      "Métricas base y ruta hacia el siguiente flujo",
      "Planificación y cadencia de entrega transparentes para sponsors",
    ],
    timeline: "6–10 semanas típicas para el primer flujo en producción",
    engagementSteps: [
      {
        title: "Integrar y alinear",
        description:
          "Los Agentiers se integran a su entorno, mapean el flujo objetivo, sistemas, restricciones y métricas de éxito con sus líderes de ops e ingeniería.",
      },
      {
        title: "Diseñar con gobernanza",
        description:
          "Defina el estado futuro AI-Native — qué hace la IA, qué aprueban los humanos, integraciones, auditoría e hitos de entrega.",
      },
      {
        title: "Construir, probar y salir a vivo",
        description:
          "Despliegue el flujo a producción con monitoreo, controles de calidad y rutas de escalamiento — no una demo en sandbox.",
      },
      {
        title: "Transferir ownership",
        description:
          "Entregue runbooks, patrones y conocimiento operativo para que su equipo opere lo que construyeron los Agentiers — y el siguiente ciclo arranque más fuerte.",
      },
    ],
  },
  {
    slug: "agentops-factory",
    title: "AgentOps Factory",
    shortDescription:
      "Transfiera patrones, estándares AgentOps y modelos operativos para que su equipo escale más allá del primer flujo.",
    icon: Layers,
    headline: "Escale operaciones con IA nativa sin otro ejército de contratistas",
    description:
      "Después del primer logro en producción, el cuello de botella suele ser capacidad — no más headcount. Instalamos patrones reutilizables, estándares de entrega y rituales operativos para que su organización posea la siguiente ola de flujos.",
    bestFor: [
      "Organizaciones listas para expandirse más allá de un solo flujo",
      "Equipos internos que necesitan patrones AgentOps y runbooks",
      "Líderes que quieren ownership y anti lock-in",
      "Programas que pasan de cultura de piloto a modelo operativo",
    ],
    deliverables: [
      "Patrones reutilizables de flujos y agentes",
      "Estándares AgentOps, runbooks y rutas de escalamiento",
      "Enablement interno y pairing con su equipo",
      "Roadmap para los siguientes 2–3 flujos gobernados",
    ],
    timeline: "8–16 semanas después del primer flujo en producción (o en paralelo)",
    engagementSteps: [
      {
        title: "Línea base de capacidad",
        description: "Evalúe skills, tooling y gaps operativos tras el primer logro.",
      },
      {
        title: "Biblioteca de patrones",
        description: "Codifique diseños, controles y plantillas de integración reutilizables.",
      },
      {
        title: "Enablement",
        description: "Capacite y haga pairing con su equipo en flujos reales de expansión.",
      },
      {
        title: "Ritmo operativo",
        description: "Instale revisiones, cadencia de KPIs y gobernanza de escala.",
      },
    ],
  },
  {
    slug: "function-modernization",
    title: "Function Modernization",
    shortDescription:
      "Modernice una función de negocio — Ops, Finanzas, Soporte — con flujos AI-Native a medida de su realidad.",
    icon: Wrench,
    headline: "Modernice funciones de negocio con sistemas AI-Native que encajan en su realidad",
    description:
      "Function Modernization reconstruye cómo opera un área de negocio — no pegando un chatbot, sino rediseñando los flujos donde se acumula costo, ciclo y retrabajo. Los Agentiers mapean la función, despliegan sistemas AI-Native gobernados en producción y dejan a su equipo operando una nueva línea base medible.",
    bestFor: [
      "Funciones de Ops, Finanzas, Soporte o Supply Chain atrapadas en trabajo manual",
      "Líderes que necesitan bajar costo y ciclo primero en un área",
      "Organizaciones listas para rediseñar una función alrededor de IA — no esparcir tools",
      "Sponsors que quieren impacto en producción con ownership total de lo entregado",
    ],
    deliverables: [
      "Mapa del estado actual y diseño del estado futuro AI-Native de la función",
      "Flujos en producción con agentes gobernados y supervisión humana",
      "Integraciones a los sistemas que la función ya usa",
      "Línea base de KPIs y playbooks operativos que su equipo posee",
    ],
    timeline: "8–16 semanas típicas para modernizar una función enfocada",
    engagementSteps: [
      {
        title: "Evaluar la función",
        description: "Mapee procesos, handoffs, sistemas y dónde se concentra el costo o la demora.",
      },
      {
        title: "Rediseñar para ops AI-Native",
        description: "Defina qué ejecuta la IA, qué aprueban los humanos y cómo se mide el valor.",
      },
      {
        title: "Implementar en producción",
        description: "Despliegue flujos gobernados en el entorno operativo real.",
      },
      {
        title: "Estabilizar y transferir",
        description: "Confirme KPIs, entregue runbooks y planifique la expansión a funciones adyacentes.",
      },
    ],
  },
];
