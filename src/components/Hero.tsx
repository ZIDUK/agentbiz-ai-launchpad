import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="section pt-32 lg:pt-40 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.92)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-5xl relative z-10">
        <p className="text-sm font-semibold tracking-widest text-primary mb-6 uppercase">
          AI-Native Engineering for the Enterprise
        </p>

        <h1 className="text-display mb-6 text-left lg:text-center">
          Build Production AI Systems{" "}
          <span className="gradient-text">Your Organization Can Own</span>
        </h1>

        <p className="text-lead mb-10 max-w-3xl lg:mx-auto text-left lg:text-center">
          We design, build, and scale AI-native workflows, agents, and enterprise
          applications — with the governance, engineering discipline, and delivery
          rigor C-level teams require.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={scrollToContact} className="btn-primary text-base px-8 py-6">
            Talk to an Engineering Lead
          </Button>
          <Button asChild variant="outline" className="text-base px-8 py-6 border-border bg-background/40">
            <Link to="/resources">Explore Enterprise Resources</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground border-t border-border/50 pt-8">
          <span>Enterprise-grade delivery</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Production AI systems</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Governed implementation</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Software expertise since 2007</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
