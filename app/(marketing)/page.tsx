"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import { IndustryCard } from "@/components/IndustryCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import { isPublicIndustry } from "@/data/site-content";
import { packageMarkForSlug } from "@/components/icons/PackageMarks";

const INDUSTRY_ORDER = [
  "tech-services-latam",
  "media-entertainment",
  "sports",
  "retail",
];

const BUNDLE_ORDER = [
  "agentic-readiness-sprint",
  "agentic-operations-build",
  "custom-delivery-pod",
];

function bundleCategoryLabel(
  category: string | undefined,
  t: (key: "offer.entry" | "offer.full" | "offer.followOn") => string,
): string {
  switch (category) {
    case "entry":
      return t("offer.entry");
    case "full":
      return t("offer.full");
    case "follow-on":
      return t("offer.followOn");
    default:
      return t("offer.followOn");
  }
}

export default function HomePage() {
  const { t } = useTranslation();
  const { workflowPhases, bundles, industries, caseStudies, buyerFaqs } =
    useSiteContent();
  const publicIndustries = industries
    .filter((industry) => isPublicIndustry(industry.slug))
    .sort(
      (a, b) =>
        INDUSTRY_ORDER.indexOf(a.slug) - INDUSTRY_ORDER.indexOf(b.slug),
    );
  const orderedBundles = [...bundles].sort(
    (a, b) => BUNDLE_ORDER.indexOf(a.slug) - BUNDLE_ORDER.indexOf(b.slug),
  );
  const featuredCase = caseStudies[0];
  const secondaryCases = caseStudies.slice(1, 3);

  const sequence = [
    {
      step: "01",
      label: t("home.sequenceAssessmentLabel"),
      body: t("home.sequenceAssessmentBody"),
      href: "/engagement/agentic-readiness-sprint",
    },
    {
      step: "02",
      label: t("home.sequenceBuildLabel"),
      body: t("home.sequenceBuildBody"),
      href: "/engagement/agentic-operations-build",
    },
    {
      step: "03",
      label: t("home.sequencePodLabel"),
      body: t("home.sequencePodBody"),
      href: "/engagement/custom-delivery-pod",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1. Hero — product sequence as the star */}
        <section className="relative flex min-h-[72vh] items-center overflow-hidden border-b border-border pt-28 lg:min-h-[78vh] lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(212_100%_50%/0.14),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div className="container relative max-w-6xl py-16 lg:py-24">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {t("home.productLabel")}
            </p>
            <h1 className="text-display max-w-4xl">
              {t("home.title")}{" "}
              <span className="gradient-text">{t("home.titleHighlight")}</span>
            </h1>
            <p className="text-lead mt-6 max-w-2xl">{t("home.lead")}</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button asChild className="btn-primary">
                <Link href="/engagement/agentic-readiness-sprint">
                  {t("home.ctaPrimary")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#bundles">{t("home.ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. One sequence — Assessment → Build → Pod */}
        <section id="path" className="border-b border-border bg-muted/25 py-12 lg:py-14">
          <div className="container max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("home.sequenceEyebrow")}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground lg:text-3xl">
                {t("home.sequenceTitle")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary lg:text-base">
                {t("home.sequenceLead")}
              </p>
            </div>

            <ol className="relative grid gap-0 lg:grid-cols-3">
              {/* Continuous rail on desktop */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-5 hidden h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 lg:block"
              />
              {sequence.map((item) => (
                <li key={item.label} className="relative">
                  <Link
                    href={item.href}
                    className="group flex gap-4 border-l border-border py-5 pl-5 transition-colors hover:border-primary lg:block lg:border-l-0 lg:py-0 lg:pl-0 lg:pr-8"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-bold tabular-nums text-primary shadow-[0_0_0_6px_hsl(var(--muted)/0.25)] transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground lg:mb-5">
                      {item.step}
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-lg font-semibold text-foreground">
                        {item.label}
                        <ArrowRight className="h-4 w-4 text-primary opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-secondary">
                        {item.body}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 3. Packages */}
        <section id="bundles" className="section border-b border-border">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("home.bundlesEyebrow")}
              </p>
              <h2 className="text-headline">{t("home.bundlesTitle")}</h2>
              <p className="text-lead mt-5">{t("home.bundlesLead")}</p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {orderedBundles.map((bundle) => {
                const Mark = packageMarkForSlug(bundle.slug);
                const isEntry = bundle.category === "entry";
                return (
                  <article
                    key={bundle.slug}
                    className={`group relative flex flex-col rounded-2xl border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 ${
                      isEntry
                        ? "border-primary/40 hover:border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {isEntry && (
                      <span className="absolute right-6 top-6 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                        {t("offer.startHere")}
                      </span>
                    )}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mark className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {bundleCategoryLabel(bundle.category, t)}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                      {bundle.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                      {bundle.tagline ?? bundle.shortDescription}
                    </p>
                    <ul className="mt-6 space-y-2.5 text-sm text-secondary">
                      {(bundle.deliverables ?? []).slice(0, 5).map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/engagement/${bundle.slug}`}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      {t("offer.readScope")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Industries */}
        <section className="section border-b border-border bg-muted/30">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("home.industriesEyebrow")}
              </p>
              <h2 className="text-headline">{t("home.industriesTitle")}</h2>
              <p className="text-lead mt-5">{t("home.industriesLead")}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {publicIndustries.map((industry) => (
                <IndustryCard
                  key={industry.slug}
                  industry={industry}
                  showWorkflows={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Capabilities */}
        <section id="journey" className="section border-b border-border">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("home.journeyEyebrow")}
              </p>
              <h2 className="text-headline">
                {t("home.journeyTitle")}{" "}
                <span className="gradient-text">{t("home.journeyTitleHighlight")}</span>
              </h2>
              <p className="text-lead mt-5">{t("home.journeyLead")}</p>
            </div>

            <div className="relative mt-14">
              <div
                aria-hidden
                className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
              />
              <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {workflowPhases.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <li key={phase.title} className="relative">
                      <div className="flex items-start gap-5 lg:flex-col lg:gap-0">
                        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_0_6px_hsl(var(--background))]">
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                            {phase.number}
                          </span>
                        </div>
                        <div className="lg:mt-6">
                          <h3 className="text-lg font-semibold text-foreground">
                            {phase.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-secondary">
                            {phase.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <p className="mt-12 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("home.journeyNote")}
              </p>
            </div>
          </div>
        </section>

        {/* 6. Clients + glance stats */}
        <section className="border-b border-border">
          <TrustedBy />
          <div className="container max-w-6xl border-t border-border py-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t("home.statsEyebrow")}
            </p>
            <dl className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-foreground">4</dt>
                <dd className="mt-2 text-sm text-secondary">{t("home.statsIndustries")}</dd>
              </div>
              <div className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-foreground">3</dt>
                <dd className="mt-2 text-sm text-secondary">{t("home.statsPackages")}</dd>
              </div>
              <div className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-foreground">
                  {caseStudies.length}
                </dt>
                <dd className="mt-2 text-sm text-secondary">{t("home.statsCases")}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 7. Featured case + secondary */}
        <section id="work" className="section border-b border-border bg-muted/30">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("home.workEyebrow")}
              </p>
              <h2 className="text-headline">{t("home.workTitle")}</h2>
              <p className="text-lead mt-5">{t("home.workLead")}</p>
            </div>

            {featuredCase && (
              <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <Link
                  href={featuredCase.href ?? `/case-studies/${featuredCase.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  {featuredCase.image && (
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
                      <img
                        src={featuredCase.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-8 lg:p-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {t("home.caseFeatured")} · {featuredCase.industry}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-3xl">
                        {featuredCase.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{featuredCase.client}</p>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-secondary">
                        {featuredCase.context}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t("home.caseRead")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>

                <div className="flex flex-col gap-6">
                  {secondaryCases.map((study) => (
                    <Link
                      key={study.slug}
                      href={study.href ?? `/case-studies/${study.slug}`}
                      className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                    >
                      {study.image && (
                        <div className="relative aspect-[21/9] overflow-hidden border-b border-border sm:aspect-[16/7]">
                          <img
                            src={study.image}
                            alt=""
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                          {study.industry ?? t("home.caseEyebrow")}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {study.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-secondary">
                          {study.context}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                          {t("home.caseRead")}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 8. FAQ + Contact */}
        <section id="faq" className="section border-b border-border">
          <div className="container max-w-3xl">
            <p className="mb-3 text-center text-sm font-semibold tracking-[0.18em] text-primary">
              {t("home.faqEyebrow")}
            </p>
            <h2 className="text-headline text-center">
              {t("home.faqTitle")}{" "}
              <span className="gradient-text">{t("home.faqTitleHighlight")}</span>
            </h2>
            <p className="text-lead mx-auto mt-5 mb-12 text-center">
              {t("home.faqLead")}
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {buyerFaqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="rounded-xl border border-border bg-card px-6 shadow-[var(--shadow-card)]"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container max-w-3xl text-center">
            <h2 className="text-headline">
              {t("home.ctaTitle")}{" "}
              <span className="gradient-text">{t("home.ctaTitleHighlight")}</span>
            </h2>
            <p className="text-lead mx-auto mt-5">{t("home.ctaLead")}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="btn-primary">
                <Link href="/contact">
                  {t("home.ctaRequest")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="mailto:jonathan@agentbiz.io"
                className="text-sm font-medium text-secondary hover:text-foreground"
              >
                {t("home.ctaEmail")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
