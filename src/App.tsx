import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { useSeo } from "@/hooks/useSeo";
import { usePageTracking } from "@/hooks/usePageTracking";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import { SiteRoutes } from "./SiteRoutes";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useSeo();
  usePageTracking();

  return (
    <>
      <SiteRoutes home={<Index />} />
      <CookieConsent />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
