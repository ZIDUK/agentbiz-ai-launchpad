"use client";

import { Suspense } from "react";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <MarketingProviders>{children}</MarketingProviders>
    </Suspense>
  );
}
