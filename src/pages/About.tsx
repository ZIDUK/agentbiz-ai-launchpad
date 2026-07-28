import { Link } from "react-router-dom";
import { ArrowRight, KeyRound, Network, Rocket, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getAboutContent, trustedIndustries } from "@/i18n/content/about";

const valueIcons = [Rocket, ShieldCheck, KeyRound] as const;
const teamIcons = [Network, Users] as const;

const About = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const content = getAboutContent(locale);
  const industries = trustedIndustries[locale];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(212_100%_50%/0.14),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div className="container relative max-w-5xl pb-14 text-center lg:pb-16">
            <p className="mb-3 text-sm font-semibold tracking-wider text-primary">
              {t("about.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {content.headline}{" "}
              <span className="gradient-text">{content.headlineHighlight}</span>
            </h1>
            <p className="text-lead mx-auto mb-8 max-w-3xl">{content.subtitle}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="btn-primary">
                <Link to="/#contact">
                  {t("common.talkToLead")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/engagement">{t("nav.solutions")}</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container max-w-5xl pt-12 lg:pt-16">
          <section className="relative mb-16 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {content.missionTitle}
            </p>
            <p className="max-w-3xl text-xl font-semibold leading-snug text-foreground md:text-2xl">
              {content.missionBody}
            </p>
          </section>

          <section className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-headline">{content.valuesTitle}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {content.values.map((value, index) => {
                const Icon = valueIcons[index] ?? Rocket;
                return (
                  <div
                    key={value.title}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-secondary">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-center text-headline">{content.industriesTitle}</h2>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {industry}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-headline">{content.teamTitle}</h2>
              <p className="mx-auto max-w-2xl text-secondary">{content.teamSubtitle}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {content.team.map((member, index) => {
                const Icon = teamIcons[index] ?? Users;
                return (
                  <div
                    key={member.name}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="mb-4 text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm leading-relaxed text-secondary">{member.bio}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-10 text-center">
            <h2 className="mb-4 text-2xl font-bold">{content.ctaTitle}</h2>
            <p className="mx-auto mb-6 max-w-xl text-secondary">{content.ctaBody}</p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">
                {t("common.talkToLead")}
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

export default About;
