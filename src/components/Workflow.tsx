import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const Workflow = () => {
  const { t } = useTranslation();
  const { workflowPhases } = useSiteContent();

  return (
    <section id="workflow" className="section bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("workflow.eyebrow")}
          </p>
          <h2 className="text-headline mb-6">
            {t("workflow.title")}{" "}
            <span className="gradient-text">{t("workflow.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("workflow.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={phase.title} className="card-hover p-6 relative">
                <span className="text-4xl font-bold text-primary/20 absolute top-4 right-4">
                  {index + 1}
                </span>
                <div className="w-14 h-14 rounded-xl border-2 border-primary bg-card flex items-center justify-center mb-5">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
