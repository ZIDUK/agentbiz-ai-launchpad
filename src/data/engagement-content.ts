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
    slug: "ai-native-operating-system",
    title: "AI-Native Operating System",
    eyebrow: "Scale",
    shortDescription:
      "Install the operating system for AI-native delivery — patterns, standards, and rituals so your team scales beyond the first workflow.",
    icon: Layers,
    headline: "Scale AI-native operations without another army of contractors",
    description:
      "After the first production win, the bottleneck is usually capability — not more headcount. The AI-Native Operating System installs reusable patterns, delivery standards, and operating rituals so your organization owns the next wave of workflows.",
    whatItIs:
      "The AI-Native Operating System is the layer that turns a first production win into a repeatable enterprise engine. It unifies prioritization, governance, delivery patterns, architecture standards, and institutional knowledge so multiple workflows can scale without reinventing every cycle.",
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
        title: "Delivery patterns",
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
      "Internal teams that need shared patterns and runbooks",
      "Leaders who want ownership and anti-lock-in",
      "Programs moving from pilot culture to an operating system",
    ],
    deliverables: [
      "Reusable workflow and agent patterns",
      "Operating standards, runbooks, and escalation paths",
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
        question: "What is the AI-Native Operating System?",
        answer:
          "The system for scaling AI-native delivery: patterns, standards, governance, and enablement so your org can expand beyond the first production workflow.",
      },
      {
        question: "How is this different from a PMO?",
        answer:
          "A PMO tracks status. The AI-Native Operating System is an execution and capability layer — it accelerates decisions, enforces standards, and leaves reusable patterns your teams run.",
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
      "Stop buying another SaaS. Build custom AI-native systems that fit your function — and own them.",
    icon: Wrench,
    headline: "Stop buying SaaS tools. Start building systems.",
    description:
      "Modernize Ops, Finance, Support, or adjacent functions with custom AI-native systems that fit your reality — not someone else’s product roadmap. Agentiers rebuild how the work gets done, ship governed systems into production, and leave capability you own.",
    whatItIs:
      "Function Modernization isn’t adding another tool. It’s rebuilding how work gets done. Agentiers diagnose high-friction workflows inside a department and build custom AI-native systems on top of the stack you already run — so you move from humans bridging gaps between generic SaaS to systems that reason, execute, and stay under your ownership.",
    principle: "It’s not automation. It’s modernization.",
    capabilities: [
      {
        title: "Ops & Finance systems",
        description:
          "Custom reconciliation, invoice, exception, and cash-ops systems — not another generic finance SaaS seat.",
      },
      {
        title: "Support & service systems",
        description:
          "Triage, resolution assist, and proactive detection built for your queues and knowledge — not a bolted-on chatbot.",
      },
      {
        title: "Document & compliance systems",
        description:
          "Intake, classification, extraction, and audit-ready routing designed around your filings and controls.",
      },
      {
        title: "Built on your stack",
        description:
          "ERP, CRM, and ops tools stay systems of record. We modernize the work layer without a rip-and-replace.",
      },
      {
        title: "Owned by you",
        description:
          "You own the systems, prompts, and playbooks. Capability scales with demand — not per-seat vendor lock-in.",
      },
    ],
    howInside: [
      "We don’t implement off-the-shelf software — we build it for your workflows",
      "Diagnose the high-value, high-friction work slowing the function down",
      "Build custom AI-native systems Agentiers ship into production",
      "Iterate with your operators as owners — no waiting on a vendor roadmap",
      "Expand to adjacent workflows once the function’s new baseline holds",
    ],
    bestFor: [
      "Functions stuck bridging gaps between tools with manual work",
      "Leaders tired of SaaS roadmaps that don’t match how you actually operate",
      "Organizations ready to own systems — not rent another seat forever",
      "Sponsors who want production impact in one function first",
    ],
    deliverables: [
      "Current-state map and AI-native future-state design for the function",
      "Custom production systems with governed agents and human oversight",
      "Integrations to the systems of record you already trust",
      "KPI baseline and operating playbooks your team owns",
    ],
    outcomes: [
      "Leaner operations in the target function",
      "Faster execution on high-volume workflows",
      "You stop renting capability — you start owning it",
      "Systems that evolve with your business, not a vendor backlog",
      "A measurable baseline to expand from",
    ],
    timeline: "8–16 weeks typical for a focused function modernization",
    engagementSteps: [
      {
        title: "Diagnose",
        description:
          "Identify the high-value, high-friction workflows where cost, cycle time, and rework concentrate — and where generic tools fail you.",
      },
      {
        title: "Build",
        description:
          "Agentiers build custom AI-native systems for those workflows and ship them into your live operating environment with governance.",
      },
      {
        title: "Iterate",
        description:
          "You own the system. It evolves with your operators and priorities — without waiting for someone else’s product roadmap.",
      },
      {
        title: "Stabilize & expand",
        description:
          "Confirm KPIs, lock runbooks, and plan the next adjacent workflow inside the same function.",
      },
    ],
    faqs: [
      {
        question: "What is Function Modernization?",
        answer:
          "Rebuilding how a core business function runs by creating custom AI-native systems for its highest-friction workflows — with full ownership. It’s modernization, not another automation bolt-on.",
      },
      {
        question: "Is this just RPA or automation?",
        answer:
          "No. RPA and tool automation patch legacy steps. We rebuild the work itself into intelligent systems that can reason, escalate, and handle ambiguity under governance — systems you own.",
      },
      {
        question: "Do we need to replace our ERP/CRM?",
        answer:
          "Usually not. We build the AI-native layer on systems you already trust, so you modernize operations without a risky rip-and-replace.",
      },
    ],
  },
];

export function getEngagementBySlug(slug: string): EngagementDetail | undefined {
  return engagementDetails.find((model) => model.slug === slug);
}
