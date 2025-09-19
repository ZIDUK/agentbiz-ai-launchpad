import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Workflow from "@/components/Workflow";
import Career from "@/components/Career";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Workflow />
        <Career />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
