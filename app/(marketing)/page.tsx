"use client";

import dynamic from "next/dynamic";

const ScrollHomeShell = dynamic(
  () => import("@/poc/scroll-experience/ScrollHomeShell"),
  { ssr: false },
);

export default function HomePage() {
  return <ScrollHomeShell />;
}
