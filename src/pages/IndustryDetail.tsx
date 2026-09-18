"use client";

import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCaseStudyBySlug, getIndustryBySlug } from "@/i18n/content";
import { industryThumbnailSrc } from "@/components/IndustryCard";
import { isPublicIndustry } from "@/data/site-content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import NotFound from "@/pages/NotFound";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const industry = slug ? getIndustryBySlug(slug, locale) : undefined;

  if (!industry || !isPublicIndustry(industry.slug)) {
    return <NotFound />;
  }

  const Icon = industry.icon;
  const shortName = industry.name.split(/[&/]/)[0]?.trim() ?? industry.name;
  const challenges = industry.challenges ?? industry.painPoints ?? [];
  const useCases = industry.useCases ?? [];
  const metrics = industry.metrics ?? [];
  const relatedCase = industry.caseStudySlug
    ? getCaseStudyBySlug(industry.caseStudySlug, locale)
    : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(212_100%_50%/0.14),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
          />

          <div className="container relative max-w-6xl pb-14 lg:pb-20">
            <Link
              to="/industries"
              className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common.allIndustries")}
            </Link>

            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.7fr)]">
              <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_0_6px_hsl(212_100%_50%/0.06)]">
                    {Icon && <Icon className="text-primary" size={28} />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {t("industriesPage.eyebrow")}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">{industry.name}</p>
                  </div>
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground lg:text-5xl lg:leading-[1.08]">
                  {industry.headline}
                </h1>
                <p className="mt-5 max-w-2xl text-lead">{industry.description}</p>

                {industry.services.length > 0 && (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {industry.services.map((service) => (
                      <li
                        key={service}
                        className="rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-secondary"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <aside className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-[var(--shadow-card)] backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
                <img
                  src={industryThumbnailSrc(industry.slug)}
                  alt=""
                  width={1280}
                  height={800}
                  className="h-40 w-full object-cover sm:h-48"
                />
                <div className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("common.typicalOutcomes")}
                </p>
                <ul className="mb-5 space-y-4 border-b border-border pb-5">
                  {(industry.metrics ?? []).map((metric) => (
                    <li key={metric.label} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-secondary">{metric.label}</span>
                      <span className="text-lg font-bold tabular-nums text-primary">{metric.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {t("common.metricsDisclaimer")}
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="btn-primary w-full justify-center">
                    <Link to="/contact">
                      {t("common.talkToLead")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {relatedCase && (
                    <Button asChild variant="outline" className="w-full justify-center">
                      <Link to={relatedCase.href ?? `/case-studies/${relatedCase.slug}`}>
                        {t("home.caseRead")}
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link to="/engagement">{t("nav.engagementModels")}</Link>
                  </Button>
                </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <article className="container max-w-6xl pt-14 lg:pt-16">
          <section className="mb-16 lg:mb-20">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {shortName}
                </p>
                <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
                  {t("industryDetail.challenges")}
                </h2>
              </div>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {challenges.length}
              </span>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {challenges.map((challenge, index) => (
                <li
                  key={challenge}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 pl-6 shadow-[var(--shadow-card)]"
                >
                  <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-primary/60" />
                  <div className="mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-semibold tabular-nums tracking-wider text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary sm:text-base">{challenge}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16 lg:mb-20">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {shortName}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                {t("industryDetail.wayWeWork")}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-secondary lg:text-lg">
                {t("industryDetail.wayWeWorkLead")}
              </p>
            </div>
            {industry.industryServices && industry.industryServices.length > 0 ? (
              <div>
                <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                  <p className="text-sm font-semibold tracking-wide text-foreground">
                    {t("industryDetail.services")}
                  </p>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <Accordion type="single" collapsible className="divide-y divide-border border-b border-border">
                  {industry.industryServices.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <AccordionItem
                        key={service.title}
                        value={`service-${index}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="gap-4 py-5 text-left font-semibold text-foreground hover:no-underline [&>svg]:rounded-full [&>svg]:border [&>svg]:border-border [&>svg]:p-1 [&>svg]:h-7 [&>svg]:w-7">
                          <span className="flex min-w-0 items-center gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              {ServiceIcon ? (
                                <ServiceIcon className="h-5 w-5" />
                              ) : (
                                <span className="text-xs font-semibold tabular-nums">
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                              )}
                            </span>
                            <span className="text-base lg:text-lg">{service.title}</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 pl-14 text-secondary leading-relaxed">
                          {service.description}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-3">
                {useCases.map((useCase, index) => (
                  <div
                    key={useCase.title}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                  >
                    <span className="mb-4 text-2xl font-bold tabular-nums text-primary/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{useCase.title}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-secondary">{useCase.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="mb-16 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 lg:mb-20 lg:p-8">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
              <h2 className="text-xl font-semibold text-foreground">{t("common.typicalOutcomes")}</h2>
              <p className="max-w-xs text-right text-xs text-muted-foreground">
                {t("common.metricsDisclaimer")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background px-5 py-6 text-center"
                >
                  <p className="mb-2 text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
                  {t("industryDetail.startWorkflow")} {shortName}
                </h2>
                <p className="mt-2 text-secondary">{t("industryDetail.startBody")}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild className="btn-primary">
                  <Link to="/contact">
                    {t("common.talkToLead")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/industries">{t("common.allIndustries")}</Link>
                </Button>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;
