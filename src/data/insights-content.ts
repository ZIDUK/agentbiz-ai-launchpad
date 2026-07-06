export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "why-enterprise-ai-pilots-fail",
    title: "Why Enterprise AI Pilots Fail — and What Production Teams Do Differently",
    excerpt:
      "Most enterprises have run AI experiments. Few have shipped governed workflows that operations teams actually run. The gap is not model quality — it's delivery design.",
    readTime: "6 min read",
    publishedAt: "2026-03-01",
    tags: ["Strategy", "Production", "Governance"],
    sections: [
      {
        heading: "The pilot trap is a delivery problem",
        paragraphs: [
          "Enterprise AI pilots often fail for predictable reasons: no integration with systems of record, no human approval paths, no baseline KPIs, and no owner in operations. The model works in a demo. The workflow does not work in production.",
          "Production teams start with one high-volume process, measure cycle time and error rate before automation, and design agents as part of the operating model — not as a sidebar chatbot.",
        ],
      },
      {
        heading: "Governance before scale",
        paragraphs: [
          "Legal and compliance are not blockers when governance is designed upfront: role-based access, audit logs, data boundaries, and escalation rules. Waiting until after build guarantees delays.",
          "The enterprises that scale AI treat each workflow like a product — with owners, runbooks, monitoring, and a path to adjacent processes.",
        ],
      },
      {
        heading: "What to do next",
        paragraphs: [
          "Pick one workflow where manual hours are visible and measurable. Define what AI automates vs. what humans approve. Ship to production in weeks, not quarters — then expand with reusable patterns.",
        ],
      },
    ],
  },
  {
    slug: "governed-agents-human-in-the-loop",
    title: "Governed Agents: Designing Human-in-the-Loop for Enterprise Operations",
    excerpt:
      "Autonomy without controls creates risk. Over-control creates friction. The right design gives agents volume and humans judgment.",
    readTime: "5 min read",
    publishedAt: "2026-02-15",
    tags: ["Governance", "Agents", "Operations"],
    sections: [
      {
        heading: "Agents handle volume; humans handle exceptions",
        paragraphs: [
          "In enterprise operations, the goal is not full autonomy — it's reliable throughput with clear escalation. Agents extract, classify, route, and draft. Humans approve exceptions, edge cases, and high-risk decisions.",
          "Design escalation paths before writing agent prompts. If confidence is below threshold, route to a queue — don't guess.",
        ],
      },
      {
        heading: "Auditability is a feature",
        paragraphs: [
          "Every agent action should be logged: input, output, model version, user context, and override history. This is what makes compliance teams comfortable and what makes debugging possible at scale.",
        ],
      },
      {
        heading: "Operating model",
        paragraphs: [
          "Assign an operations owner, not just a engineering sponsor. Run weekly reviews on quality metrics, cost, and exception rates. Governed agents are operated — not deployed and forgotten.",
        ],
      },
    ],
  },
  {
    slug: "document-workflows-highest-roi-ai",
    title: "Document-to-Decision Workflows: The Highest-ROI Starting Point for Enterprise AI",
    excerpt:
      "PDFs, emails, and forms still drive most back-office work. Document intelligence plus workflow orchestration delivers measurable ROI faster than greenfield AI products.",
    readTime: "5 min read",
    publishedAt: "2026-02-01",
    tags: ["ROI", "Operations", "Document AI"],
    sections: [
      {
        heading: "Why documents first",
        paragraphs: [
          "Document-heavy processes — onboarding, claims, procurement, compliance — have clear inputs, repeatable steps, and measurable cycle times. That makes ROI visible to executives quickly.",
          "Unlike customer-facing chatbots, internal document workflows don't require perfect conversational UX. They require accuracy, validation rules, and integration with ERP/CRM systems.",
        ],
      },
      {
        heading: "Architecture pattern",
        paragraphs: [
          "Ingest → extract → validate → route → human review (if needed) → write to system of record. This pattern works across FinTech, healthcare admin, logistics, and energy field operations.",
        ],
      },
      {
        heading: "Measuring success",
        paragraphs: [
          "Track cycle time, manual review hours, error rate, and cost per transaction before and after launch. These metrics resonate with COO and CFO stakeholders — not model benchmarks.",
        ],
      },
    ],
  },
  {
    slug: "build-vs-buy-enterprise-ai",
    title: "Build vs. Buy for Enterprise AI: When Custom Systems Win",
    excerpt:
      "SaaS AI features are fast to trial and expensive to scale. Custom systems cost more upfront and deliver ownership, integration depth, and governed workflows.",
    readTime: "7 min read",
    publishedAt: "2026-01-20",
    tags: ["Strategy", "Enterprise", "Build vs Buy"],
    sections: [
      {
        heading: "When SaaS AI is enough",
        paragraphs: [
          "Generic copilots and per-seat AI add-ons work for individual productivity — drafting emails, summarizing meetings. They rarely replace operational workflows tied to ERP, compliance, and custom business rules.",
        ],
      },
      {
        heading: "When to build",
        paragraphs: [
          "Build when the workflow is core to operations, requires deep integration, has strict governance needs, or when per-seat pricing would exceed build cost at scale. Ownership of code and data matters for IP-sensitive industries.",
        ],
      },
      {
        heading: "Hybrid approach",
        paragraphs: [
          "Many enterprises use approved model APIs with custom orchestration, integrations, and controls — best of both worlds without vendor lock-in on the workflow layer.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}
