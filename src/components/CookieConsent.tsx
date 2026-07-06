import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { hasAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics";
import { useTranslation } from "@/i18n/useTranslation";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!siteConfig.analytics.measurementId) return;
    if (localStorage.getItem("agentbiz_analytics_consent") === null) {
      setVisible(true);
    }
  }, []);

  if (!visible || !siteConfig.analytics.measurementId) return null;

  const accept = () => {
    setAnalyticsConsent(true);
    setVisible(false);
  };

  const decline = () => {
    setAnalyticsConsent(false);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg p-4 shadow-lg">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary max-w-2xl">
          {t("cookie.message")}{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            {t("cookie.privacyLink")}
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>
            {t("cookie.decline")}
          </Button>
          <Button size="sm" className="btn-primary" onClick={accept}>
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
