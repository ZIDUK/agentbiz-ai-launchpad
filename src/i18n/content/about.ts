import type { Locale } from "@/i18n/types";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface AboutContent {
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  missionTitle: string;
  missionBody: string;
  sequenceTitle: string;
  sequence: { title: string; description: string }[];
  valuesTitle: string;
  values: { title: string; description: string }[];
  industriesTitle: string;
  teamTitle: string;
  teamSubtitle: string;
  team: TeamMember[];
  ctaTitle: string;
  ctaBody: string;
}

const aboutEn: AboutContent = {
  headline: "We fix the operation first.",
  headlineHighlight: "Then we give it AI.",
  subtitle:
    "If you're scaling and the work is starting to slip, we help you see it, own it, and run it — before anyone sells you another tool.",
  missionTitle: "What we're here for",
  missionBody:
    "Make your operation runnable. Then accelerate it. Strategy, process, and governed AI — in that order — so what we build is something your team can actually run.",
  sequenceTitle: "The order we will not reverse",
  sequence: [
    {
      title: "Strategy",
      description:
        "We sit with the people who own the operation and name the 3–5 processes that actually need to change. No transformation without that list.",
    },
    {
      title: "Operations",
      description:
        "We map the work as it runs, put owners on it, and install the cadence the team can keep without us in the room.",
    },
    {
      title: "Then AI",
      description:
        "Only when the process is owned. Governed. The human still makes the call that matters. We will not put a model on chaos.",
    },
  ],
  valuesTitle: "How we work with you",
  values: [
    {
      title: "The operation before the tool",
      description: "We won't put AI on a process nobody owns. First we make the work clear, then we accelerate it.",
    },
    {
      title: "Governance from day one",
      description: "Approvals, audit trails, and human checkpoints are part of the design — not a layer added later.",
    },
    {
      title: "You own what we build",
      description: "The maps, the systems, the playbooks. Your repository. Your IP. Your team keeps the keys.",
    },
  ],
  industriesTitle: "Industries we've operated",
  teamTitle: "Who you'll work with",
  teamSubtitle:
    "Operators who've run delivery, production, scoring, and the counter — not a bench of rented heads.",
  team: [
    {
      name: "Operations & Architecture",
      role: "Strategy · Process · Delivery",
      bio: "We map how the work really runs, lock owners and controls, and design the operating model your team can sustain. Background inside Disney, Globant, and Avanto delivery.",
    },
    {
      name: "Build & Handoff",
      role: "Implementation · Software · Transfer",
      bio: "When the process needs a system, we build it and leave it in your hands — code, documentation, and a team that can run it without us in the room.",
    },
  ],
  ctaTitle: "Bring us the process that's costing you growth.",
  ctaBody:
    "Thirty minutes. One question. Yours.",
};

const aboutEs: AboutContent = {
  headline: "Primero arreglamos la operación.",
  headlineHighlight: "Después le ponemos IA.",
  subtitle:
    "Si está escalando y el trabajo empieza a resbalar, lo ayudamos a verlo, poseerlo y correrlo — antes de que alguien le venda otra herramienta.",
  missionTitle: "Para qué estamos",
  missionBody:
    "Dejar su operación lista para correrse. Después acelerarla. Estrategia, proceso e IA gobernada — en ese orden — para que lo que construimos sea algo que su equipo sí pueda operar.",
  sequenceTitle: "El orden que no vamos a invertir",
  sequence: [
    {
      title: "Estrategia",
      description:
        "Nos sentamos con quien posee la operación y nombramos los 3–5 procesos que de verdad hay que cambiar. Sin esa lista, no hay transformación.",
    },
    {
      title: "Operación",
      description:
        "Mapeamos el trabajo como corre, le ponemos dueños e instalamos la cadencia que el equipo puede sostener sin nosotros en la sala.",
    },
    {
      title: "Después IA",
      description:
        "Solo cuando el proceso tiene dueño. Gobernada. El humano sigue tomando la decisión que importa. No vamos a poner un modelo sobre el caos.",
    },
  ],
  valuesTitle: "Cómo trabajamos con usted",
  values: [
    {
      title: "La operación antes de la tool",
      description: "No pondremos IA en un proceso que nadie posee. Primero dejamos el trabajo claro, después lo aceleramos.",
    },
    {
      title: "Gobernanza desde el día uno",
      description: "Aprobaciones, auditoría y checkpoints humanos son parte del diseño — no una capa que se añade después.",
    },
    {
      title: "Usted posee lo que construimos",
      description: "Los mapas, los sistemas, los playbooks. Su repositorio. Su IP. Su equipo se queda con las llaves.",
    },
  ],
  industriesTitle: "Industrias que hemos operado",
  teamTitle: "Con quién va a trabajar",
  teamSubtitle:
    "Operadores que han corrido delivery, producción, scoring y el mostrador — no un banco de heads rentados.",
  team: [
    {
      name: "Operaciones y Arquitectura",
      role: "Estrategia · Proceso · Delivery",
      bio: "Mapeamos cómo corre el trabajo de verdad, fijamos dueños y controles, y diseñamos el modelo operativo que su equipo puede sostener. Experiencia dentro de Disney, Globant y Avanto.",
    },
    {
      name: "Build y Handoff",
      role: "Implementación · Software · Transferencia",
      bio: "Cuando el proceso necesita un sistema, lo construimos y se lo dejamos en las manos — código, documentación y un equipo que puede operarlo sin nosotros en la sala.",
    },
  ],
  ctaTitle: "Tráiganos el proceso que le está costando crecimiento.",
  ctaBody:
    "Treinta minutos. Una pregunta. La suya.",
};

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "es" ? aboutEs : aboutEn;
}

export interface TrustedClient {
  name: string;
  industry: string;
  /** Dark-theme logo (light ink on transparent). Path under /public. */
  logo?: string;
  /** Light-theme logo (dark ink on transparent). Falls back to `logo`. */
  logoLight?: string;
}

export const trustedClients: Record<Locale, TrustedClient[]> = {
  en: [
    {
      name: "Avanto",
      industry: "Technology",
      logo: "/clients/avanto.png",
      logoLight: "/clients/avanto-light.png",
    },
    { name: "Wigilabs", industry: "Technology", logo: "/clients/wigilabs.png" },
    {
      name: "Agentic Dream",
      industry: "Technology",
      logo: "/clients/agentic-dream.png",
      logoLight: "/clients/agentic-dream-light.png",
    },
    {
      name: "Momo Tea",
      industry: "Retail",
      logo: "/clients/momo-tea.png",
      logoLight: "/clients/momo-tea-light.png",
    },
    { name: "Seaman Paper", industry: "Retail", logo: "/clients/seaman-paper.png" },
    { name: "Telaclaims", industry: "Technology", logo: "/clients/telaclaims.png" },
    { name: "Daylight Transport", industry: "Logistics", logo: "/clients/daylight-transport.png" },
  ],
  es: [
    {
      name: "Avanto",
      industry: "Tecnología",
      logo: "/clients/avanto.png",
      logoLight: "/clients/avanto-light.png",
    },
    { name: "Wigilabs", industry: "Tecnología", logo: "/clients/wigilabs.png" },
    {
      name: "Agentic Dream",
      industry: "Tecnología",
      logo: "/clients/agentic-dream.png",
      logoLight: "/clients/agentic-dream-light.png",
    },
    {
      name: "Momo Tea",
      industry: "Retail",
      logo: "/clients/momo-tea.png",
      logoLight: "/clients/momo-tea-light.png",
    },
    { name: "Seaman Paper", industry: "Retail", logo: "/clients/seaman-paper.png" },
    { name: "Telaclaims", industry: "Tecnología", logo: "/clients/telaclaims.png" },
    { name: "Daylight Transport", industry: "Logística", logo: "/clients/daylight-transport.png" },
  ],
};

export const trustedIndustries = {
  en: ["Technology", "Media", "Sports", "Retail"],
  es: ["Tecnología", "Media", "Deportes", "Retail"],
};
