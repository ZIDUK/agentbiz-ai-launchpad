import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trustedIndustries } from "@/i18n/content/about";

const TrustedBy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const industries = trustedIndustries[locale];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground mb-6 uppercase">
          {t("trustedBy.eyebrow")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
