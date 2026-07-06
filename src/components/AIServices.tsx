import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aiServices } from "@/data/site-content";

const AIServices = () => {
  return (
    <section id="ai-services" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">AI DEVELOPMENT</p>
          <h2 className="text-headline mb-4">
            Artificial Intelligence <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lead max-w-4xl mx-auto">
            AgentBiz delivers custom AI solutions that help businesses innovate, automate, and scale —
            from agentic systems and integrations to production-ready AI applications.
          </p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Transform Your Business with <span className="gradient-text">Artificial Intelligence</span>
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Organizations that leverage AI gain a competitive edge — streamlining workflows,
            improving productivity, and making better decisions with predictive analytics and automation.
          </p>
          <div className="mt-6 text-sm font-semibold text-primary">
            <span className="bg-primary/10 px-4 py-2 rounded-full">
              Expert-led AI delivery for startups and enterprises
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="card-hover p-8 group block"
              >
                <div className="text-primary mb-4">
                  <Icon size={40} />
                </div>
                <h3 className="text-title mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/#contact">Get a free AI consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIServices;
