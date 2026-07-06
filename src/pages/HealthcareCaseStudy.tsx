import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HealthcareCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/resources"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All resources
          </Link>

          <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase">
            Case Study · Healthcare · 7 min read
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Prior authorization automation: 38% faster turnaround with governed agents
          </h1>
          <p className="text-lead mb-10">
            A regional healthcare services organization reduced administrative burden on prior
            authorization workflows while maintaining HIPAA-aware controls and clinician oversight.
          </p>

          <div className="prose prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The situation</h2>
              <p className="text-secondary leading-relaxed">
                Clinical and administrative staff processed 1,200+ prior authorization requests
                monthly across payer portals, fax, and EHR attachments. Average turnaround was
                9.2 days with frequent rework due to missing documentation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The constraint</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Any automation had to preserve clinician approval for clinical decisions, maintain
                PHI boundaries, and produce audit-ready logs for compliance reviews.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The approach</h2>
              <ul className="space-y-3">
                {[
                  "Intake agents classified requests and extracted required fields from clinical notes",
                  "Validation rules flagged missing payer-specific documentation before submission",
                  "Queue dashboard for staff with SLA alerts and escalation to clinicians",
                  "Integration with scheduling system for follow-up appointments when auth delayed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Results (10 weeks post-launch)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[
                  { value: "38%", label: "Faster turnaround" },
                  { value: "44%", label: "Admin hours saved" },
                  { value: "22%", label: "Fewer rework cycles" },
                  { value: "100%", label: "Clinician oversight retained" },
                ].map((metric) => (
                  <div key={metric.label} className="card-hover p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Client name withheld under NDA. Metrics from operations reporting and workflow telemetry.
              </p>
            </section>

            <section className="card-hover p-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Explore healthcare AI delivery
              </h2>
              <p className="text-secondary mb-6">
                See how we approach governed automation in regulated healthcare environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary">
                  <Link to="/industries/healthcare">Healthcare industry</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/#contact">Talk to an Engineering Lead</Link>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HealthcareCaseStudy;
