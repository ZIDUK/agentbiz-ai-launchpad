import { Target, Layers, Code, ShieldCheck, Rocket } from "lucide-react";

const workflowSteps = [
  {
    icon: Target,
    title: "Discovery Phase",
    description: "Aligning business goals with AI agent capabilities.",
    position: "top"
  },
  {
    icon: Layers,
    title: "Planning & Architecture", 
    description: "Designing a scalable and secure agent architecture.",
    position: "bottom"
  },
  {
    icon: Code,
    title: "AI-Assisted Development",
    description: "Using AI tools to accelerate coding and ensure quality.",
    position: "top"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "AI-powered testing to ensure robust and reliable agents.",
    position: "bottom"
  },
  {
    icon: Rocket,
    title: "Delivery & Support",
    description: "Delivering a robust MVP and providing ongoing optimization.",
    position: "top"
  }
];

const Workflow = () => {
  return (
    <section id="workflow" className="section bg-card">
      <div className="container">
        <h2 className="text-headline text-center mb-16">
          Our AI-Accelerated{" "}
          <span className="gradient-text">Development Workflow</span>
        </h2>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="flex items-center justify-between relative">
            {/* Dotted Line */}
            <div 
              className="absolute top-1/2 left-[10%] right-[10%] h-0.5 -translate-y-1/2"
              style={{
                backgroundImage: `linear-gradient(to right, hsl(var(--secondary)) 33%, transparent 0%)`,
                backgroundSize: '15px 2px',
                backgroundRepeat: 'repeat-x'
              }}
            />
            
            {workflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isTop = step.position === "top";
              
              return (
                <div 
                  key={index} 
                  className={`flex flex-col items-center relative z-10 ${
                    isTop ? "flex-col-reverse" : ""
                  }`}
                >
                  <div className="w-20 h-20 rounded-2xl border-2 border-primary bg-card flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                  
                  <div className="text-center max-w-48">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {workflowSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl border-2 border-primary bg-card flex items-center justify-center flex-shrink-0">
                  <IconComponent size={24} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;