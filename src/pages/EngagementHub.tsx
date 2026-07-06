import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { engagementDetails } from "@/data/engagement-content";

const EngagementHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">HOW WE WORK</p>
            <h1 className="text-display mb-6">
              Engagement <span className="gradient-text">models</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Flexible partnership structures aligned to your delivery stage — from first production
              workflow to ongoing operations and team augmentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {engagementDetails.map((model) => {
              const Icon = model.icon;
              return (
                <Link
                  key={model.slug}
                  to={`/engagement/${model.slug}`}
                  className="card-hover p-8 block group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {model.title}
                  </h2>
                  <p className="text-secondary text-sm mb-4">{model.shortDescription}</p>
                  <span className="text-sm font-semibold text-primary">Learn more →</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">Not sure which model fits?</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">
              A 30-minute engineering strategy call helps map your workflow, team, and timeline to
              the right engagement structure.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">Discuss your engagement</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EngagementHub;
