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
          Transformative Custom{" "}
          <span className="gradient-text">
            AI Development
          </span>
        </h1>
        
        <div className="text-xl font-semibold mb-6 text-white">
          2× the Speed & Cost Savings - Guaranteed!
        </div>
        
        <p className="text-lead mb-8 max-w-4xl mx-auto">
          AI-first solutions — agentic AI, integrated systems, and product-grade apps that 
          accelerate digital transformation.
        </p>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8 text-white">
            Trusted by teams shipping <span className="gradient-text">software since 2007</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-white font-semibold">Impact</div>
            <div className="text-white font-semibold">ACT</div>
            <div className="text-white font-semibold">T.Rowe Price</div>
            <div className="text-white font-semibold">EOS</div>
            <div className="text-white font-semibold">Schneider Electric</div>
            <div className="text-white font-semibold">TD Bank</div>
          </div>
        </div>
        
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