import { useLanguage } from "@/i18n/LanguageProvider";
import { useTranslation } from "@/i18n/useTranslation";
import { getPrivacyContent } from "@/i18n/content/legal";
import { LegalPage } from "@/components/LegalPage";

const Privacy = () => {
  const { locale } = useLanguage();
  const { t } = useTranslation();
  const content = getPrivacyContent(locale);

  return (
    <LegalPage
      content={content}
      alternateHref="/terms"
      alternateLabel={t("legal.seeTerms")}
    />
  );
};

export default Privacy;
