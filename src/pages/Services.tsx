import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const Services = () => {
  const { t } = useTranslation();
  const { services, bundles } = useSiteContent();

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
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
              {t("servicesPage.eyebrow")}
            </p>
            <h1 className="text-display mb-4">
              {t("servicesPage.title")}{" "}
              <span className="gradient-text">{t("servicesPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead mx-auto max-w-3xl">{t("servicesPage.subtitle")}</p>
          </div>
        </section>

        <div className="container max-w-6xl pt-12 lg:pt-16">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {service.number}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center justify-end border-t border-border pt-4 text-sm">
                    <span className="inline-flex items-center font-semibold text-primary">
                      {t("servicesPage.viewDetails")}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <section className="mt-20">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-primary">
                {t("servicesPage.howClientsBuy")}
              </p>
              <h2 className="text-headline">{t("servicesPage.startWithBundle")}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {bundles.map((bundle) => (
                <Link
                  key={bundle.slug}
                  to={`/engagement/${bundle.slug}`}
                  className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:border-primary/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {bundle.category === "entry"
                      ? t("offer.startHere")
                      : bundle.category === "full"
                        ? t("offer.full")
                        : t("offer.followOn")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {bundle.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{bundle.tagline}</p>
                </Link>
              ))}
            </div>
          </section>

          <div className="relative mt-16 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center">
            <h2 className="mb-4 text-2xl font-bold">{t("servicesPage.notSure")}</h2>
            <p className="mx-auto mb-6 max-w-xl text-secondary">
              {t("servicesPage.notSureBody")}
            </p>
            <Button asChild className="btn-primary">
              <Link to="/contact">
                {t("home.ctaPrimary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
