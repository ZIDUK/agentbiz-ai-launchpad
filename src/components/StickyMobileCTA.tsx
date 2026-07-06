import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg p-3 md:hidden">
      <div className="flex gap-2">
        <Button onClick={scrollToContact} className="btn-primary flex-1">
          Book a Call
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link to="/resources">Resources</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
