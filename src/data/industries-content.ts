import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Film,
  Layers,
  LineChart,
  Shield,
  Wallet,
  Zap,
} from "lucide-react";

export interface IndustryDetail {
  slug: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  painPoints?: string[];
  whyWe?: string;
  credential?: string;
  useCases?: { title: string; description: string }[];
  challenges?: string[];
  metrics?: { label: string; value: string }[];
  services: string[];
  buyer?: string;
  /** Workflows this vertical typically needs to fix */
  workflows?: string[];
  /** Optional case study slug if one exists */
  caseStudySlug?: string;
}

export const industryDetails: IndustryDetail[] = [
  // =========================================================================
  // NEW INDUSTRIES (3) — verticals with real track record
  // =========================================================================
  {
    slug: "media-entertainment",
    name: "Media",
    icon: Film,
    headline:
      "If you make content, the operation behind it is the business.",
    description:
      "Deadlines don't wait for a clean process. Vendors, regions, last-minute scope — if you produce content at scale, the operation behind the cut is what actually ships.",
    painPoints: [
      "Content production at scale with critical time-to-market pressure",
      "Vendor management and distributed team coordination",
      "Multi-country, multi-language operations",
      "Scaling without quality loss",
    ],
    whyWe:
      "We have lived this problem from the inside: 5+ years managing content production at scale, coordinating multi-region vendor networks, and shipping on creative-driven deadlines. We speak the language of production, scope changes, and vendor SLAs.",
    credential:
      "Disney: portfolio of USD 50M+, 10% portfolio growth, USD 15M+ direct account.",
    services: [
      "Operating Foundation",
      "Process Implementation",
    ],
    buyer: "COO, VP Production, Head of Operations, Director of Post-Production",
  },
  {
    slug: "tech-services-latam",
    name: "Technology",
    icon: Cpu,
    headline: "If you sell technology or services, the delivery model is the product.",
    description:
      "You've felt it: margin pressure, clients asking if AI can do the work, quality slipping as you scale. If you run a technology or services operation, the delivery model is the product.",
    painPoints: [
      "Margin compression (nearshore rates declining, AI reshaping delivery)",
      "AI disruption (clients asking 'can you do this with AI?')",
      "Scaling delivery without losing quality",
      "Differentiation against commodity LATAM shops",
    ],
    whyWe:
      "We have spent our career inside this industry: 5+ years at Globant managing the Disney account, currently Director of Operations at Avanto. We know the delivery model from the inside — utilization, margin, CSAT, escalations. We speak revenue and delivery, not just operations.",
    credential:
      "Globant: 5 years, USD 50M+ portfolio. Avanto: currently operating 6 simultaneous delivery programs.",
    caseStudySlug: "avanto-operations",
    services: [
      "Operating Foundation",
      "Process Diagnostic",
      "AI Accelerator",
    ],
    buyer: "COO, VP Operations, Director of Delivery, CEO of services firm",
  },
  {
    slug: "financial-services-latam",
    name: "Financial Services in LATAM",
    icon: Wallet,
    headline:
      "Process transformation for regulated financial environments",
    description:
      "We help financial services organizations in LATAM modernize customer onboarding, KYC, and compliance workflows under evolving regulation. We bring the operational discipline that survives audit, not the slide deck that does not.",
    painPoints: [
      "Constantly changing regulation (local financial regulators)",
      "Customer onboarding and KYC at scale",
      "Legacy systems that do not scale",
      "Compliance and audit trail requirements",
    ],
    whyWe:
      "We have partial exposure through client work in the financial services sector. We are building deeper vertical expertise and will only publish case studies when we have one we can defend with numbers.",
    credential:
      "Partial exposure via client engagements. Phase 2: deep vertical expertise with public case study.",
    services: [
      "Process Diagnostic",
      "Process Implementation",
    ],
    buyer: "COO, Head of Operations, Compliance Officer",
  },

  // =========================================================================
  // LEGACY INDUSTRIES (5) — kept for back-compat with old URLs
  // =========================================================================
  {
    slug: "fintech",
    name: "FinTech & Financial Services",
    icon: LineChart,
    headline: "AI-native operations for regulated financial environments",
    description:
      "We help financial services organizations automate document-heavy workflows, accelerate compliance processes, and deploy governed AI agents inside existing risk and audit frameworks.",
    challenges: [
      "Manual review of loan packages, KYC documents, and compliance filings",
      "Disconnected data across core banking, CRM, and risk systems",
      "Pressure to reduce operational cost without increasing audit exposure",
      "Pilot AI tools that never reach production due to governance gaps",
    ],
    painPoints: [
      "Manual review of loan packages, KYC documents, and compliance filings",
      "Disconnected data across core banking, CRM, and risk systems",
      "Pressure to reduce operational cost without increasing audit exposure",
      "Pilot AI tools that never reach production due to governance gaps",
    ],
    whyWe:
      "We bring an operations-first transformation method that starts with process clarity, controls, and measurable workflows before automation.",
    credential:
      "Legacy industry page retained for existing URLs; new public focus is Tech Services/BPO and Media until more financial services proof is publishable.",
    useCases: [
      {
        title: "Document intelligence for underwriting",
        description:
          "Extract, classify, and route financial documents with human approval gates for exceptions.",
      },
      {
        title: "Fraud and anomaly detection workflows",
        description:
          "Agent-assisted triage of alerts with explainable recommendations for analysts.",
      },
      {
        title: "Regulatory reporting automation",
        description:
          "Structured data collection from multiple systems with audit-ready logs.",
      },
    ],
    metrics: [
      { label: "Cycle time reduction", value: "35–50%" },
      { label: "Manual review load", value: "↓ 40%" },
      { label: "Audit traceability", value: "100%" },
    ],
    services: [
      "Fraud detection & risk analysis",
      "AI-driven financial automation",
      "Compliance workflow orchestration",
    ],
    buyer: "COO, Head of Operations, Compliance Officer",
  },
  {
    slug: "healthcare",
    name: "Healthcare & MedTech",
    icon: Shield,
    headline: "Governed AI for clinical and administrative operations",
    description:
      "From prior authorization to claims documentation, we build HIPAA-aware AI workflows that reduce administrative burden while keeping clinicians and compliance teams in control.",
    challenges: [
      "High-volume intake and authorization paperwork",
      "Clinical and administrative teams working in disconnected systems",
      "Strict privacy, consent, and audit requirements",
      "AI experiments that stall at compliance review",
    ],
    painPoints: [
      "High-volume intake and authorization paperwork",
      "Clinical and administrative teams working in disconnected systems",
      "Strict privacy, consent, and audit requirements",
      "AI experiments that stall at compliance review",
    ],
    whyWe:
      "We design governed workflows with clear ownership, exception handling, and human review before any AI automation goes live.",
    credential:
      "Legacy industry page retained for existing URLs; publishable healthcare proof should be added before making this a primary vertical.",
    useCases: [
      {
        title: "Prior authorization support",
        description:
          "Agents gather required documentation, flag missing data, and route cases for clinician review.",
      },
      {
        title: "Claims and coding assistance",
        description:
          "Structured extraction from clinical notes with exception escalation to human coders.",
      },
      {
        title: "Patient intake orchestration",
        description:
          "Automated intake workflows integrated with EHR scheduling and CRM systems.",
      },
    ],
    metrics: [
      { label: "Admin hours saved", value: "30–45%" },
      { label: "Authorization turnaround", value: "↓ 38%" },
      { label: "Human oversight", value: "Built-in" },
    ],
    services: [
      "Administrative workflow automation",
      "Medical document processing",
      "HIPAA-aware agent deployment",
    ],
    buyer: "COO, VP Clinical Operations, Compliance Officer",
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: Layers,
    headline: "Intelligent operations for high-volume supply chain execution",
    description:
      "We modernize order-to-cash and plan-to-deliver workflows with AI agents that coordinate across ERP, WMS, TMS, and customer communication channels.",
    challenges: [
      "Exception-heavy order and shipment processing",
      "Forecasting and inventory decisions spread across spreadsheets",
      "Carrier, warehouse, and customer data in silos",
      "Operational teams buried in status updates and manual coordination",
    ],
    painPoints: [
      "Exception-heavy order and shipment processing",
      "Forecasting and inventory decisions spread across spreadsheets",
      "Carrier, warehouse, and customer data in silos",
      "Operational teams buried in status updates and manual coordination",
    ],
    whyWe:
      "We apply process mapping, KPI governance, and system integration discipline to reduce manual coordination across operational teams.",
    credential:
      "Legacy industry page retained for existing URLs; logistics should stay secondary until backed by a current case study.",
    useCases: [
      {
        title: "Order exception management",
        description:
          "Agents detect delays, propose resolutions, and escalate when SLA risk is detected.",
      },
      {
        title: "Demand and inventory signals",
        description:
          "AI-assisted forecasting layered with human planner approval workflows.",
      },
      {
        title: "Document-to-shipment workflows",
        description:
          "Automate BOL, invoice, and customs document processing with validation rules.",
      },
    ],
    metrics: [
      { label: "Exception resolution time", value: "↓ 42%" },
      { label: "Manual coordination", value: "↓ 50%" },
      { label: "On-time delivery", value: "+12%" },
    ],
    services: [
      "Route and dispatch optimization",
      "Demand forecasting",
      "ERP/TMS integration agents",
    ],
    buyer: "COO, VP Supply Chain, Director of Operations",
  },
  {
    slug: "saas-hitech",
    name: "SaaS & HiTech",
    icon: Cpu,
    headline: "Embed AI into products and internal operations at scale",
    description:
      "For technology companies, we build copilots, agent workflows, and platform integrations that ship to production with observability, security, and clear ownership.",
    challenges: [
      "Pressure to add AI features without destabilizing core product",
      "Internal ops (support, RevOps, engineering) scaling linearly with headcount",
      "Fragmented toolchain across CRM, product analytics, and support platforms",
      "Difficulty moving from demo agents to governed production systems",
    ],
    painPoints: [
      "Pressure to add AI features without destabilizing core product",
      "Internal ops (support, RevOps, engineering) scaling linearly with headcount",
      "Fragmented toolchain across CRM, product analytics, and support platforms",
      "Difficulty moving from demo agents to governed production systems",
    ],
    whyWe:
      "We know technology delivery operations from the inside and combine delivery governance with practical AI automation patterns.",
    credential:
      "Primary current vertical: Tech Services/BPO in LATAM, supported by Globant, Disney, and Avanto operating experience.",
    useCases: [
      {
        title: "Customer support copilots",
        description:
          "Agents triage tickets, draft responses, and pull context from knowledge bases with human review.",
      },
      {
        title: "Product-embedded AI features",
        description:
          "Custom LLM integrations with guardrails, monitoring, and tenant-aware data boundaries.",
      },
      {
        title: "RevOps and sales enablement agents",
        description:
          "Automate CRM hygiene, meeting prep, and pipeline risk signals for revenue teams.",
      },
    ],
    metrics: [
      { label: "Support handle time", value: "↓ 33%" },
      { label: "Feature time-to-market", value: "2× faster" },
      { label: "Code & IP ownership", value: "100% client" },
    ],
    services: [
      "AI copilots and integrations",
      "Product-grade platform engineering",
      "MLOps and agent observability",
    ],
    buyer: "VP Engineering, Head of Product, CTO",
  },
  {
    slug: "energy",
    name: "Energy, Oil & Gas",
    icon: Zap,
    headline: "AI for asset-intensive and document-heavy field operations",
    description:
      "We help energy organizations modernize maintenance workflows, technical document intelligence, and field-to-back-office coordination with production-grade AI systems.",
    challenges: [
      "Technical documentation scattered across legacy systems",
      "Work order and inspection workflows with manual handoffs",
      "OT/IT integration complexity and safety requirements",
      "Field operations dependent on email and spreadsheet coordination",
    ],
    painPoints: [
      "Technical documentation scattered across legacy systems",
      "Work order and inspection workflows with manual handoffs",
      "OT/IT integration complexity and safety requirements",
      "Field operations dependent on email and spreadsheet coordination",
    ],
    whyWe:
      "We start with workflow governance and operational visibility so automation can support field teams without hiding accountability.",
    credential:
      "Legacy industry page retained for existing URLs; energy should stay secondary until backed by a current case study.",
    useCases: [
      {
        title: "Technical document intelligence",
        description:
          "Search, summarize, and extract requirements from engineering and maintenance documentation.",
      },
      {
        title: "Work order orchestration",
        description:
          "Agents route inspections, parts requests, and technician assignments with escalation rules.",
      },
      {
        title: "Maintenance planning support",
        description:
          "AI-assisted scheduling recommendations based on asset history and operational constraints.",
      },
    ],
    metrics: [
      { label: "Work order cycle time", value: "↓ 28%" },
      { label: "Document search time", value: "↓ 60%" },
      { label: "Field coordination", value: "↑ 35%" },
    ],
    services: [
      "Maintenance workflow automation",
      "Technical document AI",
      "OT/IT integration patterns",
    ],
    buyer: "VP Operations, Director of Maintenance, Head of Field Ops",
  },
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industryDetails.find((industry) => industry.slug === slug);
}
