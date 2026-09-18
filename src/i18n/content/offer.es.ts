import {
  Bot,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  FileText,
  Film,
  GitBranch,
  Map,
  MessageSquare,
  Network,
  PieChart,
  Rocket,
  Shield,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import type {
  AboutContent,
  BundleItem,
  BuyerFaq,
  CaseStudy,
  Industry,
  ServiceItem,
} from "@/data/site-content";

export const servicesEs: ServiceItem[] = [
  {
    slug: "operating-foundation",
    number: "01",
    title: "Fundación Operativa",
    tagline:
      "Fija la arquitectura de negocio: valor, dueños y los procesos que mueven resultados.",
    shortDescription:
      "Empezamos por la arquitectura del negocio: estrategia, metas de valor, derechos de decisión y los pocos procesos que realmente mueven resultados. Toda decisión posterior tiene que poder trazarse hasta aquí.",
    description:
      "Ayudamos a la dirección a fijar la arquitectura de negocio antes de rediseñar un flujo o comprar una herramienta. Eso significa estrategia, metas de valor, derechos de decisión y los pocos procesos que realmente mueven resultados. Sin eso, los programas digitales y agénticos optimizan el trabajo equivocado.",
    forWhom: "CEO, COO, Chief Strategy Officer",
    deliverables: [
      "Mapa de stakeholders + drivers de negocio (visual)",
      "Documento de Architecture Vision (TOGAF Fase A)",
      "Arquitectura de negocio estado actual (TOGAF Fase B)",
      "Lista priorizada de los 3-5 procesos críticos a atacar primero",
      "Hoja de ruta ejecutiva de 1 página firmada por C-level",
      "1 sesión de handoff con liderazgo",
    ],
    highlights: [
      "Mapa de stakeholders + drivers de negocio (visual)",
      "Documento de Architecture Vision (TOGAF Fase A)",
      "Arquitectura de negocio estado actual (TOGAF Fase B)",
      "Lista priorizada de los 3-5 procesos críticos a atacar primero",
      "Hoja de ruta ejecutiva de 1 página firmada por C-level",
      "1 sesión de handoff con liderazgo",
    ],
    notIncludes: [
      "Implementación de procesos",
      "Análisis técnico profundo de sistemas",
      "IA o agentes",
    ],
    framework: "TOGAF ADM (Fases A + B) con BPMN-lite para artefactos visuales.",
    price: "$25,000 – $50,000 USD tarifa fija",
    duration: "4-6 semanas",
    whatNext:
      "Con la hoja de ruta firmada, el siguiente paso es Diagnóstico de Procesos (Servicio 02) para mapear los procesos que la Fundación priorizó.",
    icon: Compass,
    category: "process",
  },
  {
    slug: "process-diagnostic",
    number: "02",
    title: "Diagnóstico de Procesos",
    tagline:
      "Mapea cómo corre el trabajo, diseña el TO-BE y evalúa datos, sistemas y controles.",
    shortDescription:
      "Modelamos los procesos críticos en BPMN, eliminamos desperdicio con Lean y diseñamos el TO-BE — incluyendo datos, sistemas, excepciones y puntos de control. Ese es el plan que la implementación puede ejecutar.",
    description:
      "Modelamos los procesos críticos en BPMN 2.0, los auditamos con Lean y diseñamos el TO-BE de punta a punta. El diagnóstico también evalúa calidad de datos, acceso a sistemas de registro, excepciones y controles — la puerta de readiness para automatizar después. Sale sabiendo qué arreglar, en qué orden y qué no está listo para IA.",
    forWhom: "COO, VP de Operaciones, Director de Excelencia de Procesos",
    deliverables: [
      "Mapas AS-IS en BPMN 2.0 (3-5 procesos críticos)",
      "Informe Lean con cuellos de botella y desperdicio",
      "Diseños TO-BE (estado futuro)",
      "Quick wins priorizados en horizontes 30-60-90 días",
      "Informe ejecutivo (20-30 páginas)",
      "Presentación final a liderazgo",
    ],
    highlights: [
      "Mapas AS-IS en BPMN 2.0 (3-5 procesos críticos)",
      "Informe Lean con cuellos de botella y desperdicio",
      "Diseños TO-BE (estado futuro)",
      "Quick wins priorizados en horizontes 30-60-90 días",
      "Informe ejecutivo (20-30 páginas)",
      "Presentación final a liderazgo",
    ],
    notIncludes: [
      "Implementación de los quick wins",
      "Configuración de herramientas",
      "IA o agentes",
      "Entrenamiento interno del equipo",
    ],
    framework: "BPMN 2.0 + Lean Management + Value Stream Mapping.",
    price: "$40,000 – $75,000 USD tarifa fija",
    duration: "8 semanas",
    prerequisite: "Fundación Operativa completada (o trabajo equivalente ya hecho)",
    whatNext:
      "Con el mapa y las prioridades, el siguiente paso es Implementación de Procesos (Servicio 03) para ejecutar los wins priorizados.",
    icon: GitBranch,
    category: "process",
  },
  {
    slug: "process-implementation",
    number: "03",
    title: "Implementación de Procesos",
    tagline:
      "Instala el nuevo modelo operativo: flujos, sistemas, KPIs y dueños.",
    shortDescription:
      "Ponemos el TO-BE en producción: flujos rediseñados, cambios de sistema, KPIs en vivo, dueños y un equipo que puede operar la nueva forma de trabajar.",
    description:
      "Implementamos los procesos rediseñados en los sistemas que ya corren el trabajo, levantamos KPIs con dueños y cadencia de revisión, y entrenamos a las personas que deben sostenerlo. La transformación digital falla aquí cuando el mapa nunca se convierte en modelo operativo.",
    forWhom:
      "COO, VP de Operaciones, Director de Excelencia de Procesos, equipos internos",
    deliverables: [
      "Implementación de quick wins priorizados (3-5 procesos)",
      "Framework de KPIs + dashboards en vivo (fuentes, métricas, dueños, cadencia)",
      "Configuración de plataformas (BPM, ERP, CRM, dashboards) — desarrollo a medida cuando hace falta",
      "Coaching de 3-5 personas clave del equipo cliente",
      "Documentación de procesos (SOPs, runbooks)",
      "Sync semanal con liderazgo",
      "Handoff final con plan de sostenibilidad",
    ],
    highlights: [
      "Implementación de quick wins priorizados (3-5 procesos)",
      "Framework de KPIs + dashboards en vivo (fuentes, métricas, dueños, cadencia)",
      "Configuración de plataformas (BPM, ERP, CRM, dashboards) — desarrollo a medida cuando hace falta",
      "Coaching de 3-5 personas clave del equipo cliente",
      "Documentación de procesos (SOPs, runbooks)",
      "Sync semanal con liderazgo",
      "Handoff final con plan de sostenibilidad",
    ],
    notIncludes: [
      "Agentes de IA (eso es el Servicio 04)",
      "Reestructuración organizacional",
      "Compra de licencias de software o plataformas (costo del cliente)",
    ],
    framework: "Lean + Six Sigma + PMBOK para gobernanza del engagement.",
    price: "$80,000 – $150,000 USD (tarifa fija o retainer mensual)",
    duration: "12-16 semanas",
    prerequisite: "Diagnóstico de Procesos completado",
    whatNext:
      "Con procesos optimizados en producción, el siguiente paso es el Acelerador de IA (Servicio 04) para automatizar lo que ya está listo. O un Custom Delivery Pod (Paquete C) para software puntual.",
    icon: Wrench,
    category: "implementation",
  },
  {
    slug: "ai-accelerator",
    number: "04",
    title: "Acelerador de IA",
    tagline:
      "Agentes solo en flujos listos — con identidad, control humano y auditoría.",
    shortDescription:
      "Desplegamos agentes en procesos que ya tienen dueño, línea base y controles. Identidad, aprobación según riesgo, evaluación y traza de auditoría son parte del diseño, no una capa añadida después.",
    description:
      "Desplegamos 1-2 agentes o flujos en procesos que ya tienen dueño, línea base y un diseño TO-BE. Cada agente recibe un nivel de autonomía, identidad, permisos de herramientas, aprobación humana donde el riesgo lo exige, evaluación y traza de auditoría. Así el trabajo agéntico sobrevive en producción en vez de convertirse en otro piloto retirado.",
    forWhom: "COO + Head of Digital, o Director de Transformación",
    deliverables: [
      "1-2 procesos de punta a punta automatizados con agentes o flujos de IA",
      "Capa interna de orquestación y gobernanza cuando reduce el riesgo de entrega",
      "Framework de gobernanza: AI Control Tower, log de auditoría, checkpoints HITL",
      "Framework de eval (métricas, criterios, revisores)",
      "Runbooks operativos para el equipo cliente",
      "Plan de escala (qué proceso automatizar después y en qué orden)",
      "Sesión de handoff con equipo técnico + liderazgo",
    ],
    highlights: [
      "1-2 procesos de punta a punta automatizados con agentes o flujos de IA",
      "Capa interna de orquestación y gobernanza cuando reduce el riesgo de entrega",
      "Framework de gobernanza: AI Control Tower, log de auditoría, checkpoints HITL",
      "Framework de eval (métricas, criterios, revisores)",
      "Runbooks operativos para el equipo cliente",
      "Plan de escala (qué proceso automatizar después y en qué orden)",
      "Sesión de handoff con equipo técnico + liderazgo",
    ],
    notIncludes: [
      "Licencias de modelos o plataformas (OpenAI, Anthropic, etc. — costo del cliente)",
      "Implementación multi-año de plataforma",
      "Entrenamiento masivo de empleados (engagement aparte de change management)",
    ],
    framework:
      "Diseño de agentes + gobernanza + eval. Aplicado a las herramientas del cliente con controles human-in-the-loop.",
    price: "$60,000 – $120,000 USD tarifa fija",
    duration: "8-12 semanas",
    prerequisite: "Implementación de Procesos completada (procesos ya optimizados)",
    whatNext:
      "Después de 1-2 procesos en producción: expandir a más procesos (otro Acelerador), pasar a un retainer mensual de AI Ops, o cerrar con advisory anual.",
    icon: Sparkles,
    category: "ai",
  },
];

export const bundlesEs: BundleItem[] = [
  {
    slug: "agentic-readiness-sprint",
    number: "B-A",
    title: "Agentic Readiness Assessment",
    tagline:
      "Arquitectura empresarial en el piso operativo — antes de otro dólar en IA.",
    shortDescription:
      "Un engagement de entrada de 4–6 semanas: arquitectura empresarial, diagnóstico de procesos y una hoja de ruta corta de transformación operativa.",
    description:
      "El Agentic Readiness Assessment es cómo empezamos la transformación operativa. Arquitectura empresarial (TOGAF) se encuentra con BPMN y Lean en el piso — para que el liderazgo vea el modelo operativo con claridad antes de gastar en IA.",
    forWhom:
      "Empresas de servicios de 50-500 empleados que están creciendo, consolidando o sintiendo que la operación se rompe. COO, VP de Ops, Director de Delivery o CEO como sponsor.",
    deliverables: [
      "Mapa de stakeholders + drivers de negocio (visual)",
      "Documento de Architecture Vision (TOGAF Fase A)",
      "Arquitectura de negocio estado actual (TOGAF Fase B)",
      "Mapas AS-IS en BPMN 2.0 (1-3 procesos críticos)",
      "Informe Lean con cuellos de botella y desperdicio",
      "Diseños TO-BE (estado futuro)",
      "Quick wins priorizados en horizontes 30-60-90 días",
      "Hoja de ruta ejecutiva de 1 página firmada por C-level",
      "Informe ejecutivo consolidado (Fundación + Diagnóstico)",
      "1 presentación a liderazgo + memo de decisión",
      "Siguientes pasos recomendados (Implementación, Acelerador de IA, o pausa)",
    ],
    notIncludes: [
      "Implementación de los quick wins",
      "IA, agentes o automatización",
      "Configuración de herramientas",
      "Entrenamiento interno del equipo",
      "Cambios organizacionales o de headcount",
    ],
    engagementModel:
      "Tarifa fija. Dos hitos: 50% al kickoff, 50% al entregar la hoja de ruta. Ligado a outcome: si no se entregan los artefactos acordados, el pago final se ajusta.",
    price: "$20,000 – $40,000 USD tarifa fija",
    duration: "4-6 semanas",
    includesServices: ["Fundación Operativa", "Diagnóstico de Procesos"],
    whatNext:
      "Tres caminos: (1) el cliente implementa solo con la hoja de ruta, (2) nos contrata para Implementación de Procesos (Servicio 03), o (3) decide que no es el momento y retoma después.",
    icon: Rocket,
    category: "entry",
  },
  {
    slug: "agentic-operations-build",
    number: "B-B",
    title: "Agentic Operations Build",
    tagline:
      "Cambie cómo corre el trabajo. Después póngale IA.",
    shortDescription:
      "El programa completo de transformación que cubre las cuatro capacidades en secuencia. Un equipo, una propuesta, un outcome.",
    description:
      "El Agentic Operations Build es el journey completo: Fundación Operativa, Diagnóstico, Implementación y Acelerador de IA, entregados en secuencia como un solo programa. Un equipo, una propuesta, un outcome.",
    forWhom:
      "Empresas de 200-2.000 empleados en transformación activa (escala, post-adquisición, presión de margen, disrupción de IA). CEO, COO o Board como sponsor.",
    deliverables: [
      "Todo lo del Agentic Readiness Assessment",
      "Implementación de los quick wins priorizados (3-5 procesos)",
      "Framework de KPIs + dashboards en producción",
      "Configuración de plataformas (BPM, ERP, CRM, dashboards) incluyendo desarrollo a medida",
      "Coaching de 3-5 personas clave del equipo cliente",
      "1-2 procesos de punta a punta automatizados con IA",
      "Controles de orquestación y gobernanza cuando reducen el riesgo de entrega",
      "Framework de gobernanza: AI Control Tower, log de auditoría, checkpoints HITL",
      "Framework de eval + runbooks operativos",
      "Documentación completa (SOPs, runbooks, docs de gobernanza)",
      "Plan de sostenibilidad",
    ],
    notIncludes: [
      "Licencias de modelos o plataformas (costo del cliente)",
      "Cambios de headcount del cliente (no contratamos ni despedimos a nadie)",
      "Implementación multi-año de plataforma",
      "Cambios de compensación o beneficios del equipo cliente",
    ],
    engagementModel:
      "Tarifa fija o retainer mensual. Pago por hito. Ligado a outcome: cada hito tiene criterios de aceptación.",
    price: "$170,000 – $340,000 USD",
    duration: "9-12 meses",
    includesServices: [
      "Fundación Operativa",
      "Diagnóstico de Procesos",
      "Implementación de Procesos",
      "Acelerador de IA",
    ],
    whatNext:
      "Opciones: retainer mensual de advisory, expansiones adicionales de IA, o handoff limpio con el equipo cliente capaz de sostener la transformación.",
    icon: Factory,
    category: "full",
  },
  {
    slug: "custom-delivery-pod",
    number: "B-C",
    title: "Custom Delivery Pod",
    tagline:
      "Cuando el proceso necesita un sistema, lo construimos. Usted lo posee.",
    shortDescription:
      "El pod de construcción para cuando la implementación requiere software a medida. Nosotros lideramos; la red de partners entrega. Usted posee el código, la IP y el resultado.",
    description:
      "Cuando la solución correcta a un problema de proceso es software a medida, lo construimos. Lideramos el engagement como PM y arquitectos. Nuestra red de partners entrega el código. Usted posee el resultado.",
    forWhom:
      "Clientes que ya completaron un Readiness Assessment o un Operations Build, o que llegan con un requerimiento técnico claro. Ejemplos: integración, dashboards, módulos sobre plataformas existentes, automatización con agentes.",
    deliverables: [
      "Software funcionando en producción (integración, dashboard, módulo, automatización)",
      "Código fuente completo en su repositorio (GitHub, GitLab, etc.)",
      "Documentación técnica (arquitectura, despliegue, mantenimiento)",
      "Suite de tests automatizados (unitarios + integración)",
      "Sesión de handoff grabada + soporte post-lanzamiento",
    ],
    notIncludes: [
      "Mantenimiento continuo (engagement aparte)",
      "Respuesta a incidentes de producción (engagement aparte)",
      "Ownership multi-año de la plataforma",
    ],
    engagementModel:
      "Tarifa fija por proyecto, acotada por output, no por horas.",
    price: "$25,000 – $100,000 USD por proyecto (tarifa fija)",
    duration: "4-16 semanas según alcance",
    includesServices: [],
    whatNext:
      "Después de la entrega: retainer de mantenimiento, expansión a sistemas adyacentes, o handoff a su equipo interno de ingeniería.",
    icon: Code2,
    category: "follow-on",
  },
];

export const industriesEs: Industry[] = [
  {
    slug: "media-entertainment",
    name: "Media",
    icon: Film,
    headline: "Si produce contenido, la operación detrás es el negocio.",
    description:
      "Los deadlines no esperan un proceso limpio. Vendors, regiones, cambios de último minuto — si produce contenido a escala, la operación detrás del corte es lo que realmente sale. Hemos vivido esa sala: coordinación de producción, redes de vendors y los handoffs que deciden si el trabajo sale a tiempo.",
    painPoints: [
      "Producción de contenido a escala con presión crítica de time-to-market",
      "Gestión de vendors y coordinación de equipos distribuidos",
      "Operaciones multi-país y multi-idioma",
      "Escalar sin perder calidad",
    ],
    challenges: [
      "Coordinar deadlines creativos con SLAs operativos",
      "SLAs de vendors que se desvían sin gobernanza",
      "Transferencia de conocimiento cuando rotan los equipos",
    ],
    whyWe:
      "Hemos estado en el piso de producción, no en una slide sobre él. Más de 5 años coordinando redes de vendors multi-región y entregando bajo deadlines creativos. Hablamos producción, cambios de alcance y SLAs de vendors — porque nos tocó.",
    credential:
      "Disney: portafolio de USD 50M+, 10% de crecimiento del portafolio, USD 15M+ de cuenta directa.",
    servicesUsed: ["Fundación Operativa", "Implementación de Procesos"],
    services: ["Fundación Operativa", "Implementación de Procesos"],
    metrics: [
      { label: "Años dentro de operaciones de producción", value: "5+" },
      { label: "Engagement de entrada típico", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Rediseño de gestión de vendors",
        description:
          "Reemplazar la coordinación ad-hoc con un proceso gobernado, KPIs y cadencia de revisión.",
      },
      {
        title: "Modelo operativo de entrega multi-región",
        description:
          "Estandarizar cómo los equipos distribuidos hacen handoff, con SLAs y rutas de escalamiento.",
      },
    ],
    buyer: "COO, VP de Producción, Head of Operations, Director de Post-Producción",
    workflows: [
      "Gestión de vendors y gobernanza de SLAs",
      "Handoffs de producción multi-región",
      "Control de cambios de alcance bajo deadlines creativos",
      "Coordinación de time-to-market entre vendors",
    ],
    industryServices: [
      {
        title: "Coordinación de producción",
        icon: Film,
        description:
          "El calendario, el corte, el handoff. Convertimos la producción en un proceso que la sala puede correr — no un hilo de llamadas de último minuto.",
      },
      {
        title: "Vendors y SLAs",
        icon: Users,
        description:
          "Quién llega tarde, quién se desvía, quién es dueño del siguiente paso. Los vendors tienen cadencia, no un spreadsheet que nadie abre.",
      },
      {
        title: "Entrega multi-región",
        icon: Network,
        description:
          "El trabajo que cruza países e idiomas necesita un solo modelo operativo. Diseñamos el handoff para que la calidad no caiga en la frontera.",
      },
      {
        title: "Alcance bajo deadline",
        icon: Target,
        description:
          "Lo creativo cambia. El air date no. Ponemos control de alcance para que la operación igual pueda salir.",
      },
      {
        title: "IA en producción con dueño",
        icon: Sparkles,
        description:
          "Transcripción, logging, status — solo en flujos con dueño y auditoría. Nunca en un proceso que nadie corre.",
      },
    ],
  },
  {
    slug: "tech-services-latam",
    name: "Tecnología",
    icon: Cpu,
    headline:
      "Si vende tecnología o servicios, el modelo de delivery es el producto.",
    description:
      "Lo ha sentido: presión de margen, clientes preguntando si la IA puede hacer el trabajo, calidad que se resbala al escalar. Si corre una operación de tecnología o servicios, el modelo de delivery es el producto. Lo hemos corrido desde adentro — utilization, escalamientos, CSAT — y sabemos dónde se rompe de verdad.",
    painPoints: [
      "Compresión de margen cuando bajan las tarifas y la IA reshapea el delivery",
      "Clientes preguntando si el trabajo se puede hacer con IA",
      "Escalar delivery sin perder calidad",
      "Parecerse a cualquier otro shop del mercado",
    ],
    challenges: [
      "Destacarse cuando el mercado lo trata como intercambiable",
      "Compresión de margen cuando bajan las tarifas de delivery",
      "Disrupción de IA sobre modelos tradicionales de delivery",
    ],
    whyWe:
      "Hicimos carrera dentro de esta industria — Globant, delivery en Disney, operaciones en Avanto. Utilization, margen, CSAT, escalamientos. Hablamos revenue y delivery, no solo proceso.",
    credential:
      "Globant: 5 años, portafolio de USD 50M+. Avanto: 6 programas de delivery simultáneos.",
    servicesUsed: [
      "Fundación Operativa",
      "Diagnóstico de Procesos",
      "Acelerador de IA",
    ],
    services: [
      "Fundación Operativa",
      "Diagnóstico de Procesos",
      "Acelerador de IA",
    ],
    caseStudySlug: "avanto-operations",
    metrics: [
      { label: "Programas de delivery simultáneos en Avanto", value: "6" },
      { label: "Ingenieros gestionados en roles de delivery", value: "50+" },
      { label: "Engagement de entrada típico", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Unificación de gobernanza de delivery",
        description:
          "Consolidar la gobernanza de delivery de varios programas bajo un solo PMO con KPIs compartidos.",
      },
      {
        title: "Automatización con IA de ops internas",
        description:
          "Aplicar agentes a ops internas (recruiting, HR, finance) para liberar margen a los equipos de delivery.",
      },
      {
        title: "Defensa de margen bajo presión de precio",
        description:
          "Identificar y quitar desperdicio operativo para defender margen cuando comprimen las tarifas.",
      },
    ],
    buyer: "COO, VP de Operaciones, Director de Delivery, CEO de firma de servicios",
    workflows: [
      "Gobernanza de delivery en programas paralelos",
      "Cadencia operativa de utilization, margen y CSAT",
      "Manejo de escalamientos y excepciones",
      "Staffing, recruiting y handoffs de ops internas",
    ],
    industryServices: [
      {
        title: "Gobernanza de delivery",
        icon: Shield,
        description:
          "Una forma de correr programas, una forma de escalar issues, un set de números que liderazgo sí mira.",
      },
      {
        title: "Cadencia de margen y utilization",
        icon: PieChart,
        description:
          "El ritmo semanal: quién está billable, qué se resbala, dónde se fuga el margen — a tiempo de actuar.",
      },
      {
        title: "Escalamientos que cierran",
        icon: Zap,
        description:
          "Las excepciones necesitan dueño, reloj y camino de vuelta al proceso. Instalamos ese camino.",
      },
      {
        title: "Staffing y ops internas",
        icon: Users,
        description:
          "Recruiting, staffing, finance — el trabajo alrededor del delivery que se come el delivery.",
      },
      {
        title: "IA en delivery con dueño",
        icon: Bot,
        description:
          "Status, staffing, ops internas — automatizado solo cuando el proceso ya tiene dueño. No automatizamos el caos.",
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports",
    icon: Trophy,
    headline: "Si el score es el producto, la operación no puede fallar en público.",
    description:
      "Termina un round. Empieza un protest. La sala está alta y el resultado tiene que sostenerse. Reconstruimos la operación de scoring detrás de combat sports — jurados, resultados, auditoría — para que la federación pueda pararse detrás del fallo.",
    painPoints: [
      "Scoring que depende de papel, memoria o una mesa que nadie puede auditar",
      "Protestas sin rastro de quién puntó qué, cuándo",
      "Caos el día del evento: mesas, delays, resultados que llegan tarde al tatami",
      "Software que parece tablero y se comporta como spreadsheet",
    ],
    challenges: [
      "Hacer defendible un fallo cuando la sala ya se fue",
      "Correr un evento sin que la mesa de resultados sea el cuello de botella",
      "Darles a los oficiales un sistema que sí van a usar bajo presión",
    ],
    whyWe:
      "Construimos y operamos la capa de scoring de una federación de combat sports — no una app de fans, el sistema que corren los jurados cuando el combate está vivo.",
    credential:
      "Plataforma de jurados y resultados en vivo para una federación de combat sports. Nombre del cliente reservado.",
    servicesUsed: ["Diagnóstico de Procesos", "Implementación de Procesos", "Custom Delivery Pod"],
    services: ["Diagnóstico de Procesos", "Implementación de Procesos", "Custom Delivery Pod"],
    caseStudySlug: "combat-sports-scoring",
    metrics: [
      { label: "Sistema de scoring en eventos en vivo", value: "En vivo" },
      { label: "Engagement de entrada típico", value: "Pod" },
    ],
    useCases: [
      {
        title: "Jurado bajo presión",
        description:
          "Capturar cada score cuando pasa, con identidad, timestamp y camino de revisión.",
      },
      {
        title: "Resultados que la federación puede publicar",
        description:
          "De la mesa al tablero sin un canal paralelo de WhatsApp y papel.",
      },
    ],
    buyer: "Operaciones de federación, directores de evento, leads de sports-tech",
    workflows: [
      "Jurado y scoring en vivo",
      "Protestas y revisión de resultados",
      "Mesa de resultados el día del evento",
      "Oficiales, mesas y run-of-show",
    ],
    industryServices: [
      {
        title: "Operación del torneo",
        icon: Trophy,
        description:
          "Llaves, mesas, oficiales, el reloj. Mapeamos el evento como proceso para que el día de combate se corra, no se improvise.",
      },
      {
        title: "Sistemas de jurado y scoring",
        icon: ClipboardCheck,
        description:
          "El producto es el score. Construimos el sistema que los jurados usan en vivo — claro, rápido y difícil de disputar.",
      },
      {
        title: "Resultados, protestas, auditoría",
        icon: FileText,
        description:
          "Quién puntó, cuándo, bajo qué regla. Un protest tiene un archivo, no una memoria.",
      },
      {
        title: "Runbooks del día del evento",
        icon: Map,
        description:
          "Qué pasa si falla una mesa, llega tarde un jurado, se disputa un resultado. Escrito antes del primer combate.",
      },
      {
        title: "IA que nunca da el fallo",
        icon: Shield,
        description:
          "Replay, logging, asistencia — nunca el score final sin un humano. El oficial sigue siendo el dueño.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: Store,
    headline: "Si lo hace y lo vende el mismo día, la operación es la marca.",
    description:
      "El retail de especialidad vive o muere en el mostrador: inventario, receta, turno, la persona delante. Reconstruimos esa operación — no un chatbot de lealtad, el trabajo que sí saca el vaso.",
    painPoints: [
      "Quiebres de stock y desperdicio en la misma semana",
      "Recetas y lotes que viven en la cabeza de alguien",
      "Turnos que no ven lo que el siguiente turno necesita",
      "Una capa 'digital' que nunca toca cómo corre la tienda",
    ],
    challenges: [
      "Sostener calidad cuando la tienda está llena",
      "Inventario que coincide con lo que realmente se vende",
      "Un journey de cliente que no rompe el mostrador",
    ],
    whyWe:
      "Operamos dentro de un retailer de bebidas de especialidad — producción, ops de tienda, el camino del lote al mostrador. Conocemos esa sala porque estuvimos parados ahí.",
    credential:
      "Operaciones de tienda y producción para una marca de retail de especialidad. Nombre del cliente reservado.",
    servicesUsed: ["Fundación Operativa", "Implementación de Procesos", "Custom Delivery Pod"],
    services: ["Fundación Operativa", "Implementación de Procesos", "Custom Delivery Pod"],
    caseStudySlug: "specialty-retail-ops",
    metrics: [
      { label: "Operaciones de tienda y producción", value: "En vivo" },
      { label: "Engagement de entrada típico", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Mostrador y producción en un modelo",
        description:
          "Qué se hace, qué se vende, qué queda — una cadencia que la tienda puede correr.",
      },
      {
        title: "Inventario que coincide con el menú",
        description:
          "Reposición desde el consumo real, no desde un guess al cierre.",
      },
    ],
    buyer: "Founders, leads de operaciones de tienda, operadores de marca retail",
    workflows: [
      "Operación de tienda y handoff de turno",
      "Inventario y reposición",
      "Receta, lote y calidad",
      "Journey del cliente en el mostrador",
    ],
    industryServices: [
      {
        title: "Operación de tienda",
        icon: Store,
        description:
          "Abrir, turno, cerrar. Convertimos la tienda en un proceso que el equipo puede correr sin el founder en el piso.",
      },
      {
        title: "Inventario y reposición",
        icon: Database,
        description:
          "Qué salió del anaquel, qué tiene que volver, antes de que se acabe lo que la gente vino a buscar.",
      },
      {
        title: "Receta, lote y calidad",
        icon: ClipboardCheck,
        description:
          "El producto se hace en sitio. La receta necesita dueño, registro de lote y forma de sostener la línea cuando hay fila.",
      },
      {
        title: "El journey en el mostrador",
        icon: MessageSquare,
        description:
          "Pedir, esperar, pagar, volver. Arreglamos el camino que el cliente sí camina — no una campaña encima de un mostrador roto.",
      },
      {
        title: "Demanda solo cuando el proceso tiene dueño",
        icon: TrendingUp,
        description:
          "Forecast y asistencia cuando inventario y producción ya tienen dueño. No pondremos IA en una tienda que nadie puede correr.",
      },
    ],
  },
];

export const caseStudiesEs: CaseStudy[] = [
  {
    slug: "avanto-operations",
    title: "Seis programas. Un modelo operativo. Sin caos.",
    client: "Avanto — servicios de tecnología",
    industry: "Tecnología",
    href: "/case-studies/avanto-operations",
    image: "/industries/tech-services-latam.jpg",
    context:
      "Imagine correr seis programas de delivery a la vez — clientes distintos, equipos distribuidos, stakeholders senior mirando los números. Ahí estaba Avanto. El trabajo crecía. El modelo operativo no.",
    whatWeDid: [
      "Mapeamos la operación de delivery completa (procesos, roles, tools, gobernanza)",
      "Diseñamos el modelo unificado de delivery — cómo operan los programas, cómo se mide el éxito, cómo escalan los issues",
      "Integramos 6 programas simultáneos bajo un solo framework de gobernanza",
      "Establecimos cadencia de revisión de liderazgo y reporting consistente",
      "Diseñamos el framework de KPIs operativos (utilization, margen, CSAT, on-time delivery)",
    ],
    outcomes: [
      { label: "Programas de delivery bajo un modelo operativo", value: "6" },
      { label: "Gobernanza de delivery unificada", value: "1 PMO" },
      { label: "Cadencia operativa compartida", value: "Semanal" },
      { label: "Sistema de KPIs de utilization, margen y CSAT", value: "En vivo" },
    ],
    stackApplied: [
      "TOGAF para alinear estrategia y operación",
      "BPMN para mapear procesos de delivery",
      "Lean + Six Sigma para identificar desperdicio",
      "PMBOK para el framework de gobernanza",
    ],
    note: "Este caso describe escala operativa, no integración post-adquisición.",
  },
  {
    slug: "combat-sports-scoring",
    title: "El score tiene que sostenerse cuando la sala está alta.",
    client: "Una federación de combat sports",
    industry: "Sports",
    href: "/case-studies/combat-sports-scoring",
    image: "/industries/sports.jpg",
    context:
      "Termina un combate. Empieza un protest. Si el score vive en papel y memoria, la federación no puede pararse detrás del fallo. Necesitaban que la operación de jurados fuera tan seria como el deporte.",
    whatWeDid: [
      "Mapeamos el día de combate como proceso: oficiales, mesas, scoring, resultados, protestas",
      "Diseñamos el flujo de jurado para que cada score tenga dueño, timestamp y rastro",
      "Construimos el sistema de scoring en vivo que corren los jurados — no una app de fans, el sistema en la mesa",
      "Instalamos el camino de protesta y resultados para que un desafío tenga archivo, no una conversación",
      "Escribimos el runbook del evento: qué pasa si falla una mesa o se disputa un resultado",
    ],
    outcomes: [
      { label: "Scoring en eventos en vivo", value: "En vivo" },
      { label: "Auditoría en cada score", value: "Sí" },
      { label: "Fallo final", value: "Humano" },
      { label: "Teatro de app de fans", value: "Ninguno" },
    ],
    stackApplied: [
      "BPMN para mapear el proceso del día del evento",
      "Software de scoring a medida, propiedad del cliente",
      "Humano en el loop en cada fallo oficial",
    ],
    note: "Nombre del cliente reservado. Combat sports. Jurado y resultados en vivo.",
  },
  {
    slug: "specialty-retail-ops",
    title: "La marca es lo que pasa en el mostrador.",
    client: "Una marca de retail de especialidad",
    industry: "Retail",
    href: "/case-studies/specialty-retail-ops",
    image: "/industries/retail.jpg",
    context:
      "Lo hacen y lo venden el mismo día. Cuando inventario, receta y turno viven en la cabeza de alguien, la tienda no escala sin el founder en el piso.",
    whatWeDid: [
      "Mapeamos la ops de tienda de abrir a cerrar: producción, mostrador, inventario, handoff",
      "Pusimos dueños en receta, lote y calidad para que el producto se sostenga cuando hay fila",
      "Diseñamos la reposición desde lo que realmente se vende — no desde un guess al cierre",
      "Instalamos la cadencia de turno para que el siguiente equipo vea lo que dejó el anterior",
      "Dejamos un sistema que la tienda corre sin nosotros en la sala",
    ],
    outcomes: [
      { label: "Modelo de tienda y producción", value: "Uno" },
      { label: "Dueño de receta y lote", value: "Nombrado" },
      { label: "Reposición", value: "Desde ventas" },
      { label: "Capa de chatbot de lealtad", value: "Ninguna" },
    ],
    stackApplied: [
      "Cadencia operativa de tienda y producción",
      "Mapas de proceso para mostrador, inventario y lote",
      "Herramientas de ops a medida, propiedad del cliente",
    ],
    note: "Nombre del cliente reservado. Retail de especialidad. Operaciones de tienda y producción.",
  },
];

export const aboutEs: AboutContent = {
  tagline: "Excelencia operativa, impulsada por IA",
  subtagline:
    "Estrategia → Operación → IA. El journey integrado para empresas que necesitan operar mejor antes de escalar.",
  who: "Si un proceso lo está frenando, ese es el trabajo que hacemos. Alineamos estrategia, operación y tecnología — en ese orden — antes de tocar IA.",
  trackRecord:
    "Nuestro equipo pasó 5+ años dentro de Disney y Globant gestionando portafolios de delivery de hasta USD 50M+ con equipos de 50+ ingenieros. Crecimos de PM a Director of Operations en cuatro promociones. Hoy operamos Avanto y agentbiz.io en paralelo.",
  credentials:
    "Maestría en Dirección de Procesos Estratégicos (UNIR) · PMP · SAFe 6 · CSM · MBA · Ingeniero en Mecatrónica.",
  pointOfView:
    "La IA crea valor duradero cuando se sienta sobre un proceso con dueño claro, datos confiables, desempeño medible y controles definidos. Primero la operación. Después la IA.",
  whoHires:
    "Líderes que poseen la operación y necesitan que corra mejor antes de seguir escalando.",
  howWeWork:
    "Engagements cortos, tarifa fija, con un outcome claro. No vendemos horas — entregamos una hoja de ruta, una implementación o un sistema. Si no entregamos el outcome, no cobramos el último pago.",
  foundersBio: {
    name: "Jonathan Pardo Fuentes",
    title: "Director of Operations y Founder",
    summary:
      "Quince años liderando delivery y operaciones para clientes enterprise. Empezó como ingeniero de software y creció por PM y Senior PM hasta Director of Operations. Lideró delivery en Disney, Globant y Avanto con equipos de 50+ ingenieros. Tiene Maestría en Dirección de Procesos Estratégicos (UNIR), PMP, SAFe 6, CSM y MBA.",
  },
};

export const buyerFaqsEs: BuyerFaq[] = [
  {
    question: "¿Qué obtenemos realmente al final del Readiness Assessment?",
    answer:
      "Una foto firmada de cómo corre la operación hoy, los 1-3 procesos que vale la pena arreglar primero, un diseño TO-BE y un memo de decisión. Usted sale sabiendo si implementar, automatizar o esperar — no con otra deck.",
  },
  {
    question: "¿Cómo eligen qué proceso empezar?",
    answer:
      "Partimos del constraint que el sponsor ya siente: el proceso que frena el crecimiento, quema margen o genera escalamientos. Volumen, ownership, calidad de datos y control importan más que lo 'AI-ready' que se vea una tool.",
  },
  {
    question: "¿Hay que pasar por las cuatro capacidades?",
    answer:
      "No. Usted elige una entrada — normalmente el Assessment. Si ya tiene el mapa, no repetimos ese trabajo. Igual no pondremos IA en un proceso que nadie posee.",
  },
  {
    question: "¿Y si ya tenemos documentación de estrategia y procesos?",
    answer:
      "La revisamos. Si está vigente, tiene dueño y se puede usar, no rehacemos el trabajo. Si es una deck que nadie opera, reconstruimos la capa operativa para que el siguiente paso tenga algo que implementar.",
  },
  {
    question: "¿Cuándo entra la IA al trabajo?",
    answer:
      "Cuando el proceso está claro: dueño, línea base, diseño TO-BE y controles. La IA es el acelerador, no el punto de partida. Así evitamos que los agentes amplifiquen una operación rota.",
  },
  {
    question: "¿Cómo manejan aprobaciones, excepciones y auditoría?",
    answer:
      "Cada flujo que implementamos tiene dueño, criterio de aceptación, ruta de excepción y un checkpoint humano donde el riesgo lo exige. La gobernanza es parte del diseño, no una capa que se añade después.",
  },
  {
    question: "¿Cómo miden si la operación mejoró?",
    answer:
      "Primero baselinamos el proceso: volumen, cycle time, errores, costo y riesgo. Luego acordamos qué significa 'mejor' antes de que cualquier cambio salga a vivo. Si no se puede medir, no lo afirmamos.",
  },
  {
    question: "¿Qué tiene que poner el equipo?",
    answer:
      "Un sponsor con autoridad, acceso a las personas que corren el proceso, y los sistemas o documentos que ese proceso ya usa. Nosotros hacemos el mapeo, el diseño y la facilitación. Su equipo sigue siendo el dueño.",
  },
];
