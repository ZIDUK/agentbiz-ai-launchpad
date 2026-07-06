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
import Contact from "@/components/Contact";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <EnterpriseChallenge />
        <StrategicFocus />
        <CoreCapabilities />
        <EngagementModels />
        <IndustriesSection />
        <Workflow />
        <ResourcesPreview />
        <InsightsPreview />
        <Contact />
      </main>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
};

export default Index;
