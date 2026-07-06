import type { LucideIcon } from "lucide-react";
import { Cpu, Layers, LineChart, Shield, Zap } from "lucide-react";

export interface IndustryDetail {
  slug: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  challenges: string[];
  useCases: { title: string; description: string }[];
  metrics: { label: string; value: string }[];
  services: string[];
}

export const industryDetails: IndustryDetail[] = [
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
  },
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return industryDetails.find((industry) => industry.slug === slug);
}
