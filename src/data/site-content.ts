import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  FileText,
  Film,
  GitBranch,
  GraduationCap,
  Heart,
  Layers,
  LineChart,
  Map,
  MessageSquare,
  Network,
  PieChart,
  Rocket,
  Search,
  Settings,
  Shield,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Wallet,
  Wrench,
  Zap,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export interface ServiceItem {
  slug: string;
  number?: string;
  title: string;
  tagline?: string;
  shortDescription: string;
  description: string;
  forWhom?: string;
  deliverables?: string[];
  /** Legacy field — same content as `deliverables`, kept for back-compat with ServiceDetail page */
  highlights: string[];
  notIncludes?: string[];
  framework?: string;
  price?: string;
  duration?: string;
  prerequisite?: string;
  whatNext?: string;
  icon: LucideIcon;
  category: "ai" | "process" | "implementation" | "software";
}

export interface BundleItem {
  slug: string;
  href?: string;
  number?: string;
  title: string;
  tagline?: string;
  description: string;
  forWhom?: string;
  shortDescription?: string;
  deliverables?: string[];
  notIncludes?: string[];
  engagementModel?: string;
  price?: string;
  duration?: string;
  includesServices?: string[];
  whatNext?: string;
  icon: LucideIcon;
  category?: "entry" | "full" | "follow-on";
}

export type EngagementModel = BundleItem;

export interface Industry {
  slug: string;
  name: string;
  /** Optional icon for grids and detail pages */
  icon?: LucideIcon;
  /** Headline shown on industry cards and detail hero */
  headline: string;
  /** Long description shown on the industry detail page */
  description: string;
  /** Pain points (also surfaced as "challenges" on the detail page) */
  painPoints: string[];
  challenges?: string[];
  /** Why we are the right partner for this vertical */
  whyWe: string;
  /** Real credential / track record in this vertical */
  credential: string;
  /** Services we typically apply in this vertical */
  servicesUsed: string[];
  services: string[];
  /** Optional metrics to display on the industry card */
  metrics?: { label: string; value: string }[];
  /** Optional use cases shown on the detail page */
  useCases?: { title: string; description: string }[];
  /** Buyer / decision-maker title */
  buyer: string;
  /** Workflows this vertical typically needs to fix */
  workflows?: string[];
  /** Services we run inside this industry — shown as the detail accordion */
  industryServices?: { title: string; description: string; icon?: LucideIcon }[];
  /** Optional case study slug reference */
  caseStudySlug?: string;
}

export interface BuyerFaq {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  context: string;
  whatWeDid: string[];
  outcomes: { label: string; value: string }[];
  stackApplied: string[];
  note?: string;
  industry?: string;
  href?: string;
  /** Optional card thumbnail under /public */
  image?: string;
}

export interface AboutContent {
  tagline: string;
  subtagline: string;
  who: string;
  trackRecord: string;
  credentials: string;
  pointOfView: string;
  whoHires: string;
  howWeWork: string;
  foundersBio: { name: string; title: string; summary: string };
}

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  type: string;
  readTime: string;
  tags: string[];
  href?: string;
}

// ============================================================================
// SERVICES (4 — TOGAF journey)
// ============================================================================

export const services: ServiceItem[] = [
  {
    slug: "operating-foundation",
    number: "01",
    title: "Operating Foundation",
    tagline: "Set the business architecture: value, ownership, and the processes that move results.",
    shortDescription:
      "We start with the architecture of the business: strategy, value targets, decision rights, and the few processes that actually move results. Every later decision has to trace back to this.",
    description:
      "We help leadership lock the business architecture before anyone redesigns a workflow or buys a tool. That means strategy, value targets, decision rights, and the few processes that actually move results. Without that, digital and agentic programs optimize the wrong work.",
    forWhom: "CEO, COO, Chief Strategy Officer",
    deliverables: [
      "Stakeholder map + business drivers (visual)",
      "Architecture Vision document (TOGAF Phase A)",
      "Business Architecture current state (TOGAF Phase B)",
      "Prioritized list of the 3-5 critical processes to attack first",
      "1-page executive roadmap signed by C-level",
      "1 handoff session with leadership",
    ],
    highlights: [
      
            "Stakeholder map + business drivers (visual)",
            "Architecture Vision document (TOGAF Phase A)",
            "Business Architecture current state (TOGAF Phase B)",
            "Prioritized list of the 3-5 critical processes to attack first",
            "1-page executive roadmap signed by C-level",
            "1 handoff session with leadership",
          
    ],
    notIncludes: [
      "Process implementation",
      "Deep technical system analysis",
      "AI or agents",
    ],
    framework: "TOGAF ADM (Phases A + B) with BPMN-lite for visual artifacts.",
    price: "$25,000 – $50,000 USD fixed-fee",
    duration: "4-6 weeks",
    whatNext:
      "Once the roadmap is signed, the next step is Process Diagnostic (Service 02) to map the specific processes Foundation prioritized.",
    icon: Compass,
    category: "process",
  },
  {
    slug: "process-diagnostic",
    number: "02",
    title: "Process Diagnostic",
    tagline: "Map how work runs, design the TO-BE, and score data, systems, and controls.",
    shortDescription:
      "We model the critical processes in BPMN, strip waste with Lean, and design the TO-BE — including data, systems, exceptions, and control points. That is the plan implementation can execute.",
    description:
      "We model the critical processes in BPMN 2.0, audit them with Lean, and design the TO-BE end to end. The diagnostic also scores data quality, system-of-record access, exceptions, and controls — the readiness gate for later automation. You leave knowing what to fix, in what order, and what is not ready for AI.",
    forWhom: "COO, VP Operations, Director of Process Excellence",
    deliverables: [
      "AS-IS process maps in BPMN 2.0 (3-5 critical processes)",
      "Lean audit report with bottleneck and waste analysis",
      "TO-BE process designs (future state)",
      "Prioritized quick wins across 30-60-90 day horizons",
      "Executive report (20-30 pages)",
      "Final presentation to leadership",
    ],
    highlights: [
      
            "AS-IS process maps in BPMN 2.0 (3-5 critical processes)",
            "Lean audit report with bottleneck and waste analysis",
            "TO-BE process designs (future state)",
            "Prioritized quick wins across 30-60-90 day horizons",
            "Executive report (20-30 pages)",
            "Final presentation to leadership",
          
    ],
    notIncludes: [
      "Implementation of the quick wins",
      "Tool configuration",
      "AI or agents",
      "Internal team training",
    ],
    framework: "BPMN 2.0 + Lean Management + Value Stream Mapping.",
    price: "$40,000 – $75,000 USD fixed-fee",
    duration: "8 weeks",
    prerequisite: "Operating Foundation completed (or equivalent work already done)",
    whatNext:
      "With the map and priorities in hand, the next step is Process Implementation (Service 03) to execute the prioritized wins.",
    icon: GitBranch,
    category: "process",
  },
  {
    slug: "process-implementation",
    number: "03",
    title: "Process Implementation",
    tagline: "Install the new operating model: workflows, systems, KPIs, and owners.",
    shortDescription:
      "We put the TO-BE into production: redesigned workflows, system changes, live KPIs, owners, and a team that can run the new way of working.",
    description:
      "We implement the redesigned processes in the systems that already run the work, stand up KPIs with owners and a review cadence, and coach the people who have to sustain it. Digital transformation fails here when the map never becomes the operating model.",
    forWhom: "COO, VP Operations, Director of Process Excellence, internal client teams",
    deliverables: [
      "Implementation of prioritized quick wins (3-5 processes)",
      "KPI framework + live dashboards (data sources, metrics, owners, review cadence)",
      "Platform configuration (BPM, ERP, CRM, dashboards) — custom development when needed",
      "Coaching of 3-5 key people on the client team",
      "Process documentation (SOPs, runbooks)",
      "Weekly leadership sync",
      "Final handoff with sustainability plan",
    ],
    highlights: [
      
            "Implementation of prioritized quick wins (3-5 processes)",
            "KPI framework + live dashboards (data sources, metrics, owners, review cadence)",
            "Platform configuration (BPM, ERP, CRM, dashboards) — custom development when needed",
            "Coaching of 3-5 key people on the client team",
            "Process documentation (SOPs, runbooks)",
            "Weekly leadership sync",
            "Final handoff with sustainability plan",
          
    ],
    notIncludes: [
      "AI agents (that is Service 04)",
      "Organizational restructuring",
      "Software or platform license purchases (client cost)",
    ],
    framework: "Lean + Six Sigma + PMBOK for engagement governance.",
    price: "$80,000 – $150,000 USD (fixed-fee or monthly retainer)",
    duration: "12-16 weeks",
    prerequisite: "Process Diagnostic completed",
    whatNext:
      "With optimized processes in production, the next step is AI Accelerator (Service 04) to automate what is now ready for automation. Or, a Custom Delivery Pod (Bundle C) for targeted software build.",
    icon: Wrench,
    category: "implementation",
  },
  {
    slug: "ai-accelerator",
    number: "04",
    title: "AI Accelerator",
    tagline: "Agents only on ready workflows — with identity, human control, and audit.",
    shortDescription:
      "We deploy agents on processes that already have an owner, a baseline, and controls. Identity, approval by risk, evaluation, and an audit trail are part of the design, not a layer added later.",
    description:
      "We deploy 1-2 agents or workflows on processes that already have an owner, a baseline, and a TO-BE design. Each agent gets a defined autonomy level, identity, tool permissions, human approval where risk requires it, evaluation, and an audit trail. That is how agentic work survives production instead of becoming another retired pilot.",
    forWhom: "COO + Head of Digital, or Director of Transformation",
    deliverables: [
      "1-2 end-to-end processes automated with AI agents or workflows",
      "Internal orchestration and governance layer when it reduces delivery risk",
      "Governance framework: AI Control Tower, audit log, HITL checkpoints",
      "Eval framework (success metrics, evaluation criteria, reviewers)",
      "Operational runbooks for the client team",
      "Scaling plan (which process to automate next, in what order)",
      "Handoff session with technical team + leadership",
    ],
    highlights: [
      
            "1-2 end-to-end processes automated with AI agents or workflows",
            "Internal orchestration and governance layer when it reduces delivery risk",
            "Governance framework: AI Control Tower, audit log, HITL checkpoints",
            "Eval framework (success metrics, evaluation criteria, reviewers)",
            "Operational runbooks for the client team",
            "Scaling plan (which process to automate next, in what order)",
            "Handoff session with technical team + leadership",
          
    ],
    notIncludes: [
      "Model or platform licenses (OpenAI, Anthropic, etc. — client cost)",
      "Multi-year platform implementation",
      "Mass employee training (separate change management engagement)",
    ],
    framework: "AI agent design + governance + eval. Applied to client tools with human-in-the-loop controls.",
    price: "$60,000 – $120,000 USD fixed-fee",
    duration: "8-12 weeks",
    prerequisite: "Process Implementation completed (processes already optimized)",
    whatNext:
      "After 1-2 processes in production, options include: expand to more processes (another AI Accelerator), convert to a monthly AI Ops retainer, or close the engagement with annual advisory.",
    icon: Sparkles,
    category: "ai",
  },
];

// ============================================================================
// BUNDLES (3 — how clients buy)
// ============================================================================

export const bundles: BundleItem[] = [
  {
    slug: "agentic-readiness-sprint",
    number: "B-A",
    title: "Agentic Readiness Assessment",
    tagline: "Enterprise architecture for the operating floor — before another dollar on AI.",
    shortDescription:
      "A focused 4–6 week entry engagement: enterprise architecture, process diagnostic, and a short operational-transformation roadmap.",
    description:
      "The Agentic Readiness Assessment is how we start operational transformation. Enterprise architecture (TOGAF) meets BPMN and Lean on the floor — so leadership sees the operating model clearly before anyone spends on AI.",
    forWhom:
      "Service companies with 50-500 employees that are growing, consolidating, or sensing their operations are breaking. COO, VP Ops, Director of Delivery, or CEO as sponsor.",
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
      "1 leadership presentation + decision memo",
      "Recommended next steps (Implementation, AI Accelerator, or pause)",
    ],
    notIncludes: [
      "Implementation of the quick wins",
      "AI or agents or automation",
      "Tool configuration",
      "Internal team training",
      "Organizational or headcount changes",
    ],
    engagementModel:
      "Fixed-fee. Two payment milestones: 50% at kickoff, 50% at roadmap delivery. Outcome-linked: if the agreed diagnostic artifacts are not delivered, the final payment is adjusted.",
    price: "$20,000 – $40,000 USD fixed-fee",
    duration: "4-6 weeks",
    includesServices: ["Operating Foundation", "Process Diagnostic"],
    whatNext:
      "Three possible paths: (1) the client implements alone with the roadmap we delivered, (2) the client hires us for Process Implementation (Service 03), or (3) the client decides the timing is not right and resumes later.",
    icon: Rocket,
    category: "entry",
  },
  {
    slug: "agentic-operations-build",
    number: "B-B",
    title: "Agentic Operations Build",
    tagline: "Change how the work runs. Then give it AI.",
    shortDescription:
      "The complete transformation program covering all four services in sequence. One team, one proposal, one outcome. 15-20% discount versus buying each service separately.",
    description:
      "The Agentic Operations Build is the complete journey: Operating Foundation, Process Diagnostic, Process Implementation, and AI Accelerator delivered in sequence as a single program. One team, one proposal, one outcome. 9-12 months of focused, outcome-linked work.",
    forWhom:
      "Companies with 200-2,000 employees in active transformation (scaling, post-acquisition, margin compression, AI disruption). CEO, COO, or Board as sponsor.",
    deliverables: [
      "Everything in the Agentic Readiness Assessment",
      "Implementation of the prioritized quick wins (3-5 processes)",
      "KPI framework + live dashboards in production",
      "Platform configuration (BPM, ERP, CRM, dashboards) including custom development",
      "Coaching of 3-5 key people on the client team",
      "1-2 end-to-end processes automated with AI",
      "Orchestration and governance controls when they reduce delivery risk",
      "Governance framework: AI Control Tower, audit log, HITL checkpoints",
      "Eval framework + operational runbooks",
      "Complete documentation (SOPs, runbooks, governance docs)",
      "Sustainability plan",
    ],
    notIncludes: [
      "Model or platform licenses (client cost)",
      "Client headcount changes (we do not hire or fire anyone)",
      "Multi-year platform implementation",
      "Compensation or benefits changes for client team",
    ],
    engagementModel:
      "Fixed-fee or monthly retainer (USD 20-30K/month for 9-12 months). Payment per milestone: 20% kickoff, 20% Foundation, 20% Diagnostic, 20% Implementation, 20% AI Accelerator. Outcome-linked: each milestone has acceptance criteria. If they are not met, we rework at no additional cost.",
    price: "$170,000 – $340,000 USD (15-20% off vs services individually)",
    duration: "9-12 months",
    includesServices: [
      "Operating Foundation",
      "Process Diagnostic",
      "Process Implementation",
      "AI Accelerator",
    ],
    whatNext:
      "Options: monthly advisory retainer (USD 5-10K/month) for ongoing support, additional AI expansion engagements, or clean handoff with the client team capable of sustaining the transformation.",
    icon: Factory,
    category: "full",
  },
  {
    slug: "custom-delivery-pod",
    number: "B-C",
    title: "Custom Delivery Pod",
    tagline: "When the process needs a system, we build it. You own it.",
    shortDescription:
      "The follow-on build pod for when the implementation requires custom software. We lead, our partner network delivers. You own the code, the IP, and the outcome.",
    description:
      "When the right solution to a process problem is custom software, we build it. We lead the engagement as PM and architect. Our partner network delivers the code. You own the result.",
    forWhom:
      "Clients who have completed a Readiness Assessment or Operations Build, or who come to us with a clear technical requirement. Typical examples: system integration, custom dashboards, custom modules on existing platforms, AI agent automation.",
    deliverables: [
      "Working software in production (integration, dashboard, module, automation)",
      "Complete source code in your repository (GitHub, GitLab, etc.)",
      "Technical documentation (architecture, deployment, maintenance)",
      "Automated test suite (unit + integration)",
      "Handoff session recorded + post-launch support",
    ],
    notIncludes: [
      "Ongoing maintenance (separate engagement)",
      "Production incident response (separate engagement)",
      "Multi-year platform ownership",
    ],
    engagementModel:
      "Per-project fixed-fee based on output, not hours. Examples: ERP + approvals custom integration (USD 25-40K, 6 weeks), KPI dashboard with data warehouse (USD 30-50K, 8 weeks), custom platform module (USD 40-80K, 10-14 weeks), AI agent automation (USD 50-100K, 10-12 weeks).",
    price: "$25,000 – $100,000 USD per project (fixed-fee)",
    duration: "4-16 weeks depending on scope",
    includesServices: [],
    whatNext:
      "After delivery, options include ongoing maintenance retainer, expansion to adjacent systems, or handoff to your internal engineering team.",
    icon: Code2,
    category: "follow-on",
  },
];

// ============================================================================
// INDUSTRIES (3 — verticals with real track record)
// ============================================================================

export const industries: Industry[] = [
  {
    slug: "media-entertainment",
    name: "Media",
    icon: Film,
    headline: "If you make content, the operation behind it is the business.",
    description:
      "Deadlines don't wait for a clean process. Vendors, regions, last-minute scope — if you produce content at scale, the operation behind the cut is what actually ships. We've lived that room: production coordination, vendor networks, and the handoffs that decide whether the work airs on time.",
    painPoints: [
      "Content production at scale with critical time-to-market pressure",
      "Vendor management and distributed team coordination",
      "Multi-country, multi-language operations",
      "Scaling without quality loss",
    ],
    challenges: [
      "Coordinating creative deadlines with operational SLAs",
      "Vendor SLAs that drift without governance",
      "Knowledge transfer when rotating teams",
    ],
    whyWe:
      "We've been on the production floor, not in a slide about it. Five-plus years coordinating multi-region vendor networks and shipping under creative-driven deadlines. We speak production, scope changes, and vendor SLAs — because we've had to.",
    credential:
      "Disney: portfolio of USD 50M+, 10% portfolio growth, USD 15M+ direct account.",
    servicesUsed: ["Operating Foundation", "Process Implementation"],
    services: ["Operating Foundation", "Process Implementation"],
    metrics: [
      { label: "Years inside content production operations", value: "5+" },
      { label: "Typical starting engagement", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Vendor management redesign",
        description:
          "Replace ad-hoc vendor coordination with a governed process, KPIs, and review cadence.",
      },
      {
        title: "Multi-region delivery operating model",
        description:
          "Standardize how distributed teams hand off work, with SLAs and escalation paths.",
      },
    ],
    buyer: "COO, VP Production, Head of Operations, Director of Post-Production",
    workflows: [
      "Vendor management and SLA governance",
      "Multi-region production handoffs",
      "Scope-change control under creative deadlines",
      "Time-to-market coordination across vendors",
    ],
    industryServices: [
      {
        title: "Production coordination",
        icon: Film,
        description:
          "The calendar, the cut, the handoff. We make production a process the room can run — not a thread of last-minute calls.",
      },
      {
        title: "Vendor and SLA governance",
        icon: Users,
        description:
          "Who is late, who is drifting, who owns the next step. Vendors get a cadence, not a spreadsheet that nobody opens.",
      },
      {
        title: "Multi-region delivery",
        icon: Network,
        description:
          "Work crossing countries and languages needs a single operating model. We design the handoff so quality does not drop at the border.",
      },
      {
        title: "Scope under a deadline",
        icon: Target,
        description:
          "Creative changes. The air date does not. We put a control on scope so the operation can still ship.",
      },
      {
        title: "AI on owned production work",
        icon: Sparkles,
        description:
          "Transcription, logging, status — only on workflows with an owner and an audit trail. Never on a process nobody runs.",
      },
    ],
  },
  {
    slug: "tech-services-latam",
    name: "Technology",
    icon: Cpu,
    headline: "If you sell technology or services, the delivery model is the product.",
    description:
      "You've felt it: margin pressure, clients asking if AI can do the work, quality slipping as you scale. If you run a technology or services operation, the delivery model is the product. We've run it from the inside — utilization, escalations, CSAT — so we know where it actually breaks.",
    painPoints: [
      "Margin compression as rates drop and AI reshapes delivery",
      "Clients asking if the work can be done with AI",
      "Scaling delivery without losing quality",
      "Looking like every other shop in the market",
    ],
    challenges: [
      "Standing out when the market treats you as interchangeable",
      "Margin compression as delivery rates drop",
      "AI disruption on traditional delivery models",
    ],
    whyWe:
      "We've spent our career inside this industry — Globant, Disney delivery, Avanto operations. Utilization, margin, CSAT, escalations. We speak revenue and delivery, not just process.",
    credential:
      "Globant: 5 years, USD 50M+ portfolio. Avanto: currently operating 6 simultaneous delivery programs.",
    servicesUsed: [
      "Operating Foundation",
      "Process Diagnostic",
      "AI Accelerator",
    ],
    services: [
      "Operating Foundation",
      "Process Diagnostic",
      "AI Accelerator",
    ],
    caseStudySlug: "avanto-operations",
    metrics: [
      { label: "Simultaneous delivery programs at Avanto", value: "6" },
      { label: "Engineers managed in past delivery roles", value: "50+" },
      { label: "Typical starting engagement", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Delivery governance unification",
        description:
          "Consolidate delivery governance across multiple programs under a single PMO with shared KPIs.",
      },
      {
        title: "AI automation of internal ops",
        description:
          "Apply AI agents to internal ops (recruiting, HR, finance) to free margin for the delivery teams.",
      },
      {
        title: "Margin defense under price pressure",
        description:
          "Identify and remove operational waste to defend margin as nearshore rates compress.",
      },
    ],
    buyer: "COO, VP Operations, Director of Delivery, CEO of services firm",
    workflows: [
      "Delivery governance across parallel programs",
      "Utilization, margin, and CSAT operating cadence",
      "Escalation and exception handling",
      "Staffing, recruiting, and internal ops handoffs",
    ],
    industryServices: [
      {
        title: "Delivery governance",
        icon: Shield,
        description:
          "One way programs run, one way issues escalate, one set of numbers leadership actually looks at.",
      },
      {
        title: "Margin and utilization cadence",
        icon: PieChart,
        description:
          "The weekly operating rhythm: who is billable, what is slipping, where margin is leaking — in time to act.",
      },
      {
        title: "Escalations that close",
        icon: Zap,
        description:
          "Exceptions need an owner, a clock, and a path back into the process. We install that path.",
      },
      {
        title: "Staffing and internal ops",
        icon: Users,
        description:
          "Recruiting, staffing, finance handoffs — the work around delivery that quietly eats the delivery.",
      },
      {
        title: "AI on owned delivery work",
        icon: Bot,
        description:
          "Status, staffing, internal ops — automated only when the process already has an owner. We will not automate chaos.",
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports",
    icon: Trophy,
    headline: "If the score is the product, the operation cannot fail in public.",
    description:
      "A round ends. A protest starts. The room is loud and the result has to hold. We rebuild the scoring operation behind combat sports — judging, results, audit — so the federation can stand by the call.",
    painPoints: [
      "Scoring that depends on paper, memory, or a table nobody can audit",
      "Protests with no trail of who scored what, when",
      "Event-day chaos: tables, delays, results that lag the mat",
      "Software that looks like a scoreboard and behaves like a spreadsheet",
    ],
    challenges: [
      "Making a judging call defensible after the room has gone home",
      "Running an event without the results desk becoming the bottleneck",
      "Giving officials a system they will actually use under pressure",
    ],
    whyWe:
      "We have built and operated the scoring layer for a combat-sports federation — not a fan app, the system the judges run when the match is live.",
    credential:
      "Live judging and results platform for a combat-sports federation. Client name withheld.",
    servicesUsed: ["Process Diagnostic", "Process Implementation", "Custom Delivery Pod"],
    services: ["Process Diagnostic", "Process Implementation", "Custom Delivery Pod"],
    caseStudySlug: "combat-sports-scoring",
    metrics: [
      { label: "Scoring system in live events", value: "Live" },
      { label: "Typical starting engagement", value: "Pod" },
    ],
    useCases: [
      {
        title: "Judging under pressure",
        description:
          "Capture every score as it happens, with identity, timestamp, and a path to review.",
      },
      {
        title: "Results the federation can publish",
        description:
          "From the table to the board without a side channel of WhatsApp and paper.",
      },
    ],
    buyer: "Federation operations, event directors, sports-tech leads",
    workflows: [
      "Live judging and scoring",
      "Protests and result review",
      "Event-day results desk",
      "Officials, tables, and run-of-show",
    ],
    industryServices: [
      {
        title: "Tournament operations",
        icon: Trophy,
        description:
          "Brackets, tables, officials, the clock. We map the event as a process so fight day is run, not improvised.",
      },
      {
        title: "Judging and scoring systems",
        icon: ClipboardCheck,
        description:
          "The product is the score. We build the system judges use live — clear, fast, and hard to dispute.",
      },
      {
        title: "Results, protests, audit trail",
        icon: FileText,
        description:
          "Who scored, when, under which rule. A protest has a file, not a memory.",
      },
      {
        title: "Event-day runbooks",
        icon: Map,
        description:
          "What happens when a table fails, a judge is late, a result is challenged. Written before the first match.",
      },
      {
        title: "AI that never makes the call",
        icon: Shield,
        description:
          "Replay, logging, assist — never the final score without a human. The official stays the owner.",
      },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: Store,
    headline: "If you make and sell it the same day, the operation is the brand.",
    description:
      "Specialty retail lives or dies at the counter: inventory, recipe, shift, the person in front of you. We rebuild that operation — not a loyalty chatbot, the work that actually ships the cup.",
    painPoints: [
      "Stockouts and waste in the same week",
      "Recipes and batches that live in someone's head",
      "Shifts that cannot see what the next shift needs",
      "A 'digital' layer that never touches how the store actually runs",
    ],
    challenges: [
      "Keeping quality when the store is busy",
      "Inventory that matches what you actually sell",
      "A customer journey that does not break the counter",
    ],
    whyWe:
      "We have operated inside a specialty beverage retailer — production, store ops, the path from batch to counter. We know this room because we have stood in it.",
    credential:
      "Store and production operations for a specialty retail brand. Client name withheld.",
    servicesUsed: ["Operating Foundation", "Process Implementation", "Custom Delivery Pod"],
    services: ["Operating Foundation", "Process Implementation", "Custom Delivery Pod"],
    caseStudySlug: "specialty-retail-ops",
    metrics: [
      { label: "Store and production operations", value: "Live" },
      { label: "Typical starting engagement", value: "Assessment" },
    ],
    useCases: [
      {
        title: "Counter and production in one model",
        description:
          "What is made, what is sold, what is left — one cadence the store can run.",
      },
      {
        title: "Inventory that matches the menu",
        description:
          "Replenishment from real consumption, not from a guess at close.",
      },
    ],
    buyer: "Founders, store operations leads, retail brand operators",
    workflows: [
      "Store operations and shift handoff",
      "Inventory and replenishment",
      "Recipe, batch, and quality",
      "Counter-to-digital customer journey",
    ],
    industryServices: [
      {
        title: "Store operations",
        icon: Store,
        description:
          "Open, shift, close. We make the store a process the team can run without the founder in the room.",
      },
      {
        title: "Inventory and replenishment",
        icon: Database,
        description:
          "What left the shelf, what has to come back, before you are out of the thing people came for.",
      },
      {
        title: "Recipe, batch, and quality",
        icon: ClipboardCheck,
        description:
          "The product is made on site. The recipe needs an owner, a batch record, and a way to hold the line when it is busy.",
      },
      {
        title: "The journey at the counter",
        icon: MessageSquare,
        description:
          "Order, wait, pay, come back. We fix the path the customer actually walks — not a campaign on top of a broken counter.",
      },
      {
        title: "Demand only after the process is owned",
        icon: TrendingUp,
        description:
          "Forecast and assist once inventory and production have an owner. We will not put AI on a store nobody can run.",
      },
    ],
  },
  {
    slug: "financial-services-latam",
    name: "Financial Services in LATAM",
    icon: Wallet,
    headline: "Process transformation for regulated financial environments",
    description:
      "We help financial services organizations in LATAM modernize customer onboarding, KYC, and compliance workflows under evolving regulation. We bring the operational discipline that survives audit, not the slide deck that does not.",
    painPoints: [
      "Constantly changing regulation (local financial regulators)",
      "Customer onboarding and KYC at scale",
      "Legacy systems that do not scale",
      "Compliance and audit trail requirements",
    ],
    challenges: [
      "Onboarding and KYC at scale without sacrificing accuracy",
      "Regulatory change management",
      "Audit traceability across systems",
    ],
    whyWe:
      "We have partial exposure through client work in the financial services sector. We are building deeper vertical expertise and will only publish case studies when we have one we can defend with numbers.",
    credential:
      "Partial exposure via client engagements. Phase 2: deep vertical expertise with public case study.",
    servicesUsed: ["Process Diagnostic", "Process Implementation"],
    services: ["Process Diagnostic", "Process Implementation"],
    metrics: [
      { label: "Vertical depth", value: "Phase 2" },
      { label: "Current exposure", value: "Partial" },
    ],
    useCases: [
      {
        title: "KYC process redesign",
        description:
          "Map the current KYC process, identify manual steps, and design a Lean-optimized target state.",
      },
      {
        title: "Compliance workflow audit",
        description:
          "Audit the regulatory reporting and approval workflows against current LATAM requirements.",
      },
    ],
    buyer: "COO, Head of Operations, Compliance Officer",
  },
];

// ============================================================================
// CASE STUDY (1 — Avanto, operational scale, no M&A framing)
// ============================================================================

export const caseStudies: CaseStudy[] = [
  {
    slug: "avanto-operations",
    title: "Six programs. One operating model. No chaos.",
    client: "Avanto — technology services",
    industry: "Technology",
    href: "/case-studies/avanto-operations",
    image: "/industries/tech-services-latam.jpg",
    context:
      "Imagine running six delivery programs at once — different clients, distributed teams, senior stakeholders watching the numbers. That's where Avanto was. The work was growing. The operating model wasn't.",
    whatWeDid: [
      "Mapped the full delivery operation (processes, roles, tools, governance)",
      "Designed the unified delivery model — how programs operate, how success is measured, how issues escalate",
      "Integrated 6 simultaneous programs under a single governance framework",
      "Established leadership review cadence and consistent reporting",
      "Designed the operational KPI framework (utilization, margin, CSAT, on-time delivery)",
    ],
    outcomes: [
      { label: "Delivery programs under one operating model", value: "6" },
      { label: "Unified delivery governance", value: "1 PMO" },
      { label: "Shared operating cadence", value: "Weekly" },
      { label: "KPI system for utilization, margin, and CSAT", value: "Live" },
    ],
    stackApplied: [
      "TOGAF for strategy-to-operations alignment",
      "BPMN for delivery process mapping",
      "Lean + Six Sigma for waste identification",
      "PMBOK for governance framework",
    ],
    note: "This case describes operational scale, not post-acquisition integration.",
  },
  {
    slug: "combat-sports-scoring",
    title: "The score has to hold when the room is loud.",
    client: "A combat-sports federation",
    industry: "Sports",
    href: "/case-studies/combat-sports-scoring",
    image: "/industries/sports.jpg",
    context:
      "A match ends. A protest starts. If the score lives on paper and memory, the federation cannot stand by the call. They needed the judging operation to be as serious as the sport.",
    whatWeDid: [
      "Mapped fight-day as a process: officials, tables, scoring, results, protests",
      "Designed the judging flow so every score has an owner, a timestamp, and a trail",
      "Built the live scoring system the judges run — not a fan app, the system on the table",
      "Installed the protest and results path so a challenge has a file, not a conversation",
      "Wrote the event-day runbook: what happens when a table fails or a result is disputed",
    ],
    outcomes: [
      { label: "Scoring in live events", value: "Live" },
      { label: "Audit trail on every score", value: "Yes" },
      { label: "Final call", value: "Human" },
      { label: "Fan-app theater", value: "None" },
    ],
    stackApplied: [
      "BPMN for event-day process mapping",
      "Custom scoring software owned by the client",
      "Human-in-the-loop on every official call",
    ],
    note: "Client name withheld. Combat sports. Live judging and results.",
  },
  {
    slug: "specialty-retail-ops",
    title: "The brand is what happens at the counter.",
    client: "A specialty retail brand",
    industry: "Retail",
    href: "/case-studies/specialty-retail-ops",
    image: "/industries/retail.jpg",
    context:
      "They make it and sell it the same day. When inventory, recipe, and shift live in someone's head, the store cannot scale without the founder on the floor.",
    whatWeDid: [
      "Mapped store ops from open to close: production, counter, inventory, handoff",
      "Put owners on recipe, batch, and quality so the product holds when it is busy",
      "Designed replenishment from what actually sells — not from a guess at close",
      "Installed the shift cadence so the next team can see what the last team left",
      "Left a system the store runs without us in the room",
    ],
    outcomes: [
      { label: "Store and production model", value: "One" },
      { label: "Recipe and batch ownership", value: "Named" },
      { label: "Replenishment", value: "From sales" },
      { label: "Loyalty-chatbot layer", value: "None" },
    ],
    stackApplied: [
      "Operating cadence for store and production",
      "Process maps for counter, inventory, and batch",
      "Custom ops tooling owned by the client",
    ],
    note: "Client name withheld. Specialty retail. Store and production operations.",
  },
];

// ============================================================================
// ABOUT
// ============================================================================

export const about: AboutContent = {
  tagline: "Operational Excellence, powered by AI",
  subtagline:
    "Strategy → Operations → AI. The integrated journey for companies that need to operate better before they scale.",
  who: "If a process is slowing you down, that's the work we do. We align strategy, operations, and technology — in that order — before we touch AI.",
  trackRecord:
    "Our team has spent 5+ years inside Disney and Globant managing delivery portfolios up to USD 50M+ with teams of 50+ engineers. We grew from PM to Director of Operations in four promotions. We now operate Avanto and run agentbiz.io in parallel.",
  credentials:
    "Maestría en Dirección de Procesos Estratégicos (UNIR) · PMP · SAFe 6 · CSM · MBA · Mechatronics Engineer (B.S.).",
    pointOfView:
    "AI creates durable value when it sits on a process with a clear owner, reliable data, measurable performance, and defined controls. Fix the operation first. Then give it AI.",
  whoHires:
    "Leaders who own the operation and need it to run better before they keep scaling.",
  howWeWork:
    "Short engagements, fixed-fee, with one clear outcome. We do not sell hours — we deliver a roadmap, an implementation, or a system. If we do not deliver the outcome, we do not collect the last payment.",
  foundersBio: {
    name: "Jonathan Pardo Fuentes",
    title: "Director of Operations & Founder",
    summary:
      "Fifteen years leading delivery and operations for enterprise clients. Started as a software engineer and grew through PM and Senior PM to Director of Operations. Led delivery work at Disney, Globant, and Avanto with teams of 50+ engineers. Holds a Maestría en Dirección de Procesos Estratégicos from UNIR, PMP, SAFe 6, CSM, and an MBA.",
  },
};

// ============================================================================
// STRATEGIC PILLARS (4 — for the home page)
// ============================================================================

export interface StrategicPillar {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const strategicPillars: StrategicPillar[] = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "We align with leadership on the 3-5 processes that actually need to change before we change anything. No transformation without strategic clarity.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Operations Before AI",
    description:
      "We fix the operation first, then apply AI. Automating a broken process only amplifies the problem.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Governance by Design",
    description:
      "Audit trails, HITL checkpoints, eval frameworks, escalation paths. Trust and control are built in from day one, not bolted on later.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Outcome-Linked",
    description:
      "We do not sell hours. We deliver a roadmap, an implementation, or a pilot. If we miss the outcome, we do not collect the last payment.",
    icon: CheckCircle2,
  },
];

// ============================================================================
// HOW WE WORK (4 phases — the journey backdrop)
// ============================================================================

export interface WorkflowPhase {
  icon: LucideIcon;
  number: string;
  title: string;
  duration: string;
  price: string;
  description: string;
}

export const workflowPhases: WorkflowPhase[] = [
  {
    icon: Compass,
    number: "01",
    title: "Operating Foundation",
    duration: "4-6 weeks",
    price: "$25-50K",
    description:
      "We lock what you are trying to win — and the few processes that actually move it.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Process Diagnostic",
    duration: "8 weeks",
    price: "$40-75K",
    description:
      "We map how the work really runs, cut the waste, and design the version your team can operate.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Process Implementation",
    duration: "12-16 weeks",
    price: "$80-150K",
    description:
      "We install the new way of working: owners, systems, live numbers.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "AI Accelerator",
    duration: "8-12 weeks",
    price: "$60-120K",
    description:
      "We put AI only on work that's ready — with approval and an audit trail.",
  },
];

// ============================================================================
// RESOURCES (simplified — replace placeholders)
// ============================================================================

export const resources: ResourceItem[] = [
  {
    slug: "enterprise-readiness-checklist",
    title: "Is Your Operation Ready for AI? A 20-Question Diagnostic",
    description:
      "A practical checklist for COOs and VPs of Operations to baseline operational readiness before any AI investment. Use it before you hire us, use it before you buy any AI tool.",
    type: "Checklist",
    readTime: "10 min read",
    tags: ["Strategy", "AI Readiness", "Operations"],
  },
  {
    slug: "avanto-case",
    title: "Avanto: 6 Programs, 1 PMO, 25% Performance Lift",
    description:
      "How a LATAM tech services firm unified its delivery operation across six simultaneous programs with a single governance framework, disciplined cadence, and an operational KPI system that everyone could see.",
    type: "Case Study",
    readTime: "7 min read",
    tags: ["Case Study", "Operations", "Delivery"],
    href: "/case-studies/avanto-operations",
  },
  {
    slug: "togaf-vs-bpmn",
    title: "TOGAF, BPMN, and the Order of Operations",
    description:
      "Why the first question in any transformation is not 'which AI tool' but 'which 3-5 processes deserve the investment'. A short essay on the discipline of doing things in the right order.",
    type: "Essay",
    readTime: "6 min read",
    tags: ["Strategy", "TOGAF", "BPMN"],
  },
];

// ============================================================================
// CORE CAPABILITIES (kept for home page compatibility)
// ============================================================================

export interface CoreCapability {
  slug: string;
  title: string;
  shortDescription: string;
  outcomes: string[];
  icon: LucideIcon;
  href: string;
}

export const coreCapabilities: CoreCapability[] = [
  {
    slug: "operating-foundation",
    title: "Strategy & Architecture",
    shortDescription:
      "Align leadership on the 3-5 processes that actually need to change. TOGAF-aligned, signed by C-level.",
    outcomes: [
      "Architecture Vision signed by leadership",
      "Prioritized list of 3-5 critical processes",
      "1-page executive roadmap",
    ],
    icon: Compass,
    href: "/services/operating-foundation",
  },
  {
    slug: "process-diagnostic",
    title: "Process Mapping & Lean Audit",
    shortDescription:
      "BPMN process maps, Lean audit, prioritized quick wins. The operational diagnosis before any fix.",
    outcomes: [
      "AS-IS and TO-BE process maps in BPMN",
      "Lean audit with bottleneck analysis",
      "30-60-90 day quick wins list",
    ],
    icon: GitBranch,
    href: "/services/process-diagnostic",
  },
  {
    slug: "process-implementation",
    title: "Implementation & KPIs",
    shortDescription:
      "We execute the prioritized wins, deploy KPI dashboards in production, and coach your team to sustain it.",
    outcomes: [
      "Implemented processes in production",
      "Live KPI dashboards",
      "Coached internal team",
    ],
    icon: Wrench,
    href: "/services/process-implementation",
  },
  {
    slug: "ai-accelerator",
    title: "AI Accelerator",
    shortDescription:
      "Apply AI agents to the processes you have already optimized. With governance, eval, and human-in-the-loop built in.",
    outcomes: [
      "1-2 processes automated with AI in production",
      "Governance framework (audit, HITL, eval)",
      "Runbooks for the client team",
    ],
    icon: Sparkles,
    href: "/services/ai-accelerator",
  },
];

// ============================================================================
// LEGACY EXPORTS (kept for back-compat with old pages)
// ============================================================================

export const aiServices = services;
export const softwareServices: ServiceItem[] = [];
export const engagementModels: BundleItem[] = bundles;
export const buyerFaqs: BuyerFaq[] = [
  {
    question: "What do we actually get at the end of the Readiness Assessment?",
    answer:
      "A signed picture of how the operation runs today, the 1-3 processes worth fixing first, a TO-BE design, and a decision memo. You leave knowing whether to implement, automate, or wait — not with another slide deck.",
  },
  {
    question: "How do you pick which process to start with?",
    answer:
      "We start from the constraint the sponsor can feel: the process that is slowing growth, burning margin, or creating escalations. Volume, ownership, data quality, and control matter more than how 'AI-ready' a tool looks.",
  },
  {
    question: "Do we have to go through all four capabilities?",
    answer:
      "No. You pick a way in — usually the Assessment. If you already have the map, we skip that work. We still won't put AI on a process nobody owns.",
  },
  {
    question: "What if we already have strategy and process documentation?",
    answer:
      "We review it. If it is current, owned, and usable, we do not redo the work. If it is a deck that nobody runs, we rebuild the operating layer so the next step has something to implement.",
  },
  {
    question: "When does AI enter the work?",
    answer:
      "After the process is clear: owner, baseline, TO-BE design, and controls. AI is the accelerator, not the starting point. That is how we keep agents from amplifying a broken operation.",
  },
  {
    question: "How do you handle approvals, exceptions, and audit?",
    answer:
      "Every workflow we implement has an owner, an acceptance criterion, an exception path, and a human checkpoint where the risk requires it. Governance is part of the design, not a layer added later.",
  },
  {
    question: "How do you measure whether the operation improved?",
    answer:
      "We baseline the process first: volume, cycle time, errors, cost, and risk. Then we agree what 'better' means before any change goes live. If we cannot measure it, we do not claim it.",
  },
  {
    question: "What does our team need to provide?",
    answer:
      "A sponsor with authority, access to the people who run the process, and the systems or documents that process already uses. We do the mapping, the design, and the facilitation. Your team stays the owner.",
  },
];

export const enterpriseChallenges: string[] = [
  "How documents become decisions",
  "How requests become actions",
  "How teams coordinate across systems",
  "How knowledge becomes reusable capability",
  "How operations scale without proportional cost growth",
  "How AI becomes part of the operating model",
];

// ============================================================================
// HELPERS
// ============================================================================

export const PUBLIC_INDUSTRY_SLUGS = [
  "tech-services-latam",
  "media-entertainment",
  "sports",
  "retail",
] as const;

export const PUBLIC_BUNDLE_SLUGS = [
  "agentic-readiness-sprint",
  "agentic-operations-build",
  "custom-delivery-pod",
] as const;

export function isPublicIndustry(slug: string): boolean {
  return (PUBLIC_INDUSTRY_SLUGS as readonly string[]).includes(slug);
}

export function isPublicBundle(slug: string): boolean {
  return (PUBLIC_BUNDLE_SLUGS as readonly string[]).includes(slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}

export function getBundleBySlug(slug: string): BundleItem | undefined {
  return bundles.find((bundle) => bundle.slug === slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getResourceBySlug(slug: string): ResourceItem | undefined {
  return resources.find((resource) => resource.slug === slug);
}
