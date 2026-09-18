import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
  Compass,
  FileText,
  Layers,
  type LucideIcon,
  Rocket,
  Store,
  Trophy,
  Users,
  Cpu,
  Film,
} from "lucide-react";
import { useIndustriesContent, useSiteContent, useInsightsContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import { cn } from "@/lib/utils";
import { insightMarkForSlug } from "@/components/icons/InsightMarks";
import { packageMarkForSlug } from "@/components/icons/PackageMarks";

type TopMenu = "offering" | "about" | "insights" | "careers";
type OfferingRail = "industries" | "waysIn" | "capabilities" | "work";

interface MenuItem {
  href: string;
  title: string;
  body: string;
  icon?: LucideIcon;
  /** Custom studio mark (SVG) */
  Mark?: ComponentType<{ className?: string }>;
  /** Generated illustration asset */
  iconSrc?: string;
  meta?: string;
}

interface SiteMegaMenuProps {
  onNavigate?: () => void;
}

const menuLinkClass =
  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground";

function caseStudyIcon(slug: string, industry?: string): LucideIcon {
  if (slug.includes("combat") || industry === "Sports") return Trophy;
  if (slug.includes("retail") || industry === "Retail") return Store;
  if (industry === "Media") return Film;
  return Cpu;
}

function insightIconSrc(slug: string): string | undefined {
  switch (slug) {
    case "why-enterprise-ai-pilots-fail":
      return "/insights/icons/insight-pilots.png?v=2";
    case "strategy-operations-then-ai":
      return "/insights/icons/insight-sequence.png?v=2";
    case "governed-agents-human-in-the-loop":
      return "/insights/icons/insight-human-loop.png?v=2";
    default:
      return undefined;
  }
}

export function SiteMegaMenu({ onNavigate }: SiteMegaMenuProps) {
  const { t } = useTranslation();
  const { bundles, services, caseStudies } = useSiteContent();
  const industries = useIndustriesContent();
  const insights = useInsightsContent();
  const [openMenu, setOpenMenu] = useState<TopMenu | null>(null);
  const [offeringRail, setOfferingRail] = useState<OfferingRail>("industries");
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setOpenMenu(null);

  const handleNavigate = () => {
    closeMenu();
    onNavigate?.();
  };

  const toggleMenu = (menu: TopMenu) => {
    setOpenMenu((current) => {
      if (current === menu) return null;
      setHoveredIndex(0);
      if (menu === "offering") setOfferingRail("industries");
      return menu;
    });
  };

  useEffect(() => {
    setHoveredIndex(0);
  }, [offeringRail, openMenu]);

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

  const offeringItems = ((): MenuItem[] => {
    switch (offeringRail) {
      case "industries":
        return industries.map((item) => ({
          href: `/industries/${item.slug}`,
          title: item.name,
          body: item.headline,
          icon: item.icon,
        }));
      case "waysIn":
        return bundles.map((item) => ({
          href: `/engagement/${item.slug}`,
          title: item.title,
          body: item.tagline ?? item.shortDescription ?? "",
          Mark: packageMarkForSlug(item.slug),
        }));
      case "capabilities":
        return services.map((item) => ({
          href: `/services/${item.slug}`,
          title: item.title,
          body: item.tagline ?? item.shortDescription,
          icon: item.icon,
        }));
      case "work":
        return caseStudies.map((item) => ({
          href: item.href ?? `/case-studies/${item.slug}`,
          title: item.title,
          body: item.client,
          icon: caseStudyIcon(item.slug, item.industry),
        }));
      default: {
        const _exhaustive: never = offeringRail;
        return _exhaustive;
      }
    }
  })();

  const offeringViewAll =
    offeringRail === "industries"
      ? { href: "/industries", label: t("nav.viewAllIndustries") }
      : offeringRail === "waysIn"
        ? { href: "/engagement", label: t("nav.viewAllSolutions") }
        : offeringRail === "capabilities"
          ? { href: "/services", label: t("nav.viewAllServices") }
          : { href: "/#work", label: t("nav.viewAllWork") };

  const aboutLinks: MenuItem[] = [
    { href: "/about", title: t("nav.story"), body: t("nav.storyBody"), icon: BookOpen },
    { href: "/about#how-we-work", title: t("nav.howWeWork"), body: t("nav.howWeWorkBody"), icon: Compass },
    { href: "/about#leadership", title: t("nav.leadership"), body: t("nav.leadershipBody"), icon: Users },
  ];

  const insightLinks: MenuItem[] = insights.slice(0, 4).map((article) => ({
    href: `/insights/${article.slug}`,
    title: article.menuLabel,
    body: article.title,
    meta: `${article.readTime} · ${article.tags[0] ?? ""}`,
    Mark: insightMarkForSlug(article.slug),
    iconSrc: insightIconSrc(article.slug),
  }));

  const careerLinks: MenuItem[] = [
    { href: "/careers#why", title: t("nav.whyAgentBiz"), body: t("nav.whyAgentBizBody"), icon: Rocket },
    { href: "/careers#roles", title: t("nav.openRoles"), body: t("nav.openRolesBody"), icon: Briefcase },
    { href: "/careers#hire", title: t("nav.howWeHire"), body: t("nav.howWeHireBody"), icon: FileText },
  ];

  const railMeta: Record<OfferingRail, { label: string; icon: LucideIcon }> = {
    industries: { label: t("nav.industries"), icon: Building2 },
    waysIn: { label: t("nav.waysIn"), icon: Rocket },
    capabilities: { label: t("nav.capabilities"), icon: Layers },
    work: { label: t("nav.ourWork"), icon: Briefcase },
  };

  const renderMark = (
    item: Pick<MenuItem, "icon" | "Mark" | "iconSrc"> | undefined,
    active = false,
    size: "sm" | "lg" = "sm",
  ) => {
    if (!item) return null;
    const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
    const img = size === "lg" ? "h-10 w-10" : "h-8 w-8";
    return (
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-xl border transition-colors",
          box,
          active
            ? "border-primary/40 bg-primary/5"
            : "border-border bg-card",
        )}
      >
        {item.iconSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.iconSrc}
            alt=""
            className={cn(img, "object-contain")}
            width={size === "lg" ? 40 : 32}
            height={size === "lg" ? 40 : 32}
          />
        ) : item.Mark ? (
          <item.Mark className={cn(img, "text-primary")} />
        ) : item.icon ? (
          <item.icon className="h-4 w-4 text-muted-foreground" />
        ) : null}
      </span>
    );
  };

  const renderIcon = (Icon: LucideIcon | undefined, active = false) => {
    if (!Icon) return null;
    return (
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
          active
            ? "border-primary/40 bg-primary/15 text-primary"
            : "border-border bg-muted/60 text-muted-foreground",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
    );
  };

  const renderRailButton = (id: OfferingRail) => {
    const { label, icon: Icon } = railMeta[id];
    const active = offeringRail === id;
    return (
      <button
        type="button"
        className={cn(
          "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition-colors",
          active
            ? "solutions-mega-item-active text-foreground"
            : "solutions-mega-item text-foreground hover:border-primary/35",
        )}
        aria-pressed={active}
        onClick={() => setOfferingRail(id)}
      >
        {renderIcon(Icon, active)}
        <span className="min-w-0 flex-1">{label}</span>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0",
            active ? "text-primary opacity-100" : "text-muted-foreground opacity-40",
          )}
        />
      </button>
    );
  };

  /** Offering: 3-col with category rail + list + featured */
  const renderOfferingPanel = (items: MenuItem[], viewAll?: { href: string; label: string }) => {
    const active = items[hoveredIndex] ?? items[0];
    return (
      <div className="solutions-mega-panel mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-border md:grid-cols-[minmax(220px,280px)_minmax(240px,1fr)_minmax(240px,320px)]">
        <div className="solutions-mega-sidebar border-b border-border p-4 md:border-b-0 md:border-r md:p-5">
          <ul className="space-y-2">
            <li>{renderRailButton("industries")}</li>
            <li>{renderRailButton("waysIn")}</li>
            <li>{renderRailButton("capabilities")}</li>
            <li>{renderRailButton("work")}</li>
          </ul>
        </div>

        <div className="solutions-mega-detail border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    menuLinkClass,
                    "solutions-mega-item flex items-start gap-3 py-3 hover:border-primary/40",
                    hoveredIndex === index && "border-primary/40",
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onClick={handleNavigate}
                >
                  {item.iconSrc || item.Mark
                    ? renderMark(item, hoveredIndex === index)
                    : renderIcon(item.icon, hoveredIndex === index)}
                  <span className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {viewAll && (
            <Link
              to={viewAll.href}
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary"
              onClick={handleNavigate}
            >
              {viewAll.label}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="solutions-mega-detail p-6">
          {active && (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {t("nav.featured")}
              </p>
              <div className="mt-4 flex items-start gap-3">
                {active.iconSrc || active.Mark
                  ? renderMark(active, true, "lg")
                  : renderIcon(active.icon, true)}
                <h3 className="text-xl font-bold text-foreground">{active.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
              <Link
                to={active.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
                onClick={handleNavigate}
              >
                {t("common.learnMore")}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };

  /** About / Careers: 2-col list + featured (no duplicated left rail) */
  const renderSimplePanel = (items: MenuItem[], viewAll?: { href: string; label: string }) => {
    const active = items[hoveredIndex] ?? items[0];
    const ActiveIcon = active?.icon;
    return (
      <div className="solutions-mega-panel mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-border md:grid-cols-[minmax(280px,1fr)_minmax(260px,340px)]">
        <div className="solutions-mega-detail border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    menuLinkClass,
                    "solutions-mega-item flex items-start gap-3 py-3 hover:border-primary/40",
                    hoveredIndex === index && "border-primary/40",
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onClick={handleNavigate}
                >
                  {renderIcon(item.icon, hoveredIndex === index)}
                  <span className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {viewAll && (
            <Link
              to={viewAll.href}
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary"
              onClick={handleNavigate}
            >
              {viewAll.label}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="solutions-mega-detail p-6">
          {active && (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {t("nav.featured")}
              </p>
              <div className="mt-4 flex items-start gap-3">
                {renderIcon(ActiveIcon, true)}
                <h3 className="text-lg font-bold leading-snug text-foreground">{active.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
              <Link
                to={active.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary"
                onClick={handleNavigate}
              >
                {t("common.learnMore")}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </>
          )}
        </div>
      </div>
    );
  };

  /** Insights: editorial 2-col — short labels in list, full headline only in featured */
  const renderInsightsPanel = () => {
    const active = insightLinks[hoveredIndex] ?? insightLinks[0];
    return (
      <div className="solutions-mega-panel mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-border md:grid-cols-[minmax(300px,1fr)_minmax(280px,360px)]">
        <div className="solutions-mega-detail border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {t("nav.insights")}
          </p>
          <ul className="space-y-1">
            {insightLinks.map((item, index) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    menuLinkClass,
                    "solutions-mega-item flex items-start gap-3 py-3.5 hover:border-primary/40",
                    hoveredIndex === index && "border-primary/40",
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  onClick={handleNavigate}
                >
                  {renderMark(item, hoveredIndex === index)}
                  <span className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    {item.meta && (
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        {item.meta}
                      </p>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/insights"
            className="mt-5 inline-flex items-center text-sm font-semibold text-primary"
            onClick={handleNavigate}
          >
            {t("nav.viewAllInsights")}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="solutions-mega-detail relative overflow-hidden p-6 md:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(212_100%_50%/0.12),transparent_55%)]"
          />
          {active && (
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {t("nav.featured")}
              </p>
              <div className="mt-5 flex items-start gap-3">
                {renderMark(active, true, "lg")}
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {active.title}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground md:text-xl">
                    {active.body}
                  </h3>
                </div>
              </div>
              <Link
                to={active.href}
                className="mt-8 inline-flex items-center text-sm font-semibold text-primary"
                onClick={handleNavigate}
              >
                {t("common.readArticle")}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  const overlay = (content: ReactNode) =>
    openMenu ? (
      <div className="solutions-mega-overlay fixed inset-x-0 top-16 z-[90] border-t border-border shadow-2xl backdrop-blur-md lg:top-20">
        <div className="container py-6">{content}</div>
      </div>
    ) : null;

  return (
    <div ref={menuRef} className="relative">
      <div className="flex items-center gap-1">
        {(
          [
            ["offering", t("nav.offering")],
            ["about", t("nav.about")],
            ["insights", t("nav.insights")],
            ["careers", t("nav.careers")],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={cn(
              "btn-ghost inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-md px-4",
              openMenu === id && "bg-muted text-foreground",
            )}
            aria-expanded={openMenu === id}
            onClick={() => toggleMenu(id)}
          >
            {label}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                openMenu === id && "rotate-180",
              )}
            />
          </button>
        ))}
      </div>

      {openMenu === "offering" && overlay(renderOfferingPanel(offeringItems, offeringViewAll))}
      {openMenu === "about" &&
        overlay(renderSimplePanel(aboutLinks, { href: "/about", label: t("nav.about") }))}
      {openMenu === "insights" && overlay(renderInsightsPanel())}
      {openMenu === "careers" &&
        overlay(renderSimplePanel(careerLinks, { href: "/careers", label: t("nav.careers") }))}
    </div>
  );
}
