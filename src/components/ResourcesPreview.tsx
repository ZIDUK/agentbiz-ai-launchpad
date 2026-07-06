import { Link } from "react-router-dom";
import { ArrowRight, Calculator, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const ResourcesPreview = () => {
  const { t } = useTranslation();
  const { resources } = useSiteContent();
  const featured = resources.slice(0, 2);

  return (
    <section id="resources-preview" className="section">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("resourcesSection.eyebrow")}
          </p>
          <h2 className="text-headline mb-4">
            {t("resourcesSection.title")}{" "}
            <span className="gradient-text">{t("resourcesSection.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">{t("resourcesSection.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((resource) => (
            <div key={resource.slug} className="card-hover p-8 flex flex-col">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-3">
                {resource.type}
              </span>
              <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                {resource.description}
              </p>
              <Button asChild variant="outline" className="w-fit">
                <Link to={resource.href ?? `/resources/${resource.slug}`}>
                  {t("common.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="card-hover p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">{t("resourcesSection.calculatorTitle")}</h3>
              <p className="text-sm text-secondary">{t("resourcesSection.calculatorSubtitle")}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="btn-primary">
              <Link to="/ai-roi-calculator">{t("common.calculateRoi")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/resources">{t("common.viewAllResources")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
