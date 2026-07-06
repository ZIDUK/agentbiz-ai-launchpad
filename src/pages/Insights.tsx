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
        <div className="container max-w-5xl">
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

          <div className="grid gap-6">
            {insightArticles.map((article) => (
              <article key={article.slug} className="card-hover p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <time className="text-xs text-muted-foreground" dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString(dateLocale, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{article.title}</h2>
                <p className="text-secondary mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link to={`/insights/${article.slug}`}>
                    {t("common.readArticle")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
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
