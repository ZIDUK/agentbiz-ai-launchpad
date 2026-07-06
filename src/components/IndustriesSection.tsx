import { industries } from "@/data/site-content";

const IndustriesSection = () => {
  return (
    <section id="industries" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">INDUSTRIES</p>
          <h2 className="text-headline mb-4">
            Built for <span className="gradient-text">enterprise complexity</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            AI must work inside environments with legacy systems, complex approvals, sensitive
            data, and high-volume workflows. This is where transformation becomes real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.name} className="card-hover p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-title mb-4 text-foreground">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.services.map((service) => (
                    <li key={service} className="flex items-start text-sm text-secondary">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
