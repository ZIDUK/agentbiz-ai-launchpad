"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getCaseStudyBySlug } from "@/i18n/content";
import NotFound from "@/pages/NotFound";

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const featuredCase = slug ? getCaseStudyBySlug(slug, locale) : undefined;

  if (!featuredCase) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(212_100%_50%/0.14),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div className="container relative max-w-4xl pb-14">
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
              {t("home.caseEyebrow")} · {featuredCase.client}
            </p>
            <h1 className="text-display">{featuredCase.title}</h1>
          </div>
        </section>

        <section className="container max-w-4xl py-16">
          <h2 className="text-2xl font-bold">{t("caseStudyPage.context")}</h2>
          <p className="mt-3 text-secondary">{featuredCase.context}</p>

          <h2 className="mt-10 text-2xl font-bold">{t("caseStudyPage.whatWeDid")}</h2>
          <ul className="mt-3 space-y-3 text-secondary">
            {featuredCase.whatWeDid.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-2xl font-bold">{t("caseStudyPage.results")}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {featuredCase.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <p className="text-3xl font-bold text-primary">{outcome.value}</p>
                <p className="mt-1 text-sm text-secondary">{outcome.label}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold">{t("caseStudyPage.methods")}</h2>
          <ul className="mt-3 space-y-2 text-secondary">
            {featuredCase.stackApplied.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {featuredCase.note && (
            <p className="mt-8 rounded-lg border border-border bg-muted/50 p-4 text-sm text-secondary">
              {featuredCase.note}
            </p>
          )}

          <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8">
            <h2 className="text-xl font-semibold">{t("caseStudyPage.applyTitle")}</h2>
            <p className="mt-2 text-secondary">{t("caseStudyPage.applyBody")}</p>
            <Button asChild className="btn-primary mt-6">
              <Link href="/contact">
                {t("caseStudyPage.bookCall")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
