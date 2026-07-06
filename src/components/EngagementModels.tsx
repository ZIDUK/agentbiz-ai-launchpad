import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const EngagementModels = () => {
  const { t } = useTranslation();
  const { engagementModels } = useSiteContent();

  return (
    <section id="engagement" className="section bg-card/40">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("engagementSection.eyebrow")}
          </p>
          <h2 className="text-headline mb-4">
            {t("engagementSection.title")}{" "}
            <span className="gradient-text">{t("engagementSection.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("engagementSection.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementModels.map((model) => {
            const Icon = model.icon;
            return (
              <Link
                key={model.slug}
                to={model.href}
                className="card-hover p-6 block group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-title mb-2 text-foreground group-hover:text-primary transition-colors">
                  {model.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{model.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-primary">
            <Link to="/#contact">{t("engagementSection.discuss")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/engagement">{t("common.compareModels")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
