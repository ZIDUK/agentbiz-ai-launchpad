export type { InsightArticle } from "@/data/insights-content";

import type { InsightArticle } from "@/data/insights-content";

export const insightArticlesEs: InsightArticle[] = [
  {
    slug: "why-enterprise-ai-pilots-fail",
    title: "Puso IA en un proceso que nadie posee. Por eso murió el piloto.",
    menuLabel: "Por qué mueren los pilotos",
    excerpt:
      "El modelo funcionó en el demo. La operación no. Los pilotos fallan cuando no hay dueño, no hay baseline y no hay camino hacia el trabajo que la gente ya corre.",
    readTime: "6 min de lectura",
    publishedAt: "2026-03-01",
    tags: ["Estrategia", "Operación", "IA"],
    sections: [
      {
        heading: "El demo no es la operación",
        paragraphs: [
          "La mayoría de los pilotos de IA fallan por una razón aburrida. Nadie posee el proceso que el modelo debería acelerar. No hay baseline. No hay ruta de aprobación. El trabajo sigue viviendo en inboxes y canales laterales.",
          "Un equipo de producción empieza con un proceso que ya tiene volumen, un dueño nombrado y un número que se puede defender. Después decide qué puede tocar el modelo.",
        ],
      },
      {
        heading: "Primero arregle la operación",
        paragraphs: [
          "Estrategia, después operación, después IA. Invierta ese orden y automatiza el caos. Mapee el trabajo. Nombre al dueño. Instale la cadencia. Solo entonces póngale un modelo.",
          "La gobernanza no es una capa que se añade después del piloto. Aprobaciones, auditoría y checkpoints humanos van en el diseño del trabajo.",
        ],
      },
      {
        heading: "Qué hacer el lunes",
        paragraphs: [
          "Elija el proceso que le está costando crecimiento. Escriba quién lo posee. Escriba cómo se ve lo bueno. Si no puede hacer eso en una página, no está listo para IA — está listo para un mapa operativo.",
        ],
      },
    ],
  },
  {
    slug: "strategy-operations-then-ai",
    title: "Estrategia. Operación. Después IA. En ese orden, o no.",
    menuLabel: "La secuencia",
    excerpt:
      "TOGAF para alinear el trabajo. BPMN para verlo. Lean para sacar el desperdicio. IA solo cuando el proceso sobrevive un lunes sin usted en la sala.",
    readTime: "5 min de lectura",
    publishedAt: "2026-03-12",
    tags: ["Estrategia", "Operación", "Gobernanza"],
    sections: [
      {
        heading: "La secuencia es el producto",
        paragraphs: [
          "No vendemos un catálogo de tools. Vendemos un orden de trabajo. Alinear los pocos procesos que importan. Dejarlos listos para correrse. Después acelerarlos.",
          "Si la conversación de estrategia nunca nombra dueños, el trabajo de operaciones se traba. Si el trabajo de operaciones nunca nombra una cadencia, la IA no tiene dónde sentarse.",
        ],
      },
      {
        heading: "Métodos que sobreviven el piso",
        paragraphs: [
          "TOGAF mantiene estrategia y operación en la misma página. BPMN hace visible el trabajo. Lean saca el desperdicio antes de escalarlo. Nada de eso es un slide — es cómo corre la sala de verdad.",
          "Cuando construimos software, el cliente posee el repo. Cuando instalamos una cadencia, el cliente posee la reunión. La transferencia es el punto.",
        ],
      },
      {
        heading: "La IA como follow-on, no como primer movimiento",
        paragraphs: [
          "Si el proceso tiene dueño y se mide, la IA puede tomar volumen y dejar el criterio en el humano. Si no, está comprando un demo. Nosotros le decimos cuál de los dos tiene.",
        ],
      },
    ],
  },
  {
    slug: "governed-agents-human-in-the-loop",
    title: "El humano sigue tomando la decisión que importa.",
    menuLabel: "El humano decide",
    excerpt:
      "Los agentes manejan volumen. Las personas manejan criterio. Si su diseño no puede decir quién decide cuando la sala está ruidosa, no está listo para producción.",
    readTime: "5 min de lectura",
    publishedAt: "2026-02-15",
    tags: ["Gobernanza", "Agentes", "Operación"],
    sections: [
      {
        heading: "Volumen no es lo mismo que la llamada oficial",
        paragraphs: [
          "En una operación en vivo el score, la excepción, el reembolso, la contratación — alguien tiene que responder por eso. Los agentes pueden extraer, clasificar, redactar y enrutar. No deberían poseer la llamada que la sala va a protestar.",
          "Diseñe el escalamiento antes de escribir el prompt. Debajo de un umbral, va a una persona. Eso no es una limitación. Eso es el producto.",
        ],
      },
      {
        heading: "La auditoría es cómo se duerme",
        paragraphs: [
          "Cada acción necesita un archivo: input, output, quién la sobreescribió, cuándo. Eso es lo que permite a una federación sostener un score, a una tienda sostener un lote, a un equipo de delivery sostener un status.",
          "Si no puede reconstruir la decisión, no tiene un sistema gobernado. Tiene un chat.",
        ],
      },
      {
        heading: "Opérelo, o no lo lance",
        paragraphs: [
          "Déle al flujo un owner de operaciones, no solo un sponsor de ingeniería. Revise calidad, excepciones y costo en una cadencia. Los agentes gobernados se operan. No se lanzan y se olvidan.",
        ],
      },
    ],
  },
];
