import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { aiServices, engagementModels, industries, softwareServices } from "@/data/site-content";
import { cn } from "@/lib/utils";

interface ServicesMegaMenuProps {
  onNavigate?: () => void;
  className?: string;
}

const menuLinkClass =
  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

export function ServicesMegaMenu({ onNavigate, className }: ServicesMegaMenuProps) {
  const handleClick = () => onNavigate?.();

  return (
    <NavigationMenu className={cn("max-w-none", className)}>
      <NavigationMenuList className="space-x-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="btn-ghost bg-transparent h-10 px-4 data-[state=open]:bg-muted">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[min(92vw,920px)] gap-0 md:grid-cols-[280px_1fr]">
              <div className="border-b md:border-b-0 md:border-r border-border p-4 bg-muted/30">
                <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                  ENGAGEMENT MODELS
                </p>
                <ul className="space-y-1">
                  {engagementModels.map((model) => {
                    const Icon = model.icon;
                    return (
                      <li key={model.title}>
                        <NavigationMenuLink asChild>
                          <Link to={model.href} className={menuLinkClass} onClick={handleClick}>
                            <div className="flex gap-3">
                              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-foreground">{model.title}</p>
                                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                  {model.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="p-4 grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                    AI DEVELOPMENT
                  </p>
                  <ul className="space-y-1">
                    {aiServices.map((service) => (
                      <li key={service.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/services/${service.slug}`}
                            className={cn(menuLinkClass, "py-2")}
                            onClick={handleClick}
                          >
                            <p className="text-sm font-medium">{service.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              {service.shortDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                    SOFTWARE DEVELOPMENT
                  </p>
                  <ul className="space-y-1">
                    {softwareServices.map((service) => (
                      <li key={service.slug}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/services/${service.slug}`}
                            className={cn(menuLinkClass, "py-2")}
                            onClick={handleClick}
                          >
                            <p className="text-sm font-medium">{service.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                              {service.shortDescription}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>

                  <NavigationMenuLink asChild>
                    <Link
                      to="/services"
                      className={cn(menuLinkClass, "mt-3 border border-border text-center")}
                      onClick={handleClick}
                    >
                      <p className="text-sm font-semibold text-primary">View all services →</p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="btn-ghost bg-transparent h-10 px-4 data-[state=open]:bg-muted">
            Industries
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[min(92vw,480px)] gap-1 p-4 md:grid-cols-2">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <li key={industry.name}>
                    <NavigationMenuLink asChild>
                      <Link to="/#industries" className={menuLinkClass} onClick={handleClick}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4 text-primary" />
                          <p className="text-sm font-semibold">{industry.name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {industry.services[0]}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
