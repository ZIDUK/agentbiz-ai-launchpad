import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEngagementContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import { packageMarkForSlug } from "@/components/icons/PackageMarks";
import { isPublicBundle } from "@/data/site-content";

const EngagementHub = () => {
  const { t } = useTranslation();
  const engagementDetails = useEngagementContent().filter((model) =>
    isPublicBundle(model.slug),
  );

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
              {t("engagementPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("engagementPage.title")}{" "}
              <span className="gradient-text">{t("engagementPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead mx-auto max-w-3xl">{t("engagementPage.subtitle")}</p>
          </div>
        </section>

        <div className="container max-w-5xl pt-12 lg:pt-14">
          <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {engagementDetails.map((model) => {
              const Mark = packageMarkForSlug(model.slug);
              return (
                <Link
                  key={model.slug}
                  to={`/engagement/${model.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Mark className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {model.eyebrow}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {model.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">
                    {model.shortDescription}
                  </p>
                  <div className="flex items-center justify-end border-t border-border pt-4">
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      {t("common.learnMore")}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center">
            <h2 className="mb-4 text-2xl font-bold">{t("engagementPage.ctaTitle")}</h2>
            <p className="mx-auto mb-6 max-w-xl text-secondary">{t("engagementPage.ctaBody")}</p>
            <Button asChild className="btn-primary">
              <Link to="/contact">{t("engagementPage.discuss")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EngagementHub;
