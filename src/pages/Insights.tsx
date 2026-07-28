import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {t("insightsPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("insightsPage.title")}{" "}
              <span className="gradient-text">{t("insightsPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">{t("insightsPage.subtitle")}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insightArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
                <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">{article.excerpt}</p>
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
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">{t("insightsPage.ctaTitle")}</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">{t("insightsPage.ctaBody")}</p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">{t("common.bookStrategyCall")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
