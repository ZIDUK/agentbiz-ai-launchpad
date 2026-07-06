import { useEffect } from "react";
import { useTranslation } from "./useTranslation";

export function useDocumentMeta() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", t("meta.description"));
    }
  }, [t]);
}
