import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useExecutiveContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import type { TranslationKey } from "@/i18n/useTranslation";

const categoryLabelKeys = {
  delivery: "executiveCategories.delivery",
  governance: "executiveCategories.governance",
  cost: "executiveCategories.cost",
  scale: "executiveCategories.scale",
} as const satisfies Record<string, TranslationKey>;

const ExecutiveBriefing = () => {
  const { t } = useTranslation();
  const executivePainPoints = useExecutiveContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {t("executive.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("executive.title")}{" "}
              <span className="gradient-text">{t("executive.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">{t("executive.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {executivePainPoints.map((point, index) => (
              <div key={point.id} className="card-hover p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {t(categoryLabelKeys[point.category])}
                  </span>
                  <span className="text-2xl font-bold text-primary/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{point.title}</h2>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  <span className="text-muted-foreground">{t("common.symptom")}</span>
                  {point.symptom}
                </p>
                <p className="text-sm text-foreground leading-relaxed border-l-2 border-primary pl-4">
                  <span className="font-semibold text-primary">{t("common.approach")}</span>
                  {point.solution}
                </p>
              </div>
            ))}
          </div>

          <div className="card-hover p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("executive.ctaTitle")}</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">{t("executive.ctaBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link to="/#contact">{t("executive.scheduleBriefing")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/ai-roi-calculator">{t("common.calculateRoi")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExecutiveBriefing;
