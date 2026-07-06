export interface ExecutivePainPoint {
  id: string;
  title: string;
  symptom: string;
  solution: string;
  category: "delivery" | "governance" | "cost" | "scale";
}

export const executivePainPoints: ExecutivePainPoint[] = [
  {
    id: "pilot-trap",
    title: "The Pilot Trap",
    symptom: "Dozens of AI experiments with no production impact on revenue or operations.",
    solution:
      "Start with one high-value workflow, define production KPIs upfront, and deploy with governance — not another demo.",
    category: "delivery",
  },
  {
    id: "governance-paralysis",
    title: "Governance Paralysis",
    symptom: "Legal and compliance block AI projects because controls were designed after the fact.",
    solution:
      "Embed approvals, audit trails, role-based access, and human-in-the-loop review from day one of architecture.",
    category: "governance",
  },
  {
    id: "integration-debt",
    title: "Integration Nightmares",
    symptom: "AI tools sit outside CRM, ERP, and ITSM — creating more manual work, not less.",
    solution:
      "Design agents as part of your system fabric with API-first integrations and clear escalation paths.",
    category: "delivery",
  },
  {
    id: "shadow-ai",
    title: "Shadow AI Sprawl",
    symptom: "Teams adopt ChatGPT and ungoverned tools, creating IP and data leakage risk.",
    solution:
      "Provide governed enterprise AI workflows with approved models, data boundaries, and monitoring.",
    category: "governance",
  },
  {
    id: "roi-invisibility",
    title: "ROI Invisibility",
    symptom: "Leadership cannot tie AI spend to operational metrics the board understands.",
    solution:
      "Define baseline KPIs per workflow — cycle time, cost per transaction, error rate — before build starts.",
    category: "cost",
  },
  {
    id: "talent-bottleneck",
    title: "Talent Bottleneck",
    symptom: "Hiring cycles slow delivery while competitors ship governed AI systems faster.",
    solution:
      "Embed AI-native delivery units with senior engineering leadership and knowledge transfer built in.",
    category: "scale",
  },
  {
    id: "vendor-lockin",
    title: "Vendor Lock-In",
    symptom: "SaaS AI features trap you in per-seat pricing with no code or model ownership.",
    solution:
      "Build custom systems your organization owns — code, integrations, and operational playbooks included.",
    category: "cost",
  },
  {
    id: "legacy-drag",
    title: "Legacy System Drag",
    symptom: "Critical workflows still depend on email, PDFs, and spreadsheets between systems.",
    solution:
      "Target document-to-decision workflows first — highest ROI with clear automation boundaries.",
    category: "delivery",
  },
  {
    id: "change-resistance",
    title: "Change Resistance",
    symptom: "Operations teams distrust AI because it was imposed without workflow redesign.",
    solution:
      "Co-design future-state processes with operators; AI handles volume, humans retain judgment calls.",
    category: "scale",
  },
  {
    id: "cost-unpredictability",
    title: "Cost Unpredictability",
    symptom: "LLM and cloud costs spike without visibility or guardrails.",
    solution:
      "Implement usage monitoring, model routing, and cost controls as part of production architecture.",
    category: "cost",
  },
];
