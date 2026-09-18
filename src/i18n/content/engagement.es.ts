import { Code2, Factory, Rocket } from "lucide-react";
import type { EngagementDetail } from "@/data/engagement-content";

export type { EngagementDetail } from "@/data/engagement-content";

export const engagementDetailsEs: EngagementDetail[] = [
  {
    slug: "agentic-readiness-sprint",
    title: "Agentic Readiness Assessment",
    eyebrow: "Paquete de entrada",
    shortDescription:
      "Arquitectura empresarial en el piso operativo — antes de otro dólar en IA.",
    icon: Rocket,
    headline:
      "La transformación operativa empieza aquí: arquitectura empresarial, mapas de proceso y una hoja de ruta firmada en 4–6 semanas.",
    description:
      "El Agentic Readiness Assessment es cómo empezamos la transformación operativa. Arquitectura empresarial (TOGAF) se encuentra con BPMN y Lean en el piso — para que el liderazgo vea el modelo operativo con claridad antes de gastar en IA.",
    whatItIs:
      "Un engagement de 4–6 semanas que convierte la arquitectura empresarial en algo que el COO puede correr: alineación de stakeholders, un mapa operativo del estado actual y una hoja de ruta priorizada. El menor compromiso para empezar; el camino más claro para decidir qué construir después.",
    principle:
      "Transformación operativa = el resultado. Arquitectura empresarial = el método. La IA espera hasta que la operación lo aguante.",
    capabilities: [
      {
        title: "Arquitectura empresarial (TOGAF Fase A+B)",
        description:
          "Mapa de stakeholders, drivers de negocio, Architecture Vision y arquitectura de negocio estado actual — firmados por C-level.",
      },
      {
        title: "Diagnóstico operativo (BPMN 2.0)",
        description:
          "3–5 procesos críticos mapeados en BPMN, AS-IS y TO-BE. Auditoría Lean de cuellos de botella y desperdicio.",
      },
      {
        title: "Hoja de ruta de transformación",
        description:
          "Quick wins de 30–60–90 días rankeados por impacto y esfuerzo. Hoja de ruta de 1 página para alineación de board.",
      },
    ],
    howInside: [
      "Un engagement de diagnóstico y diseño",
      "Sesiones de trabajo con liderazgo al kickoff, mitad y cierre",
      "Entrevistas con las personas que corren el proceso",
      "Sin código ni cambios de plataforma — solo diagnóstico y diseño",
      "Criterios de aceptación sobre la hoja de ruta y los artefactos de proceso",
    ],
    bestFor: [
      "Empresas de servicios de 50-500 empleados",
      "Creciendo, consolidando o sintiendo que la operación se rompe",
      "COO, VP de Ops o Director de Transformación como sponsor",
      "Presupuesto para un engagement de 2-3 meses, no una transformación de 12",
      "Quieren validar el journey antes de comprometerse al programa completo",
    ],
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
      "2 presentaciones a liderazgo (mitad + final)",
      "Siguientes pasos recomendados",
    ],
    outcomes: [
      "Una foto clara de cuáles 3-5 procesos importan más",
      "Un mapa visual de cómo corre la operación hoy",
      "Una hoja de ruta firmada por liderazgo para los próximos 90 días",
      "Justificación lista para board de la siguiente inversión",
    ],
    timeline: "4-6 semanas",
    includesServices: ["Fundación Operativa", "Diagnóstico de Procesos"],
    engagementSteps: [
      {
        title: "Discovery",
        description:
          "Entrevistas con stakeholders para mapear drivers, dolores y el proceso que frena el crecimiento.",
      },
      {
        title: "Architecture Vision",
        description:
          "Borrador de artefactos TOGAF Fase A/B y alineación de liderazgo sobre los 1-3 procesos que importan primero.",
      },
      {
        title: "Mapeo de procesos y auditoría Lean",
        description:
          "Mapear los procesos seleccionados en BPMN, AS-IS y TO-BE, y rankear el desperdicio.",
      },
      {
        title: "Hoja de ruta y memo de decisión",
        description:
          "Hoja de ruta ejecutiva de 1 página, siguiente paso recomendado y sesión de trabajo con liderazgo.",
      },
    ],
    faqs: [
      {
        question: "¿Es lo mismo que un diagnóstico típico de consultoría?",
        answer:
          "No. La mayoría produce un PowerPoint. Este engagement produce artefactos de arquitectura empresarial que se pueden correr: Architecture Vision TOGAF, mapas BPMN y auditoría Lean — no una slide sobre transformación.",
      },
      {
        question: "¿Qué pasa después del Assessment?",
        answer:
          "Tres caminos: (1) el cliente implementa solo con la hoja de ruta, (2) nos contrata para Implementación de Procesos (Servicio 03), o (3) pausa y retoma después.",
      },
      {
        question: "¿Esto es arquitectura empresarial o consultoría de IA?",
        answer:
          "Primero arquitectura empresarial y diseño operativo. IA solo cuando el proceso tiene dueño, baseline y camino a producción. Si quiere un piloto de IA sobre el caos, no somos el partner correcto.",
      },
      {
        question: "¿Cómo se estructura el pago?",
        answer:
          "Por hitos ligados a outcome: si no entregamos los artefactos acordados, el último pago se ajusta.",
      },
    ],
  },
  {
    slug: "agentic-operations-build",
    title: "Agentic Operations Build",
    eyebrow: "Journey completo",
    shortDescription:
      "Cambie cómo corre el trabajo. Después póngale IA.",
    icon: Factory,
    headline:
      "El journey completo: cuatro capacidades en secuencia, un equipo, un outcome.",
    description:
      "El Agentic Operations Build es el journey completo: Fundación Operativa, Diagnóstico, Implementación y Acelerador de IA, entregados en secuencia como un solo programa. Un equipo, una propuesta, un outcome.",
    whatItIs:
      "El programa de transformación para empresas en cambio activo. Corremos las cuatro capacidades en secuencia, con una propuesta, un equipo y un outcome. El Build es el camino para transformación seria — no pilotos ni decks, cambio real en producción.",
    principle:
      "Primero estrategia. Después operación. Luego IA. Ligado a outcome en todo el camino.",
    capabilities: [
      {
        title: "Fundación + Diagnóstico",
        description:
          "Alineación estratégica, mapeo de procesos y hoja de ruta priorizada — igual que el Readiness Assessment.",
      },
      {
        title: "Implementación de Procesos",
        description:
          "Ejecutar los quick wins. Configurar plataformas. Construir integraciones y dashboards cuando hace falta. Entrenar al equipo cliente.",
      },
      {
        title: "Acelerador de IA",
        description:
          "Aplicar agentes a los procesos ya optimizados. Gobernanza, eval y checkpoints HITL.",
      },
      {
        title: "Handoff y sostenibilidad",
        description:
          "Documentación, runbooks y plan de sostenibilidad. Retainer mensual de advisory opcional.",
      },
    ],
    howInside: [
      "Las cuatro capacidades entregadas como un solo programa",
      "Criterios de aceptación en cada etapa antes de pasar a la siguiente",
      "Si una etapa no se acepta, la rehacemos antes de seguir",
      "Un equipo de punta a punta — sin handoffs entre fases",
      "Su equipo se entrena para sostener los cambios cuando nos vamos",
    ],
    bestFor: [
      "Empresas de 200-2.000 empleados",
      "En transformación activa (escala, post-adquisición, presión de margen, disrupción de IA)",
      "CEO, COO o Board como sponsor (compromiso C-level)",
      "Listos para un programa de modelo operativo, no un workshop puntual",
      "Quieren un equipo, un outcome, una propuesta — no 4 engagements sueltos",
    ],
    deliverables: [
      "Todo lo del Agentic Readiness Assessment",
      "Implementación de los quick wins priorizados (3-5 procesos)",
      "Framework de KPIs + dashboards en producción",
      "Configuración de plataformas (BPM, ERP, CRM, dashboards) incluyendo desarrollo a medida",
      "Coaching de 3-5 personas clave del equipo cliente",
      "1-2 procesos de punta a punta automatizados con IA en producción",
      "Framework de gobernanza: AI Control Tower, log de auditoría, checkpoints HITL",
      "Framework de eval + runbooks operativos",
      "Documentación completa (SOPs, runbooks, docs de gobernanza)",
      "Plan de sostenibilidad",
    ],
    outcomes: [
      "Estrategia alineada con la operación",
      "Procesos operando distinto en producción (no slides)",
      "Dashboards de KPIs en vivo con cadencia de revisión",
      "1-2 procesos automatizados con IA y gobernanza",
      "Equipo interno capaz de sostener los cambios",
      "Un programa, un outcome, una factura",
    ],
    timeline: "9-12 meses",
    includesServices: [
      "Fundación Operativa",
      "Diagnóstico de Procesos",
      "Implementación de Procesos",
      "Acelerador de IA",
    ],
    engagementSteps: [
      {
        title: "Fundación + Diagnóstico",
        description:
          "Igual que el Readiness Assessment, corrido como Fase 1 del programa.",
      },
      {
        title: "Implementación",
        description:
          "Ejecutar los quick wins. Desplegar dashboards. Entrenar al equipo.",
      },
      {
        title: "Acelerador de IA",
        description:
          "Aplicar IA a los procesos ya optimizados. Construir gobernanza y eval.",
      },
      {
        title: "Handoff",
        description:
          "Documentación, runbooks y plan de sostenibilidad. El retainer opcional empieza aquí.",
      },
    ],
    faqs: [
      {
        question: "¿Por qué no comprar los servicios por separado?",
        answer:
          "El Build incluye un equipo único en todo el journey (sin handoffs) e hitos ligados a outcome. Para quien está comprometido con una transformación real, esta es la forma correcta.",
      },
      {
        question: "¿Y si solo necesitamos parte del journey?",
        answer:
          "Empiece por el Agentic Readiness Assessment. Si el resultado es positivo, el crédito del Assessment puede convertirse hacia un Build. No forzamos el compromiso completo al inicio.",
      },
      {
        question: "¿En qué se diferencia el Acelerador de IA de la consultoría típica de IA?",
        answer:
          "Nunca aplicamos IA a procesos rotos. Cuando llegamos al Acelerador, los procesos ya están optimizados. Por eso hay más adopción y menos fallos que en los enfoques 'IA primero'.",
      },
    ],
  },
  {
    slug: "custom-delivery-pod",
    title: "Custom Delivery Pod",
    eyebrow: "Siguiente paso",
    shortDescription:
      "Cuando el proceso necesita un sistema, lo construimos. Usted lo posee.",
    icon: Code2,
    headline:
      "El pod de construcción para cuando la implementación requiere software a medida.",
    description:
      "Cuando la solución correcta a un problema de proceso es software a medida, lo construimos. Lideramos el engagement como PM y arquitectos. Nuestra red de partners entrega el código. Usted posee el resultado. Tarifa fija por proyecto, acotada por output, no por horas.",
    whatItIs:
      "Un pod de delivery para software a medida, acotado por proyecto. Nosotros hacemos la arquitectura, el liderazgo de proyecto y el review de calidad. Nuestra red de partners entrega el código. Usted posee la IP, el source y el software en marcha.",
    principle: "Construido, no staffeado. Usted posee el resultado.",
    capabilities: [
      {
        title: "Arquitectura y liderazgo de proyecto",
        description:
          "Somos dueños de la arquitectura técnica, el plan y la barra de calidad. Lideramos el engagement de punta a punta.",
      },
      {
        title: "Red de delivery de partners",
        description:
          "Activamos partners de desarrollo vetados para el build. Usted no paga por nuestro bench.",
      },
      {
        title: "Alcance por output",
        description:
          "Acotamos por resultado, no por hora. Una integración, un dashboard, un módulo o un flujo automatizado — cada uno tiene un resultado definido.",
      },
      {
        title: "Transferencia total de IP",
        description:
          "Usted posee el código, la documentación y los runbooks. 100% de transferencia, sin vendor lock-in.",
      },
    ],
    howInside: [
      "Acotado como un proyecto de software discreto",
      "Definido por output, no por horas",
      "Discovery, build, test, deploy, handoff",
      "Nosotros lideramos; la red de partners entrega",
      "Soporte post-lanzamiento incluido en el handoff",
    ],
    bestFor: [
      "Clientes que ya completaron un Readiness Assessment o un Operations Build",
      "Clientes que llegan con un requerimiento técnico claro",
      "Necesitan una integración, dashboard, módulo o agente específico",
      "Quieren tarifa fija y ownership total de la IP, no staff aug",
    ],
    deliverables: [
      "Software funcionando en producción",
      "Código fuente completo en su repositorio",
      "Documentación técnica (arquitectura, despliegue, mantenimiento)",
      "Suite de tests automatizados (unitarios + integración)",
      "Sesión de handoff grabada + soporte post-lanzamiento",
    ],
    outcomes: [
      "Problema de software específico resuelto",
      "Ownership total de la IP, sin vendor lock-in",
      "El equipo interno puede mantener el build",
      "Base para expansiones adyacentes",
    ],
    timeline: "4-16 semanas según alcance",
    engagementSteps: [
      {
        title: "Alcance y propuesta",
        description:
          "Definimos el output, los criterios de aceptación y la tarifa fija. Usted firma antes de que empecemos.",
      },
      {
        title: "Build",
        description:
          "La red de partners construye. Nosotros lideramos, revisamos y testeamos.",
      },
      {
        title: "Deploy y handoff",
        description:
          "Deploy a producción. Sesión de handoff grabada. 1 semana de soporte.",
      },
    ],
    faqs: [
      {
        question: "¿En qué se diferencia de staff aug?",
        answer:
          "Staff aug le cobra por hora por personas. Nosotros cobramos por output (una integración funcionando, un dashboard desplegado, un proceso automatizado) a tarifa fija. Conoce el precio antes de empezar.",
      },
      {
        question: "¿Quién escribe el código?",
        answer:
          "Nuestra red de partners de desarrollo vetados. Nosotros lideramos el engagement, fijamos la arquitectura y somos dueños de la barra de calidad.",
      },
      {
        question: "¿Poseemos la IP?",
        answer:
          "Sí. 100%. El código, la documentación y los runbooks son suyos desde el día uno. Sin vendor lock-in ni frameworks propietarios que no pueda llevarse.",
      },
    ],
  },
];
