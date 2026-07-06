import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getResourceBySlug } from "@/i18n/content";
import { getResourceGuideSections, getResourceDownloadPath } from "@/i18n/content/resource-guides";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import ResourceDownloadGate from "@/components/ResourceDownloadGate";
import NotFound from "@/pages/NotFound";

const ResourceGuide = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const resource = slug ? getResourceBySlug(slug, locale) : undefined;
  const sections = slug ? getResourceGuideSections(slug, locale) : undefined;
  const downloadPath = slug ? getResourceDownloadPath(slug, locale) : undefined;

  if (!resource || !sections || !downloadPath) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.allResources")}
          </Link>

          <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase">
            {resource.type} · {resource.readTime}
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {resource.title}
          </h1>
          <p className="text-lead mb-10">{resource.description}</p>

          <div className="prose max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {t("common.whoIsThisFor")}
              </h2>
              <p className="text-secondary leading-relaxed">{t("resourceGuide.whoForBody")}</p>
            </section>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="card-hover p-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">{t("common.nextStep")}</h2>
              <p className="text-secondary mb-6">{t("resourceGuide.nextStepBody")}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary">
                  <Link to="/#contact">{t("common.talkToLead")}</Link>
                </Button>
              </div>

              <div className="mt-6">
                <ResourceDownloadGate
                  resourceSlug={resource.slug}
                  resourceTitle={resource.title}
                  downloadPath={downloadPath}
                  downloadLabel={
                    resource.slug === "pilot-to-production-checklist"
                      ? t("resourceGuide.downloadChecklist")
                      : t("resourceGuide.downloadRoadmap")
                  }
                />
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceGuide;
