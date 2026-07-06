import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import ResourceGuide from "./pages/ResourceGuide";
import AiRoiCalculator from "./pages/AiRoiCalculator";
import ExecutiveBriefing from "./pages/ExecutiveBriefing";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import CaseStudy from "./pages/CaseStudy";
import HealthcareCaseStudy from "./pages/HealthcareCaseStudy";
import EngagementHub from "./pages/EngagementHub";
import EngagementDetail from "./pages/EngagementDetail";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
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
          <Route path="/engagement" element={<EngagementHub />} />
          <Route path="/engagement/:slug" element={<EngagementDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/admin/*" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
