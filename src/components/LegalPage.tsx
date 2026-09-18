import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/useTranslation";
import type { LegalPageContent } from "@/i18n/content/legal";

interface LegalPageProps {
  content: LegalPageContent;
  alternateHref: "/privacy" | "/terms";
  alternateLabel: string;
}

export function LegalPage({ content, alternateHref, alternateLabel }: LegalPageProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-20">
        <section className="relative overflow-hidden border-b border-border pt-28 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(212_100%_50%/0.12),transparent_55%),linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          />
          <div className="container relative max-w-3xl pb-12 lg:pb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {content.eyebrow}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lead">{content.lead}</p>
            <p className="mt-6 text-xs text-muted-foreground">
              {t("legal.updated")} {content.updated}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <Link to={alternateHref} className="text-primary hover:underline">
                {alternateLabel}
              </Link>
            </p>
          </div>
        </section>

        <article className="container max-w-3xl pt-12 lg:pt-14">
          <div className="space-y-10">
            {content.sections.map((section, index) => (
              <section
                key={section.heading}
                className="scroll-mt-28 border-b border-border pb-10 last:border-b-0 last:pb-0"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="text-xs font-semibold tabular-nums tracking-wider text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                </div>
                <div className="space-y-3 pl-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
            <p className="text-sm text-secondary">
              {t("legal.questions")}{" "}
              <a
                href="mailto:jonathan@agentbiz.io"
                className="font-semibold text-primary hover:underline"
              >
                jonathan@agentbiz.io
              </a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
