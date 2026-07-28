import {
  Bot,
  Brain,
  Code2,
  Cpu,
  Layers,
  LineChart,
  Monitor,
  Plug,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export type {
  CoreCapability,
  EngagementModel,
  Industry,
  ResourceItem,
  ServiceItem,
  StrategicPillar,
} from "@/data/site-content";

import type {
  CoreCapability,
  EngagementModel,
  ResourceItem,
  ServiceItem,
  StrategicPillar,
} from "@/data/site-content";

export const aiServicesEs: ServiceItem[] = [
  {
    slug: "ai-code-review",
    title: "Revisión de código con IA",
    shortDescription:
      "Controles de calidad automatizados que detectan bugs, vulnerabilidades y desviaciones de estilo antes del merge.",
    description:
      "AgentBiz combina análisis estático con revisión asistida por IA para acelerar la entrega sin sacrificar calidad. Integramos flujos de revisión en su pipeline CI/CD para que cada pull request reciba retroalimentación consistente y accionable.",
    highlights: [
      "Escaneo automatizado de seguridad y rendimiento",
      "Estándares de codificación consistentes entre equipos",
      "Ciclos de revisión más rápidos con humano en el loop",
      "Integración con GitHub, GitLab y Bitbucket",
    ],
    icon: Search,
    category: "ai",
  },
  {
    slug: "ai-assisted-software-development",
    title: "Desarrollo de software asistido por IA",
    shortDescription:
      "Entregue más rápido con copilotos de IA orquestados por ingenieros senior que asumen el resultado.",
    description:
      "Usamos desarrollo asistido por IA para reducir trabajo repetitivo, manteniendo arquitectura, seguridad y mantenibilidad bajo control experto. El resultado: el doble de velocidad en los flujos correctos, sin atajos.",
    highlights: [
      "Copilotos de IA para implementación y refactorización",
      "Arquitectura y ownership de código liderados por seniors",
      "Pruebas y documentación aceleradas",
      "Entrega predecible con prácticas Agile",
    ],
    icon: Code2,
    category: "ai",
  },
  {
    slug: "ai-integration",
    title: "Integración de IA",
    shortDescription:
      "Incorpore IA en CRM, ERP, plataformas cloud y herramientas internas sin interrumpir operaciones.",
    description:
      "Conectamos LLMs, agentes y modelos de ML a los sistemas que sus equipos ya utilizan. Desde Salesforce y HubSpot hasta AWS y Azure, diseñamos integraciones seguras, observables y listas para escalar.",
    highlights: [
      "Integraciones con CRM, ERP y Service Cloud",
      "Diseño API-first para productos existentes",
      "Despliegue cloud-native en AWS, GCP y Azure",
      "Monitoreo, logging y control de costos",
    ],
    icon: Plug,
    category: "ai",
  },
  {
    slug: "agentic-ai-development",
    title: "Desarrollo de IA agéntica",
    shortDescription:
      "Sistemas multiagente que automatizan flujos complejos en soporte, operaciones e ingeniería.",
    description:
      "Diseñamos redes de agentes autónomos que colaboran en tareas de múltiples pasos — desde triage de soporte al cliente hasta optimización de DevOps. Construido para empresas que necesitan automatización real, no otro chatbot.",
    highlights: [
      "Agentes de automatización para soporte y operaciones",
      "Orquestación de investigación y análisis de datos",
      "Agentes de QA y testing para ciclos de release más rápidos",
      "Integración segura con su base de conocimiento",
    ],
    icon: Bot,
    category: "ai",
  },
  {
    slug: "custom-ai-development",
    title: "Desarrollo de IA a medida",
    shortDescription:
      "Modelos propietarios y productos de IA adaptados a sus datos, dominio y requisitos de cumplimiento.",
    description:
      "Desde NLP y visión por computadora hasta IA generativa y fine-tuning de LLMs, construimos soluciones personalizadas alineadas con sus objetivos de negocio — no herramientas genéricas forzadas a encajar donde no corresponde.",
    highlights: [
      "ML, NLP, visión por computadora e IA generativa",
      "Entrenamiento y fine-tuning de modelos personalizados",
      "Seguridad y cumplimiento de nivel empresarial",
      "Diseño, construcción y despliegue de punta a punta",
    ],
    icon: Brain,
    category: "ai",
  },
  {
    slug: "ai-mvp-development",
    title: "Desarrollo de MVP con IA",
    shortDescription:
      "Valide ideas de productos de IA con usuarios reales antes de comprometerse con una construcción a escala completa.",
    description:
      "Ayudamos a startups y equipos de innovación a lanzar MVPs de IA que prueban tanto el product-market fit como el rendimiento del modelo. Enfoque en funcionalidades esenciales, datos de calidad y ciclos de aprendizaje medibles.",
    highlights: [
      "Prototipado rápido con modelos preentrenados y personalizados",
      "Pruebas con usuarios para UX y precisión del modelo",
      "Demos listas para inversores y métricas de tracción",
      "Roadmap claro de MVP a escala de producción",
    ],
    icon: Rocket,
    category: "ai",
  },
  {
    slug: "ai-application-development",
    title: "Desarrollo de aplicaciones con IA",
    shortDescription:
      "Apps de IA de grado productivo — web, móvil y SaaS — construidas para escala y confiabilidad.",
    description:
      "Entregamos aplicaciones AI-first con interfaces conversacionales, personalización y automatización inteligente desde el día uno. Ingeniería de nivel producto para equipos que necesitan resultados, no experimentos.",
    highlights: [
      "Aplicaciones web y móviles potenciadas por IA",
      "IA conversacional y asistentes virtuales",
      "Motores de personalización y recomendación",
      "Arquitectura cloud escalable y DevOps",
    ],
    icon: Sparkles,
    category: "ai",
  },
];

export const softwareServicesEs: ServiceItem[] = [
  {
    slug: "mobile-app-development",
    title: "Desarrollo de apps móviles",
    shortDescription: "Apps nativas y multiplataforma para iOS, Android y movilidad empresarial.",
    description:
      "Construimos experiencias móviles que rinden — desde apps de consumo hasta herramientas de campo empresariales. iOS, Android, Flutter y React Native con enfoque en UX, seguridad y mantenibilidad.",
    highlights: [
      "Desarrollo nativo iOS y Android",
      "Multiplataforma con Flutter y React Native",
      "Apps empresariales y offline-first",
      "Lanzamiento en App Store y soporte continuo",
    ],
    icon: Smartphone,
    category: "software",
  },
  {
    slug: "web-development",
    title: "Desarrollo web",
    shortDescription: "Apps web modernas, plataformas SaaS y sitios de marketing de alto rendimiento.",
    description:
      "Desde sitios de marketing hasta dashboards SaaS complejos, usamos React, Next.js y stacks cloud probados para entregar productos web rápidos, accesibles y optimizados para SEO.",
    highlights: [
      "Apps web y plataformas SaaS",
      "PWA y mejora progresiva",
      "Soluciones Shopify y eCommerce",
      "Diseño y rediseño UX/UI",
    ],
    icon: Monitor,
    category: "software",
  },
  {
    slug: "quality-assurance",
    title: "Aseguramiento de calidad",
    shortDescription: "Pruebas manuales y automatizadas para lanzar con confianza.",
    description:
      "Nuestra práctica de QA combina automatización de pruebas, diseño de casos asistido por IA y exploración manual rigurosa para que los releases sean estables, seguros y listos para tráfico de producción.",
    highlights: [
      "Automatización de pruebas e integración CI",
      "Pruebas de rendimiento y seguridad",
      "Diseño de casos de prueba asistido por IA",
      "Regresión y gestión de releases",
    ],
    icon: Shield,
    category: "software",
  },
  {
    slug: "digital-transformation",
    title: "Transformación digital",
    shortDescription: "Modernice sistemas legacy y flujos de trabajo con un roadmap pragmático.",
    description:
      "Ayudamos a las organizaciones a pasar de restricciones legacy a arquitecturas cloud-native y orientadas a APIs — con gestión del cambio y planes de entrega que minimizan el riesgo.",
    highlights: [
      "Modernización legacy y migración a la nube",
      "Automatización de procesos y diseño de flujos",
      "Fundamentos de plataforma de datos y analytics",
      "Despliegue por fases con KPIs medibles",
    ],
    icon: Layers,
    category: "software",
  },
];

export const engagementModelsEs: EngagementModel[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    description:
      "Su motor de ejecución para llevar operaciones AI-Native a producción — con KPIs, gobernanza y ownership.",
    icon: Rocket,
    href: "/engagement/ai-native-pods",
  },
  {
    slug: "ai-native-operating-system",
    title: "AI-Native Operating System",
    description:
      "Patrones, estándares y enablement para que su equipo posea los siguientes flujos.",
    icon: Layers,
    href: "/engagement/ai-native-operating-system",
  },
  {
    slug: "ai-native-stack-upgrade",
    title: "AI-Native Stack Upgrade",
    description:
      "Reemplace tools alquiladas por un stack AI-Native de su propiedad — actualice sistemas y tools de la función.",
    icon: Wrench,
    href: "/engagement/ai-native-stack-upgrade",
  },
];

export const enterpriseChallengesEs: string[] = [
  "Cómo los documentos se convierten en decisiones",
  "Cómo las solicitudes se convierten en acciones",
  "Cómo los equipos coordinan entre sistemas",
  "Cómo el conocimiento se convierte en capacidad reutilizable",
  "Cómo las operaciones escalan sin crecimiento proporcional de costos",
  "Cómo la IA se integra al modelo operativo",
];

export const strategicPillarsEs: StrategicPillar[] = [
  {
    number: "01",
    title: "Rediseño operativo",
    description:
      "Mapeamos flujos actuales, identificamos fricciones y diseñamos procesos futuros donde humanos, agentes de IA, datos y sistemas trabajan juntos.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Implementación de IA en producción",
    description:
      "Construimos flujos habilitados por IA integrados con los sistemas, datos, permisos y controles necesarios para uso real del negocio.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Gobernanza y control",
    description:
      "Trazabilidad, aprobaciones, acceso basado en roles, rutas de escalamiento, revisión de calidad, auditoría y supervisión humana — diseñados desde el día uno.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Escala empresarial",
    description:
      "Patrones reutilizables, estándares de entrega y modelos operativos que permiten expandir la transformación con IA más allá de un solo flujo.",
    icon: Rocket,
  },
];

export const coreCapabilitiesEs: CoreCapability[] = [
  {
    slug: "ai-operations-engineering",
    title: "Ingeniería de operaciones con IA",
    shortDescription:
      "Diseñe y despliegue flujos agénticos, integraciones y sistemas de IA personalizados dentro de su entorno operativo real.",
    outcomes: [
      "Flujos de agentes listos para producción",
      "Integraciones con CRM, ERP y cloud",
      "Reducción medible del tiempo de ciclo",
      "Controles gobernados con humano en el loop",
    ],
    icon: Bot,
    href: "/services/agentic-ai-development",
  },
  {
    slug: "ai-accelerated-delivery",
    title: "Entrega acelerada con IA",
    shortDescription:
      "Equipos de ingeniería senior que usan desarrollo asistido por IA para entregar más rápido sin sacrificar arquitectura ni calidad.",
    outcomes: [
      "Construcción y revisión asistidas por IA",
      "Entrega Agile predecible",
      "Menor carga manual de ingeniería",
      "Arquitectura que su equipo puede adoptar",
    ],
    icon: Code2,
    href: "/services/ai-assisted-software-development",
  },
  {
    slug: "enterprise-ai-applications",
    title: "Aplicaciones de IA empresariales",
    shortDescription:
      "Construya aplicaciones AI-first — agentes, copilotos y sistemas de decisión — diseñadas para seguridad, escala y mantenibilidad.",
    outcomes: [
      "Aplicaciones de IA personalizadas",
      "Interfaces conversacionales y agénticas",
      "Despliegue cloud-native",
      "Ownership total de código e IP",
    ],
    icon: Sparkles,
    href: "/services/ai-application-development",
  },
  {
    slug: "engagement-models",
    title: "Paquetes de transformación",
    shortDescription:
      "Paquetes orientados a outcomes — AI-Native PODs, AI-Native Operating System y AI-Native Stack Upgrade — alineados a transformación operativa enterprise.",
    outcomes: [
      "AI-Native PODs",
      "AI-Native Operating System",
      "AI-Native Stack Upgrade",
      "Handoff gobernado y ownership",
    ],
    icon: Users,
    href: "/engagement",
  },
];

export const workflowPhasesEs = [
  {
    icon: Target,
    title: "Identificar",
    description:
      "Evalúe procesos, flujos de datos, dependencias manuales y oportunidades de impacto medible.",
  },
  {
    icon: Layers,
    title: "Rediseñar",
    description:
      "Defina el estado futuro nativo en IA — qué hace la IA, qué controlan los humanos y cómo se mide el valor.",
  },
  {
    icon: Code2,
    title: "Implementar",
    description:
      "Construya y despliegue flujos de producción, agentes, integraciones y controles en su entorno.",
  },
  {
    icon: Rocket,
    title: "Escalar",
    description:
      "Establezca componentes reutilizables y estándares de entrega para expandir operaciones nativas en IA entre funciones.",
  },
];

export const resourcesEs: ResourceItem[] = [
  {
    slug: "enterprise-ai-roadmap",
    title: "Roadmap de implementación de IA empresarial",
    description:
      "Guía práctica para líderes empresariales que avanzan de pilotos de IA a capacidad productiva — con fases, checkpoints de gobernanza e hitos de entrega.",
    type: "Guía",
    readTime: "15 min de lectura",
    tags: ["Estrategia", "Roadmap", "Empresa"],
  },
  {
    slug: "pilot-to-production-checklist",
    title: "Checklist de piloto a producción",
    description:
      "Checklist de gobernanza y operaciones para aprobar flujos de IA en producción — cubriendo arquitectura, cumplimiento, monitoreo y preparación para escala.",
    type: "Checklist",
    readTime: "5 min de lectura",
    tags: ["Gobernanza", "Producción", "Checklist"],
  },
  {
    slug: "enterprise-ops-case-study",
    title: "Automatización de back-office empresarial",
    description:
      "Cómo una empresa B2B mid-market redujo en un 67% el tiempo de ciclo de onboarding de proveedores con agentes de IA gobernados integrados a su ERP existente.",
    type: "Caso de estudio",
    readTime: "8 min de lectura",
    tags: ["Caso de estudio", "Operaciones", "ROI"],
    href: "/case-studies/enterprise-ops-automation",
  },
  {
    slug: "healthcare-prior-auth",
    title: "Automatización de autorización previa en salud",
    description:
      "Cómo una organización de salud regional redujo en un 38% el tiempo de respuesta de autorización previa con flujos agénticos compatibles con HIPAA y supervisión clínica.",
    type: "Caso de estudio",
    readTime: "7 min de lectura",
    tags: ["Salud", "Caso de estudio", "Cumplimiento"],
    href: "/case-studies/healthcare-prior-auth",
  },
  {
    slug: "fintech-loan-documents",
    title: "Inteligencia documental en préstamos FinTech",
    description:
      "Cómo un prestamista regional redujo en un 50% los ciclos de revisión de underwriting con IA documental gobernada y supervisión analítica.",
    type: "Caso de estudio",
    readTime: "7 min de lectura",
    tags: ["FinTech", "Caso de estudio", "IA documental"],
    href: "/case-studies/fintech-loan-documents",
  },
  {
    slug: "logistics-exception-handling",
    title: "Automatización de excepciones logísticas",
    description:
      "Cómo un operador logístico en Norteamérica redujo en un 45% el tiempo de resolución de excepciones con ops asistida por agentes integrada al TMS existente.",
    type: "Caso de estudio",
    readTime: "7 min de lectura",
    tags: ["Logística", "Caso de estudio", "Operaciones"],
    href: "/case-studies/logistics-exception-handling",
  },
];
