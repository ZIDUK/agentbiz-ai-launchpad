import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Calculator, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getVisitorPaths } from "@/i18n/content/visitor-paths";

const iconMap = {
  executive: Users,
  engineering: Calculator,
  talent: Briefcase,
} as const;

const VisitorPaths = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const paths = getVisitorPaths(locale);

  return (
    <section className="section bg-muted/20">
      <div className="container">
        <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase text-center">
          {t("visitorPaths.eyebrow")}
        </p>
        <h2 className="text-headline text-center mb-4">
          {t("visitorPaths.title")}{" "}
          <span className="gradient-text">{t("visitorPaths.titleHighlight")}</span>
        </h2>
        <p className="text-lead text-center max-w-2xl mx-auto mb-12">{t("visitorPaths.subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path) => {
            const Icon = iconMap[path.id];
            return (
              <div key={path.id} className="card-hover p-8 flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
                  {path.audience}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3">{path.title}</h3>
                <p className="text-sm text-secondary leading-relaxed mb-6 flex-1">{path.description}</p>
                <Button asChild className="btn-primary w-full">
                  <Link to={path.href}>
                    {path.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="mt-2 w-full">
                  <Link to={path.secondaryHref}>{path.secondaryCta}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisitorPaths;
