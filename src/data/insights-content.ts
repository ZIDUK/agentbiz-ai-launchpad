export interface InsightArticle {
  slug: string;
  title: string;
  /** Short label for mega-menu / cards — not the full editorial headline */
  menuLabel: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "why-enterprise-ai-pilots-fail",
    title: "You put AI on a process nobody owns. That is why the pilot died.",
    menuLabel: "Why pilots die",
    excerpt:
      "The model worked in the demo. The operation did not. Pilots fail when there is no owner, no baseline, and no path into the work people already run.",
    readTime: "6 min read",
    publishedAt: "2026-03-01",
    tags: ["Strategy", "Operations", "AI"],
    sections: [
      {
        heading: "The demo is not the operation",
        paragraphs: [
          "Most AI pilots fail for a boring reason. Nobody owns the process the model is supposed to accelerate. There is no baseline. There is no approval path. The work still lives in inboxes and side channels.",
          "A production team starts with one process that already has volume, a named owner, and a number you can defend. Then they decide what the model is allowed to touch.",
        ],
      },
      {
        heading: "Fix the operation first",
        paragraphs: [
          "Strategy, then operations, then AI. Reverse that order and you automate chaos. Map the work. Name the owner. Install the cadence. Only then give it a model.",
          "Governance is not a layer you add after the pilot. Approvals, audit, and human checkpoints belong in the design of the work.",
        ],
      },
      {
        heading: "What to do on Monday",
        paragraphs: [
          "Pick the process that is costing you growth. Write who owns it. Write what good looks like. If you cannot do that in one page, you are not ready for AI — you are ready for an operating map.",
        ],
      },
    ],
  },
  {
    slug: "strategy-operations-then-ai",
    title: "Strategy. Operations. Then AI. In that order, or not at all.",
    menuLabel: "The sequence",
    excerpt:
      "TOGAF to align the work. BPMN to see it. Lean to strip the waste. AI only when the process can survive a Monday without you in the room.",
    readTime: "5 min read",
    publishedAt: "2026-03-12",
    tags: ["Strategy", "Operations", "Governance"],
    sections: [
      {
        heading: "The sequence is the product",
        paragraphs: [
          "We do not sell a catalog of tools. We sell an order of work. Align on the few processes that matter. Make them runnable. Then accelerate them.",
          "If the strategy conversation never names owners, the operations work will stall. If the operations work never names a cadence, the AI will have nowhere to sit.",
        ],
      },
      {
        heading: "Methods that survive the floor",
        paragraphs: [
          "TOGAF keeps strategy and operations on the same page. BPMN makes the work visible. Lean takes out the waste before you scale it. None of that is a slide — it is how the room actually runs.",
          "When we build software, the client owns the repo. When we install a cadence, the client owns the meeting. Transfer is the point.",
        ],
      },
      {
        heading: "AI as a follow-on, not a first move",
        paragraphs: [
          "If the process is owned and measured, AI can take volume and leave judgment with the human. If it is not, you are buying a demo. We will tell you which one you have.",
        ],
      },
    ],
  },
  {
    slug: "governed-agents-human-in-the-loop",
    title: "The human still makes the call that matters.",
    menuLabel: "Human in the loop",
    excerpt:
      "Agents handle volume. People handle judgment. If your design cannot say who decides when the room is loud, it is not ready for production.",
    readTime: "5 min read",
    publishedAt: "2026-02-15",
    tags: ["Governance", "Agents", "Operations"],
    sections: [
      {
        heading: "Volume is not the same as the official call",
        paragraphs: [
          "In a live operation the score, the exception, the refund, the hire — someone has to stand by it. Agents can extract, classify, draft, and route. They should not own the call the room will protest.",
          "Design the escalation before you write the prompt. Below a threshold, it goes to a person. That is not a limitation. That is the product.",
        ],
      },
      {
        heading: "Audit is how you sleep",
        paragraphs: [
          "Every action needs a file: input, output, who overrode it, when. That is what makes a federation stand by a score, a store stand by a batch, a delivery team stand by a status.",
          "If you cannot reconstruct the decision, you do not have a governed system. You have a chat.",
        ],
      },
      {
        heading: "Operate it, or do not ship it",
        paragraphs: [
          "Give the workflow an operations owner, not only an engineering sponsor. Review quality, exceptions, and cost on a cadence. Governed agents are run. They are not launched and forgotten.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}
