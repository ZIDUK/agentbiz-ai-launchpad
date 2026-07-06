import { strategicPillars } from "@/data/site-content";

const StrategicFocus = () => {
  return (
    <section id="strategic-focus" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">
            OUR STRATEGIC FOCUS
          </p>
          <h2 className="text-headline mb-6">
            From AI pilots to{" "}
            <span className="gradient-text">AI-native operating capability</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            The organizations that win the next decade will redesign operations around
            AI as a core capability — not an add-on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {strategicPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="card-hover p-8">
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-bold text-primary/40">{pillar.number}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-title text-foreground">{pillar.title}</h3>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategicFocus;
