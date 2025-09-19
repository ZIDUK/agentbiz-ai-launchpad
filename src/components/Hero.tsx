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
      className="section pt-32 lg:pt-40 text-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container max-w-5xl relative z-10">
        <h1 className="text-display mb-6">
          Transform Your Operations.{" "}
          <span className="gradient-text">
            Maximize ROI with Strategic AI Agents.
          </span>
        </h1>
        
        <p className="text-lead mb-8 max-w-4xl mx-auto">
          We are your strategic partner in AI adoption. We design, build, and deploy custom 
          artificial intelligence agents that automate critical processes, unlock data value, 
          and drive unprecedented operational efficiency.
        </p>
        
        <Button 
          onClick={scrollToContact}
          className="btn-primary text-lg px-10 py-5"
        >
          Book a Free Strategy Call
        </Button>
      </div>
    </section>
  );
};

export default Hero;