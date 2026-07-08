import { useEffect, useRef } from "react";
import type { ScrollSceneState } from "./ScrollBackground";

interface JarvisHudProps {
  stateRef: React.MutableRefObject<ScrollSceneState>;
}

export function JarvisHud({ stateRef }: JarvisHudProps) {
  const statusRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tick = () => {
      const { progress } = stateRef.current;
      if (progressRef.current) {
        progressRef.current.textContent = `${Math.round(progress * 100).toString().padStart(3, "0")}%`;
      }
      if (statusRef.current) {
        const phases = ["SCANNING", "ANALYZING", "SYNCING", "READY"];
        const idx = Math.min(phases.length - 1, Math.floor(progress * phases.length));
        statusRef.current.textContent = phases[idx];
      }
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stateRef]);

  return (
    <div className="poc-jarvis-hud" aria-hidden="true">
      <div className="poc-hud-corner poc-hud-tl" />
      <div className="poc-hud-corner poc-hud-tr" />
      <div className="poc-hud-corner poc-hud-bl" />
      <div className="poc-hud-corner poc-hud-br" />

      <div className="poc-hud-ring poc-hud-ring-1" />
      <div className="poc-hud-ring poc-hud-ring-2" />
      <div className="poc-hud-ring poc-hud-ring-3" />

      <div className="poc-hud-label poc-hud-label-tl">
        <span className="poc-hud-dot" />
        AGENTBIZ.AI / CORE
      </div>
      <div className="poc-hud-label poc-hud-label-tr">
        SYS.<span ref={statusRef}>READY</span>
      </div>
      <div className="poc-hud-label poc-hud-label-bl">NEURAL_MESH v2.4</div>
      <div className="poc-hud-label poc-hud-label-br">
        SCROLL <span ref={progressRef}>000%</span>
      </div>

      <div className="poc-hud-wave">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="poc-hud-bar" style={{ animationDelay: `${i * 0.08}s` }} />
        ))}
      </div>

      <div className="poc-scanline" />
    </div>
  );
}
