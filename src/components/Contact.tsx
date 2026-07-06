import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/jonapardo92/30min?hide_event_type_details=1&background_color=000000&text_color=ffffff&primary_color=007bff";

const Contact = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCalendly = () => {
      if (widgetRef.current && window.Calendly) {
        widgetRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      script.remove();
      link.remove();
    };
  }, []);

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-headline mb-6">
          Schedule Your <span className="gradient-text">AI Strategy Call</span>
        </h2>

        <p className="text-lead mb-12">
          Discover how our AI and software solutions can transform your business.
          Select a time that works best for you.
        </p>

        <div
          ref={widgetRef}
          style={{ minWidth: "320px", height: "700px", marginTop: "40px" }}
        />
      </div>
    </section>
  );
};

export default Contact;
