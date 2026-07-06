import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

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
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container max-w-5xl relative z-10">
        <p className="text-sm font-semibold tracking-widest text-primary mb-6 uppercase">
          {t("hero.eyebrow")}
        </p>

        <h1 className="text-display mb-6 text-left lg:text-center">
          {t("hero.title")}{" "}
          <span className="gradient-text">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="text-lead mb-10 max-w-3xl lg:mx-auto text-left lg:text-center">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={scrollToContact} className="btn-primary text-base px-8 py-6">
            {t("hero.ctaPrimary")}
          </Button>
          <Button asChild variant="outline" className="text-base px-8 py-6 border-border bg-background/40">
            <Link to="/ai-roi-calculator">{t("hero.ctaSecondary")}</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground border-t border-border/50 pt-8">
          <span>{t("hero.trust1")}</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>{t("hero.trust2")}</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>{t("hero.trust3")}</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>{t("hero.trust4")}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
