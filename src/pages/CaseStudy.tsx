import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CaseStudy = () => {
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
            Case Study · 8 min read
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Enterprise back-office automation: from 12-day cycles to 4
          </h1>
          <p className="text-lead mb-10">
            How a mid-market B2B services company deployed governed AI agents across order
            processing, vendor onboarding, and exception handling — without replacing their ERP.
          </p>

          <div className="prose prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The situation</h2>
              <p className="text-secondary leading-relaxed">
                A 400-person B2B services organization processed 2,800+ vendor and client
                transactions monthly across NetSuite, Salesforce, and email-driven exception queues.
                Operations teams spent an estimated 45% of capacity on document review, status
                updates, and manual handoffs between systems.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The constraint</h2>
              <p className="text-secondary leading-relaxed mb-4">
                Leadership had run three AI pilots — chatbots and RPA scripts — that never reached
                production. Compliance required full audit trails, role-based approvals, and no
                autonomous changes to financial records without human sign-off.
              </p>
              <ul className="space-y-2 text-secondary">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  ERP replacement was off the table for 18+ months
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  Data lived in PDFs, email threads, and three systems of record
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  Internal engineering was fully allocated to product roadmap
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">The approach</h2>
              <p className="text-secondary leading-relaxed mb-4">
                AgentBiz scoped a single production workflow: vendor onboarding document intake →
                validation → ERP staging → finance approval. The architecture included:
              </p>
              <ul className="space-y-3">
                {[
                  "Document intelligence agents extracting fields from W-9s, contracts, and banking forms",
                  "Rules engine for validation with automatic escalation on low-confidence extractions",
                  "Integration layer writing staged records to NetSuite with full request/response logging",
                  "Operations dashboard for queue management and SLA tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Results (12 weeks post-launch)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[
                  { value: "67%", label: "Cycle time reduction" },
                  { value: "41%", label: "Manual review hours saved" },
                  { value: "99.2%", label: "Extraction accuracy (approved)" },
                  { value: "0", label: "Compliance incidents" },
                ].map((metric) => (
                  <div key={metric.label} className="card-hover p-4 text-center">
                    <p className="text-2xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Client name withheld under NDA. Metrics from production workflow telemetry and
                operations team time studies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">What made it stick</h2>
              <p className="text-secondary leading-relaxed">
                The program succeeded because it targeted one measurable workflow, embedded
                governance from architecture day one, and kept humans in control of exceptions.
                Phase two expanded to order exception management using the same agent patterns and
                integration standards.
              </p>
            </section>

            <section className="card-hover p-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Map your first production workflow
              </h2>
              <p className="text-secondary mb-6">
                Start with the process that costs the most manual hours — not the flashiest AI demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary">
                  <Link to="/#contact">Talk to an Engineering Lead</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/executive-briefing">Executive briefing</Link>
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

export default CaseStudy;
