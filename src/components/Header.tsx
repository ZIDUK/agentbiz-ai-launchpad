import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ServicesMegaMenu } from "@/components/ServicesMegaMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useSiteContent } from "@/i18n/hooks";
import { useIndustriesContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { aiServices, softwareServices } = useSiteContent();
  const industryDetails = useIndustriesContent();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Agent<span className="gradient-text">Biz</span>
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-2">
            <ServicesMegaMenu />
            <button onClick={() => scrollToSection("workflow")} className="btn-ghost">
              {t("nav.process")}
            </button>
            <Link to="/resources" className="btn-ghost">
              {t("nav.resources")}
            </Link>
            <Link to="/insights" className="btn-ghost">
              {t("nav.insights")}
            </Link>
            <Link to="/engagement" className="btn-ghost">
              {t("nav.engagement")}
            </Link>
            <Link to="/careers" className="btn-ghost">
              {t("nav.careers")}
            </Link>
            <Link to="/about" className="btn-ghost">
              {t("nav.about")}
            </Link>
            <button onClick={() => scrollToSection("contact")} className="btn-ghost">
              {t("nav.contact")}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary hidden sm:inline-flex px-6 py-2"
            >
              {t("nav.bookCall")}
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t("nav.openMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw,380px)] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>{t("nav.menu")}</SheetTitle>
                </SheetHeader>
                <div className="mt-4 mb-6">
                  <LanguageSwitcher />
                </div>
                <nav className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                      {t("nav.aiServices")}
                    </p>
                    <ul className="space-y-2">
                      {aiServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                      {t("nav.software")}
                    </p>
                    <ul className="space-y-2">
                      {softwareServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3 uppercase">
                      {t("nav.industries")}
                    </p>
                    <ul className="space-y-2">
                      {industryDetails.map((industry) => (
                        <li key={industry.slug}>
                          <Link
                            to={`/industries/${industry.slug}`}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <button
                      className="block w-full text-left text-sm font-medium py-2"
                      onClick={() => scrollToSection("workflow")}
                    >
                      {t("nav.process")}
                    </button>
                    <Link
                      to="/resources"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.resources")}
                    </Link>
                    <Link
                      to="/insights"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.insights")}
                    </Link>
                    <Link
                      to="/engagement"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.engagementModels")}
                    </Link>
                    <Link
                      to="/ai-roi-calculator"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.roiCalculator")}
                    </Link>
                    <Link
                      to="/executive-briefing"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.executiveBriefing")}
                    </Link>
                    <Link
                      to="/careers"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.careers")}
                    </Link>
                    <Link
                      to="/about"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.about")}
                    </Link>
                    <button
                      className="block w-full text-left text-sm font-medium py-2"
                      onClick={() => scrollToSection("contact")}
                    >
                      {t("nav.contact")}
                    </button>
                    <Link
                      to="/services"
                      className="block text-sm font-medium text-primary py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.allServices")}
                    </Link>
                  </div>

                  <Button className="btn-primary w-full" onClick={() => scrollToSection("contact")}>
                    {t("nav.bookCall")}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
