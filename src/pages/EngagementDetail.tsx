import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getEngagementBySlug } from "@/i18n/content";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import NotFound from "@/pages/NotFound";

const EngagementDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const model = slug ? getEngagementBySlug(slug, locale) : undefined;

  if (!model) {
    return <NotFound />;
  }

  const Icon = model.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        {/* Hero — ops blueprint band */}
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
              to="/engagement"
              className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common.allEngagement")}
            </Link>

            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.7fr)]">
              <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_0_6px_hsl(212_100%_50%/0.06)]">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {model.eyebrow}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">{model.title}</p>
                  </div>
                </div>

                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground lg:text-5xl lg:leading-[1.08]">
                  {model.headline}
                </h1>
                <p className="mt-5 max-w-2xl text-lead">{model.description}</p>
              </div>

              <aside className="rounded-2xl border border-border bg-card/90 p-6 shadow-[var(--shadow-card)] backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
                <div className="mb-5 flex items-start gap-3 border-b border-border pb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t("common.timeline")}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                      {model.timeline}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-secondary">{t("engagementPage.readyBody")}</p>
                <div className="flex flex-col gap-3">
                  <Button asChild className="btn-primary w-full justify-center">
                    <Link to="/#contact">
                      {t("common.scheduleCall")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link to="/ai-roi-calculator">{t("common.estimateRoi")}</Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <article className="container max-w-6xl pt-14 lg:pt-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <section>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
                <h2 className="text-xl font-semibold text-foreground">{t("common.bestFor")}</h2>
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {model.bestFor.length}
                </span>
              </div>
              <ul className="space-y-3">
                {model.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-transparent bg-card/40 px-3 py-3 transition-colors hover:border-border"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-secondary sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-3">
                <h2 className="text-xl font-semibold text-foreground">{t("common.deliverables")}</h2>
                <span className="text-xs font-medium tabular-nums text-muted-foreground">
                  {model.deliverables.length}
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {model.deliverables.map((item, index) => (
                  <div
                    key={item}
                    className="relative overflow-hidden rounded-xl border border-border bg-card p-4 pl-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1 bg-primary/70"
                    />
                    <p className="mb-2 text-[11px] font-semibold tabular-nums tracking-wider text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm leading-relaxed text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="mt-16 lg:mt-20">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {model.eyebrow}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                {t("common.howItWorks")}
              </h2>
            </div>

            <ol className="relative space-y-0">
              <div
                aria-hidden
                className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent lg:left-[1.6rem]"
              />
              {model.engagementSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0 lg:gap-7">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background text-sm font-bold tabular-nums text-primary shadow-[0_0_0_6px_hsl(var(--background))] lg:h-12 lg:w-12">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-transform duration-300 motion-safe:hover:-translate-y-0.5 lg:p-6">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="relative mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 lg:mt-20 lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
            />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
                  {t("engagementPage.readyDiscuss")} {model.title}?
                </h2>
                <p className="mt-2 text-secondary">{t("engagementPage.readyBody")}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild className="btn-primary">
                  <Link to="/#contact">
                    {t("common.scheduleCall")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/engagement">{t("common.compareModels")}</Link>
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

export default EngagementDetail;
