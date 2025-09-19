import { Star, Settings, Plug, Rocket, Shield, Microscope, Brain, BarChart, Users, Cpu, Database, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Star,
    title: "AI Strategy & Consultation",
    items: [
      "Develop a custom AI roadmap aligned with business goals.",
      "Identify high-impact AI opportunities to drive business.",
      "AI solution design, implementation, and deployment."
    ]
  },
  {
    icon: Settings,
    title: "Custom AI Solutions", 
    items: [
      "Custom model creation (Generative AI, LLMs, Computer Vision).",
      "AI-powered automation tools to optimize workflows.",
      "End-to-end agent development and deployment."
    ]
  },
  {
    icon: Brain,
    title: "AI Digital Transformation",
    items: [
      "Modernize workflows with AI-powered automation.",
      "Enable AI-driven decision-making with machine learning insights.",
      "Transform traditional processes into intelligent systems."
    ]
  },
  {
    icon: Plug,
    title: "AI Integration Services",
    items: [
      "Seamlessly integrate AI into existing IT infrastructure.",
      "Connect AI with CRM, ERP, and other business tools.",
      "Cloud integration (AWS, Google Cloud, Azure)."
    ]
  },
  {
    icon: Rocket,
    title: "AI-Powered Product Development",
    items: [
      "Build AI-first digital products for competitive advantage.",
      "Implement conversational AI and virtual assistants.",
      "Personalization and intelligent automation in SaaS."
    ]
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    items: [
      "Leverage big data and predictive analytics for strategic decisions.",
      "Sentiment analysis and AI-driven business intelligence.",
      "Custom dashboards with real-time insights and KPIs."
    ]
  },
  {
    icon: Shield,
    title: "AI Maintenance & Support",
    items: [
      "Continuous monitoring, updates, and optimization.",
      "Ensure AI solutions remain secure and compliant.",
      "Ongoing support to keep AI models adaptable."
    ]
  },
  {
    icon: Microscope,
    title: "AI Agent Audit & Fix",
    items: [
      "Expert review of your existing AI agents.",
      "Identify performance, security, and cost issues.",
      "Provide a roadmap for immediate improvements."
    ]
  },
  {
    icon: Cpu,
    title: "Industry-Specific AI Solutions",
    items: [
      "Finance: Fraud detection, risk analysis, automated trading.",
      "Healthcare: AI diagnostics, medical image processing.",
      "Retail: Personalization, inventory optimization, demand forecasting."
    ]
  }
];

const Industries = () => {
  const industries = [
    {
      icon: TrendingUp,
      name: "Finance & FinTech",
      services: ["Fraud detection & risk analysis", "AI-driven financial automation", "Personalized customer service chatbots"]
    },
    {
      icon: Users,
      name: "Retail & eCommerce", 
      services: ["Personalization engines", "Inventory optimization", "Customer behavior analytics"]
    },
    {
      icon: Shield,
      name: "Healthcare & MedTech",
      services: ["AI-powered diagnostics", "Medical image processing", "Patient outcome predictions"]
    },
    {
      icon: BarChart,
      name: "Logistics & Supply Chain",
      services: ["Route optimization", "Demand forecasting", "Intelligent automation workflows"]
    }
  ];

  return (
    <div className="mt-20 pt-16 border-t border-border">
      <h3 className="text-2xl font-bold text-center text-foreground mb-12">
        Industries We <span className="gradient-text">Transform</span>
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconComponent className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-foreground mb-3">{industry.name}</h4>
              <ul className="space-y-2">
                {industry.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-sm text-secondary leading-relaxed">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <h2 className="text-headline text-center mb-16">
          Our AI Services and <span className="gradient-text">Solutions</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="card-hover p-8">
                <div className="text-primary mb-6">
                  <IconComponent size={48} />
                </div>
                
                <h3 className="text-title mb-4 text-foreground">
                  {solution.title}
                </h3>
                
                <ul className="space-y-3">
                  {solution.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-secondary">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <Industries />
      </div>
    </section>
  );
};

export default Solutions;