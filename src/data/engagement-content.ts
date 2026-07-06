import type { LucideIcon } from "lucide-react";
import { GitBranch, Rocket, Users, Wrench, Zap } from "lucide-react";

export interface EngagementDetail {
  slug: string;
  title: string;
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
    slug: "project-based-development",
    title: "Project Based Development",
    shortDescription: "Fixed-scope delivery for defined AI or software outcomes with clear milestones.",
    icon: Rocket,
    headline: "Outcome-driven delivery with defined scope and milestones",
    description:
      "Best when you have a specific workflow, product feature, or modernization initiative with measurable success criteria. We scope architecture, delivery phases, and governance requirements upfront — then execute with senior engineering leadership.",
    bestFor: [
      "First production AI workflow with defined KPIs",
      "New product features or platform modules",
      "Modernization with a fixed budget and timeline",
      "Executive sponsors who need predictable delivery",
    ],
    deliverables: [
      "Scoped statement of work with milestones",
      "Architecture and integration design",
      "Production deployment with documentation",
      "Knowledge transfer and handoff playbook",
    ],
    timeline: "8–16 weeks typical for first production workflow",
    engagementSteps: [
      {
        title: "Discovery & scoping",
        description: "Map workflow, systems, governance, and success metrics.",
      },
      {
        title: "Architecture & plan",
        description: "Define agent design, integrations, and delivery phases.",
      },
      {
        title: "Build & deploy",
        description: "Ship to production with monitoring and controls.",
      },
      {
        title: "Handoff & scale",
        description: "Transfer operations knowledge and identify expansion paths.",
      },
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services Program",
    shortDescription: "Ongoing operations, monitoring, and evolution of your AI systems.",
    icon: Wrench,
    headline: "Run and evolve production AI systems after launch",
    description:
      "For organizations that need continuous improvement, incident response, model updates, and operational support — without building a full internal AI platform team overnight.",
    bestFor: [
      "Production AI workflows requiring 24/7 reliability",
      "Teams without dedicated MLOps or agent ops capacity",
      "Evolving integrations as business rules change",
      "Cost and quality monitoring over time",
    ],
    deliverables: [
      "SLA-backed monitoring and incident response",
      "Model and prompt optimization cadence",
      "Integration maintenance and updates",
      "Monthly operational and ROI reporting",
    ],
    timeline: "Ongoing monthly engagement after initial deployment",
    engagementSteps: [
      {
        title: "Operational baseline",
        description: "Establish monitoring, runbooks, and escalation paths.",
      },
      {
        title: "Steady-state operations",
        description: "Monitor quality, cost, latency, and business KPIs.",
      },
      {
        title: "Continuous improvement",
        description: "Iterate agents, integrations, and workflows.",
      },
      {
        title: "Expansion planning",
        description: "Identify adjacent workflows for governed scale.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDescription: "Senior AI engineers embedded in your team to extend delivery capacity.",
    icon: Users,
    headline: "Senior engineers inside your team — AI-native from day one",
    description:
      "When you need experienced builders who can work inside your codebase, tools, and ceremonies — without the overhead of a full project restructure.",
    bestFor: [
      "Internal product teams scaling AI capabilities",
      "Backlog pressure on platform or integrations",
      "Knowledge transfer to upskill existing engineers",
      "Hybrid delivery with your architects and PMs",
    ],
    deliverables: [
      "Embedded senior engineers (AI, backend, integrations)",
      "Participation in your Agile ceremonies",
      "Code reviews and architecture guidance",
      "Documentation and pairing with internal team",
    ],
    timeline: "3–12 month engagements, flexible ramp up/down",
    engagementSteps: [
      {
        title: "Skills alignment",
        description: "Match engineers to stack, domain, and delivery model.",
      },
      {
        title: "Onboarding",
        description: "Access, repos, environments, and team integration.",
      },
      {
        title: "Embedded delivery",
        description: "Ship alongside your team with shared accountability.",
      },
      {
        title: "Knowledge transfer",
        description: "Upskill internal team and document patterns.",
      },
    ],
  },
  {
    slug: "software-maintenance",
    title: "Software Maintenance",
    shortDescription: "Reliable support for existing applications, integrations, and AI workflows.",
    icon: GitBranch,
    headline: "Keep production systems healthy as requirements evolve",
    description:
      "Maintenance is not just bug fixes — it's keeping integrations, agents, and dependencies current so operational AI systems stay secure and performant.",
    bestFor: [
      "Legacy applications needing steady improvement",
      "Post-launch AI workflows requiring updates",
      "Security patches and dependency management",
      "Small enhancements without full project overhead",
    ],
    deliverables: [
      "Bug fixes and minor enhancements",
      "Dependency and security updates",
      "Integration health checks",
      "Release management support",
    ],
    timeline: "Monthly retainer with prioritized backlog",
    engagementSteps: [
      {
        title: "System assessment",
        description: "Inventory apps, dependencies, and support needs.",
      },
      {
        title: "Support cadence",
        description: "Define SLAs, prioritization, and release rhythm.",
      },
      {
        title: "Ongoing maintenance",
        description: "Execute fixes, updates, and small improvements.",
      },
      {
        title: "Quarterly review",
        description: "Assess technical debt and modernization opportunities.",
      },
    ],
  },
  {
    slug: "rescue-project",
    title: "Rescue Project",
    shortDescription: "Stabilize failing AI or software delivery and restore momentum.",
    icon: Zap,
    headline: "When pilots stall, vendors underdeliver, or timelines slip",
    description:
      "We assess what's broken — architecture, scope, team dynamics, or governance — then implement a recovery plan with clear milestones and executive visibility.",
    bestFor: [
      "AI pilots stuck for 6+ months without production impact",
      "Vendor handoffs with incomplete documentation",
      "Critical deadlines with eroding stakeholder confidence",
      "Technical debt blocking deployment",
    ],
    deliverables: [
      "Rapid technical and delivery assessment",
      "Recovery roadmap with 30/60/90-day milestones",
      "Stabilization of core systems and integrations",
      "Path to production or clean transition plan",
    ],
    timeline: "Assessment in 1–2 weeks; recovery 4–12 weeks",
    engagementSteps: [
      {
        title: "Triage",
        description: "Identify root causes: tech, scope, process, or governance.",
      },
      {
        title: "Stabilize",
        description: "Stop bleeding — fix critical blockers and communication.",
      },
      {
        title: "Recover",
        description: "Execute focused milestones with measurable progress.",
      },
      {
        title: "Transition",
        description: "Hand off to steady-state delivery or internal team.",
      },
    ],
  },
];

export function getEngagementBySlug(slug: string): EngagementDetail | undefined {
  return engagementDetails.find((model) => model.slug === slug);
}
