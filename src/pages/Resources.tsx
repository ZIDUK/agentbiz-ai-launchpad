import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { resources } from "@/data/site-content";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              ENTERPRISE RESOURCES
            </p>
            <h1 className="text-display mb-6">
              Guides for <span className="gradient-text">AI-native leaders</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Frameworks and playbooks to help your organization move from AI pilots to
              governed, production-ready capability.
            </p>
          </div>

          <div className="grid gap-6">
            {resources.map((resource) => (
              <div key={resource.slug} className="card-hover p-8 flex flex-col md:flex-row gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{resource.title}</h2>
                  <p className="text-secondary mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="btn-primary">
                    <Link to={resource.href ?? `/resources/${resource.slug}`}>
                      {resource.type === "Case Study" ? "Read case study" : "Read guide"}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">Need a tailored roadmap?</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">
              Speak with an engineering lead about your infrastructure, priorities, and first
              production workflow.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">Schedule a strategy call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
