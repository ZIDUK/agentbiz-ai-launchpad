import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { useSeo } from "@/hooks/useSeo";
import { usePageTracking } from "@/hooks/usePageTracking";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Careers = lazy(() => import("./pages/Careers"));
const Resources = lazy(() => import("./pages/Resources"));
const ResourceGuide = lazy(() => import("./pages/ResourceGuide"));
const AiRoiCalculator = lazy(() => import("./pages/AiRoiCalculator"));
const ExecutiveBriefing = lazy(() => import("./pages/ExecutiveBriefing"));
const Industries = lazy(() => import("./pages/Industries"));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const HealthcareCaseStudy = lazy(() => import("./pages/HealthcareCaseStudy"));
const FintechCaseStudy = lazy(() => import("./pages/FintechCaseStudy"));
const EngagementHub = lazy(() => import("./pages/EngagementHub"));
const EngagementDetail = lazy(() => import("./pages/EngagementDetail"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const LogisticsCaseStudy = lazy(() => import("./pages/LogisticsCaseStudy"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  </div>
);

const AppRoutes = () => {
  useSeo();
  usePageTracking();

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceGuide />} />
          <Route path="/ai-roi-calculator" element={<AiRoiCalculator />} />
          <Route path="/executive-briefing" element={<ExecutiveBriefing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/case-studies/enterprise-ops-automation" element={<CaseStudy />} />
          <Route path="/case-studies/healthcare-prior-auth" element={<HealthcareCaseStudy />} />
          <Route path="/case-studies/fintech-loan-documents" element={<FintechCaseStudy />} />
          <Route path="/case-studies/logistics-exception-handling" element={<LogisticsCaseStudy />} />
          <Route path="/thank-you/:type" element={<ThankYou />} />
          <Route path="/engagement" element={<EngagementHub />} />
          <Route path="/engagement/:slug" element={<EngagementDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
