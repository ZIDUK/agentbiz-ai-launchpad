import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ServicesMegaMenu } from "@/components/ServicesMegaMenu";
import { aiServices, industries, softwareServices } from "@/data/site-content";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="text-2xl font-bold text-foreground hover:opacity-80 transition-opacity"
          >
            Agent<span className="gradient-text">Biz</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <ServicesMegaMenu />
            <button onClick={() => scrollToSection("workflow")} className="btn-ghost">
              Process
            </button>
            <button onClick={() => scrollToSection("career")} className="btn-ghost">
              Careers
            </button>
            <button onClick={() => scrollToSection("contact")} className="btn-ghost">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-primary hidden sm:inline-flex px-6 py-2"
            >
              Book a Call
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(100vw,380px)] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                      AI SERVICES
                    </p>
                    <ul className="space-y-2">
                      {aiServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                      SOFTWARE
                    </p>
                    <ul className="space-y-2">
                      {softwareServices.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                      INDUSTRIES
                    </p>
                    <ul className="space-y-2">
                      {industries.map((industry) => (
                        <li key={industry.name}>
                          <button
                            className="text-sm text-foreground hover:text-primary"
                            onClick={() => scrollToSection("industries")}
                          >
                            {industry.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <button
                      className="block w-full text-left text-sm font-medium py-2"
                      onClick={() => scrollToSection("workflow")}
                    >
                      Our Process
                    </button>
                    <button
                      className="block w-full text-left text-sm font-medium py-2"
                      onClick={() => scrollToSection("career")}
                    >
                      Careers
                    </button>
                    <button
                      className="block w-full text-left text-sm font-medium py-2"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </button>
                    <Link
                      to="/services"
                      className="block text-sm font-medium text-primary py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      All Services
                    </Link>
                  </div>

                  <Button className="btn-primary w-full" onClick={() => scrollToSection("contact")}>
                    Book a Call
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
