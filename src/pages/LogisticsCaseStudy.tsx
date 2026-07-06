import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getLogisticsCaseStudy } from "@/i18n/content/case-studies";

const LogisticsCaseStudy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const content = getLogisticsCaseStudy(locale);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.allResources")}
          </Link>

          <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase">
            {t("caseStudy.label")} · Logistics · {content.readTime}
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{content.title}</h1>
          <p className="text-lead mb-10">{content.lead}</p>

          <div className="prose max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">{t("caseStudy.theSituation")}</h2>
              <p className="text-secondary leading-relaxed">{content.situation}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">{t("caseStudy.theConstraint")}</h2>
              <p className="text-secondary leading-relaxed">{content.constraint}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">{t("caseStudy.theApproach")}</h2>
              <ul className="space-y-3">
                {content.approachItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">{t("caseStudy.results10Weeks")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {content.resultsMetrics.map((metric) => (
                  <div key={metric.label} className="card-hover p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">{t("caseStudy.metricsDisclaimerNda")}</p>
            </section>

            <section className="card-hover p-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">{content.ctaTitle}</h2>
              <p className="text-secondary mb-6">{content.ctaBody}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary">
                  <Link to="/industries/logistics">{t("caseStudy.logisticsIndustry")}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/#contact">
                    {t("common.talkToLead")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LogisticsCaseStudy;
