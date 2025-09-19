import { Star, Settings, Plug, Rocket, Shield, Microscope, Brain, BarChart, Users, Cpu, Database, TrendingUp, Lightbulb, Zap, Bot, Target, Cog } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consultation",
    items: [
      "Develop a custom AI roadmap aligned with business goals",
      "Identify high-impact AI opportunities to drive innovation",
      "Generative AI, neural networks, and automation for content creation",
      "AI consulting services and business process assessment"
    ]
  },
  {
    icon: Cog,
    title: "Custom AI Solutions",
    items: [
      "AI model creation and development (ML, NLP, Computer Vision)",
      "Generative AI and Large Language Models (LLMs)",
      "AI solution design, implementation, and deployment",
      "Custom solutions tailored to business challenges"
    ]
  },
  {
    icon: Zap,
    title: "AI Digital Transformation",
    items: [
      "Modernize workflows with AI-powered automation",
      "AI-driven decision-making with machine learning insights",
      "Inventory management and workflow optimization",
      "Business performance improvement through AI"
    ]
  },
  {
    icon: Bot,
    title: "AI Integration Services",
    items: [
      "Seamlessly integrate AI into existing IT ecosystems",
      "Connect AI with CRM, ERP, Service Cloud systems",
      "Business Intelligence tools using scalable AI platform",
      "Legacy system modernization with AI capabilities"
    ]
  },
  {
    icon: Target,
    title: "AI Maintenance & Support",
    items: [
      "Continuous monitoring, updates, and optimization",
      "Ensure AI solutions remain secure and compliant",
      "Customer service process optimization through automation",
      "Ongoing support for evolving business needs"
    ]
  },
  {
    icon: BarChart,
    title: "Data Science & Analytics",
    items: [
      "Leverage big data and predictive analytics",
      "Generative AI and sentiment analysis",
      "AI-driven business intelligence for strategic decisions",
      "Data-driven decisions and future outcome predictions"
    ]
  },
  {
    icon: Brain,
    title: "AI-Powered Product Development",
    items: [
      "Build AI-first digital products for competitive advantage",
      "Image recognition and intelligent decision-making",
      "Conversational AI and virtual assistants",
      "AI-powered automation and personalization in SaaS/mobile apps"
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
        <h2 className="text-headline text-center mb-6">
          Artificial Intelligence <span className="gradient-text">Services and Solutions</span> for Business Growth
        </h2>
        
        <p className="text-lead mb-8 max-w-4xl mx-auto text-center">
          Koombea AI delivers custom AI solutions that empower businesses to innovate, automate, and scale efficiently.
        </p>
        
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Transform Your Business with <span className="gradient-text">Artificial Intelligence</span></h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The AI revolution is here—businesses that leverage AI services gain a competitive advantage, streamlining workflows, 
            improving productivity, and enhancing decision-making. AI solutions help organizations harness AI for predictive 
            analytics and AI-powered automation to stay ahead.
          </p>
          <div className="mt-6 text-sm font-semibold text-primary">
            <span className="bg-primary/10 px-4 py-2 rounded-full">17+ Years of Software & AI Expertise</span>
          </div>
        </div>
        
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