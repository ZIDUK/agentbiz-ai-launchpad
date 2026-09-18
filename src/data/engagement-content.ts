import type { LucideIcon } from "lucide-react";
import { Code2, Factory, Layers, Rocket, Wrench } from "lucide-react";

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
  /** How the package actually delivers — depth for detail pages */
  capabilities: EngagementCapability[];
  /** How it sits inside the client organization */
  howInside: string[];
  bestFor: string[];
  deliverables: string[];
  outcomes: string[];
  timeline: string;
  engagementSteps: { title: string; description: string }[];
  faqs: EngagementFaq[];
  /** Optional: which services are bundled inside this engagement */
  includesServices?: string[];
  /** Optional: price band */
  priceBand?: string;
}

export const engagementDetails: EngagementDetail[] = [
  // =========================================================================
  // NEW BUNDLES (3) — how we sell
  // =========================================================================
  {
    slug: "agentic-readiness-sprint",
    title: "Agentic Readiness Assessment",
    eyebrow: "Entry Bundle",
    shortDescription:
      "Enterprise architecture for the operating floor — before another dollar on AI.",
    icon: Rocket,
    headline:
      "Operational transformation starts here: enterprise architecture, process maps, and a signed roadmap in 4–6 weeks.",
    description:
      "The Agentic Readiness Assessment is how we start operational transformation. Enterprise architecture (TOGAF) meets BPMN and Lean on the floor — so leadership sees the operating model clearly before anyone spends on AI.",
    whatItIs:
      "A focused 4–6 week engagement that turns enterprise architecture into something the COO can run: stakeholder alignment, a current-state operating map, and a prioritized roadmap. Lowest commitment to start; clearest path to decide what to build next.",
    principle:
      "Operational transformation = the outcome. Enterprise architecture = the method. AI waits until the operation can take it.",
    capabilities: [
      {
        title: "Enterprise architecture (TOGAF Phase A+B)",
        description:
          "Stakeholder map, business drivers, Architecture Vision, and Business Architecture current state — signed by C-level.",
      },
      {
        title: "Operational diagnostic (BPMN 2.0)",
        description:
          "3–5 critical processes mapped in BPMN, AS-IS and TO-BE. Lean audit with bottleneck and waste analysis.",
      },
      {
        title: "Transformation roadmap",
        description:
          "30–60–90 day quick wins ranked by impact and effort. 1-page executive roadmap for board-level alignment.",
      },
    ],
    howInside: [
      "A focused diagnostic and design engagement",
      "Leadership working sessions at kickoff, midpoint, and close",
      "Stakeholder interviews with the operators who run the process",
      "No code, no platform changes — diagnosis and design only",
      "Acceptance criteria on the roadmap and process artifacts",
    ],
    bestFor: [
      "Service companies with 50-500 employees",
      "Growing, consolidating, or sensing the operation is breaking",
      "COO, VP Ops, or Director of Transformation as sponsor",
      "Have budget for a 2-3 month engagement, not a 12-month transformation",
      "Want to validate the journey before committing to the full program",
    ],
    deliverables: [
      "Stakeholder map + business drivers (visual)",
      "Architecture Vision document (TOGAF Phase A)",
      "Business Architecture current state (TOGAF Phase B)",
      "AS-IS process maps in BPMN 2.0 (1-3 critical processes)",
      "Lean audit report with bottleneck and waste analysis",
      "TO-BE process designs (future state)",
      "Prioritized quick wins across 30-60-90 day horizons",
      "1-page executive roadmap signed by C-level",
      "Consolidated executive report (Foundation + Diagnostic)",
      "2 leadership presentations (mid-engagement + final)",
      "Recommended next steps",
    ],
    outcomes: [
      "A clear picture of which 3-5 processes matter most",
      "A visual map of how your operation actually runs today",
      "A roadmap signed by leadership for the next 90 days",
      "Board-ready justification for the next investment",
    ],
    timeline: "4-6 weeks",
    includesServices: ["Operating Foundation", "Process Diagnostic"],
    priceBand: "$20,000 – $40,000 USD fixed-fee",
    engagementSteps: [
      {
        title: "Discovery",
        description:
          "Stakeholder interviews to map drivers, pain points, and the process that is holding growth back.",
      },
      {
        title: "Architecture Vision",
        description:
          "Draft the TOGAF Phase A/B artifacts and align leadership on the 1-3 processes that matter first.",
      },
      {
        title: "Process mapping and Lean audit",
        description:
          "Map the selected processes in BPMN, AS-IS and TO-BE, and rank the waste.",
      },
      {
        title: "Roadmap and decision memo",
        description:
          "1-page executive roadmap, recommended next step, and a leadership working session.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as a typical consulting diagnostic?",
        answer:
          "No. Most consulting diagnostics produce a PowerPoint. This engagement produces enterprise-architecture artifacts you can run: a TOGAF Architecture Vision, BPMN process maps, and a Lean audit — not a slide deck about transformation.",
      },
      {
        question: "What happens after the Assessment?",
        answer:
          "Three paths: (1) the client implements alone with the roadmap we delivered, (2) the client hires us for Process Implementation (Service 03), or (3) the client pauses and resumes later.",
      },
      {
        question: "Is this enterprise architecture or AI consulting?",
        answer:
          "Enterprise architecture and operating design first. AI only after the process has an owner, a baseline, and a path into production. If you want an AI pilot on chaos, we are the wrong partner.",
      },
      {
        question: "How is payment structured?",
        answer:
          "Three milestones: 30% at kickoff, 40% at Foundation delivery, 30% at Diagnostic + final report. Outcome-linked: if we do not deliver the prioritized processes, the last payment is adjusted.",
      },
    ],
  },
  {
    slug: "agentic-operations-build",
    title: "Agentic Operations Build",
    eyebrow: "Full Journey",
    shortDescription:
      "Change how the work runs. Then give it AI.",
    icon: Factory,
    headline:
      "The full journey: four capabilities in sequence, one team, one outcome.",
    description:
      "The Agentic Operations Build is the complete journey: Operating Foundation, Process Diagnostic, Process Implementation, and AI Accelerator delivered in sequence as a single program. One team, one proposal, one outcome.",
    whatItIs:
      "The full transformation program for B2B companies in active change. We run all four services in sequence, with one proposal, one team, and one outcome. The build is the recommended path for serious transformation — not pilots, not strategy decks, real production change.",
    principle:
      "Strategy first. Operations second. AI third. Outcome-linked throughout.",
    capabilities: [
      {
        title: "Foundation + Diagnostic",
        description:
          "Strategic alignment, process mapping, and prioritized roadmap — same as the Readiness Assessment.",
      },
      {
        title: "Process Implementation",
        description:
          "Execute the prioritized quick wins. Configure platforms. Build custom integrations and dashboards when needed. Coach the client team.",
      },
      {
        title: "AI Accelerator",
        description:
          "Apply AI agents to the now-optimized processes. Governance, eval, HITL checkpoints. Powered by Hermes when applicable.",
      },
      {
        title: "Handoff and sustainability",
        description:
          "Documentation, runbooks, sustainability plan. Optional monthly advisory retainer.",
      },
    ],
    howInside: [
      "The four capabilities delivered as one program",
      "Acceptance criteria on each stage before the next begins",
      "If a stage is not accepted, we rework it before moving on",
      "One team throughout — no handoffs between phases",
      "Your team is coached to sustain the changes after we leave",
    ],
    bestFor: [
      "Companies with 200-2,000 employees",
      "In active transformation (scaling, post-acquisition, margin compression, AI disruption)",
      "CEO, COO, or Board as sponsor (C-level commitment)",
      "Ready for a full operating-model program, not a one-off workshop",
      "Want one team, one outcome, one proposal — not 4 separate engagements",
    ],
    deliverables: [
      "Everything in the Agentic Readiness Assessment",
      "Implementation of the prioritized quick wins (3-5 processes)",
      "KPI framework + live dashboards in production",
      "Platform configuration (BPM, ERP, CRM, dashboards) including custom development",
      "Coaching of 3-5 key people on the client team",
      "1-2 end-to-end processes automated with AI in production",
      "Hermes orchestration when applicable",
      "Governance framework: AI Control Tower, audit log, HITL checkpoints",
      "Eval framework + operational runbooks",
      "Complete documentation (SOPs, runbooks, governance docs)",
      "Sustainability plan",
    ],
    outcomes: [
      "Strategy aligned with operations",
      "Processes operating differently in production (not slides)",
      "Live KPI dashboards with review cadence",
      "1-2 AI-automated processes with governance",
      "Internal team capable of sustaining the changes",
      "One program, one outcome, one invoice",
    ],
    timeline: "9-12 months",
    includesServices: [
      "Operating Foundation",
      "Process Diagnostic",
      "Process Implementation",
      "AI Accelerator",
    ],
    priceBand: "$170,000 – $340,000 USD (15-20% off vs services individually)",
    engagementSteps: [
      {
        title: "Foundation + Diagnostic",
        description:
          "Same as the Readiness Assessment, run as Phase 1 of the program.",
      },
      {
        title: "Implementation",
        description:
          "Execute the prioritized quick wins. Deploy dashboards. Coach the team.",
      },
      {
        title: "AI Accelerator",
        description:
          "Apply AI to the now-optimized processes. Build the governance and eval framework.",
      },
      {
        title: "Handoff",
        description:
          "Documentation, runbooks, sustainability plan. Optional retainer begins.",
      },
    ],
    faqs: [
      {
        question: "Why not just buy the services separately?",
        answer:
          "The Build includes a 15-20% discount, one team across the whole journey (no handoffs), and outcome-linked milestones. For clients committed to a real transformation, this is the right shape.",
      },
      {
        question: "What if we only need part of the journey?",
        answer:
          "Then start with the Agentic Readiness Assessment. If the result is positive, you can convert the Assessment credit toward a Build. We do not force a full commitment upfront.",
      },
      {
        question: "How is the AI Accelerator different from typical AI consulting?",
        answer:
          "We never apply AI to broken processes. By the time we reach the AI Accelerator in month 8, the processes are already optimized. That is why our AI engagements have higher adoption and lower failure rate than typical 'AI-first' approaches.",
      },
    ],
  },
  {
    slug: "custom-delivery-pod",
    title: "Custom Delivery Pod",
    eyebrow: "Follow-on",
    shortDescription:
      "When the process needs a system, we build it. You own it.",
    icon: Code2,
    headline:
      "The follow-on build pod for when the implementation requires custom software.",
    description:
      "When the right solution to a process problem is custom software, we build it. We lead the engagement as PM and architect. Our partner network delivers the code. You own the result. Fixed-fee per project, scoped by output, not by hours.",
    whatItIs:
      "A delivery pod for custom software build, scoped per project. We do the architecture, the project leadership, and the quality review. Our partner network delivers the code. You own the IP, the source code, and the running software.",
    principle: "Built right, not staffed. You own the result.",
    capabilities: [
      {
        title: "Architecture and project leadership",
        description:
          "We own the technical architecture, the project plan, and the quality bar. We lead the engagement end-to-end.",
      },
      {
        title: "Partner delivery network",
        description:
          "We activate vetted LATAM dev partners for the actual build. You do not pay for our bench time.",
      },
      {
        title: "Output-based scope",
        description:
          "We scope per output, not per hour. An integration, a dashboard, a module, or an automated workflow — each has a defined result.",
      },
      {
        title: "Full IP transfer",
        description:
          "You own the code, the documentation, the runbooks. 100% transfer, no vendor lock-in.",
      },
    ],
    howInside: [
      "Scoped as a discrete software project",
      "Defined by output, not by hours",
      "Discovery, build, test, deploy, handoff",
      "We lead; our partner network delivers",
      "Post-launch support included in the handoff",
    ],
    bestFor: [
      "Clients who have completed a Readiness Assessment or Operations Build",
      "Clients who come to us with a clear technical requirement",
      "Need a specific integration, dashboard, module, or AI agent",
      "Want fixed-fee and full IP ownership, not staff aug",
    ],
    deliverables: [
      "Working software in production",
      "Complete source code in your repository",
      "Technical documentation (architecture, deployment, maintenance)",
      "Automated test suite (unit + integration)",
      "Handoff session recorded + post-launch support",
    ],
    outcomes: [
      "Specific software problem solved",
      "Full IP ownership with no vendor lock-in",
      "Internal team can maintain the build",
      "Foundation for adjacent expansions",
    ],
    timeline: "4-16 weeks depending on scope",
    priceBand: "$25,000 – $100,000 USD per project (fixed-fee)",
    engagementSteps: [
      {
        title: "Scope and proposal",
        description:
          "We define the output, the acceptance criteria, and the fixed-fee. You sign off before we start.",
      },
      {
        title: "Build",
        description:
          "Our partner network builds. We lead, review, and test.",
      },
      {
        title: "Deploy and handoff",
        description:
          "Production deploy. Recorded handoff session. 1 week of support.",
      },
    ],
    faqs: [
      {
        question: "How is this different from staff aug?",
        answer:
          "Staff aug bills you per hour for warm bodies. We bill you per output (a working integration, a deployed dashboard, an automated process) at a fixed fee. You know the price before we start.",
      },
      {
        question: "Who does the actual coding?",
        answer:
          "Our partner network — vetted LATAM dev shops. We lead the engagement, set the architecture, and own the quality bar. You do not pay for our bench time.",
      },
      {
        question: "Do we own the IP?",
        answer:
          "Yes. 100%. The code, the documentation, the runbooks are yours from day one. No vendor lock-in, no proprietary frameworks you cannot take elsewhere.",
      },
    ],
  },
  // =========================================================================
  // LEGACY ENGAGEMENT MODELS (kept for back-compat with old URLs)
  // =========================================================================
  {
    slug: "ai-native-pods",
    title: "AI-Native PODs",
    eyebrow: "Execution",
    shortDescription:
      "Your execution engine to put AI-native operations in production — with KPIs, governance, and ownership transfer.",
    icon: Rocket,
    headline: "Your execution engine for AI-native operations in production",
    description:
      "AI-Native PODs are dedicated execution units staffed by our operators — built for one purpose: shipping a critical business workflow into production with governed AI — at a predictable enterprise rhythm. They embed into your operating environment, adapt to your systems and priorities, and transfer ownership so you optimize cost and cycle time — not headcount.",
    whatItIs:
      "An AI-Native POD is a cross-functional execution unit embedded in your environment. Our team brings human-led decision-making, AI-accelerated planning through review, enterprise delivery discipline, and the patterns from your operating model — so you gain execution muscle for the AI era, not rented headcount.",
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
          "Our team embeds into your environment, map the target workflow, systems, constraints, and success metrics with your ops and engineering leads.",
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
          "Hand off runbooks, patterns, and operating knowledge so your team runs what our team built — and the next cycle starts stronger.",
      },
    ],
    faqs: [
      {
        question: "What is an AI-Native POD?",
        answer:
          "A dedicated execution unit staffed by our operators, built to ship a governed AI-native workflow into production at a predictable enterprise rhythm — then transfer ownership to your team.",
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
      "Upgrade the systems and tools your function runs on. We diagnose where rented SaaS and manual workarounds slow you down, then build a governed AI-native stack on top of systems you already trust — so you update how the function works and keep the IP.",
    whatItIs:
      "AI-Native Stack Upgrade is how you refresh a business function’s systems and tools without buying another generic SaaS seat. We rebuild high-friction workflows into an owned AI-native stack — sitting on your ERP/CRM — so operators stop bridging gaps between rented tools and start running systems built for how you work.",
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
      "Our team builds and ships into production with governance",
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
          "Our team builds the owned stack and ships it into your live operating environment with governance.",
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
