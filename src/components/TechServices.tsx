import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { softwareServices } from "@/data/site-content";

const TechServices = () => {
  return (
    <section id="tech-services" className="section bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">SOFTWARE DEVELOPMENT</p>
          <h2 className="text-headline mb-4">
            Technology <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Full-stack product engineering — mobile, web, QA, and digital transformation —
            delivered with the same rigor we apply to AI initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="card-hover p-8 group flex gap-6 items-start"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-title mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Explore service <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechServices;
