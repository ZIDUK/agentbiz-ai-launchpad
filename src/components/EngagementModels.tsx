import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { engagementModels } from "@/data/site-content";

const EngagementModels = () => {
  return (
    <section id="engagement" className="section bg-card/40">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">HOW WE WORK</p>
          <h2 className="text-headline mb-4">
            Engagement <span className="gradient-text">Models</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Flexible partnership models designed to match your stage, team, and delivery goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementModels.map((model) => {
            const Icon = model.icon;
            return (
              <Link
                key={model.slug}
                to={model.href}
                className="card-hover p-6 block group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-title mb-2 text-foreground group-hover:text-primary transition-colors">
                  {model.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{model.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-primary">
            <Link to="/#contact">Discuss your engagement model</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/engagement">Compare all models</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
