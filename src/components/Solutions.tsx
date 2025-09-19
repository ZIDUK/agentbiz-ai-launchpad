import { Star, Settings, Plug, Rocket, Shield, Microscope } from "lucide-react";

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
    title: "Custom Agent Solutions", 
    items: [
      "Custom model creation (Generative AI, LLMs).",
      "AI-powered automation tools to optimize workflows.",
      "End-to-end agent development and deployment."
    ]
  },
  {
    icon: Plug,
    title: "AI Integration Services",
    items: [
      "Seamlessly integrate AI into existing IT infrastructure.",
      "Connect AI with CRM, ERP, and other business tools.",
      "Cloud integration (AWS, Google Cloud)."
    ]
  },
  {
    icon: Rocket,
    title: "Agent-Powered Products",
    items: [
      "Build AI-first digital products for competitive advantage.",
      "Implement agent-powered features in SaaS.",
      "Personalization and intelligent virtual assistants."
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
  }
];

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
      </div>
    </section>
  );
};

export default Solutions;