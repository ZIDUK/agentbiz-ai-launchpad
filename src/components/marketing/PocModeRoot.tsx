"use client";

import { useLayoutEffect, type ReactNode } from "react";
import "@/poc/scroll-experience/poc-scroll.css";

/** Keeps marketing pages on the shared AgentBiz theme (poc-mode CSS tokens). */
export function PocModeRoot({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("poc-mode");
    return () => {
      root.classList.remove("poc-mode");
      root.classList.remove("poc-light");
      root.classList.remove("poc-home");
    };
  }, []);

  return <>{children}</>;
}
