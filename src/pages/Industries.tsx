import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IndustryCard } from "@/components/IndustryCard";
import { Button } from "@/components/ui/button";
import { useIndustriesContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const Industries = () => {
  const { t } = useTranslation();
  const industryDetails = useIndustriesContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(212_100%_50%/0.12),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div className="container relative max-w-5xl pb-14 text-center lg:pb-16">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
              {t("industriesPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("industriesPage.title")}{" "}
              <span className="gradient-text">{t("industriesPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead mx-auto max-w-3xl">{t("industriesPage.subtitle")}</p>
          </div>
        </section>

        <div className="container max-w-6xl pt-12 lg:pt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industryDetails.map((industry) => (
              <IndustryCard
                key={industry.slug}
                industry={industry}
                titleAs="h2"
                showWorkflows={false}
              />
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center">
            <h2 className="mb-4 text-2xl font-bold">{t("industriesPage.ctaTitle")}</h2>
            <p className="mx-auto mb-6 max-w-xl text-secondary">{t("industriesPage.ctaBody")}</p>
            <Button asChild className="btn-primary">
              <Link to="/contact">{t("common.bookStrategyCall")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
