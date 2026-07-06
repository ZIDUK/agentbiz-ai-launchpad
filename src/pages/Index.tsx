import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnterpriseChallenge from "@/components/EnterpriseChallenge";
import StrategicFocus from "@/components/StrategicFocus";
import CoreCapabilities from "@/components/CoreCapabilities";
import EngagementModels from "@/components/EngagementModels";
import IndustriesSection from "@/components/IndustriesSection";
import Workflow from "@/components/Workflow";
import ResourcesPreview from "@/components/ResourcesPreview";
import InsightsPreview from "@/components/InsightsPreview";
import ExitIntentModal from "@/components/ExitIntentModal";
import VisitorPaths from "@/components/VisitorPaths";
import TrustedBy from "@/components/TrustedBy";
import ExecutiveFaq from "@/components/ExecutiveFaq";
import Contact from "@/components/Contact";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustedBy />
        <VisitorPaths />
        <EnterpriseChallenge />
        <StrategicFocus />
        <CoreCapabilities />
        <EngagementModels />
        <IndustriesSection />
        <Workflow />
        <ResourcesPreview />
        <InsightsPreview />
        <ExecutiveFaq />
        <Contact />
      </main>
      <StickyMobileCTA />
      <ExitIntentModal />
      <Footer />
    </div>
  );
};

export default Index;
