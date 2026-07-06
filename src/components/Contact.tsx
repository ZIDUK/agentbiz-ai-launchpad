import { useEffect, useRef } from "react";
import { useTranslation } from "@/i18n/useTranslation";
import ContactForm from "@/components/ContactForm";

const CALENDLY_URL =
  "https://calendly.com/jonapardo92/30min?hide_event_type_details=1&background_color=ffffff&text_color=1a1a1a&primary_color=007bff";

const Contact = () => {
  const { t } = useTranslation();
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
          {t("contact.title")}{" "}
          <span className="gradient-text">{t("contact.titleHighlight")}</span>
        </h2>

        <p className="text-lead mb-12 max-w-3xl">{t("contact.subtitle")}</p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ContactForm />
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">{t("contact.orSchedule")}</p>
            <div
              ref={widgetRef}
              className="rounded-xl border border-border overflow-hidden"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
