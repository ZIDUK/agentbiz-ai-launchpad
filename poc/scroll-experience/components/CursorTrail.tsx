import { useEffect, useRef } from "react";
import { BRAND } from "../brand-colors";

const TRAIL_LENGTH = 18;

interface CursorTrailProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}

export function CursorTrail({ mouseRef }: CursorTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let lastX = -1;
    let lastY = -1;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };

      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (lastX >= 0 && dx * dx + dy * dy < 9) return;

      lastX = e.clientX;
      lastY = e.clientY;
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > TRAIL_LENGTH) {
        trailRef.current.shift();
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const trail = trailRef.current;
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i += 1) {
          const alpha = (i / trail.length) * 0.65;
          const width = 1.5 + (i / trail.length) * 3.5;
          const grad = ctx.createLinearGradient(trail[i - 1].x, trail[i - 1].y, trail[i].x, trail[i].y);
          grad.addColorStop(0, `rgba(${BRAND.blueRgb}, ${alpha * 0.8})`);
          grad.addColorStop(1, `rgba(${BRAND.purpleRgb}, ${alpha})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.stroke();
        }

        const last = trail[trail.length - 1];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${BRAND.blueRgb}, 0.9)`;
        ctx.arc(last.x, last.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseRef]);

  return <canvas ref={canvasRef} className="poc-cursor-trail" aria-hidden="true" />;
}
