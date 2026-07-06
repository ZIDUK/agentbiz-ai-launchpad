import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Agent<span className="gradient-text">Biz</span>
            </h3>
            <p className="text-secondary leading-relaxed max-w-md">
              AI-native engineering and delivery for the enterprise. We build production AI
              systems, agentic workflows, and software your organization can own and scale.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-secondary hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-secondary hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-secondary hover:text-primary transition-colors">
                  Careers
                </Link>
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

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Capabilities</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  AI Operations Engineering
                </button>
              </li>
              <li>
                <Link
                  to="/services/ai-assisted-software-development"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  AI-Accelerated Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-application-development"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  Enterprise AI Applications
                </Link>
              </li>
            </ul>
          </div>
        </div>

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
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

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
