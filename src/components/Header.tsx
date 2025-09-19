import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button 
            onClick={() => scrollToSection("hero")} 
            className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Agent<span className="gradient-text">Biz</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("solutions")} 
              className="btn-ghost"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("workflow")} 
              className="btn-ghost"
            >
              Workflow
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="btn-ghost"
            >
              Contact
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection("contact")}
            className="btn-primary hidden md:inline-flex px-6 py-2"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;