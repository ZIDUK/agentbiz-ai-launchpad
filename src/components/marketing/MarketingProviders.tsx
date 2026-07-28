"use client";

import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { PocThemeProvider } from "@/poc/scroll-experience/PocThemeContext";
import { PocModeRoot } from "@/components/marketing/PocModeRoot";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useSeo } from "@/hooks/useSeo";
import { usePageTracking } from "@/hooks/usePageTracking";
import CookieConsent from "@/components/CookieConsent";

const queryClient = new QueryClient();

function SiteChrome() {
  useSeo();
  usePageTracking();
  return <CookieConsent />;
}

interface MarketingProvidersProps {
  children: ReactNode;
}

export function MarketingProviders({ children }: MarketingProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PocThemeProvider>
            <PocModeRoot>
              {children}
              <SiteChrome />
            </PocModeRoot>
          </PocThemeProvider>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
