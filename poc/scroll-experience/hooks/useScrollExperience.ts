import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { ScrollSceneState } from "../components/ScrollBackground";
import { JOURNEY_ACTS } from "../journey-acts";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollExperienceOptions {
  progressBarRef: React.RefObject<HTMLDivElement>;
}

export function useScrollExperience(
  stateRef: React.MutableRefObject<ScrollSceneState>,
  { progressBarRef }: UseScrollExperienceOptions,
) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let onLenisTick: ((time: number) => void) | null = null;
    if (!reducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1.2,
      });
      lenisRef.current = lenis;
      lenis.on("scroll", ScrollTrigger.update);
      onLenisTick = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(onLenisTick);
      gsap.ticker.lagSmoothing(0);
    }

    const progressSetter = progressBarRef.current
      ? gsap.quickSetter(progressBarRef.current, "scaleX")
      : null;

    const onChapterChange = (index: number) => {
      if (stateRef.current.chapter === index) return;
      stateRef.current.chapter = index;
      stateRef.current.transitionFlash = 0.35;
      gsap.to(stateRef.current, {
        transitionFlash: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: reducedMotion ? false : 0.8,
      onUpdate: (self) => {
        stateRef.current.progress = self.progress;
        progressSetter?.(self.progress);
      },
    });

    const triggers: ScrollTrigger[] = [];

    const setupJourney = () => {
      const allFound = JOURNEY_ACTS.every((act) => document.querySelector(act.selector));
      if (!allFound) {
        requestAnimationFrame(setupJourney);
        return;
      }

      JOURNEY_ACTS.forEach((act, index) => {
        const el = document.querySelector(act.selector);
        if (!el) return;

        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 58%",
            end: "bottom 42%",
            onEnter: () => onChapterChange(index),
            onEnterBack: () => onChapterChange(index),
          }),
        );
      });

      ScrollTrigger.refresh();
    };

    setupJourney();

    let lastScroll = 0;
    const onVelocityTick = () => {
      const current = lenis?.scroll ?? window.scrollY;
      stateRef.current.velocity = current - lastScroll;
      lastScroll = current;
    };
    gsap.ticker.add(onVelocityTick);

  return () => {
      if (onLenisTick) gsap.ticker.remove(onLenisTick);
      gsap.ticker.remove(onVelocityTick);
      lenis?.destroy();
      triggers.forEach((t) => t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [progressBarRef, stateRef]);
}
