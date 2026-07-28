import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const Resources = () => {
  const { t } = useTranslation();
  const { resources } = useSiteContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {t("resourcesPage.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("resourcesPage.title")}{" "}
              <span className="gradient-text">{t("resourcesPage.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">{t("resourcesPage.subtitle")}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                to={resource.href ?? `/resources/${resource.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {resource.type}
                </span>
                <h2 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {resource.title}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">{resource.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                  {resource.type === "Case Study" ? t("common.readCaseStudy") : t("common.readGuide")}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">{t("resourcesPage.ctaTitle")}</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">{t("resourcesPage.ctaBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link to="/#contact">{t("common.scheduleCall")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/insights">{t("resourcesPage.readInsights")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
