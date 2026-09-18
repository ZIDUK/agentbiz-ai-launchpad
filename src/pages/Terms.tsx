import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getTermsContent } from "@/i18n/content/legal";
import { LegalPage } from "@/components/LegalPage";

const Terms = () => {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const content = getTermsContent(locale);

  return (
    <LegalPage
      content={content}
      alternateHref="/privacy"
      alternateLabel={t("legal.seePrivacy")}
    />
  );
};

export default Terms;
