import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "@/i18n/useTranslation";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-2 text-xl text-muted-foreground">{t("common.notFoundTitle")}</p>
        <p className="mb-6 text-secondary">{t("common.notFoundBody")}</p>
        <Link to="/" className="text-primary underline hover:opacity-80">
          {t("common.notFoundCta")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
