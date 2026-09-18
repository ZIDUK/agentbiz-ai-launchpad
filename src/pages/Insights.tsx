import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { insightMarkForSlug } from "@/components/icons/InsightMarks";
import { useInsightsContent } from "@/i18n/hooks";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";

const Insights = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const insightArticles = useInsightsContent();
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(212_100%_50%/0.12),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div className="container relative max-w-6xl pb-14 lg:pb-16">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
              {t("insightsPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6 max-w-3xl">
              {t("insightsPage.title")}{" "}
              <span className="gradient-text">{t("insightsPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-2xl">{t("insightsPage.subtitle")}</p>
          </div>
        </section>

        <div className="container max-w-6xl pt-12 lg:pt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insightArticles.map((article) => {
              const Mark = insightMarkForSlug(article.slug);
              return (
                <Link
                  key={article.slug}
                  to={`/insights/${article.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
                >
                  {/* Card banner */}
                  <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-border bg-muted/30">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(212_100%_50%/0.16),transparent_60%)]"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border)/0.8)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.8)_1px,transparent_1px)] [background-size:24px_24px]"
                    />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Mark className="h-8 w-8" title={article.menuLabel} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-semibold uppercase tracking-wider text-primary">
                        {article.menuLabel}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString(dateLocale, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">
                      {article.excerpt}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                      {t("common.readArticle")}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-2xl font-bold">{t("insightsPage.ctaTitle")}</h2>
            <p className="mx-auto mb-6 max-w-xl text-secondary">{t("insightsPage.ctaBody")}</p>
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

export default Insights;
