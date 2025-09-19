import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Agent<span className="gradient-text">Biz</span>
            </h3>
            <p className="text-secondary leading-relaxed max-w-md">
              Your strategic partner in AI transformation. We automate complexity and accelerate growth.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Sitemap</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("hero")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("solutions")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("workflow")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Workflow
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Connect Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
          <p className="text-secondary mb-4">
            <a 
              href="mailto:hello@agentbiz.ai" 
              className="hover:text-primary transition-colors"
            >
              hello@agentbiz.ai
            </a>
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-secondary text-sm">
            © 2025 AgentBiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;