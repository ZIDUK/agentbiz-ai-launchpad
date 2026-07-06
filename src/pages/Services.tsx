import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { aiServices, softwareServices } from "@/data/site-content";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-display mb-4">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lead">
              AI development and software engineering services to help your business build,
              integrate, and scale technology with confidence.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-headline mb-8">AI Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="card-hover p-6 group block"
                  >
                    <Icon className="text-primary mb-4" size={32} />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-secondary mb-3">{service.shortDescription}</p>
                    <span className="inline-flex items-center text-sm text-primary font-medium">
                      View details <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-headline mb-8">Software Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softwareServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="card-hover p-6 group flex gap-4"
                  >
                    <Icon className="text-primary shrink-0" size={32} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-secondary">{service.shortDescription}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
