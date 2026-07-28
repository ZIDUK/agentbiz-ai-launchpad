import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useIndustriesContent } from "@/i18n/hooks";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getSolutionsMenu } from "@/i18n/content/solutions-menu";
import { cn } from "@/lib/utils";

type OpenMenu = "solutions" | "industries" | null;

interface ServicesMegaMenuProps {
  onNavigate?: () => void;
}

const menuLinkClass =
  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const solutions = getSolutionsMenu(locale);
  const industryDetails = useIndustriesContent();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setOpenMenu(null);

  const handleNavigate = () => {
    closeMenu();
    onNavigate?.();
  };

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <div className="flex items-center gap-1">
        <button
          type="button"
          className={cn(
            "btn-ghost inline-flex h-10 items-center gap-1 px-4 rounded-md",
            openMenu === "solutions" && "bg-muted text-foreground",
          )}
          aria-expanded={openMenu === "solutions"}
          onClick={() => toggleMenu("solutions")}
        >
          {t("nav.solutions")}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              openMenu === "solutions" && "rotate-180",
            )}
          />
        </button>

        <button
          type="button"
          className={cn(
            "btn-ghost inline-flex h-10 items-center gap-1 px-4 rounded-md",
            openMenu === "industries" && "bg-muted text-foreground",
          )}
          aria-expanded={openMenu === "industries"}
          onClick={() => toggleMenu("industries")}
        >
          {t("nav.industries")}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              openMenu === "industries" && "rotate-180",
            )}
          />
        </button>
      </div>

      {openMenu === "solutions" && (
        <div className="fixed inset-x-0 top-16 lg:top-20 z-[90] border-t border-border bg-card shadow-2xl">
          <div className="container py-6">
            <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-xl border border-border md:grid-cols-3">
              {solutions.map((solution, index) => (
                <div
                  key={solution.slug}
                  className={cn(
                    "bg-card p-6",
                    index === 0 && "bg-muted/60",
                    index < solutions.length - 1 && "border-b md:border-b-0 md:border-r border-border",
                  )}
                >
                  <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground">
                    {t("nav.solutionsLabel")}
                  </p>
                  <Link to={solution.href} className="group block mb-4" onClick={handleNavigate}>
                    <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {solution.description}
                    </p>
                  </Link>

                  {solution.capabilities && (
                    <>
                      <p className="mb-3 text-[11px] font-semibold tracking-wider text-primary uppercase">
                        {t("nav.howAgentiersDeliver")}
                      </p>
                      <ul className="space-y-1">
                        {solution.capabilities.map((cap) => (
                          <li key={cap.title}>
                            <Link
                              to={solution.href}
                              className={cn(menuLinkClass, "py-2")}
                              onClick={handleNavigate}
                            >
                              <p className="text-sm font-medium text-foreground">{cap.title}</p>
                              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                                {cap.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {solution.highlights && (
                    <ul className="space-y-2 mt-1">
                      {solution.highlights.map((item) => (
                        <li key={item}>
                          <Link
                            to={solution.href}
                            className={cn(menuLinkClass, "py-2")}
                            onClick={handleNavigate}
                          >
                            <p className="text-sm text-foreground">{item}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    to={solution.href}
                    className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                    onClick={handleNavigate}
                  >
                    {t("nav.exploreSolution")}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-4 max-w-7xl">
              <Link
                to="/engagement"
                className={cn(menuLinkClass, "border border-border text-center")}
                onClick={handleNavigate}
              >
                <p className="text-sm font-semibold text-primary">{t("nav.viewAllSolutions")}</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {openMenu === "industries" && (
        <div className="fixed inset-x-0 top-16 lg:top-20 z-[90] border-t border-border bg-card shadow-2xl">
          <div className="container py-6">
            <ul className="mx-auto grid max-w-4xl gap-2 rounded-xl border border-border bg-card p-6 md:grid-cols-3">
              {industryDetails.map((industry) => {
                const Icon = industry.icon;
                return (
                  <li key={industry.slug}>
                    <Link
                      to={`/industries/${industry.slug}`}
                      className={menuLinkClass}
                      onClick={handleNavigate}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <p className="text-sm font-semibold">{industry.name}</p>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {industry.headline}
                      </p>
                    </Link>
                  </li>
                );
              })}
              <li className="md:col-span-3">
                <Link
                  to="/industries"
                  className={cn(menuLinkClass, "border border-border text-center")}
                  onClick={handleNavigate}
                >
                  <p className="text-sm font-semibold text-primary">{t("nav.viewAllIndustries")}</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
