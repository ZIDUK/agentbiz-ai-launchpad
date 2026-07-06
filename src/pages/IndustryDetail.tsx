import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getIndustryBySlug } from "@/data/industries-content";
import NotFound from "@/pages/NotFound";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  if (!industry) {
    return <NotFound />;
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-4xl">
          <Link
            to="/industries"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All industries
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon className="text-primary" size={28} />
            </div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              {industry.name}
            </p>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {industry.headline}
          </h1>
          <p className="text-lead mb-12">{industry.description}</p>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Common enterprise challenges
            </h2>
            <ul className="space-y-4">
              {industry.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 text-secondary border-l-2 border-primary/30 pl-4"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">Production use cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {industry.useCases.map((useCase) => (
                <div key={useCase.title} className="card-hover p-6">
                  <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">Typical outcomes</h2>
            <div className="grid grid-cols-3 gap-4">
              {industry.metrics.map((metric) => (
                <div key={metric.label} className="card-hover p-6 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Ranges based on scoped workflow automation programs. Results vary by process maturity
              and data readiness.
            </p>
          </section>

          <section className="card-hover p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Start with one workflow in {industry.name.split(" ")[0]}
            </h2>
            <p className="text-secondary mb-6">
              Identify a high-volume process with clear KPIs, then deploy a governed AI workflow
              your operations team can run and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-primary">
                <Link to="/#contact">
                  Talk to an Engineering Lead <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/ai-roi-calculator">Estimate ROI</Link>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;
