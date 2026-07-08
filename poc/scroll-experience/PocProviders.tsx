import type { ReactNode } from "react";
import { PocThemeProvider } from "./PocThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const queryClient = new QueryClient();

interface PocProvidersProps {
  children: ReactNode;
}

export function PocProviders({ children }: PocProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <PocThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename="/">{children}</BrowserRouter>
          </TooltipProvider>
        </PocThemeProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
