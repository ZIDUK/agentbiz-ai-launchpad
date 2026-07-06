import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { trackEvent } from "@/lib/analytics";

const StickyMobileCTA = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    trackEvent("book_call", { location: "sticky_mobile_cta" });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg p-3 md:hidden">
      <div className="flex gap-2">
        <Button onClick={scrollToContact} className="btn-primary flex-1">
          {t("sticky.bookCall")}
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link to="/resources">{t("sticky.resources")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
