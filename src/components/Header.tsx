import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ServicesMegaMenu } from "@/components/ServicesMegaMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/poc/scroll-experience/components/ThemeToggle";
import { useIndustriesContent, useTrainingPrograms } from "@/i18n/hooks";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getSolutionsMenu } from "@/i18n/content/solutions-menu";
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
  const trainingPrograms = useTrainingPrograms();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);

    if (sectionId === "contact") {
      trackEvent("book_call", { location: "header" });
    }

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

          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-1 xl:gap-2">
            <ServicesMegaMenu />
            <button onClick={() => scrollToSection("workflow")} className="btn-ghost whitespace-nowrap">
              {t("nav.process")}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="btn-ghost inline-flex items-center gap-1 whitespace-nowrap">
                {t("nav.trainings")}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="solutions-mega-panel w-[min(92vw,380px)] border-border p-3 shadow-2xl"
              >
                {trainingPrograms.map((program) => (
                  <DropdownMenuItem
                    key={program.slug}
                    asChild
                    className="cursor-pointer p-0 focus:bg-transparent"
                  >
                    <Link
                      to={`/trainings/${program.slug}`}
                      className="solutions-mega-item mb-2 flex items-start gap-3 rounded-lg p-3 transition-colors hover:border-primary/40 last:mb-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{program.title}</p>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {program.heroSubtitle}
                        </p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <Link
                  to="/trainings"
                  className="solutions-mega-item mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-primary hover:border-primary/40"
                >
                  {t("nav.viewAllTrainings")}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/resources" className="btn-ghost whitespace-nowrap">
              {t("nav.resources")}
            </Link>
            <Link to="/insights" className="btn-ghost whitespace-nowrap">
              {t("nav.insights")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="btn-ghost inline-flex items-center gap-1 whitespace-nowrap">
                {t("nav.more")}
                <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link to="/about">{t("nav.about")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/careers">{t("nav.careers")}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => scrollToSection("contact")}>
                  {t("nav.contact")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <LanguageSwitcher className="hidden sm:inline-flex shrink-0" />
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary hidden sm:inline-flex shrink-0 px-4 lg:px-6 py-2 whitespace-nowrap"
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
                      {t("nav.solutionsLabel")}
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
                      <li>
                        <Link
                          to="/engagement"
                          className="text-sm font-semibold text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t("nav.viewAllSolutions")}
                        </Link>
                      </li>
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
                      to="/trainings"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.trainings")}
                    </Link>
                    <Link
                      to="/insights"
                      className="block text-sm font-medium py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("nav.insights")}
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
