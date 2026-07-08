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
import VisitorPaths from "@/components/VisitorPaths";
import TrustedBy from "@/components/TrustedBy";
import ExecutiveFaq from "@/components/ExecutiveFaq";
import Contact from "@/components/Contact";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

/** Same sections as src/pages/Index.tsx — production home content */
export default function ProductionHomePreview() {
  return (
    <div className="min-h-screen bg-transparent">
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
      <Footer />
    </div>
  );
}
