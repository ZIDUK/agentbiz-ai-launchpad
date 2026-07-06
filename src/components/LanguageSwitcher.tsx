import { useLanguage } from "@/i18n/LanguageProvider";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/types";

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { locale, setLocale } = useLanguage();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
  ];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-muted/50 p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => {
            if (locale !== option.value) {
              trackEvent("locale_switch", { locale: option.value });
            }
            setLocale(option.value);
          }}
          className={cn(
            "px-2.5 py-1 text-xs font-semibold rounded-md transition-colors",
            locale === option.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
