import { GitBranch, Rocket, Users, Wrench, Zap } from "lucide-react";

export type { EngagementDetail } from "@/data/engagement-content";

import type { EngagementDetail } from "@/data/engagement-content";

export const engagementDetailsEs: EngagementDetail[] = [
  {
    slug: "project-based-development",
    title: "Desarrollo por proyecto",
    shortDescription:
      "Entrega de alcance fijo para resultados definidos de IA o software con hitos claros.",
    icon: Rocket,
    headline: "Entrega orientada a resultados con alcance e hitos definidos",
    description:
      "Ideal cuando tiene un flujo específico, funcionalidad de producto o iniciativa de modernización con criterios de éxito medibles. Definimos arquitectura, fases de entrega y requisitos de gobernanza desde el inicio — y ejecutamos con liderazgo de ingeniería senior.",
    bestFor: [
      "Primer flujo de IA en producción con KPIs definidos",
      "Nuevas funcionalidades de producto o módulos de plataforma",
      "Modernización con presupuesto y timeline fijos",
      "Patrocinadores ejecutivos que necesitan entrega predecible",
    ],
    deliverables: [
      "Statement of work con alcance e hitos",
      "Diseño de arquitectura e integraciones",
      "Despliegue en producción con documentación",
      "Transferencia de conocimiento y playbook de handoff",
    ],
    timeline: "8–16 semanas típicas para el primer flujo en producción",
    engagementSteps: [
      {
        title: "Discovery y scoping",
        description: "Mapee flujo, sistemas, gobernanza y métricas de éxito.",
      },
      {
        title: "Arquitectura y plan",
        description: "Defina diseño de agentes, integraciones y fases de entrega.",
      },
      {
        title: "Construcción y despliegue",
        description: "Lance a producción con monitoreo y controles.",
      },
      {
        title: "Handoff y escala",
        description: "Transfiera conocimiento operativo e identifique rutas de expansión.",
      },
    ],
  },
  {
    slug: "managed-services",
    title: "Programa de servicios gestionados",
    shortDescription: "Operaciones, monitoreo y evolución continua de sus sistemas de IA.",
    icon: Wrench,
    headline: "Opere y evolucione sistemas de IA en producción después del lanzamiento",
    description:
      "Para organizaciones que necesitan mejora continua, respuesta a incidentes, actualizaciones de modelos y soporte operativo — sin construir un equipo interno de plataforma de IA de la noche a la mañana.",
    bestFor: [
      "Flujos de IA en producción que requieren confiabilidad 24/7",
      "Equipos sin capacidad dedicada de MLOps u ops de agentes",
      "Integraciones en evolución conforme cambian reglas de negocio",
      "Monitoreo de costos y calidad a lo largo del tiempo",
    ],
    deliverables: [
      "Monitoreo e incident response con SLA",
      "Cadencia de optimización de modelos y prompts",
      "Mantenimiento y actualizaciones de integraciones",
      "Reportes mensuales operativos y de ROI",
    ],
    timeline: "Engagement mensual continuo después del despliegue inicial",
    engagementSteps: [
      {
        title: "Línea base operativa",
        description: "Establezca monitoreo, runbooks y rutas de escalamiento.",
      },
      {
        title: "Operaciones en estado estable",
        description: "Monitoree calidad, costo, latencia y KPIs de negocio.",
      },
      {
        title: "Mejora continua",
        description: "Itere agentes, integraciones y flujos.",
      },
      {
        title: "Planificación de expansión",
        description: "Identifique flujos adyacentes para escala gobernada.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff augmentation",
    shortDescription: "Ingenieros senior de IA integrados a su equipo para ampliar capacidad de entrega.",
    icon: Users,
    headline: "Ingenieros senior dentro de su equipo — nativos en IA desde el día uno",
    description:
      "Cuando necesita builders experimentados que trabajen dentro de su codebase, herramientas y ceremonias — sin la sobrecarga de reestructurar un proyecto completo.",
    bestFor: [
      "Equipos de producto interno escalando capacidades de IA",
      "Presión de backlog en plataforma o integraciones",
      "Transferencia de conocimiento para upskilling de ingenieros existentes",
      "Entrega híbrida con sus arquitectos y PMs",
    ],
    deliverables: [
      "Ingenieros senior embebidos (IA, backend, integraciones)",
      "Participación en sus ceremonias Agile",
      "Code reviews y guía de arquitectura",
      "Documentación y pairing con el equipo interno",
    ],
    timeline: "Engagements de 3–12 meses, ramp up/down flexible",
    engagementSteps: [
      {
        title: "Alineación de skills",
        description: "Asigne ingenieros a stack, dominio y modelo de entrega.",
      },
      {
        title: "Onboarding",
        description: "Accesos, repos, ambientes e integración al equipo.",
      },
      {
        title: "Entrega embebida",
        description: "Entregue junto a su equipo con accountability compartida.",
      },
      {
        title: "Transferencia de conocimiento",
        description: "Eleve capacidades del equipo interno y documente patrones.",
      },
    ],
  },
  {
    slug: "software-maintenance",
    title: "Mantenimiento de software",
    shortDescription: "Soporte confiable para aplicaciones, integraciones y flujos de IA existentes.",
    icon: GitBranch,
    headline: "Mantenga sistemas en producción saludables conforme evolucionan los requisitos",
    description:
      "El mantenimiento no son solo bug fixes — es mantener integraciones, agentes y dependencias actualizados para que los sistemas de IA operativos sigan seguros y performantes.",
    bestFor: [
      "Aplicaciones legacy que necesitan mejora constante",
      "Flujos de IA post-lanzamiento que requieren actualizaciones",
      "Parches de seguridad y gestión de dependencias",
      "Mejoras menores sin sobrecarga de proyecto completo",
    ],
    deliverables: [
      "Corrección de bugs y mejoras menores",
      "Actualizaciones de dependencias y seguridad",
      "Health checks de integraciones",
      "Soporte de gestión de releases",
    ],
    timeline: "Retainer mensual con backlog priorizado",
    engagementSteps: [
      {
        title: "Evaluación del sistema",
        description: "Inventarie apps, dependencias y necesidades de soporte.",
      },
      {
        title: "Cadencia de soporte",
        description: "Defina SLAs, priorización y ritmo de releases.",
      },
      {
        title: "Mantenimiento continuo",
        description: "Ejecute fixes, actualizaciones y mejoras menores.",
      },
      {
        title: "Revisión trimestral",
        description: "Evalúe deuda técnica y oportunidades de modernización.",
      },
    ],
  },
  {
    slug: "rescue-project",
    title: "Proyecto de rescate",
    shortDescription: "Estabilice entregas fallidas de IA o software y restaure el momentum.",
    icon: Zap,
    headline: "Cuando los pilotos se estancan, los vendors no cumplen o los timelines se deslizan",
    description:
      "Evaluamos qué está fallando — arquitectura, alcance, dinámica de equipo o gobernanza — e implementamos un plan de recuperación con hitos claros y visibilidad ejecutiva.",
    bestFor: [
      "Pilotos de IA estancados 6+ meses sin impacto en producción",
      "Handoffs de vendors con documentación incompleta",
      "Deadlines críticos con confianza de stakeholders en erosión",
      "Deuda técnica bloqueando el despliegue",
    ],
    deliverables: [
      "Evaluación rápida técnica y de entrega",
      "Roadmap de recuperación con hitos a 30/60/90 días",
      "Estabilización de sistemas core e integraciones",
      "Ruta a producción o plan de transición limpio",
    ],
    timeline: "Evaluación en 1–2 semanas; recuperación 4–12 semanas",
    engagementSteps: [
      {
        title: "Triage",
        description: "Identifique causas raíz: tech, alcance, proceso o gobernanza.",
      },
      {
        title: "Estabilizar",
        description: "Detenga el sangrado — corrija blockers críticos y comunicación.",
      },
      {
        title: "Recuperar",
        description: "Ejecute hitos enfocados con progreso medible.",
      },
      {
        title: "Transición",
        description: "Entregue a entrega en estado estable o equipo interno.",
      },
    ],
  },
];
