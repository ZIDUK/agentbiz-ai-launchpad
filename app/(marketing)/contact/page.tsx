"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

export default function ContactPage() {
  const { t } = useTranslation();
  const { bundles } = useSiteContent();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      resource_slug: "discovery-call",
      source: "contact_form",
      website: String(form.get("website") ?? ""),
      metadata: {
        role: String(form.get("role") ?? ""),
        context: String(form.get("context") ?? ""),
        engagement: String(form.get("engagement") ?? ""),
        page: "/contact",
      },
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Lead submission failed");
      }
      setSubmitted(true);
    } catch {
      setError(t("contactPage.error"));
    } finally {
      setSubmitting(false);
    }
  }

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
              {t("contactPage.eyebrow")}
            </p>
            <h1 className="text-display">
              {t("contactPage.title")}{" "}
              <span className="gradient-text">{t("contactPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead mt-6 max-w-2xl">{t("contactPage.lead")}</p>
          </div>
        </section>

        <section className="container max-w-4xl py-16">
          {submitted ? (
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-6 text-2xl font-semibold text-foreground">
                {t("contactPage.successTitle")}
              </h2>
              <p className="mt-3 text-secondary">{t("contactPage.successBody")}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="outline">
                  <Link href="/services">{t("contactPage.seeServices")}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/engagement/agentic-readiness-sprint">
                    {t("contactPage.readSprint")}
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={t("contactPage.name")} name="name" required />
                <Field label={t("contactPage.email")} name="email" type="email" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={t("contactPage.company")} name="company" required />
                <Field
                  label={t("contactPage.role")}
                  name="role"
                  placeholder={t("contactPage.rolePlaceholder")}
                />
              </div>
              <div>
                <label
                  htmlFor="context"
                  className="block text-sm font-medium text-foreground"
                >
                  {t("contactPage.context")}
                </label>
                <textarea
                  id="context"
                  name="context"
                  rows={4}
                  required
                  placeholder={t("contactPage.contextPlaceholder")}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {t("contactPage.engagement")}{" "}
                  <span className="font-normal text-muted-foreground">
                    {t("contactPage.optional")}
                  </span>
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {bundles.map((bundle) => (
                    <label
                      key={bundle.slug}
                      className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-background p-4 transition hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <input
                        type="radio"
                        name="engagement"
                        value={bundle.slug}
                        className="mt-1 h-4 w-4 border-input text-primary focus:ring-primary"
                      />
                      <span className="text-sm">
                        <span className="font-medium text-foreground">
                          {bundle.title}
                        </span>
                        {bundle.tagline && (
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {bundle.tagline}
                          </span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  {t("contactPage.consent")}
                </p>
                <Button type="submit" disabled={submitting} className="btn-primary">
                  {submitting ? t("contactPage.submitting") : t("contactPage.submit")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              {error && (
                <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {error}
                </p>
              )}
            </form>
          )}

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-secondary">
            <Mail className="h-4 w-4" />
            {t("contactPage.preferEmail")}{" "}
            <a
              href="mailto:jonathan@agentbiz.io"
              className="font-medium text-primary hover:underline"
            >
              jonathan@agentbiz.io
            </a>
          </div>
        </section>

        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("contactPage.afterTitle")}
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  title: t("contactPage.after1Title"),
                  body: t("contactPage.after1Body"),
                },
                {
                  title: t("contactPage.after2Title"),
                  body: t("contactPage.after2Body"),
                },
                {
                  title: t("contactPage.after3Title"),
                  body: t("contactPage.after3Body"),
                },
                {
                  title: t("contactPage.after4Title"),
                  body: t("contactPage.after4Body"),
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
      />
    </div>
  );
}
