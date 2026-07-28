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
    slug: "ai-native-stack-upgrade",
    title: "AI-Native Stack Upgrade",
    eyebrow: "Stack",
    shortDescription:
      "Reemplace tools alquiladas por un stack AI-Native de su propiedad — actualice cómo operan Ops, Finanzas y Soporte.",
    icon: Wrench,
    headline: "Reemplace tools alquiladas por un stack AI-Native de su propiedad.",
    description:
      "Actualice los sistemas y tools con los que corre su función. Los Agentiers diagnostican dónde el SaaS alquilado y los workarounds manuales lo frenan, y construyen un stack AI-Native gobernado sobre sistemas en los que ya confía — para actualizar cómo trabaja la función y conservar la IP.",
    whatItIs:
      "AI-Native Stack Upgrade es cómo refresca los sistemas y tools de una función sin comprar otro asiento SaaS genérico. Los Agentiers reconstruyen flujos de alta fricción en un stack AI-Native propio — sobre su ERP/CRM — para que los operadores dejen de parchear gaps entre tools alquiladas y pasen a operar sistemas hechos a cómo trabajan.",
    principle: "Actualice el stack. Conserve la IP.",
    capabilities: [
      {
        title: "Stack de Ops y Finanzas",
        description:
          "Reemplace toolchains frágiles de finance/ops por sistemas propios de reconciliación, facturas, excepciones y cash-ops.",
      },
      {
        title: "Stack de soporte y servicio",
        description:
          "Actualice triage, asistencia de resolución y detección para sus colas — no otra licencia de chatbot pegado.",
      },
      {
        title: "Stack documental y de compliance",
        description:
          "Refresque intake, clasificación, extracción y ruteo auditable alrededor de sus filings y controles reales.",
      },
      {
        title: "Sobre sus sistemas de registro",
        description:
          "ERP, CRM y tools core se quedan. Actualizamos la capa de trabajo — sin rip-and-replace de toda la plataforma.",
      },
      {
        title: "Propio, no alquilado",
        description:
          "Usted posee el stack, prompts y playbooks. La capacidad escala con la demanda — no con lock-in por asiento.",
      },
    ],
    howInside: [
      "Mapear las tools alquiladas y puentes manuales que frenan la función",
      "Diseñar el stack AI-Native que reemplaza esos gaps — de su propiedad",
      "Los Agentiers construyen y despliegan a producción con gobernanza",
      "Sus operadores corren e iteran el stack sin roadmap de un vendor",
      "Expandir a flujos adyacentes cuando la línea base actualizada se sostenga",
    ],
    bestFor: [
      "Funciones atrapadas en tools alquiladas que no encajan con cómo operan",
      "Líderes listos para actualizar sistemas y tools — no agregar otra capa de automatización",
      "Organizaciones que quieren poseer el stack, no alquilar asientos para siempre",
      "Sponsors que quieren un upgrade en producción primero en una función",
    ],
    deliverables: [
      "Assessment del stack: tools alquiladas, gaps y objetivos de upgrade",
      "Diseño del estado futuro AI-Native de los sistemas de la función",
      "Sistemas a medida en producción con agentes gobernados y supervisión humana",
      "Integraciones a sistemas de registro en los que ya confía",
      "Línea base de KPIs y playbooks operativos que su equipo posee",
    ],
    outcomes: [
      "Un stack actualizado con el que la función realmente opera",
      "Menos tools alquiladas y workarounds manuales",
      "Ejecución más rápida en flujos de alto volumen",
      "Usted posee los sistemas — evolucionan con su negocio",
      "Una línea base medible desde la cual expandir",
    ],
    timeline: "8–16 semanas típicas para un stack upgrade enfocado",
    engagementSteps: [
      {
        title: "Evaluar el stack",
        description:
          "Inventarie tools alquiladas, puentes manuales y dónde se concentra costo, ciclo y retrabajo.",
      },
      {
        title: "Diseñar el upgrade",
        description:
          "Defina el stack AI-Native: qué sistemas reemplazan qué tools, qué ejecuta la IA, qué aprueban los humanos.",
      },
      {
        title: "Construir y salir a vivo",
        description:
          "Los Agentiers construyen el stack propio y lo despliegan en su entorno operativo vivo con gobernanza.",
      },
      {
        title: "Operar y expandir",
        description:
          "Confirme KPIs, fije runbooks y planifique el siguiente upgrade adyacente dentro de la misma función.",
      },
    ],
    faqs: [
      {
        question: "¿Qué es un AI-Native Stack Upgrade?",
        answer:
          "Un paquete para actualizar los sistemas y tools con los que corre una función de negocio — reemplazando tooling genérico alquilado por un stack AI-Native propio que encaja con cómo trabajan.",
      },
      {
        question: "¿Es solo automatización encima de nuestras tools actuales?",
        answer:
          "No. La automatización se pega a lo que ya alquila. Un stack upgrade reconstruye el trabajo en sistemas de su propiedad — con gobernanza — para que la función opere distinto, no solo más rápido en los mismos pasos rotos.",
      },
      {
        question: "¿Hay que reemplazar el ERP/CRM?",
        answer:
          "Por lo general no. Actualizamos el stack de trabajo sobre sistemas de registro en los que ya confía, sin un rip-and-replace completo de plataforma.",
      },
    ],
  },
];
