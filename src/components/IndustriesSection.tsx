import { Link } from "react-router-dom";
import { useIndustriesContent } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const IndustriesSection = () => {
  const { t } = useTranslation();
  const industryDetails = useIndustriesContent();

  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            {t("industriesSection.eyebrow")}
          </p>
          <h2 className="text-headline mb-4">
            {t("industriesSection.title")}{" "}
            <span className="gradient-text">{t("industriesSection.titleHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("industriesSection.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryDetails.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                className="card-hover p-8 block group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-title mb-4 text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <ul className="space-y-2">
                  {industry.services.map((service) => (
                    <li key={service} className="flex items-start text-sm text-secondary">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/industries" className="text-sm font-semibold text-primary hover:underline">
            {t("nav.viewAllIndustries")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
