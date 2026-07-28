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
    slug: "ai-native-stack-upgrade",
    title: "AI-Native Stack Upgrade",
    eyebrow: "Stack",
    shortDescription:
      "Replace rented tools with an AI-native stack you own — upgrade how Ops, Finance, and Support actually run.",
    icon: Wrench,
    headline: "Replace rented tools with an AI-native stack you own.",
    description:
      "Upgrade the systems and tools your function runs on. Agentiers diagnose where rented SaaS and manual workarounds slow you down, then build a governed AI-native stack on top of systems you already trust — so you update how the function works and keep the IP.",
    whatItIs:
      "AI-Native Stack Upgrade is how you refresh a business function’s systems and tools without buying another generic SaaS seat. Agentiers rebuild high-friction workflows into an owned AI-native stack — sitting on your ERP/CRM — so operators stop bridging gaps between rented tools and start running systems built for how you work.",
    principle: "Upgrade the stack. Keep the IP.",
    capabilities: [
      {
        title: "Ops & Finance stack",
        description:
          "Replace brittle finance/ops toolchains with owned reconciliation, invoice, exception, and cash-ops systems.",
      },
      {
        title: "Support & service stack",
        description:
          "Upgrade triage, resolution assist, and detection for your queues — not another bolted-on chatbot license.",
      },
      {
        title: "Document & compliance stack",
        description:
          "Refresh intake, classification, extraction, and audit-ready routing around your real filings and controls.",
      },
      {
        title: "On your systems of record",
        description:
          "ERP, CRM, and core ops tools stay. We upgrade the work layer — no risky rip-and-replace of the whole platform.",
      },
      {
        title: "Owned, not rented",
        description:
          "You own the stack, prompts, and playbooks. Capability scales with demand — not per-seat vendor lock-in.",
      },
    ],
    howInside: [
      "Map the rented tools and manual bridges slowing the function down",
      "Design the AI-native stack that replaces those gaps — owned by you",
      "Agentiers build and ship into production with governance",
      "Your operators run and iterate the stack without a vendor roadmap",
      "Expand to adjacent workflows once the upgraded baseline holds",
    ],
    bestFor: [
      "Functions stuck on rented tools that don’t match how you operate",
      "Leaders ready to upgrade systems and tools — not add another automation layer",
      "Organizations that want to own the stack, not rent seats forever",
      "Sponsors who want a production upgrade in one function first",
    ],
    deliverables: [
      "Stack assessment: rented tools, gaps, and upgrade targets",
      "AI-native future-state design for the function’s systems",
      "Custom production systems with governed agents and human oversight",
      "Integrations to systems of record you already trust",
      "KPI baseline and operating playbooks your team owns",
    ],
    outcomes: [
      "An upgraded stack the function actually runs on",
      "Fewer rented tools and manual workarounds",
      "Faster execution on high-volume workflows",
      "You own the systems — they evolve with your business",
      "A measurable baseline to expand from",
    ],
    timeline: "8–16 weeks typical for a focused stack upgrade",
    engagementSteps: [
      {
        title: "Assess the stack",
        description:
          "Inventory rented tools, manual bridges, and where cost, cycle time, and rework concentrate.",
      },
      {
        title: "Design the upgrade",
        description:
          "Define the AI-native stack: what systems replace which tools, what AI executes, what humans approve.",
      },
      {
        title: "Build & go live",
        description:
          "Agentiers build the owned stack and ship it into your live operating environment with governance.",
      },
      {
        title: "Operate & expand",
        description:
          "Confirm KPIs, lock runbooks, and plan the next adjacent upgrade inside the same function.",
      },
    ],
    faqs: [
      {
        question: "What is an AI-Native Stack Upgrade?",
        answer:
          "A package to upgrade the systems and tools a business function runs on — replacing rented, generic tooling with an owned AI-native stack that fits how you work.",
      },
      {
        question: "Is this just automation on top of our current tools?",
        answer:
          "No. Automation bolts onto what you already rent. A stack upgrade rebuilds the work into systems you own — with governance — so the function runs differently, not just faster at the same broken steps.",
      },
      {
        question: "Do we need to replace our ERP/CRM?",
        answer:
          "Usually not. We upgrade the work stack on systems of record you already trust, without a full platform rip-and-replace.",
      },
    ],
  },
];

export function getEngagementBySlug(slug: string): EngagementDetail | undefined {
  return engagementDetails.find((model) => model.slug === slug);
}
