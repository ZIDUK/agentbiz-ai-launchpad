import type { LucideIcon } from "lucide-react";
import { Layers, Rocket, Wrench } from "lucide-react";

export interface EngagementDetail {
  slug: string;
  title: string;
  /** Differentiating label (not the generic "Solutions") */
  eyebrow: string;
  shortDescription: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  bestFor: string[];
  deliverables: string[];
  timeline: string;
  engagementSteps: { title: string; description: string }[];
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
      "AI-Native PODs are dedicated execution units staffed by Agentiers — built for one purpose: shipping a critical business workflow into production with governed AI — at a predictable enterprise rhythm. They embed into your operating environment, adapt to your systems and priorities, and transfer ownership so you optimize cost and cycle time — not headcount. Humans steer. AI accelerates. Delivery compounds into capability you keep.",
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
  },
];

export function getEngagementBySlug(slug: string): EngagementDetail | undefined {
  return engagementDetails.find((model) => model.slug === slug);
}
