import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { trustedClients, type TrustedClient } from "@/i18n/content/about";
import { usePocTheme } from "@/poc/scroll-experience/PocThemeContext";

const TrustedBy = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const { isLight } = usePocTheme();
  const clients: TrustedClient[] = trustedClients[locale];

  // Triple the list so the track is long enough for a continuous loop on wide screens.
  const track = [...clients, ...clients, ...clients];

  return (
    <section className="border-t border-border bg-muted/20 py-8 lg:py-10">
      <div className="container">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-secondary">
          {t("trustedBy.eyebrow")}
        </p>
        <p className="mb-6 text-center text-xs text-muted-foreground">
          {t("trustedBy.disclaimer")}
        </p>
      </div>

      <div
        className="trusted-marquee relative overflow-hidden"
        aria-label={t("trustedBy.eyebrow")}
        role="region"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[hsl(var(--muted)/0.85)] to-transparent sm:w-16 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[hsl(var(--muted)/0.85)] to-transparent sm:w-16 lg:w-28" />

        <div className="trusted-marquee-track flex w-max items-center gap-5 will-change-transform lg:gap-8">
          {track.map((client, i) => {
            const src = isLight ? (client.logoLight ?? client.logo) : client.logo;
            // Light theme: light tiles. Dark theme: dark tiles. No one-off white chips.
            const tileClass = isLight
              ? "flex h-[72px] w-[200px] items-center justify-center rounded-xl border border-border bg-white px-4 shadow-[var(--shadow-card)]"
              : "flex h-[72px] w-[200px] items-center justify-center rounded-xl border border-border bg-zinc-950 px-4 shadow-[var(--shadow-card)]";
            // Logos without a dedicated light asset still use CSS ink remap in light theme.
            const needsInkRemap = isLight && Boolean(client.logo) && !client.logoLight;

            return (
              <div
                key={`${client.name}-${i}`}
                className="flex min-w-[200px] items-center justify-center px-1"
                aria-hidden={i >= clients.length ? true : undefined}
              >
                <div className={tileClass}>
                  {src ? (
                    <img
                      src={src}
                      alt={client.name}
                      width={240}
                      height={80}
                      className={
                        needsInkRemap
                          ? "h-11 w-auto max-w-[168px] shrink-0 object-contain brightness-0"
                          : "h-11 w-auto max-w-[168px] shrink-0 object-contain"
                      }
                      loading="lazy"
                    />
                  ) : (
                    <span className={isLight ? "text-xs text-slate-500" : "text-xs text-zinc-400"}>
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
