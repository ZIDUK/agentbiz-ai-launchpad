import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getInsightBySlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import NotFound from "@/pages/NotFound";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const article = slug ? getInsightBySlug(slug, locale) : undefined;
  const dateLocale = locale === "es" ? "es-ES" : "en-US";

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.allInsights")}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span>{article.readTime}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString(dateLocale, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{article.title}</h1>
          <p className="text-lead mb-10">{article.excerpt}</p>

          <div className="prose max-w-none space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-secondary leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 card-hover p-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">{t("common.applyToOrg")}</h2>
            <p className="text-secondary mb-6">{t("insightArticle.applyBody")}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-primary">
                <Link to="/#contact">{t("common.talkToLead")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/resources">{t("insightArticle.enterpriseResources")}</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InsightArticle;
