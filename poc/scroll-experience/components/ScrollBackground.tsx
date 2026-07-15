import { useEffect, useRef } from "react";
import { BRAND } from "../brand-colors";
import { CORE_HOME, getJourneyAct, getCoreHomeRelax, getCoreHomePosition } from "../journey-acts";
import { usePocTheme } from "../PocThemeContext";

export interface ScrollSceneState {
  progress: number;
  velocity: number;
  chapter: number;
  transitionFlash: number;
  /** Normalized screen position (0–1) of the Jarvis core — updated each frame */
  core: { x: number; y: number };
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
}

interface DataStream {
  x: number;
  y: number;
  speed: number;
  chars: string;
}

interface NebulaOrb {
  x: number;
  y: number;
  r: number;
  phase: number;
  depth: number;
}

const PARTICLE_COUNT = 72;
const STREAM_COUNT = 14;
const HEX_SIZE = 36;
const GLYPHS = "01アイウエオαβγδελμσΩ∞∑∫<>{}[]";
const { blueRgb: B, purpleRgb: P, midRgb: M } = BRAND;

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random(),
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: 1 + Math.random() * 2.2,
  }));
}

function createStreams(width: number, height: number): DataStream[] {
  return Array.from({ length: STREAM_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: 0.8 + Math.random() * 1.6,
    chars: Array.from({ length: 10 + Math.floor(Math.random() * 8) }, () =>
      GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    ).join(""),
  }));
}

function createNebula(width: number, height: number): NebulaOrb[] {
  return Array.from({ length: 5 }, (_, i) => ({
    x: width * (0.3 + i * 0.12),
    y: height * (0.25 + (i % 3) * 0.2),
    r: 120 + i * 60,
    phase: i * 1.7,
    depth: 0.2 + i * 0.15,
  }));
}

function drawHex(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i += 1) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawHexLayer(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  offsetX: number,
  offsetY: number,
  size: number,
  alpha: number,
  skip: number,
) {
  const hexH = size * Math.sqrt(3);
  ctx.strokeStyle = `rgba(${B}, ${alpha})`;
  ctx.lineWidth = 0.6;
  for (let row = -2; row < h / (hexH * 0.75) + 3; row += 1) {
    for (let col = -2; col < w / (size * 3) + 3; col += 1) {
      if ((row + col) % skip !== 0) continue;
      const hx = col * size * 3 + offsetX + (row % 2) * size * 1.5;
      const hy = row * hexH * 0.75 + offsetY;
      drawHex(ctx, hx, hy, size * 0.48);
    }
  }
}

function drawPerspectiveTunnel(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  vx: number,
  vy: number,
  scrollShift: number,
  alpha: number,
) {
  const vanishX = vx;
  const vanishY = vy;
  const floorY = h * 0.52;
  const lines = 14;

  ctx.strokeStyle = `rgba(${B}, ${alpha})`;
  ctx.lineWidth = 0.5;

  for (let i = 0; i < lines; i += 1) {
    const t = (i / lines + scrollShift * 0.15) % 1;
    const y = floorY + t * t * (h - floorY);
    const spread = 0.15 + t * 0.85;
    ctx.beginPath();
    ctx.moveTo(vanishX - w * spread, y);
    ctx.lineTo(vanishX + w * spread, y);
    ctx.stroke();
  }

  for (let i = -6; i <= 6; i += 1) {
    const x = vanishX + i * w * 0.08;
    ctx.beginPath();
    ctx.moveTo(x, floorY);
    ctx.lineTo(vanishX, vanishY);
    ctx.stroke();
  }
}

function drawWarpStreaks(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  velocity: number,
  t: number,
  light: boolean,
) {
  const speed = Math.min(Math.abs(velocity) * 0.08, 1);
  if (speed < 0.05) return;

  const count = Math.floor(6 + speed * 18);
  const dir = velocity > 0 ? 1 : -1;
  ctx.lineWidth = 1;
  for (let i = 0; i < count; i += 1) {
    const x = ((i * 97 + t * 120) % w);
    const len = 40 + speed * 120;
    const y = ((t * 200 * dir + i * 130) % (h + len)) - len;
    const grad = ctx.createLinearGradient(x, y, x, y + len * dir);
    grad.addColorStop(0, "rgba(0, 123, 255, 0)");
    grad.addColorStop(0.5, `rgba(${B}, ${(light ? 0.15 : 0.35) * speed})`);
    grad.addColorStop(1, "rgba(0, 123, 255, 0)");
    ctx.strokeStyle = grad;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + len * dir);
    ctx.stroke();
  }
}

interface ScrollBackgroundProps {
  stateRef: React.MutableRefObject<ScrollSceneState>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

/** Map normalized core X to Three.js group X (fitted to journey act anchors) */
export function coreXToSphereX(coreX: number): number {
  return (coreX - 0.48) * (1.7 / 0.28) + 0.45;
}

/** Scroll-driven parallax environment — layers drift with progress + velocity */
export function ScrollBackground({ stateRef, mouseRef }: ScrollBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const streamsRef = useRef<DataStream[]>([]);
  const nebulaRef = useRef<NebulaOrb[]>([]);
  const rafRef = useRef<number>();
  const { isLight } = usePocTheme();
  const themeRef = useRef(isLight);
  const visualRef = useRef(getJourneyAct(0).visual);
  const cameraRef = useRef({ x: 0, y: 0 });
  const coreMotionRef = useRef<{ x: number; y: number }>({ x: CORE_HOME.coreX, y: CORE_HOME.coreY });
  const driftRef = useRef(0);
  const lastProgressRef = useRef(0);
  themeRef.current = isLight;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      particlesRef.current = createParticles(ww, wh);
      streamsRef.current = createStreams(ww, wh);
      nebulaRef.current = createNebula(ww, wh);
    };

    resize();
    window.addEventListener("resize", resize);

    let visible = true;
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      if (!visible) return;

      const { progress, velocity, chapter, transitionFlash } = stateRef.current;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = performance.now() * 0.001;

      const progressDelta = progress - lastProgressRef.current;
      lastProgressRef.current = progress;
      driftRef.current += progressDelta * h * 1.8 + velocity * 0.12;

      const targetVisual = getJourneyAct(chapter).visual;
      const vis = visualRef.current;
      const homeRelax = getCoreHomeRelax(chapter, progress);
      const lerp = homeRelax > 0.5 ? 0.05 + homeRelax * 0.1 : 0.05;
      vis.coreX += (targetVisual.coreX - vis.coreX) * lerp;
      vis.coreY += (targetVisual.coreY - vis.coreY) * lerp;
      vis.blueMix += (targetVisual.blueMix - vis.blueMix) * lerp;
      vis.purpleMix += (targetVisual.purpleMix - vis.purpleMix) * lerp;
      vis.hexMul += (targetVisual.hexMul - vis.hexMul) * lerp;
      vis.streamMul += (targetVisual.streamMul - vis.streamMul) * lerp;
      vis.scanSpeed += (targetVisual.scanSpeed - vis.scanSpeed) * lerp;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cm = coreMotionRef.current;
      const ambient = 1 - homeRelax;
      const home = getCoreHomePosition();

      let orbitX = 0;
      let orbitY = 0;
      let mousePullX = 0;
      let mousePullY = 0;
      if (!prefersReduced && ambient > 0.001) {
        orbitX = Math.sin(t * 0.55) * 0.048 + Math.sin(t * 1.12 + chapter * 0.7) * 0.022;
        orbitY = Math.cos(t * 0.47) * 0.04 + Math.cos(t * 0.98 + chapter * 0.5) * 0.02;
        mousePullX = (mx - vis.coreX) * 0.16;
        mousePullY = (my - vis.coreY) * 0.13;
        orbitX *= ambient;
        orbitY *= ambient;
        mousePullX *= ambient;
        mousePullY *= ambient;
      }

      const velNudgeX = velocity * 0.00014 * ambient;
      const velNudgeY = -velocity * 0.00007 * ambient;
      const journeyX = vis.coreX + orbitX + mousePullX + velNudgeX;
      const journeyY = vis.coreY + orbitY + mousePullY + velNudgeY;
      const targetCoreX = journeyX * ambient + home.x * homeRelax;
      const targetCoreY = journeyY * ambient + home.y * homeRelax;

      const atScrollTop = chapter === 0 && progress < 0.004;
      if (atScrollTop) {
        cm.x = home.x;
        cm.y = home.y;
        vis.coreX = home.x;
        vis.coreY = home.y;
        driftRef.current = 0;
      } else {
        const coreLerp = homeRelax > 0.5 ? 0.14 : 0.062;
        cm.x += (targetCoreX - cm.x) * coreLerp;
        cm.y += (targetCoreY - cm.y) * coreLerp;
      }

      if (homeRelax > 0.85 && !atScrollTop) {
        driftRef.current *= 0.88;
      }

      stateRef.current.core = { x: cm.x, y: cm.y };
      document.documentElement.style.setProperty("--poc-core-x", `${cm.x * 100}%`);
      document.documentElement.style.setProperty("--poc-core-y", `${cm.y * 100}%`);

      const glow = 0.5 + progress * 0.5;
      const coreX = w * cm.x;
      const coreY = h * cm.y;

      const targetCamX = progress * w * 0.42 + Math.sin(t * 0.25 + chapter) * 24;
      const targetCamY = progress * h * 0.28 + driftRef.current * 0.08 + velocity * 0.35;
      cameraRef.current.x += (targetCamX - cameraRef.current.x) * 0.06;
      cameraRef.current.y += (targetCamY - cameraRef.current.y) * 0.06;
      const cam = cameraRef.current;

      const light = themeRef.current;
      const baseColor = light ? BRAND.light : BRAND.dark;
      const glowMul = light ? 0.55 : 1;

      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, w, h);

      // Nebula layer — slowest parallax
      ctx.save();
      ctx.translate(-cam.x * 0.18, -cam.y * 0.18);
      for (const orb of nebulaRef.current) {
        const ox = orb.x + Math.sin(t * 0.3 + orb.phase) * 40;
        const oy = orb.y + Math.cos(t * 0.22 + orb.phase) * 30;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `rgba(${B}, ${0.08 * glowMul * orb.depth})`);
        grad.addColorStop(0.5, `rgba(${P}, ${0.04 * glowMul * orb.depth})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(ox - orb.r, oy - orb.r, orb.r * 2, orb.r * 2);
      }
      ctx.restore();

      // Main glow — follows core with camera offset
      ctx.save();
      ctx.translate(-cam.x * 0.35, -cam.y * 0.35);
      const gradient = ctx.createRadialGradient(coreX, coreY, 8, coreX, coreY, Math.max(w, h) * 0.62);
      gradient.addColorStop(0, `rgba(${B}, ${0.45 * glow * glowMul * vis.blueMix})`);
      gradient.addColorStop(0.18, `rgba(${P}, ${0.28 * glow * glowMul * vis.purpleMix})`);
      gradient.addColorStop(0.4, light ? `rgba(${BRAND.lightMidRgb}, 0.9)` : `rgba(${M}, 0.35)`);
      gradient.addColorStop(1, light ? `rgba(${BRAND.lightRgb}, 0.98)` : "rgba(0, 0, 0, 0.98)");
      ctx.fillStyle = gradient;
      ctx.fillRect(-w * 0.2, -h * 0.2, w * 1.4, h * 1.4);
      ctx.restore();

      const leftScrim = ctx.createLinearGradient(0, 0, w * 0.48, 0);
      if (light) {
        leftScrim.addColorStop(0, "rgba(255, 255, 255, 0.75)");
        leftScrim.addColorStop(0.75, "rgba(255, 255, 255, 0.25)");
        leftScrim.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else {
        leftScrim.addColorStop(0, "rgba(0, 0, 0, 0.55)");
        leftScrim.addColorStop(0.75, "rgba(0, 0, 0, 0.12)");
        leftScrim.addColorStop(1, "rgba(0, 0, 0, 0)");
      }
      ctx.fillStyle = leftScrim;
      ctx.fillRect(0, 0, w, h);

      // Perspective tunnel — mid parallax
      if (!prefersReduced) {
        ctx.save();
        ctx.translate(-cam.x * 0.5, -cam.y * 0.45);
        drawPerspectiveTunnel(
          ctx,
          w * 1.3,
          h * 1.2,
          coreX + cam.x * 0.5,
          coreY * 0.55,
          progress + t * 0.05,
          (light ? 0.05 : 0.09) * vis.hexMul,
        );
        ctx.restore();
      }

      // Hex layers — 3 depths
      const scrollHexX = progress * w * 0.6 + t * 18 + velocity * 0.5;
      const scrollHexY = progress * h * 0.45 + driftRef.current * 0.15 + t * 12;

      ctx.save();
      ctx.translate(-cam.x * 0.55, -cam.y * 0.55);
      drawHexLayer(
        ctx,
        w * 1.4,
        h * 1.4,
        scrollHexX * 0.5 + 200,
        scrollHexY * 0.5 + 100,
        HEX_SIZE * 1.4,
        ((light ? 0.04 : 0.07) + progress * 0.03) * vis.hexMul,
        3,
      );
      ctx.restore();

      ctx.save();
      ctx.translate(-cam.x * 0.72, -cam.y * 0.68);
      drawHexLayer(
        ctx,
        w * 1.3,
        h * 1.3,
        scrollHexX * 0.8,
        scrollHexY * 0.8,
        HEX_SIZE,
        ((light ? 0.08 : 0.12) + progress * 0.05) * vis.hexMul,
        2,
      );
      ctx.restore();

      ctx.save();
      ctx.translate(-cam.x * 0.9, -cam.y * 0.85);
      drawHexLayer(
        ctx,
        w * 1.2,
        h * 1.2,
        scrollHexX,
        scrollHexY,
        HEX_SIZE * 0.85,
        ((light ? 0.1 : 0.16) + progress * 0.06) * vis.hexMul,
        1,
      );
      ctx.restore();

      // Vertical grid — scrolls with camera
      ctx.save();
      ctx.translate(-cam.x * 0.8, -cam.y * 0.8);
      const gridStep = 72;
      const offsetY = (driftRef.current * 0.4 + t * 18) % gridStep;
      ctx.strokeStyle = `rgba(${B}, ${0.08 + progress * 0.05})`;
      ctx.lineWidth = 0.5;
      for (let x = -gridStep; x < w + gridStep; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, -h * 0.1);
        ctx.lineTo(x, h * 1.1);
        ctx.stroke();
      }
      for (let y = -gridStep; y < h + gridStep * 2; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(-w * 0.1, y + offsetY);
        ctx.lineTo(w * 1.1, y + offsetY);
        ctx.stroke();
      }
      ctx.restore();

      if (!prefersReduced) {
        ctx.save();
        ctx.translate(-cam.x * 0.4, -cam.y * 0.4);
        const corePulse = 0.65 + Math.sin(t * 2.5) * 0.25;
        const coreGrad = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 180 + progress * 80);
        coreGrad.addColorStop(0, `rgba(${B}, ${(light ? 0.35 : 0.65) * corePulse})`);
        coreGrad.addColorStop(0.25, `rgba(${P}, ${(light ? 0.2 : 0.35) * corePulse})`);
        coreGrad.addColorStop(0.55, `rgba(${B}, ${0.08 * corePulse})`);
        coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = coreGrad;
        ctx.fillRect(coreX - 260, coreY - 260, 520, 520);

        ctx.beginPath();
        ctx.fillStyle = `rgba(${B}, ${(light ? 0.7 : 0.9) * corePulse})`;
        ctx.arc(coreX, coreY, 4 + corePulse * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Particles — full parallax + scroll drift
      ctx.save();
      ctx.translate(-cam.x, -cam.y);
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const depth = 0.3 + p.z * 0.7;
        if (!prefersReduced) {
          p.x += p.vx * (1 + Math.abs(velocity) * 0.12);
          p.y += p.vy * (1 + Math.abs(velocity) * 0.12) + velocity * 0.02 * depth;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }

        const px = p.x + Math.sin(t + p.z * 10) * (12 + progress * 24);
        const py = p.y + Math.cos(t * 0.8 + p.z * 8) * (10 + progress * 18) - driftRef.current * 0.05 * depth;
        const distToCore = Math.hypot(px - coreX, py - coreY);
        const corePull = Math.max(0, 1 - distToCore / 420) * 0.5;
        const usePurple = i % 5 === 0;

        ctx.beginPath();
        ctx.fillStyle = usePurple
          ? `rgba(${P}, ${0.12 + depth * 0.4 + corePull})`
          : `rgba(${B}, ${0.15 + depth * 0.5 + corePull})`;
        ctx.arc(px, py, p.size * depth, 0, Math.PI * 2);
        ctx.fill();

        if (i % 5 === 0 && distToCore < 400) {
          ctx.strokeStyle = usePurple
            ? `rgba(${P}, ${0.18 * (1 - distToCore / 400)})`
            : `rgba(${B}, ${0.22 * (1 - distToCore / 400)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(coreX, coreY);
          ctx.stroke();
        }
      }
      ctx.restore();

      if (!prefersReduced) {
        ctx.save();
        ctx.translate(-cam.x * 0.95, -cam.y * 0.2);
        ctx.font = "11px ui-monospace, monospace";
        const streams = streamsRef.current;
        for (let i = 0; i < streams.length; i += 1) {
          const s = streams[i];
          s.y += s.speed * (1 + Math.abs(velocity) * 0.08) + velocity * 0.04;
          s.x += Math.sin(t + i) * 0.3;
          if (s.y > h + 100) {
            s.y = -100;
            s.x = Math.random() * w;
          }
          if (s.y < -100) s.y = h + 100;
          const alpha = (0.14 + (i % 4) * 0.04) * vis.streamMul;
          ctx.fillStyle = i % 2 === 0 ? `rgba(${B}, ${alpha})` : `rgba(${P}, ${alpha})`;
          for (let c = 0; c < s.chars.length; c += 1) {
            ctx.fillText(s.chars[c], s.x, s.y - c * 14);
          }
        }
        ctx.restore();

        drawWarpStreaks(ctx, w, h, velocity, t, light);
      }

      const scanY = ((t * 110 * vis.scanSpeed + driftRef.current * 0.3) % (h + 100)) - 50;
      const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      const scanAlpha = (light ? 0.18 : 0.35) + transitionFlash * 0.45;
      scanGrad.addColorStop(0, "rgba(0, 123, 255, 0)");
      scanGrad.addColorStop(0.5, `rgba(${B}, ${scanAlpha})`);
      scanGrad.addColorStop(1, "rgba(0, 123, 255, 0)");
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 30, w, 60);

      if (transitionFlash > 0.02) {
        ctx.fillStyle = `rgba(${B}, ${transitionFlash * (light ? 0.12 : 0.22)})`;
        ctx.fillRect(0, 0, w, h);
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.style.removeProperty("--poc-core-x");
      document.documentElement.style.removeProperty("--poc-core-y");
    };
  }, [mouseRef, stateRef]);

  return <canvas ref={canvasRef} className="poc-canvas" aria-hidden="true" />;
}
