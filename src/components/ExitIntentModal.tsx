import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "agentbiz_exit_intent_dismissed";

const ExitIntentModal = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY > 0) return;
      if (window.innerWidth < 768) return;
      setVisible(true);
      trackEvent("exit_intent_shown");
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-background shadow-2xl p-8">
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            {t("exitIntent.eyebrow")}
          </p>
        </div>
        <h2 className="text-xl font-bold text-foreground mb-2">{t("exitIntent.title")}</h2>
        <p className="text-secondary text-sm mb-6">{t("exitIntent.body")}</p>
        <div className="flex flex-col gap-2">
          <Button asChild className="btn-primary w-full" onClick={() => trackEvent("exit_intent_cta")}>
            <Link to="/resources/pilot-to-production-checklist" onClick={dismiss}>
              {t("exitIntent.cta")}
            </Link>
          </Button>
          <Button variant="ghost" size="sm" onClick={dismiss}>
            {t("exitIntent.dismiss")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
