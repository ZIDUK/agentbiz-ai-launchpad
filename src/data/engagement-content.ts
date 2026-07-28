import type { LucideIcon } from "lucide-react";
import { Layers, Rocket, Wrench } from "lucide-react";

export interface EngagementCapability {
  title: string;
  description: string;
}

export interface EngagementFaq {
  question: string;
  answer: string;
}

export interface EngagementDetail {
  slug: string;
  title: string;
  /** Differentiating label (not the generic "Solutions") */
  eyebrow: string;
  shortDescription: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  /** Short definition block — what this package is */
  whatItIs: string;
  /** Optional punch line under capabilities (e.g. Humans steer. AI accelerates.) */
  principle?: string;
  /** How Agentiers / the package actually delivers — Dream-style depth */
  capabilities: EngagementCapability[];
  /** How it sits inside the client organization */
  howInside: string[];
  bestFor: string[];
  deliverables: string[];
  outcomes: string[];
  timeline: string;
  engagementSteps: { title: string; description: string }[];
  faqs: EngagementFaq[];
}

export const engagementDetails: EngagementDetail[] = [
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    eyebrow: "Execution",
    shortDescription:
      "Your execution engine to put AI-native operations in production — with KPIs, governance, and ownership transfer.",
    icon: Rocket,
    headline: "Your execution engine for AI-native operations in production",
    description:
      "AI-Native PODs are dedicated execution units staffed by Agentiers — built for one purpose: shipping a critical business workflow into production with governed AI — at a predictable enterprise rhythm. They embed into your operating environment, adapt to your systems and priorities, and transfer ownership so you optimize cost and cycle time — not headcount.",
    whatItIs:
      "An AI-Native POD is a cross-functional execution unit embedded in your environment. Agentiers bring human-led decision-making, AI-accelerated planning through review, enterprise delivery discipline, and the patterns from your operating model — so you gain execution muscle for the AI era, not rented headcount.",
    principle: "Humans steer. AI accelerates. Delivery compounds into capability you keep.",
    capabilities: [
      {
        title: "AI-Accelerated Planning",
        description:
          "Requirements interpreted, analyzed, and structured with AI assistance — so scoping cycles shrink without losing governance.",
      },
      {
        title: "AI-Augmented Design",
        description:
          "System skeletons, data mappings, and architecture diagrams produced in minutes, then validated with your architects.",
      },
      {
        title: "AI-Enhanced Build",
        description:
          "Code, APIs, infrastructure, and multi-file implementations shipped rapidly under your standards and review gates.",
      },
      {
        title: "AI-Driven Testing",
        description:
          "Automated test generation, edge-case detection, and regression coverage before anything hits production.",
      },
      {
        title: "AI-Assisted Code Review",
        description:
          "First-pass reviews for consistency and structural risk — humans still own merge decisions and accountability.",
      },
    ],
    howInside: [
      "Embedded directly into your operating environment and tooling",
      "Aligned with your strategic roadmap and sponsors",
      "Operating under shared delivery standards and KPIs",
      "Supported by a living knowledge base of what ships",
      "Executing with predictable cadence and quality gates",
    ],
    bestFor: [
      "You need execution strength now — not another pilot or strategy deck",
      "A high-volume process is burning cost, time, or rework every week",
      "Hiring or internal capacity cannot keep pace with operational demand",
      "Leadership wants measurable outcomes and full IP ownership",
      "You are ready to modernize one function through a live AI-native workflow",
    ],
    deliverables: [
      "One critical workflow live in production with defined KPIs",
      "Governed agents, integrations, and human-in-the-loop controls",
      "Architecture, runbooks, and operational documentation you own",
      "100% IP transfer — code, prompts, data flows, and playbooks",
      "Baseline metrics and a path to the next workflow",
      "Transparent planning and delivery cadence your sponsors can track",
    ],
    outcomes: [
      "A reliable execution engine for the next workflow",
      "Stable delivery velocity your sponsors can forecast",
      "Consistent system quality with audit-ready controls",
      "Unified patterns your team can reuse",
      "Transparency across planning and delivery",
      "Compounding capability that stays inside your org",
    ],
    timeline: "6–10 weeks typical for the first production workflow",
    engagementSteps: [
      {
        title: "Embed & align",
        description:
          "Agentiers embed into your environment, map the target workflow, systems, constraints, and success metrics with your ops and engineering leads.",
      },
      {
        title: "Design with governance",
        description:
          "Define the AI-native future state — what AI does, what humans approve, integrations, audit trails, and delivery milestones.",
      },
      {
        title: "Build, test & go live",
        description:
          "Ship the workflow to production with monitoring, quality checks, and escalation paths — not a demo in a sandbox.",
      },
      {
        title: "Transfer ownership",
        description:
          "Hand off runbooks, patterns, and operating knowledge so your team runs what Agentiers built — and the next cycle starts stronger.",
      },
    ],
    faqs: [
      {
        question: "What is an AI-Native POD?",
        answer:
          "A dedicated execution unit staffed by Agentiers, built to ship a governed AI-native workflow into production at a predictable enterprise rhythm — then transfer ownership to your team.",
      },
      {
        question: "How is this different from staff augmentation?",
        answer:
          "Staff augmentation adds people. A POD embeds a complete operating unit with governance, tools, AI-native delivery discipline, and an ownership-transfer mandate.",
      },
      {
        question: "Do we own the IP?",
        answer:
          "Yes. You own 100% of the code, prompts, data flows, runbooks, and documentation. We build capability you keep — we don’t rent it to you.",
      },
    ],
  },
  {
    slug: "agentops-factory",
    title: "AgentOps Factory",
    eyebrow: "Scale",
    shortDescription:
      "Transfer patterns, AgentOps standards, and operating models so your team can expand beyond the first workflow.",
    icon: Layers,
    headline: "Scale AI-native operations without another army of contractors",
    description:
      "After the first production win, the bottleneck is usually capability — not more headcount. We install reusable patterns, delivery standards, and operating rituals so your organization owns the next wave of workflows.",
    whatItIs:
      "AgentOps Factory is the operating layer that turns a first production win into a repeatable enterprise engine. It unifies prioritization, governance, delivery patterns, architecture standards, and institutional knowledge so multiple workflows can scale without reinventing every cycle.",
    principle: "Speed increases. Quality stabilizes. Throughput scales.",
    capabilities: [
      {
        title: "Strategy & prioritization",
        description:
          "A transparent structure that aligns leadership on what to build next — with AI-assisted intake and dependency mapping.",
      },
      {
        title: "Governance & decisioning",
        description:
          "Clear decision pathways, approval gates, and escalation paths that remove ambiguity and accelerate execution.",
      },
      {
        title: "AgentOps delivery patterns",
        description:
          "Reusable workflow and agent templates your teams (and PODs) run at a predictable rhythm.",
      },
      {
        title: "Architecture & standards",
        description:
          "Shared design principles, integration patterns, and quality bars across functions.",
      },
      {
        title: "Knowledge & capability",
        description:
          "Runbooks, insights, and institutional learning that compound with every workflow shipped.",
      },
    ],
    howInside: [
      "Runs alongside your existing teams — it does not replace them",
      "Supports multiple PODs or internal squads in parallel",
      "Standardizes how work is intake’d, designed, built, and reviewed",
      "Makes prioritization and sponsorship decisions visible",
      "Leaves patterns and rituals your org can operate alone",
    ],
    bestFor: [
      "Organizations ready to expand past a single workflow",
      "Internal teams that need AgentOps patterns and runbooks",
      "Leaders who want ownership and anti-lock-in",
      "Programs moving from pilot culture to operating model",
    ],
    deliverables: [
      "Reusable workflow and agent patterns",
      "AgentOps standards, runbooks, and escalation paths",
      "Internal enablement and pairing with your team",
      "Roadmap for the next 2–3 governed workflows",
    ],
    outcomes: [
      "Leadership alignment on what ships next",
      "Faster decision cycles with clearer governance",
      "Unified delivery across teams and functions",
      "Higher throughput without proportional headcount",
      "Stronger architecture consistency",
      "Capability that scales with demand",
    ],
    timeline: "8–16 weeks after first production workflow (or parallel)",
    engagementSteps: [
      {
        title: "Capability baseline",
        description: "Assess skills, tooling, and operating gaps after the first win.",
      },
      {
        title: "Pattern library",
        description: "Codify reusable designs, controls, and integration templates.",
      },
      {
        title: "Enablement",
        description: "Train and pair with your team on real expansion workflows.",
      },
      {
        title: "Operating rhythm",
        description: "Install reviews, KPI cadence, and scale governance.",
      },
    ],
    faqs: [
      {
        question: "What is AgentOps Factory?",
        answer:
          "The operating system for scaling AI-native delivery: patterns, standards, governance, and enablement so your org can expand beyond the first production workflow.",
      },
      {
        question: "How is this different from a PMO?",
        answer:
          "A PMO tracks status. AgentOps Factory is an execution and capability layer — it accelerates decisions, enforces standards, and leaves reusable patterns your teams run.",
      },
      {
        question: "Does this replace our current teams?",
        answer:
          "No. It provides the structure and acceleration layer so your teams (and PODs) deliver AI-native workflows consistently.",
      },
    ],
  },
  {
    slug: "function-modernization",
    title: "Function Modernization",
    eyebrow: "Function",
    shortDescription:
      "Modernize a business function — Ops, Finance, Support — with custom AI-native workflows that fit your reality.",
    icon: Wrench,
    headline: "Modernize business functions with AI-native systems that fit your reality",
    description:
      "Function Modernization rebuilds how a business area runs — not by bolting on a chatbot, but by redesigning the workflows where cost, cycle time, and rework accumulate. Agentiers map the function, deploy governed AI-native systems into production, and leave your team operating a measurable new baseline.",
    whatItIs:
      "Function Modernization is not another SaaS rollout. It is rebuilding how work gets done in a department — with custom AI-native systems that automate high-friction workflows, sit on your systems of record, and stay owned by you.",
    principle: "It’s not automation bolted on. It’s modernization you own.",
    capabilities: [
      {
        title: "Ops & Finance workflows",
        description:
          "Reconciliation, invoice processing, exception handling, and cash-ops flows redesigned for AI-native execution with human approval gates.",
      },
      {
        title: "Support & service operations",
        description:
          "Triage, resolution assist, and proactive detection wired into your ticketing and knowledge stack — not a generic chatbot.",
      },
      {
        title: "Document & compliance pipelines",
        description:
          "Intake, classification, extraction, and audit-ready routing for regulated document-heavy processes.",
      },
      {
        title: "Deep stack integration",
        description:
          "Built on systems you already run (ERP, CRM, core ops tools) — modernize without a risky rip-and-replace.",
      },
      {
        title: "Ownership without per-seat lock-in",
        description:
          "You own the workflows, prompts, and playbooks. Capability scales with your demand — not vendor seat math.",
      },
    ],
    howInside: [
      "Diagnose high-value, high-friction workflows first",
      "Build custom AI-native systems for those workflows — not generic tools",
      "Iterate with your operators as owners of the system",
      "Measure cycle time, cost, and quality against a new baseline",
      "Expand to adjacent workflows once the function stabilizes",
    ],
    bestFor: [
      "Ops, Finance, Support, or Supply Chain functions stuck in manual work",
      "Leaders who need cost and cycle-time reduction in one area first",
      "Organizations ready to redesign a function around AI — not sprinkle tools",
      "Sponsors who want production impact with full ownership of what ships",
    ],
    deliverables: [
      "Current-state map and AI-native future-state design for the function",
      "Production workflows with governed agents and human oversight",
      "Integrations to the systems the function already uses",
      "KPI baseline and operating playbooks your team owns",
    ],
    outcomes: [
      "Leaner operations in the target function",
      "Faster execution on high-volume workflows",
      "Lower rework and exception backlog",
      "Systems owned by you — not rented capability",
      "A measurable baseline to expand from",
    ],
    timeline: "8–16 weeks typical for a focused function modernization",
    engagementSteps: [
      {
        title: "Assess the function",
        description: "Map processes, handoffs, systems, and where cost or delay concentrates.",
      },
      {
        title: "Redesign for AI-native ops",
        description: "Define what AI executes, what humans approve, and how value is measured.",
      },
      {
        title: "Implement in production",
        description: "Ship governed workflows into the live operating environment.",
      },
      {
        title: "Stabilize & transfer",
        description: "Confirm KPIs, hand off runbooks, and plan adjacent function expansion.",
      },
    ],
    faqs: [
      {
        question: "What is Function Modernization?",
        answer:
          "Rebuilding how a core business function runs using custom AI-native workflows that automate complex work and decisioning — with full ownership transfer.",
      },
      {
        question: "Is this just RPA?",
        answer:
          "No. RPA patches legacy steps. We redesign the workflow and build intelligent systems that can reason, escalate, and handle ambiguity under governance.",
      },
      {
        question: "Do we need to replace our ERP/CRM?",
        answer:
          "Usually not. We often build the AI-native layer on top of systems you already trust, so you modernize operations without a full rip-and-replace.",
      },
    ],
  },
];

export function getEngagementBySlug(slug: string): EngagementDetail | undefined {
  return engagementDetails.find((model) => model.slug === slug);
}
