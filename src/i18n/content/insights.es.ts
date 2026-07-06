export type { InsightArticle } from "@/data/insights-content";

import type { InsightArticle } from "@/data/insights-content";

export const insightArticlesEs: InsightArticle[] = [
  {
    slug: "why-enterprise-ai-pilots-fail",
    title: "Por qué fallan los pilotos de IA empresarial — y qué hacen distinto los equipos de producción",
    excerpt:
      "La mayoría de las empresas han ejecutado experimentos de IA. Pocas han desplegado flujos gobernados que los equipos de operaciones realmente ejecutan. La brecha no es la calidad del modelo — es el diseño de entrega.",
    readTime: "6 min de lectura",
    publishedAt: "2026-03-01",
    tags: ["Estrategia", "Producción", "Gobernanza"],
    sections: [
      {
        heading: "La trampa del piloto es un problema de entrega",
        paragraphs: [
          "Los pilotos de IA empresarial suelen fallar por razones predecibles: sin integración con sistemas de registro, sin rutas de aprobación humana, sin KPIs de línea base y sin owner en operaciones. El modelo funciona en un demo. El flujo no funciona en producción.",
          "Los equipos de producción comienzan con un proceso de alto volumen, miden tiempo de ciclo y tasa de error antes de automatizar, y diseñan agentes como parte del modelo operativo — no como un chatbot lateral.",
        ],
      },
      {
        heading: "Gobernanza antes de escala",
        paragraphs: [
          "Legal y cumplimiento no son blockers cuando la gobernanza se diseña desde el inicio: acceso basado en roles, logs de auditoría, límites de datos y reglas de escalamiento. Esperar hasta después de construir garantiza retrasos.",
          "Las empresas que escalan IA tratan cada flujo como un producto — con owners, runbooks, monitoreo y una ruta hacia procesos adyacentes.",
        ],
      },
      {
        heading: "Qué hacer a continuación",
        paragraphs: [
          "Elija un flujo donde las horas manuales sean visibles y medibles. Defina qué automatiza la IA vs. qué aprueban los humanos. Lance a producción en semanas, no trimestres — y luego expanda con patrones reutilizables.",
        ],
      },
    ],
  },
  {
    slug: "governed-agents-human-in-the-loop",
    title: "Agentes gobernados: diseñando humano en el loop para operaciones empresariales",
    excerpt:
      "La autonomía sin controles genera riesgo. El exceso de control genera fricción. El diseño correcto da volumen a los agentes y criterio a los humanos.",
    readTime: "5 min de lectura",
    publishedAt: "2026-02-15",
    tags: ["Gobernanza", "Agentes", "Operaciones"],
    sections: [
      {
        heading: "Los agentes manejan volumen; los humanos manejan excepciones",
        paragraphs: [
          "En operaciones empresariales, el objetivo no es autonomía total — es throughput confiable con escalamiento claro. Los agentes extraen, clasifican, enrutan y redactan. Los humanos aprueban excepciones, casos límite y decisiones de alto riesgo.",
          "Diseñe rutas de escalamiento antes de escribir prompts de agentes. Si la confianza está por debajo del umbral, enrute a una cola — no adivine.",
        ],
      },
      {
        heading: "La auditabilidad es una funcionalidad",
        paragraphs: [
          "Cada acción del agente debe quedar registrada: input, output, versión del modelo, contexto de usuario e historial de overrides. Esto es lo que hace cómodos a los equipos de cumplimiento y lo que hace posible el debugging a escala.",
        ],
      },
      {
        heading: "Modelo operativo",
        paragraphs: [
          "Asigne un owner de operaciones, no solo un sponsor de ingeniería. Ejecute revisiones semanales de métricas de calidad, costo y tasa de excepciones. Los agentes gobernados se operan — no se despliegan y se olvidan.",
        ],
      },
    ],
  },
  {
    slug: "document-workflows-highest-roi-ai",
    title: "Flujos documento-a-decisión: el punto de partida con mayor ROI para IA empresarial",
    excerpt:
      "PDFs, emails y formularios aún impulsan la mayor parte del trabajo de back-office. Inteligencia documental más orquestación de flujos entrega ROI medible más rápido que productos de IA greenfield.",
    readTime: "5 min de lectura",
    publishedAt: "2026-02-01",
    tags: ["ROI", "Operaciones", "Document AI"],
    sections: [
      {
        heading: "Por qué documentos primero",
        paragraphs: [
          "Procesos intensivos en documentos — onboarding, reclamos, compras, cumplimiento — tienen inputs claros, pasos repetibles y tiempos de ciclo medibles. Eso hace el ROI visible para ejecutivos rápidamente.",
          "A diferencia de chatbots orientados al cliente, los flujos documentales internos no requieren UX conversacional perfecta. Requieren precisión, reglas de validación e integración con sistemas ERP/CRM.",
        ],
      },
      {
        heading: "Patrón de arquitectura",
        paragraphs: [
          "Ingesta → extracción → validación → enrutamiento → revisión humana (si aplica) → escritura en sistema de registro. Este patrón funciona en FinTech, administración de salud, logística y operaciones de campo en energía.",
        ],
      },
      {
        heading: "Medir el éxito",
        paragraphs: [
          "Rastree tiempo de ciclo, horas de revisión manual, tasa de error y costo por transacción antes y después del lanzamiento. Estas métricas resuenan con stakeholders COO y CFO — no con benchmarks de modelos.",
        ],
      },
    ],
  },
  {
    slug: "build-vs-buy-enterprise-ai",
    title: "Construir vs. comprar para IA empresarial: cuándo ganan los sistemas personalizados",
    excerpt:
      "Las funciones de IA SaaS son rápidas de probar y costosas de escalar. Los sistemas personalizados cuestan más al inicio y entregan ownership, profundidad de integración y flujos gobernados.",
    readTime: "7 min de lectura",
    publishedAt: "2026-01-20",
    tags: ["Estrategia", "Empresa", "Build vs Buy"],
    sections: [
      {
        heading: "Cuándo la IA SaaS es suficiente",
        paragraphs: [
          "Copilotos genéricos y add-ons de IA por seat funcionan para productividad individual — redactar emails, resumir reuniones. Rara vez reemplazan flujos operativos ligados a ERP, cumplimiento y reglas de negocio personalizadas.",
        ],
      },
      {
        heading: "Cuándo construir",
        paragraphs: [
          "Construya cuando el flujo es core para operaciones, requiere integración profunda, tiene necesidades estrictas de gobernanza, o cuando el pricing por seat superaría el costo de construcción a escala. El ownership de código y datos importa en industrias sensibles a IP.",
        ],
      },
      {
        heading: "Enfoque híbrido",
        paragraphs: [
          "Muchas empresas usan APIs de modelos aprobadas con orquestación, integraciones y controles personalizados — lo mejor de ambos mundos sin vendor lock-in en la capa de flujo.",
        ],
      },
    ],
  },
  {
    slug: "measuring-ai-roi-beyond-pilot",
    title: "Medir ROI de IA más allá del piloto: métricas que los ejecutivos confían",
    excerpt:
      "La precisión del modelo no convence al CFO. El tiempo de ciclo, costo por transacción y tasa de error sí. Cómo establecer baseline e informar impacto de IA en producción.",
    readTime: "6 min de lectura",
    publishedAt: "2026-03-15",
    tags: ["ROI", "Estrategia", "Operaciones"],
    sections: [
      {
        heading: "Comience con baselines operativos",
        paragraphs: [
          "Antes de automatizar, mida el flujo como corre hoy: horas por transacción, tasa de reproceso, incumplimientos de SLA y costo laboral fully loaded. Esos baselines son el dashboard ejecutivo — no conteos de tokens ni benchmarks de modelos.",
          "Elija un flujo con volumen visible. Documente el happy path y los cinco principales tipos de excepción. Ese alcance mantiene el ROI creíble y auditable.",
        ],
      },
      {
        heading: "Métricas que resuenan con la junta",
        paragraphs: [
          "Reducción de tiempo de ciclo, horas manuales evitadas, costo por caso y tasa de calidad/error son métricas que sobreviven escrutinio. Vincule cada una a un valor en dólares con supuestos conservadores.",
          "Reporte mensualmente con comparaciones antes/después. Incluya tasas de override humano — demuestran que la gobernanza funciona.",
        ],
      },
      {
        heading: "Evite métricas vanidad",
        paragraphs: [
          "Sesiones de chat, prompts enviados o scores genéricos de productividad rara vez justifican inversión enterprise. Si una métrica no conecta con P&L o reducción de riesgo, sáquela del resumen ejecutivo.",
        ],
      },
    ],
  },
  {
    slug: "integration-patterns-enterprise-agents",
    title: "Patrones de integración para agentes de IA enterprise",
    excerpt:
      "Los agentes fallan aislados. Los sistemas en producción necesitan conexiones confiables a ERP, CRM, ITSM y repositorios documentales — con reintentos, idempotencia y trazas de auditoría.",
    readTime: "6 min de lectura",
    publishedAt: "2026-03-22",
    tags: ["Arquitectura", "Integraciones", "Agentes"],
    sections: [
      {
        heading: "El agente orquesta, no es el sistema de registro",
        paragraphs: [
          "Los agentes leen, clasifican, redactan y enrutan. Los datos autoritativos permanecen en ERP, CRM o core banking. Las escrituras pasan por tablas de staging o APIs con gates de aprobación humana.",
          "Este patrón previene bases de datos shadow y mantiene cómodos a los equipos de cumplimiento.",
        ],
      },
      {
        heading: "Patrones que escalan",
        paragraphs: [
          "Ingesta event-driven desde webhooks y colas de mensajes. Handlers idempotentes para que reintentos no dupliquen registros. Dead-letter queues para excepciones. Logging estructurado con correlation IDs entre pasos del agente.",
          "Use los mismos estándares de integración para el flujo dos y el diez — no reinvente por proyecto.",
        ],
      },
      {
        heading: "Seguridad y acceso",
        paragraphs: [
          "Service accounts con mínimo privilegio. Secretos en vaults, no en prompts. Límites de datos por tenant para empresas multi-división. Cada llamada externa logueada con actor, hash de payload y resultado.",
        ],
      },
    ],
  },
];
