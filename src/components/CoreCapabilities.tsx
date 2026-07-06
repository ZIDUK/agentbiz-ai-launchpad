import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const CoreCapabilities = () => {
  const { t } = useTranslation();
  const { coreCapabilities } = useSiteContent();

  return (
    <section id="capabilities" className="section bg-card/40">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("capabilities.eyebrow")}
          </p>
          <h2 className="text-headline mb-6">
            {t("capabilities.title")}{" "}
            <span className="gradient-text">{t("capabilities.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("capabilities.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreCapabilities.map((capability) => {
            const Icon = capability.icon;
            const isHashLink = capability.href.startsWith("/#");

            return (
              <div key={capability.slug} className="card-hover p-8 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-title text-foreground">{capability.title}</h3>
                </div>

                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {capability.shortDescription}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {capability.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {isHashLink ? (
                  <a href={capability.href} className="inline-flex items-center text-sm font-medium text-primary group">
                    {t("capabilities.learnMore")}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={capability.href}
                    className="inline-flex items-center text-sm font-medium text-primary group"
                  >
                    {t("capabilities.learnMore")}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/services">{t("capabilities.viewServices")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
