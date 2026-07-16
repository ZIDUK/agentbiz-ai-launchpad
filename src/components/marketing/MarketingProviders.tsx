"use client";

import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { PocThemeProvider } from "@/poc/scroll-experience/PocThemeContext";
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
  withPocTheme?: boolean;
}

export function MarketingProviders({ children, withPocTheme = false }: MarketingProvidersProps) {
  const content = (
    <>
      {children}
      <SiteChrome />
    </>
  );

  const themed = withPocTheme ? <PocThemeProvider>{content}</PocThemeProvider> : content;

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {themed}
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
