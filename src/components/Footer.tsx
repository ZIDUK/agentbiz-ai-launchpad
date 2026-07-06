import { Link, useLocation, useNavigate } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { siteConfig } from "@/data/site-config";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    <footer className="bg-muted border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Agent<span className="gradient-text">Biz</span>
            </h3>
            <p className="text-secondary leading-relaxed max-w-md">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary hover:text-primary transition-colors">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary hover:text-primary transition-colors">
                  {t("footer.solutions")}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.resources")}
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.industries")}
                </Link>
              </li>
              <li>
                <Link to="/ai-roi-calculator" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.roiCalculator")}
                </Link>
              </li>
              <li>
                <Link to="/engagement" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.engagementModels")}
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.insights")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-secondary hover:text-primary transition-colors">
                  {t("nav.careers")}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">{t("footer.capabilities")}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("capabilities")}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {t("footer.aiOps")}
                </button>
              </li>
              <li>
                <Link
                  to="/services/ai-assisted-software-development"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {t("footer.aiAccelerated")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-application-development"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {t("footer.enterpriseApps")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">{t("footer.connect")}</h4>
          <p className="text-secondary mb-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={24} />
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-secondary text-sm">{t("common.rights")}</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-secondary hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-secondary hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
