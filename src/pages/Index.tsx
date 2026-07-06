import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EngagementModels from "@/components/EngagementModels";
import AIServices from "@/components/AIServices";
import TechServices from "@/components/TechServices";
import IndustriesSection from "@/components/IndustriesSection";
import Workflow from "@/components/Workflow";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EngagementModels />
        <AIServices />
        <TechServices />
        <IndustriesSection />
        <Workflow />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
