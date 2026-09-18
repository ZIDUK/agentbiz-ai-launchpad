import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SiteMegaMenu } from "@/components/SiteMegaMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/poc/scroll-experience/components/ThemeToggle";
import { useIndustriesContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import { getSolutionsMenu } from "@/i18n/content/solutions-menu";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trackEvent } from "@/lib/analytics";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const solutions = getSolutionsMenu(locale);
  const industryDetails = useIndustriesContent();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToContact = () => {
    setMobileOpen(false);
    trackEvent("book_call", { location: "header" });
    navigate("/contact");
  };

  useEffect(() => {
    if (location.hash) {
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

          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-1 xl:gap-2">
            <SiteMegaMenu />
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <LanguageSwitcher className="hidden sm:inline-flex shrink-0" />
            <Button
              onClick={goToContact}
              className="btn-primary hidden sm:inline-flex shrink-0 px-4 lg:px-6 py-2 whitespace-nowrap"
            >
              {t("nav.contactUs")}
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
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("nav.offering")}
                    </p>
                    <ul className="space-y-2">
                      {solutions.map((solution) => (
                        <li key={solution.slug}>
                          <Link
                            to={solution.href}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {solution.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

                  <div className="space-y-2 border-t border-border pt-4">
                    <Link
                      to="/about"
                      className="block py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.about")}
                    </Link>
                    <Link
                      to="/insights"
                      className="block py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.insights")}
                    </Link>
                    <Link
                      to="/careers"
                      className="block py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.careers")}
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center py-2 text-sm font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.contact")}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  <Button className="btn-primary w-full" onClick={goToContact}>
                    {t("nav.contactUs")}
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
