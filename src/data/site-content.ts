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

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((service) => service.slug === slug);
}
