import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trustedClients, type TrustedClient } from "@/i18n/content/about";

const TrustedBy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const clients: TrustedClient[] = trustedClients[locale];

  // Duplicate the list so the marquee can translateX(-50%) and loop seamlessly.
  const track = [...clients, ...clients];

  return (
    <section className="py-14 border-y border-border bg-muted/30">
      <div className="container">
        <p className="text-center text-sm font-semibold tracking-wider text-muted-foreground mb-2 uppercase">
          {t("trustedBy.eyebrow")}
        </p>
        <p className="text-center text-xs text-muted-foreground mb-10">
          {t("trustedBy.disclaimer")}
        </p>
      </div>

      <div
        className="relative overflow-hidden group"
        aria-label={t("trustedBy.eyebrow")}
        role="region"
      >
        {/* Edge fades so logos don't clip hard against the viewport edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max items-center gap-20 animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused] will-change-transform">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex flex-col items-center gap-3 min-w-[240px] px-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-hidden={i >= clients.length ? true : undefined}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  width={240}
                  height={80}
                  className="h-16 w-auto shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="h-16 w-[160px] rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground shrink-0">
                  no logo
                </div>
              )}
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 font-medium">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
