import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const EnterpriseChallenge = () => {
  const { t } = useTranslation();
  const { enterpriseChallenges } = useSiteContent();

  return (
    <section id="challenge" className="section bg-card">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("challenge.eyebrow")}
          </p>
          <h2 className="text-headline mb-6">
            {t("challenge.title")}{" "}
            <span className="gradient-text">{t("challenge.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("challenge.subtitle")}</p>
        </div>

        <ul className="grid md:grid-cols-2 gap-4">
          {enterpriseChallenges.map((challenge) => (
            <li
              key={challenge}
              className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-5"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span className="text-secondary leading-relaxed">{challenge}.</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EnterpriseChallenge;
