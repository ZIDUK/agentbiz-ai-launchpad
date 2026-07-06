import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getPrivacyContent } from "@/i18n/content/legal";

const Privacy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const content = getPrivacyContent(locale);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl prose max-w-none">
          <p className="text-sm text-muted-foreground mb-2">
            {t("legal.updated")} {content.updated}
          </p>
          <h1 className="text-3xl font-bold text-foreground mb-10">{content.title}</h1>
          {content.sections.map((section) => (
            <section key={section.heading} className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="text-secondary leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
