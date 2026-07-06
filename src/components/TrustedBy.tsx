import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trustedClients } from "@/i18n/content/about";

const TrustedBy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const clients = trustedClients[locale];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground mb-2 uppercase">
          {t("trustedBy.eyebrow")}
        </p>
        <p className="text-center text-xs text-muted-foreground mb-8">{t("trustedBy.disclaimer")}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-1 min-w-[120px] opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="text-sm font-semibold text-foreground tracking-tight">{client.name}</span>
              <span className="text-[11px] text-muted-foreground">{client.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
