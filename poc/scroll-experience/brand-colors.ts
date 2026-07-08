/** AgentBiz brand palette — use glow* for holographic effects at high opacity */
export const BRAND = {
  blue: "#007bff",
  blueRgb: "0, 123, 255",
  purple: "#9333ea",
  purpleRgb: "147, 51, 234",
  blueHex: 0x007bff,
  purpleHex: 0x9333ea,
  dark: "#000000",
  darkRgb: "0, 0, 0",
  mid: "#060a14",
  midRgb: "6, 10, 20",
  light: "#eef2f9",
  lightRgb: "238, 242, 249",
  lightMid: "#e2e8f4",
  lightMidRgb: "226, 232, 244",
} as const;

export const BRAND_GRADIENT = `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.purple})`;

/** CSS box-shadow / text-shadow for Jarvis-style holographic glow */
export const BRAND_GLOW = {
  blue: "0 0 20px rgba(0, 123, 255, 0.55)",
  blueStrong: "0 0 32px rgba(0, 123, 255, 0.7), 0 0 64px rgba(0, 123, 255, 0.25)",
  purple: "0 0 24px rgba(147, 51, 234, 0.45)",
  mixed: "0 0 20px rgba(0, 123, 255, 0.5), 0 0 40px rgba(147, 51, 234, 0.2)",
} as const;
