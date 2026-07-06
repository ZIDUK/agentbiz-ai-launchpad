import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resources } from "@/data/site-content";

const ResourcesPreview = () => {
  const featured = resources[0];

  return (
    <section id="resources-preview" className="section">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">RESOURCES</p>
          <h2 className="text-headline mb-4">
            Guides for <span className="gradient-text">enterprise leaders</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Practical frameworks to move from AI experimentation to governed, production-ready capability.
          </p>
        </div>

        <div className="card-hover p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                {featured.type}
              </span>
              <span className="text-xs text-muted-foreground">{featured.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">{featured.title}</h3>
            <p className="text-secondary leading-relaxed mb-6">{featured.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-primary">
                <Link to={`/resources/${featured.slug}`}>
                  Read the guide <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/resources">View all resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPreview;
