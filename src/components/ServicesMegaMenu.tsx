import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Layers, Rocket, Wrench, type LucideIcon } from "lucide-react";
import { useIndustriesContent } from "@/i18n/hooks";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getSolutionsMenu, type SolutionMenuColumn } from "@/i18n/content/solutions-menu";
import { cn } from "@/lib/utils";

type OpenMenu = "solutions" | "industries" | null;

interface ServicesMegaMenuProps {
  onNavigate?: () => void;
}

const menuLinkClass =
  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

const solutionIcons: Record<string, LucideIcon> = {
  "ai-native-pods": Rocket,
  "ai-native-operating-system": Layers,
  "ai-native-stack-upgrade": Wrench,
};

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const solutions = getSolutionsMenu(locale);
  const industryDetails = useIndustriesContent();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [selectedSlug, setSelectedSlug] = useState(solutions[0]?.slug ?? "");
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedSolution: SolutionMenuColumn | undefined =
    solutions.find((s) => s.slug === selectedSlug) ?? solutions[0];

  const closeMenu = () => setOpenMenu(null);

  const handleNavigate = () => {
    closeMenu();
    onNavigate?.();
  };

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((current) => {
      if (current === menu) return null;
      if (menu === "solutions" && solutions[0]) {
        setSelectedSlug(solutions[0].slug);
      }
      return menu;
    });
  };

  useEffect(() => {
    if (!solutions.some((s) => s.slug === selectedSlug) && solutions[0]) {
      setSelectedSlug(solutions[0].slug);
    }
  }, [solutions, selectedSlug]);

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

      {openMenu === "solutions" && selectedSolution && (
        <div className="fixed inset-x-0 top-16 z-[90] border-t border-border bg-card shadow-2xl lg:top-20">
          <div className="container py-6">
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-border md:grid-cols-[minmax(240px,300px)_1fr]">
              {/* Left rail — lighter panel so it stands out */}
              <div className="solutions-mega-sidebar border-b border-border p-4 md:border-b-0 md:border-r md:p-5">
                <p className="mb-3 px-2 text-xs font-semibold tracking-wider text-muted-foreground">
                  {t("nav.solutions")}
                </p>
                <ul className="space-y-1">
                  {solutions.map((solution) => {
                    const Icon = solutionIcons[solution.slug] ?? Rocket;
                    const isSelected = solution.slug === selectedSolution.slug;
                    return (
                      <li key={solution.slug}>
                        <button
                          type="button"
                          className={cn(
                            "flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left transition-colors",
                            isSelected
                              ? "bg-background shadow-sm ring-1 ring-primary/40"
                              : "hover:bg-background/70",
                          )}
                          aria-pressed={isSelected}
                          onClick={() => setSelectedSlug(solution.slug)}
                        >
                          <div
                            className={cn(
                              "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                              isSelected ? "bg-primary/15" : "bg-primary/10",
                            )}
                          >
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                              {solution.eyebrow}
                            </p>
                            <p className="mt-0.5 text-sm font-semibold text-foreground">
                              {solution.title}
                            </p>
                            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>
                          <ChevronRight
                            className={cn(
                              "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-opacity",
                              isSelected ? "opacity-100 text-primary" : "opacity-40",
                            )}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to="/engagement"
                  className={cn(
                    menuLinkClass,
                    "mt-4 border border-border/80 bg-background/50 text-center",
                  )}
                  onClick={handleNavigate}
                >
                  <p className="text-sm font-semibold text-primary">{t("nav.viewAllSolutions")}</p>
                </Link>
              </div>

              {/* Detail pane — internals of selected solution */}
              <div className="bg-card p-6 md:p-8">
                <div className="mb-6 max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {selectedSolution.eyebrow}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{selectedSolution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selectedSolution.description}
                  </p>
                </div>

                {selectedSolution.capabilities && (
                  <>
                    <p className="mb-3 text-[11px] font-semibold tracking-wider text-primary uppercase">
                      {t("nav.howAgentiersDeliver")}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {selectedSolution.capabilities.map((cap) => (
                        <li key={cap.title}>
                          <Link
                            to={selectedSolution.href}
                            className={cn(menuLinkClass, "h-full border border-transparent py-3 hover:border-primary/30")}
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

                {selectedSolution.highlights && (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {selectedSolution.highlights.map((item) => (
                      <li key={item}>
                        <Link
                          to={selectedSolution.href}
                          className={cn(menuLinkClass, "border border-transparent py-3 hover:border-primary/30")}
                          onClick={handleNavigate}
                        >
                          <p className="text-sm text-foreground">{item}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to={selectedSolution.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  onClick={handleNavigate}
                >
                  {t("nav.exploreSolution")}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {openMenu === "industries" && (
        <div className="fixed inset-x-0 top-16 z-[90] border-t border-border bg-card shadow-2xl lg:top-20">
          <div className="container py-6">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-background/40 p-2 md:p-3">
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {industryDetails.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <li key={industry.slug}>
                      <Link
                        to={`/industries/${industry.slug}`}
                        className={cn(
                          menuLinkClass,
                          "h-full border border-transparent hover:border-primary/40 hover:bg-card",
                        )}
                        onClick={handleNavigate}
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-sm font-semibold leading-snug">{industry.name}</p>
                        </div>
                        <p className="pl-[3.25rem] text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {industry.headline}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/industries"
                className={cn(
                  menuLinkClass,
                  "mt-2 border border-border text-center hover:border-primary/40",
                )}
                onClick={handleNavigate}
              >
                <p className="text-sm font-semibold text-primary">{t("nav.viewAllIndustries")}</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
