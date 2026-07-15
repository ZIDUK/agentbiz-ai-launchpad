"use client";

import { Suspense } from "react";
import NotFoundPage from "@/pages/NotFound";
import { MarketingProviders } from "@/components/marketing/MarketingProviders";

export default function NotFound() {
  return (
    <MarketingProviders>
      <Suspense fallback={null}>
        <NotFoundPage />
      </Suspense>
    </MarketingProviders>
  );
}
