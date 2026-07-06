import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getEngagementBySlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import NotFound from "@/pages/NotFound";

const EngagementDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const model = slug ? getEngagementBySlug(slug, locale) : undefined;

  if (!model) {
    return <NotFound />;
  }

  const Icon = model.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-4xl">
          <Link
            to="/engagement"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.allEngagement")}
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon className="text-primary" size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              {model.title}
            </p>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{model.headline}</h1>
          <p className="text-lead mb-12">{model.description}</p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("common.bestFor")}</h2>
            <ul className="space-y-3">
              {model.bestFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("common.deliverables")}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {model.deliverables.map((item) => (
                <div key={item} className="card-hover p-4 text-sm text-secondary">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-2">{t("common.timeline")}</h2>
            <p className="text-secondary">{model.timeline}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">{t("common.howItWorks")}</h2>
            <div className="space-y-4">
              {model.engagementSteps.map((step, index) => (
                <div key={step.title} className="card-hover p-6 flex gap-4">
                  <span className="text-2xl font-bold text-primary/40 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card-hover p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("engagementPage.readyDiscuss")} {model.title.toLowerCase()}?
            </h2>
            <p className="text-secondary mb-6">{t("engagementPage.readyBody")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-primary">
                <Link to="/#contact">
                  {t("common.scheduleCall")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/ai-roi-calculator">{t("common.estimateRoi")}</Link>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EngagementDetail;
