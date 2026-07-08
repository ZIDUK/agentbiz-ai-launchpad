export interface JourneyActVisual {
  coreX: number;
  coreY: number;
  blueMix: number;
  purpleMix: number;
  hexMul: number;
  streamMul: number;
  scanSpeed: number;
  sphereX: number;
  sphereScale: number;
}

export interface JourneyAct {
  id: number;
  selector: string;
  code: string;
  title: string;
  hud: string;
  subtitle: string;
  visual: JourneyActVisual;
}

export const JOURNEY_ACT_COUNT = 6;

/** Canonical home position — matches hero layout (right side, aligned with headline) */
export const CORE_HOME = {
  coreX: 0.77,
  coreY: 0.43,
  sphereX: 2.21,
} as const;

export const JOURNEY_ACTS: JourneyAct[] = [
  {
    id: 0,
    selector: "#hero",
    code: "BOOT",
    title: "INITIALIZING",
    hud: "INITIALIZING",
    subtitle: "Your AI mission control is coming online…",
    visual: {
      coreX: CORE_HOME.coreX,
      coreY: CORE_HOME.coreY,
      blueMix: 1,
      purpleMix: 0.35,
      hexMul: 0.85,
      streamMul: 0.7,
      scanSpeed: 1,
      sphereX: CORE_HOME.sphereX,
      sphereScale: 1,
    },
  },
  {
    id: 1,
    selector: "#challenge",
    code: "SCAN",
    title: "ENTERPRISE SCAN",
    hud: "SCANNING ENTERPRISE",
    subtitle: "Mapping where AI is stuck in your organization…",
    visual: {
      coreX: 0.7,
      coreY: 0.42,
      blueMix: 1.1,
      purpleMix: 0.45,
      hexMul: 1.2,
      streamMul: 1.1,
      scanSpeed: 1.2,
      sphereX: 1.9,
      sphereScale: 1.05,
    },
  },
  {
    id: 2,
    selector: "#strategic-focus",
    code: "DIAGNOSE",
    title: "GAP ANALYSIS",
    hud: "ANALYZING GAPS",
    subtitle: "Identifying what production AI actually requires…",
    visual: {
      coreX: 0.62,
      coreY: 0.44,
      blueMix: 0.85,
      purpleMix: 1.15,
      hexMul: 1,
      streamMul: 1,
      scanSpeed: 1,
      sphereX: 1.5,
      sphereScale: 1.12,
    },
  },
  {
    id: 3,
    selector: "#workflow",
    code: "ARCHITECT",
    title: "SYSTEM DESIGN",
    hud: "DESIGNING SYSTEM",
    subtitle: "Architecting workflows your team can own…",
    visual: {
      coreX: 0.55,
      coreY: 0.43,
      blueMix: 1,
      purpleMix: 1,
      hexMul: 1.15,
      streamMul: 0.9,
      scanSpeed: 0.9,
      sphereX: 1.1,
      sphereScale: 1.2,
    },
  },
  {
    id: 4,
    selector: "#resources-preview",
    code: "INTEL",
    title: "KNOWLEDGE SYNC",
    hud: "SYNCING KNOWLEDGE",
    subtitle: "Loading playbooks, insights, and proof points…",
    visual: {
      coreX: 0.5,
      coreY: 0.41,
      blueMix: 1.05,
      purpleMix: 0.9,
      hexMul: 0.95,
      streamMul: 1.35,
      scanSpeed: 1.5,
      sphereX: 0.75,
      sphereScale: 1.15,
    },
  },
  {
    id: 5,
    selector: "#contact",
    code: "ENGAGE",
    title: "READY TO CONNECT",
    hud: "READY — CONNECT",
    subtitle: "Your engineering lead is one conversation away.",
    visual: {
      coreX: 0.48,
      coreY: 0.4,
      blueMix: 1.15,
      purpleMix: 1.1,
      hexMul: 1,
      streamMul: 0.8,
      scanSpeed: 0.85,
      sphereX: 0.45,
      sphereScale: 1.28,
    },
  },
];

export function getJourneyAct(chapter: number): JourneyAct {
  return JOURNEY_ACTS[Math.min(JOURNEY_ACTS.length - 1, Math.max(0, chapter))];
}

/** 1 at scroll top (hero), fades to 0 as the user leaves the first band */
export function getCoreHomeRelax(chapter: number, progress: number): number {
  if (chapter !== 0) return 0;
  const HOME_SCROLL_BAND = 0.05;
  return 1 - Math.min(1, progress / HOME_SCROLL_BAND);
}

export function getCoreHomePosition(): { x: number; y: number } {
  return { x: CORE_HOME.coreX, y: CORE_HOME.coreY };
}
