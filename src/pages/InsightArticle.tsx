"use client";

import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { insightMarkForSlug } from "@/components/icons/InsightMarks";
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

  const Mark = insightMarkForSlug(article.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        {/* Hero banner — same ops-blueprint language as engagement */}
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(212_100%_50%/0.14),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
          />

          <div className="container relative max-w-6xl pb-14 lg:pb-20">
            <Link
              to="/insights"
              className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common.allInsights")}
            </Link>

            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
              <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {article.menuLabel}
                </p>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground lg:text-5xl lg:leading-[1.08]">
                  {article.title}
                </h1>
                <p className="mt-5 max-w-2xl text-lead">{article.excerpt}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.readTime}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString(dateLocale, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>

              <aside
                aria-hidden
                className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/90 p-8 shadow-[var(--shadow-card)] backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(212_100%_50%/0.18),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border)/0.8)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.8)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_0_8px_hsl(212_100%_50%/0.06)]">
                  <Mark className="h-14 w-14" title={article.menuLabel} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <article className="container max-w-3xl pt-14 lg:pt-16">
          <div className="prose max-w-none space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-xl font-semibold text-foreground">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-4 leading-relaxed text-secondary">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h2 className="mb-3 text-xl font-semibold text-foreground">{t("common.applyToOrg")}</h2>
            <p className="mb-6 text-secondary">{t("insightArticle.applyBody")}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="btn-primary">
                <Link to="/contact">
                  {t("common.talkToLead")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/engagement">{t("nav.offering")}</Link>
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
