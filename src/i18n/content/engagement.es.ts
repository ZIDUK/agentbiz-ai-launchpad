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
    slug: "ai-native-operating-system",
    title: "AI-Native Operating System",
    eyebrow: "Escala",
    shortDescription:
      "Instale el sistema operativo para entrega AI-Native — patrones, estándares y rituales para que su equipo escale más allá del primer flujo.",
    icon: Layers,
    headline: "Escale operaciones con IA nativa sin otro ejército de contratistas",
    description:
      "Después del primer logro en producción, el cuello de botella suele ser capacidad — no más headcount. El AI-Native Operating System instala patrones reutilizables, estándares de entrega y rituales operativos para que su organización posea la siguiente ola de flujos.",
    whatItIs:
      "El AI-Native Operating System es la capa que convierte el primer win en producción en un motor enterprise repetible. Unifica priorización, gobernanza, patrones de entrega, estándares de arquitectura y conocimiento institucional para escalar sin reinventar cada ciclo.",
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
        title: "Patrones de entrega",
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
      "Equipos internos que necesitan patrones compartidos y runbooks",
      "Líderes que quieren ownership y anti lock-in",
      "Programas que pasan de cultura de piloto a un sistema operativo",
    ],
    deliverables: [
      "Patrones reutilizables de flujos y agentes",
      "Estándares operativos, runbooks y rutas de escalamiento",
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
        question: "¿Qué es el AI-Native Operating System?",
        answer:
          "El sistema para escalar entrega AI-Native: patrones, estándares, gobernanza y enablement para expandirse más allá del primer flujo en producción.",
      },
      {
        question: "¿En qué se diferencia de un PMO?",
        answer:
          "Un PMO rastrea status. El AI-Native Operating System es una capa de ejecución y capacidad — acelera decisiones, impone estándares y deja patrones reutilizables.",
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
      "Deje de comprar otro SaaS. Construya sistemas AI-Native a medida de su función — y sea dueño de ellos.",
    icon: Wrench,
    headline: "Deje de comprar tools SaaS. Empiece a construir sistemas.",
    description:
      "Modernice Ops, Finanzas, Soporte u otras funciones con sistemas AI-Native a medida de su realidad — no del roadmap de un vendor. Los Agentiers reconstruyen cómo se hace el trabajo, despliegan sistemas gobernados en producción y dejan capacidad de su propiedad.",
    whatItIs:
      "Function Modernization no es agregar otra tool. Es reconstruir cómo se hace el trabajo. Los Agentiers diagnostican flujos de alta fricción en un departamento y construyen sistemas AI-Native a medida sobre el stack que ya opera — para pasar de humanos parcheando gaps entre SaaS genéricos a sistemas que razonan, ejecutan y quedan bajo su ownership.",
    principle: "No es automatización. Es modernización.",
    capabilities: [
      {
        title: "Sistemas de Ops y Finanzas",
        description:
          "Sistemas a medida de reconciliación, facturas, excepciones y cash-ops — no otro asiento genérico de SaaS financiero.",
      },
      {
        title: "Sistemas de soporte y servicio",
        description:
          "Triage, asistencia de resolución y detección proactiva para sus colas y conocimiento — no un chatbot pegado.",
      },
      {
        title: "Sistemas documentales y de compliance",
        description:
          "Intake, clasificación, extracción y ruteo auditable diseñados alrededor de sus filings y controles.",
      },
      {
        title: "Construido sobre su stack",
        description:
          "ERP, CRM y tools de ops siguen siendo sistemas de registro. Modernizamos la capa de trabajo sin rip-and-replace.",
      },
      {
        title: "De su propiedad",
        description:
          "Usted posee sistemas, prompts y playbooks. La capacidad escala con la demanda — no con lock-in por asiento.",
      },
    ],
    howInside: [
      "No implementamos software de estantería — lo construimos para sus flujos",
      "Diagnosticar el trabajo de alto valor y alta fricción que frena la función",
      "Construir sistemas AI-Native a medida que los Agentiers llevan a producción",
      "Iterar con sus operadores como dueños — sin esperar el roadmap de un vendor",
      "Expandir a flujos adyacentes cuando la nueva línea base de la función se sostenga",
    ],
    bestFor: [
      "Funciones atrapadas parcheando gaps entre tools con trabajo manual",
      "Líderes cansados de roadmaps de SaaS que no encajan con cómo operan",
      "Organizaciones listas para poseer sistemas — no alquilar otro asiento para siempre",
      "Sponsors que quieren impacto en producción primero en una función",
    ],
    deliverables: [
      "Mapa del estado actual y diseño del estado futuro AI-Native de la función",
      "Sistemas a medida en producción con agentes gobernados y supervisión humana",
      "Integraciones a los sistemas de registro en los que ya confía",
      "Línea base de KPIs y playbooks operativos que su equipo posee",
    ],
    outcomes: [
      "Operaciones más lean en la función objetivo",
      "Ejecución más rápida en flujos de alto volumen",
      "Deja de alquilar capacidad — empieza a poseerla",
      "Sistemas que evolucionan con su negocio, no con el backlog de un vendor",
      "Una línea base medible desde la cual expandir",
    ],
    timeline: "8–16 semanas típicas para modernizar una función enfocada",
    engagementSteps: [
      {
        title: "Diagnosticar",
        description:
          "Identifique los flujos de alto valor y alta fricción donde se concentra costo, ciclo y retrabajo — y donde las tools genéricas fallan.",
      },
      {
        title: "Construir",
        description:
          "Los Agentiers construyen sistemas AI-Native a medida para esos flujos y los despliegan en su entorno operativo vivo con gobernanza.",
      },
      {
        title: "Iterar",
        description:
          "Usted es dueño del sistema. Evoluciona con sus operadores y prioridades — sin esperar el roadmap de producto de otro.",
      },
      {
        title: "Estabilizar y expandir",
        description:
          "Confirme KPIs, fije runbooks y planifique el siguiente flujo adyacente dentro de la misma función.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es Function Modernization?",
        answer:
          "Reconstruir cómo opera una función de negocio creando sistemas AI-Native a medida para sus flujos de mayor fricción — con ownership total. Es modernización, no otra automatización pegada.",
      },
      {
        question: "¿Es solo RPA o automatización?",
        answer:
          "No. El RPA y la automatización de tools parchean pasos legacy. Nosotros reconstruimos el trabajo en sistemas inteligentes que razonan, escalan y manejan ambigüedad bajo gobernanza — sistemas de su propiedad.",
      },
      {
        question: "¿Hay que reemplazar el ERP/CRM?",
        answer:
          "Por lo general no. Construimos la capa AI-Native sobre sistemas que ya confía, para modernizar sin un rip-and-replace riesgoso.",
      },
    ],
  },
];
