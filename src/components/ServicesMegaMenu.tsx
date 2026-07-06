import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { aiServices, engagementModels, industries, softwareServices } from "@/data/site-content";
import { cn } from "@/lib/utils";

type OpenMenu = "services" | "industries" | null;

interface ServicesMegaMenuProps {
  onNavigate?: () => void;
}

const menuLinkClass =
  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
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
            openMenu === "services" && "bg-muted text-foreground",
          )}
          aria-expanded={openMenu === "services"}
          onClick={() => toggleMenu("services")}
        >
          Services
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              openMenu === "services" && "rotate-180",
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
          Industries
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              openMenu === "industries" && "rotate-180",
            )}
          />
        </button>
      </div>

      {openMenu === "services" && (
        <div className="fixed inset-x-0 top-16 lg:top-20 z-[90] border-t border-border bg-card shadow-2xl">
          <div className="container py-6">
            <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-[300px_1fr] overflow-hidden rounded-xl border border-border">
              <div className="border-b md:border-b-0 md:border-r border-border bg-muted p-6">
                <p className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground">
                  ENGAGEMENT MODELS
                </p>
                <ul className="space-y-1">
                  {engagementModels.map((model) => {
                    const Icon = model.icon;
                    return (
                      <li key={model.title}>
                        <Link to={model.href} className={menuLinkClass} onClick={handleNavigate}>
                          <div className="flex gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground">{model.title}</p>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                {model.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid gap-6 bg-card p-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground">
                    AI DEVELOPMENT
                  </p>
                  <ul className="space-y-1">
                    {aiServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className={cn(menuLinkClass, "py-2")}
                          onClick={handleNavigate}
                        >
                          <p className="text-sm font-medium">{service.title}</p>
                          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                            {service.shortDescription}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground">
                    SOFTWARE DEVELOPMENT
                  </p>
                  <ul className="space-y-1">
                    {softwareServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className={cn(menuLinkClass, "py-2")}
                          onClick={handleNavigate}
                        >
                          <p className="text-sm font-medium">{service.title}</p>
                          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                            {service.shortDescription}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className={cn(menuLinkClass, "mt-4 border border-border text-center")}
                    onClick={handleNavigate}
                  >
                    <p className="text-sm font-semibold text-primary">View all services →</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openMenu === "industries" && (
        <div className="fixed inset-x-0 top-16 lg:top-20 z-[90] border-t border-border bg-card shadow-2xl">
          <div className="container py-6">
            <ul className="mx-auto grid max-w-4xl gap-2 rounded-xl border border-border bg-card p-6 md:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <li key={industry.name}>
                    <Link to="/#industries" className={menuLinkClass} onClick={handleNavigate}>
                      <div className="mb-1 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <p className="text-sm font-semibold">{industry.name}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{industry.services[0]}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
