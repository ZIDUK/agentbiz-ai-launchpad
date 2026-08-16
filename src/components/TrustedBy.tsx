import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trustedClients } from "@/i18n/content/about";

const TrustedBy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const clients = trustedClients[locale];

  // Duplicate the list so the marquee can translateX(-50%) and loop seamlessly.
  const track = [...clients, ...clients];

  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div className="container">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground mb-2 uppercase">
          {t("trustedBy.eyebrow")}
        </p>
        <p className="text-center text-xs text-muted-foreground mb-8">
          {t("trustedBy.disclaimer")}
        </p>
      </div>

      <div
        className="relative overflow-hidden group"
        aria-label={t("trustedBy.eyebrow")}
        role="region"
      >
        {/* Edge fades so logos don't clip hard against the viewport edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max items-center gap-16 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused] will-change-transform">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-4 min-w-[260px] px-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-hidden={i >= clients.length ? true : undefined}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="h-12 w-auto shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="h-12 w-[100px] rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0">
                  no logo
                </div>
              )}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-foreground tracking-tight whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
