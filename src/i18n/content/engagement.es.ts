import { Layers, Rocket, Wrench } from "lucide-react";

export type { EngagementDetail } from "@/data/engagement-content";

import type { EngagementDetail } from "@/data/engagement-content";

export const engagementDetailsEs: EngagementDetail[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    eyebrow: "Ejecución",
    shortDescription:
      "Su motor de ejecución para llevar operaciones AI-Native a producción — con KPIs, gobernanza y transferencia de ownership.",
    icon: Rocket,
    headline: "Su motor de ejecución para operaciones AI-Native en producción",
    description:
      "Los AI-Native PODs son unidades de ejecución integradas por Agentiers — dedicadas a un propósito: llevar un flujo crítico de negocio a producción con IA gobernada — con ritmo enterprise predecible. Se integran a su entorno operativo, se adaptan a sus sistemas y prioridades, y transfieren ownership para que optimice costo y ciclo — no headcount.",
    whatItIs:
      "Un AI-Native POD es una unidad de ejecución cross-funcional integrada en su entorno. Los Agentiers aportan decisión humana, planning→review acelerado con IA, disciplina de entrega enterprise y los patrones de su modelo operativo — músculo de ejecución para la era de la IA, no headcount alquilado.",
    principle: "Los humanos dirigen. La IA acelera. La entrega se convierte en capacidad que usted conserva.",
    capabilities: [
      {
        title: "Planning acelerado con IA",
        description:
          "Requisitos interpretados, analizados y estructurados con asistencia de IA — ciclos de scoping más cortos sin perder gobernanza.",
      },
      {
        title: "Diseño aumentado con IA",
        description:
          "Esqueletos de sistema, mapeos de datos y diagramas de arquitectura en minutos, validados con sus arquitectos.",
      },
      {
        title: "Build potenciado con IA",
        description:
          "Código, APIs, infraestructura e implementaciones multi-archivo con velocidad, bajo sus estándares y gates de review.",
      },
      {
        title: "Testing impulsado por IA",
        description:
          "Generación de tests, detección de edge cases y cobertura de regresión antes de producción.",
      },
      {
        title: "Code review asistido por IA",
        description:
          "Primera pasada de review para consistencia y riesgo estructural — los humanos siguen dueños del merge y la accountability.",
      },
    ],
    howInside: [
      "Integrados directamente en su entorno operativo y tooling",
      "Alineados con su roadmap estratégico y sponsors",
      "Operando bajo estándares y KPIs compartidos",
      "Soportados por una base de conocimiento viva de lo entregado",
      "Ejecutando con cadencia predecible y quality gates",
    ],
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
    outcomes: [
      "Un motor de ejecución fiable para el siguiente flujo",
      "Velocidad de entrega estable que sponsors pueden proyectar",
      "Calidad de sistema consistente con controles auditables",
      "Patrones unificados que su equipo puede reutilizar",
      "Transparencia en planning y entrega",
      "Capacidad que se acumula dentro de su organización",
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
    faqs: [
      {
        question: "¿Qué es un AI-Native POD?",
        answer:
          "Una unidad de ejecución integrada por Agentiers, construida para llevar un flujo AI-Native gobernado a producción con ritmo enterprise — y luego transferir ownership a su equipo.",
      },
      {
        question: "¿En qué se diferencia del staff augmentation?",
        answer:
          "El staff aug agrega personas. Un POD integra una unidad operativa completa con gobernanza, tools, disciplina de entrega AI-Native y mandato de transferencia de ownership.",
      },
      {
        question: "¿Quién es dueño de la IP?",
        answer:
          "Usted. Posee el 100% del código, prompts, flujos de datos, runbooks y documentación. Construimos capacidad que se queda — no se la alquilamos.",
      },
    ],
  },
  {
    slug: "agentops-factory",
    title: "AgentOps Factory",
    eyebrow: "Escala",
    shortDescription:
      "Transfiera patrones, estándares AgentOps y modelos operativos para que su equipo escale más allá del primer flujo.",
    icon: Layers,
    headline: "Escale operaciones con IA nativa sin otro ejército de contratistas",
    description:
      "Después del primer logro en producción, el cuello de botella suele ser capacidad — no más headcount. Instalamos patrones reutilizables, estándares de entrega y rituales operativos para que su organización posea la siguiente ola de flujos.",
    whatItIs:
      "AgentOps Factory es la capa operativa que convierte el primer win en producción en un motor enterprise repetible. Unifica priorización, gobernanza, patrones de entrega, estándares de arquitectura y conocimiento institucional para escalar sin reinventar cada ciclo.",
    principle: "La velocidad sube. La calidad se estabiliza. El throughput escala.",
    capabilities: [
      {
        title: "Estrategia y priorización",
        description:
          "Estructura transparente que alinea a liderazgo sobre qué construir después — con intake y mapeo de dependencias asistido por IA.",
      },
      {
        title: "Gobernanza y decisión",
        description:
          "Rutas de decisión claras, gates de aprobación y escalamientos que quitan ambigüedad y aceleran ejecución.",
      },
      {
        title: "Patrones de entrega AgentOps",
        description:
          "Plantillas reutilizables de flujos y agentes que sus equipos (y PODs) operan con ritmo predecible.",
      },
      {
        title: "Arquitectura y estándares",
        description:
          "Principios de diseño, patrones de integración y barras de calidad compartidos entre funciones.",
      },
      {
        title: "Conocimiento y capacidad",
        description:
          "Runbooks, insights y aprendizaje institucional que se acumulan con cada flujo entregado.",
      },
    ],
    howInside: [
      "Opera junto a sus equipos existentes — no los reemplaza",
      "Soporta múltiples PODs o squads internos en paralelo",
      "Estandariza intake, diseño, build y review",
      "Hace visibles las decisiones de priorización y sponsorship",
      "Deja patrones y rituales que su organización puede operar sola",
    ],
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
    outcomes: [
      "Alineación de liderazgo sobre qué se entrega después",
      "Ciclos de decisión más rápidos con gobernanza clara",
      "Entrega unificada entre equipos y funciones",
      "Mayor throughput sin headcount proporcional",
      "Mayor consistencia de arquitectura",
      "Capacidad que escala con la demanda",
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
    faqs: [
      {
        question: "¿Qué es AgentOps Factory?",
        answer:
          "El sistema operativo para escalar entrega AI-Native: patrones, estándares, gobernanza y enablement para expandirse más allá del primer flujo en producción.",
      },
      {
        question: "¿En qué se diferencia de un PMO?",
        answer:
          "Un PMO rastrea status. AgentOps Factory es una capa de ejecución y capacidad — acelera decisiones, impone estándares y deja patrones reutilizables.",
      },
      {
        question: "¿Reemplaza a nuestros equipos actuales?",
        answer:
          "No. Aporta la estructura y aceleración para que sus equipos (y PODs) entreguen flujos AI-Native de forma consistente.",
      },
    ],
  },
  {
    slug: "function-modernization",
    title: "Function Modernization",
    eyebrow: "Función",
    shortDescription:
      "Modernice una función de negocio — Ops, Finanzas, Soporte — con flujos AI-Native a medida de su realidad.",
    icon: Wrench,
    headline: "Modernice funciones de negocio con sistemas AI-Native que encajan en su realidad",
    description:
      "Function Modernization reconstruye cómo opera un área de negocio — no pegando un chatbot, sino rediseñando los flujos donde se acumula costo, ciclo y retrabajo. Los Agentiers mapean la función, despliegan sistemas AI-Native gobernados en producción y dejan a su equipo operando una nueva línea base medible.",
    whatItIs:
      "Function Modernization no es otro rollout de SaaS. Es reconstruir cómo se hace el trabajo en un departamento — con sistemas AI-Native a medida que automatizan flujos de alta fricción, se apoyan en sus sistemas de registro y quedan bajo su ownership.",
    principle: "No es automatización pegada. Es modernización que usted posee.",
    capabilities: [
      {
        title: "Flujos de Ops y Finanzas",
        description:
          "Reconciliación, facturas, excepciones y cash-ops rediseñados para ejecución AI-Native con gates de aprobación humana.",
      },
      {
        title: "Operaciones de soporte y servicio",
        description:
          "Triage, asistencia de resolución y detección proactiva conectadas a su stack de tickets y conocimiento — no un chatbot genérico.",
      },
      {
        title: "Pipelines documentales y de compliance",
        description:
          "Intake, clasificación, extracción y ruteo auditable para procesos documentales regulados.",
      },
      {
        title: "Integración profunda al stack",
        description:
          "Construido sobre sistemas que ya opera (ERP, CRM, tools de ops) — modernice sin un rip-and-replace riesgoso.",
      },
      {
        title: "Ownership sin lock-in por asiento",
        description:
          "Usted posee flujos, prompts y playbooks. La capacidad escala con su demanda — no con la matemática de seats del vendor.",
      },
    ],
    howInside: [
      "Diagnosticar primero los flujos de alto valor y alta fricción",
      "Construir sistemas AI-Native a medida para esos flujos — no tools genéricos",
      "Iterar con sus operadores como dueños del sistema",
      "Medir ciclo, costo y calidad contra una nueva línea base",
      "Expandir a flujos adyacentes cuando la función se estabilice",
    ],
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
    outcomes: [
      "Operaciones más lean en la función objetivo",
      "Ejecución más rápida en flujos de alto volumen",
      "Menos retrabajo y backlog de excepciones",
      "Sistemas de su propiedad — no capacidad alquilada",
      "Una línea base medible desde la cual expandir",
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
    faqs: [
      {
        question: "¿Qué es Function Modernization?",
        answer:
          "Reconstruir cómo opera una función de negocio con flujos AI-Native a medida que automatizan trabajo complejo y decisión — con transferencia total de ownership.",
      },
      {
        question: "¿Es solo RPA?",
        answer:
          "No. El RPA parchea pasos legacy. Nosotros rediseñamos el flujo y construimos sistemas inteligentes que razonan, escalan y manejan ambigüedad bajo gobernanza.",
      },
      {
        question: "¿Hay que reemplazar el ERP/CRM?",
        answer:
          "Por lo general no. A menudo construimos la capa AI-Native sobre sistemas que ya confía, para modernizar sin un rip-and-replace completo.",
      },
    ],
  },
];
