import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getResourceBySlug } from "@/data/site-content";
import NotFound from "@/pages/NotFound";

const roadmapSections = [
  {
    title: "Phase 1 — Assess readiness",
    items: [
      "Map high-volume workflows with manual dependencies",
      "Identify systems of record (CRM, ERP, ITSM, data platforms)",
      "Define governance requirements: approvals, audit, data boundaries",
      "Select 1–2 workflows with measurable KPI impact",
    ],
  },
  {
    title: "Phase 2 — Design the AI-native future state",
    items: [
      "Define what AI agents automate vs. what humans approve",
      "Design integration architecture and escalation paths",
      "Establish quality review and monitoring standards",
      "Align executive sponsors and operational owners",
    ],
  },
  {
    title: "Phase 3 — Implement in production",
    items: [
      "Build agents, integrations, and workflow orchestration",
      "Deploy with role-based access and logging",
      "Run parallel operation with existing process where needed",
      "Measure cycle time, error rate, and adoption",
    ],
  },
  {
    title: "Phase 4 — Scale with reusable patterns",
    items: [
      "Document delivery standards and knowledge packs",
      "Expand to adjacent functions with shared components",
      "Train internal teams on operating the system",
      "Establish continuous improvement and governance cadence",
    ],
  },
];

const checklistSections = [
  {
    title: "Governance",
    items: [
      "Defined data boundaries and approved model providers",
      "Role-based access and approval workflows documented",
      "Audit logging for agent actions and human overrides",
      "Legal/compliance review completed for data handling",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Integration points mapped to systems of record",
      "Human-in-the-loop escalation paths defined",
      "Error handling and fallback behavior specified",
      "Monitoring and alerting for cost, latency, and quality",
    ],
  },
  {
    title: "Operations",
    items: [
      "Baseline KPIs measured before launch (cycle time, error rate, cost)",
      "Operations owners assigned and trained",
      "Runbook for exceptions and model updates",
      "Parallel operation plan during transition",
    ],
  },
  {
    title: "Scale readiness",
    items: [
      "Reusable components identified for adjacent workflows",
      "Knowledge transfer plan for internal teams",
      "90-day expansion roadmap with executive sponsor alignment",
    ],
  },
];

const guideContent: Record<
  string,
  { sections: { title: string; items: string[] }[]; downloadPath?: string; downloadLabel?: string }
> = {
  "enterprise-ai-roadmap": {
    sections: roadmapSections,
    downloadPath: "/downloads/enterprise-ai-roadmap.md",
    downloadLabel: "Download roadmap",
  },
  "pilot-to-production-checklist": {
    sections: checklistSections,
    downloadPath: "/downloads/pilot-to-production-checklist.md",
    downloadLabel: "Download checklist",
  },
};

const ResourceGuide = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? getResourceBySlug(slug) : undefined;
  const content = slug ? guideContent[slug] : undefined;

  if (!resource || !content) {
    return <NotFound />;
  }

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
            {resource.type} · {resource.readTime}
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            {resource.title}
          </h1>
          <p className="text-lead mb-10">{resource.description}</p>

          <div className="prose prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Who this is for
              </h2>
              <p className="text-secondary leading-relaxed">
                CTOs, COOs, VP Engineering, and transformation leaders who need a practical path
                from AI experimentation to governed production systems — without another endless pilot.
              </p>
            </section>

            {content.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="card-hover p-8">
              <h2 className="text-xl font-semibold text-foreground mb-3">Next step</h2>
              <p className="text-secondary mb-6">
                Use this in your next leadership workshop, then pressure-test it with an
                engineering partner who has shipped production AI in enterprise environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="btn-primary">
                  <Link to="/#contact">Talk to an Engineering Lead</Link>
                </Button>
                {content.downloadPath && (
                  <Button asChild variant="outline">
                    <a href={content.downloadPath} download>
                      <Download className="mr-2 h-4 w-4" />
                      {content.downloadLabel ?? "Download"}
                    </a>
                  </Button>
                )}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceGuide;
