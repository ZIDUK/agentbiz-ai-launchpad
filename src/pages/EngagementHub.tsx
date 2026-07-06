import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEngagementContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const EngagementHub = () => {
  const { t } = useTranslation();
  const engagementDetails = useEngagementContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {t("engagementPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("engagementPage.title")}{" "}
              <span className="gradient-text">{t("engagementPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">{t("engagementPage.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {engagementDetails.map((model) => {
              const Icon = model.icon;
              return (
                <Link
                  key={model.slug}
                  to={`/engagement/${model.slug}`}
                  className="card-hover p-8 block group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {model.title}
                  </h2>
                  <p className="text-secondary text-sm mb-4">{model.shortDescription}</p>
                  <span className="text-sm font-semibold text-primary">{t("common.learnMore")}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">{t("engagementPage.ctaTitle")}</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">{t("engagementPage.ctaBody")}</p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">{t("engagementPage.discuss")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EngagementHub;
