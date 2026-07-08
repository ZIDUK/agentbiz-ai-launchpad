import { lazy, Suspense, useEffect, useRef } from "react";
import { ScrollBackground, type ScrollSceneState } from "./components/ScrollBackground";
import { JarvisHud } from "./components/JarvisHud";
import { CursorTrail } from "./components/CursorTrail";
import { useScrollExperience } from "./hooks/useScrollExperience";
import { ThemeToggle } from "./components/ThemeToggle";
import { CORE_HOME } from "./journey-acts";
import ProductionHomePreview from "./ProductionHomePreview";

const SphereScene = lazy(() => import("./components/SphereScene"));

export default function ScrollHomeShell() {
  const stateRef = useRef<ScrollSceneState>({
    progress: 0,
    velocity: 0,
    chapter: 0,
    transitionFlash: 0,
    core: { x: CORE_HOME.coreX, y: CORE_HOME.coreY },
  });
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const progressBarRef = useRef<HTMLDivElement>(null);

  useScrollExperience(stateRef, { progressBarRef });

  useEffect(() => {
    document.documentElement.classList.add("poc-mode");
    return () => {
      document.documentElement.classList.remove("poc-mode");
    };
  }, []);

  return (
    <div className="poc-shell">
      <div ref={progressBarRef} className="poc-progress" aria-hidden="true" />
      <ScrollBackground stateRef={stateRef} mouseRef={mouseRef} />
      <Suspense fallback={null}>
        <SphereScene stateRef={stateRef} mouseRef={mouseRef} />
      </Suspense>
      <CursorTrail mouseRef={mouseRef} />
      <div className="poc-vignette" aria-hidden="true" />
      <JarvisHud stateRef={stateRef} />

      <div className="poc-theme-float">
        <ThemeToggle />
      </div>

      <div className="poc-content poc-production-site">
        <ProductionHomePreview />
      </div>
    </div>
  );
}
