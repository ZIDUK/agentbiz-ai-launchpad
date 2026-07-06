import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Brain,
  Code2,
  Cpu,
  GitBranch,
  Layers,
  LineChart,
  Monitor,
  Plug,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  category: "ai" | "software" | "engagement";
}

export interface EngagementModel {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface Industry {
  name: string;
  services: string[];
  icon: LucideIcon;
}

export const aiServices: ServiceItem[] = [
  {
    slug: "ai-code-review",
    title: "AI Code Review",
    shortDescription: "Automated quality gates that catch bugs, security issues, and style drift before merge.",
    description:
      "AgentBiz combines static analysis with AI-assisted review to accelerate delivery without sacrificing quality. We integrate review workflows into your CI/CD pipeline so every pull request gets consistent, actionable feedback.",
    highlights: [
      "Automated security and performance scanning",
      "Consistent coding standards across teams",
      "Faster review cycles with human-in-the-loop",
      "Integration with GitHub, GitLab, and Bitbucket",
    ],
    icon: Search,
    category: "ai",
  },
  {
    slug: "ai-assisted-software-development",
    title: "AI-Assisted Software Development",
    shortDescription: "Ship faster with AI copilots orchestrated by senior engineers who own the outcome.",
    description:
      "We use AI-assisted development to reduce repetitive work while keeping architecture, security, and maintainability under expert control. The result: 2× velocity on the right workstreams without cutting corners.",
    highlights: [
      "AI copilots for implementation and refactoring",
      "Senior-led architecture and code ownership",
      "Accelerated testing and documentation",
      "Predictable delivery with Agile practices",
    ],
    icon: Code2,
    category: "ai",
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    shortDescription: "Embed AI into CRM, ERP, cloud platforms, and internal tools without disrupting operations.",
    description:
      "We connect LLMs, agents, and ML models to the systems your teams already use. From Salesforce and HubSpot to AWS and Azure, we design integrations that are secure, observable, and ready to scale.",
    highlights: [
      "CRM, ERP, and Service Cloud integrations",
      "API-first design for existing products",
      "Cloud-native deployment on AWS, GCP, Azure",
      "Monitoring, logging, and cost controls",
    ],
    icon: Plug,
    category: "ai",
  },
  {
    slug: "agentic-ai-development",
    title: "Agentic AI Development",
    shortDescription: "Multi-agent systems that automate complex workflows across support, ops, and engineering.",
    description:
      "We design autonomous agent networks that collaborate on multi-step tasks — from customer support triage to DevOps optimization. Built for enterprises that need real automation, not another chatbot.",
    highlights: [
      "Customer support and ops automation agents",
      "Data research and analysis orchestration",
      "QA and testing agents for faster release cycles",
      "Secure integration with your knowledge base",
    ],
    icon: Bot,
    category: "ai",
  },
  {
    slug: "custom-ai-development",
    title: "Custom AI Development",
    shortDescription: "Proprietary models and AI products tailored to your data, domain, and compliance needs.",
    description:
      "From NLP and computer vision to generative AI and LLM fine-tuning, we build custom solutions aligned with your business goals — not off-the-shelf tools forced into the wrong shape.",
    highlights: [
      "ML, NLP, computer vision, and generative AI",
      "Custom model training and fine-tuning",
      "Enterprise-grade security and compliance",
      "End-to-end design, build, and deployment",
    ],
    icon: Brain,
    category: "ai",
  },
  {
    slug: "ai-mvp-development",
    title: "AI MVP Development",
    shortDescription: "Validate AI product ideas with real users before committing to full-scale build.",
    description:
      "We help startups and innovation teams launch AI MVPs that test both product-market fit and model performance. Focus on essential features, quality data, and measurable learning loops.",
    highlights: [
      "Rapid prototyping with pre-trained and custom models",
      "User testing for UX and model accuracy",
      "Investor-ready demos and traction metrics",
      "Clear roadmap from MVP to production scale",
    ],
    icon: Rocket,
    category: "ai",
  },
  {
    slug: "ai-application-development",
    title: "AI Application Development",
    shortDescription: "Production-grade AI apps — web, mobile, and SaaS — built for scale and reliability.",
    description:
      "We deliver AI-first applications with conversational interfaces, personalization, and intelligent automation baked in from day one. Product-grade engineering for teams that need results, not experiments.",
    highlights: [
      "Web and mobile AI-powered applications",
      "Conversational AI and virtual assistants",
      "Personalization and recommendation engines",
      "Scalable cloud architecture and DevOps",
    ],
    icon: Sparkles,
    category: "ai",
  },
];

export const softwareServices: ServiceItem[] = [
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform apps for iOS, Android, and enterprise mobility.",
    description:
      "We build mobile experiences that perform — from consumer apps to enterprise field tools. iOS, Android, Flutter, and React Native with a focus on UX, security, and maintainability.",
    highlights: [
      "iOS and Android native development",
      "Cross-platform with Flutter and React Native",
      "Enterprise mobile and offline-first apps",
      "App Store launch and ongoing support",
    ],
    icon: Smartphone,
    category: "software",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Modern web apps, SaaS platforms, and high-performance marketing sites.",
    description:
      "From marketing sites to complex SaaS dashboards, we use React, Next.js, and proven cloud stacks to deliver fast, accessible, and SEO-friendly web products.",
    highlights: [
      "Web apps and SaaS platforms",
      "PWA and progressive enhancement",
      "Shopify and eCommerce solutions",
      "UX/UI design and redesign",
    ],
    icon: Monitor,
    category: "software",
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    shortDescription: "Manual and automated testing to ship with confidence.",
    description:
      "Our QA practice combines test automation, AI-assisted test design, and rigorous manual exploration so releases are stable, secure, and ready for production traffic.",
    highlights: [
      "Test automation and CI integration",
      "Performance and security testing",
      "AI-assisted test case design",
      "Regression and release management",
    ],
    icon: Shield,
    category: "software",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Modernize legacy systems and workflows with a pragmatic roadmap.",
    description:
      "We help organizations move from legacy constraints to cloud-native, API-driven architectures — with change management and delivery plans that minimize risk.",
    highlights: [
      "Legacy modernization and cloud migration",
      "Process automation and workflow design",
      "Data platform and analytics foundations",
      "Phased rollout with measurable KPIs",
    ],
    icon: Layers,
    category: "software",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Project Based Development",
    description: "Software solutions tailored to your specific business requirements.",
    icon: Rocket,
    href: "/#engagement",
  },
  {
    title: "Managed Services Program",
    description: "Monitoring and support to optimize your technology stack.",
    icon: Wrench,
    href: "/#engagement",
  },
  {
    title: "Staff Augmentation",
    description: "Skilled professionals integrated into your team to extend capacity.",
    icon: Users,
    href: "/#engagement",
  },
  {
    title: "Software Maintenance",
    description: "Reliable support for your digital solution's longevity.",
    icon: GitBranch,
    href: "/#engagement",
  },
  {
    title: "Rescue Project",
    description: "Turn around failing projects and restore delivery momentum.",
    icon: Zap,
    href: "/#engagement",
  },
];

export const industries: Industry[] = [
  {
    name: "FinTech",
    services: ["Fraud detection & risk analysis", "AI-driven financial automation", "Compliance and reporting automation"],
    icon: LineChart,
  },
  {
    name: "Healthcare & MedTech",
    services: ["AI-powered diagnostics", "Medical image processing", "Patient outcome predictions"],
    icon: Shield,
  },
  {
    name: "Retail & eCommerce",
    services: ["Personalization engines", "Inventory optimization", "Customer behavior analytics"],
    icon: Users,
  },
  {
    name: "SaaS & HiTech",
    services: ["AI copilots and integrations", "Product-grade platform engineering", "Scalable cloud architecture"],
    icon: Cpu,
  },
  {
    name: "Logistics & Supply Chain",
    services: ["Route optimization", "Demand forecasting", "Intelligent automation workflows"],
    icon: Layers,
  },
  {
    name: "EdTech",
    services: ["Adaptive learning platforms", "Content personalization", "Learning analytics"],
    icon: Brain,
  },
];

export const allServices = [...aiServices, ...softwareServices];

export interface StrategicPillar {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CoreCapability {
  slug: string;
  title: string;
  shortDescription: string;
  outcomes: string[];
  icon: LucideIcon;
  href: string;
}

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  type: string;
  readTime: string;
  tags: string[];
}

export const enterpriseChallenges: string[] = [
  "How documents become decisions",
  "How requests become actions",
  "How teams coordinate across systems",
  "How knowledge becomes reusable capability",
  "How operations scale without proportional cost growth",
  "How AI becomes part of the operating model",
];

export const strategicPillars: StrategicPillar[] = [
  {
    number: "01",
    title: "Operational Redesign",
    description:
      "We map current-state workflows, identify friction, and design future-state processes where humans, AI agents, data, and systems work together.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Production AI Implementation",
    description:
      "We build AI-enabled workflows integrated with the systems, data, permissions, and controls required for real business use.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Governance & Control",
    description:
      "Traceability, approvals, role-based access, escalation paths, quality review, audit trails, and human oversight — designed in from day one.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Enterprise Scale",
    description:
      "Reusable patterns, delivery standards, and operating models that allow AI transformation to expand beyond a single workflow.",
    icon: Rocket,
  },
];

export const coreCapabilities: CoreCapability[] = [
  {
    slug: "ai-operations-engineering",
    title: "AI Operations Engineering",
    shortDescription:
      "Design and deploy agentic workflows, integrations, and custom AI systems inside your real operating environment.",
    outcomes: [
      "Production-ready agent workflows",
      "CRM, ERP, and cloud integrations",
      "Measurable cycle-time reduction",
      "Governed human-in-the-loop controls",
    ],
    icon: Bot,
    href: "/services/agentic-ai-development",
  },
  {
    slug: "ai-accelerated-delivery",
    title: "AI-Accelerated Delivery",
    shortDescription:
      "Senior-led engineering teams using AI-assisted development to ship faster without sacrificing architecture or quality.",
    outcomes: [
      "AI-assisted build and review",
      "Predictable Agile delivery",
      "Reduced manual engineering load",
      "Architecture your team can own",
    ],
    icon: Code2,
    href: "/services/ai-assisted-software-development",
  },
  {
    slug: "enterprise-ai-applications",
    title: "Enterprise AI Applications",
    shortDescription:
      "Build AI-first applications — agents, copilots, and decision systems — designed for security, scale, and maintainability.",
    outcomes: [
      "Custom AI applications",
      "Conversational and agent interfaces",
      "Cloud-native deployment",
      "Full code and IP ownership",
    ],
    icon: Sparkles,
    href: "/services/ai-application-development",
  },
  {
    slug: "engagement-models",
    title: "Engagement Models",
    shortDescription:
      "Flexible partnership models — project-based, staff augmentation, managed services, and rescue delivery — aligned to enterprise needs.",
    outcomes: [
      "Project-based development",
      "Staff augmentation",
      "Managed services",
      "Rescue and modernization",
    ],
    icon: Users,
    href: "/#engagement",
  },
];

export const workflowPhases = [
  {
    icon: Target,
    title: "Identify",
    description: "Assess processes, data flows, manual dependencies, and opportunities for measurable impact.",
  },
  {
    icon: Layers,
    title: "Redesign",
    description: "Define the AI-native future state — what AI does, what humans control, and how value is measured.",
  },
  {
    icon: Code2,
    title: "Implement",
    description: "Build and deploy production workflows, agents, integrations, and controls in your environment.",
  },
  {
    icon: Rocket,
    title: "Scale",
    description: "Establish reusable components and delivery standards to expand AI-native operations across functions.",
  },
];

export const resources: ResourceItem[] = [
  {
    slug: "enterprise-ai-roadmap",
    title: "Enterprise AI Implementation Roadmap",
    description:
      "A practical guide for enterprise leaders moving from AI pilots to production capability — with phases, governance checkpoints, and delivery milestones.",
    type: "Guide",
    readTime: "15 min read",
    tags: ["Strategy", "Roadmap", "Enterprise"],
  },
];

export function getResourceBySlug(slug: string): ResourceItem | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((service) => service.slug === slug);
}
