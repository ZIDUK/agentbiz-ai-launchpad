"use client";

import dynamic from "next/dynamic";
import "@/poc/scroll-experience/poc-scroll.css";
import { PocThemeProvider } from "@/poc/scroll-experience/PocThemeContext";

const ScrollHomeShell = dynamic(
  () => import("@/poc/scroll-experience/ScrollHomeShell"),
  { ssr: false },
);

export default function HomePage() {
  return (
    <PocThemeProvider>
      <ScrollHomeShell />
    </PocThemeProvider>
  );
}
