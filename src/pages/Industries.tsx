import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { industryDetails } from "@/data/industries-content";

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">INDUSTRIES</p>
            <h1 className="text-display mb-6">
              AI delivery for <span className="gradient-text">regulated, complex environments</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              We build production AI systems inside industries where governance, integration depth,
              and operational reliability are non-negotiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h2>
                  <p className="text-secondary text-sm mb-4 line-clamp-2">{industry.headline}</p>
                  <span className="text-sm font-semibold text-primary">Explore industry →</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">
              Map your highest-volume workflow to a production AI roadmap in a 30-minute engineering
              strategy call.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">Book a strategy call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
