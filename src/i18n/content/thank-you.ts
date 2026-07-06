import type { Locale } from "@/i18n/types";

export type ThankYouType = "contact" | "resource" | "roi" | "careers";

export interface ThankYouContent {
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

function contact(locale: Locale): ThankYouContent {
  return locale === "es"
    ? {
        title: "Consulta recibida",
        subtitle:
          "Revisaremos su contexto y le responderemos en 1–2 días hábiles. Mientras tanto, puede agendar una llamada directamente.",
        primaryCta: "Agendar llamada de estrategia",
        primaryHref: "/#contact",
        secondaryCta: "Ver modelos de engagement",
        secondaryHref: "/engagement",
      }
    : {
        title: "Inquiry received",
        subtitle:
          "We'll review your context and respond within 1–2 business days. You can also schedule a strategy call directly.",
        primaryCta: "Schedule strategy call",
        primaryHref: "/#contact",
        secondaryCta: "View engagement models",
        secondaryHref: "/engagement",
      };
}

function resource(locale: Locale): ThankYouContent {
  return locale === "es"
    ? {
        title: "Recurso desbloqueado",
        subtitle:
          "Su descarga debería iniciar automáticamente. ¿Listo para el siguiente paso? Hablemos de su primer flujo en producción.",
        primaryCta: "Agendar llamada",
        primaryHref: "/#contact",
        secondaryCta: "Calcular ROI de IA",
        secondaryHref: "/ai-roi-calculator",
      }
    : {
        title: "Resource unlocked",
        subtitle:
          "Your download should start automatically. Ready for the next step? Let's discuss your first production workflow.",
        primaryCta: "Book a strategy call",
        primaryHref: "/#contact",
        secondaryCta: "Calculate AI ROI",
        secondaryHref: "/ai-roi-calculator",
      };
}

function roi(locale: Locale): ThankYouContent {
  return locale === "es"
    ? {
        title: "Resultados guardados",
        subtitle:
          "Recibimos sus datos de ROI. Un líder de ingeniería puede ayudarle a validar supuestos y priorizar el primer flujo.",
        primaryCta: "Agendar discovery técnico",
        primaryHref: "/#contact",
        secondaryCta: "Leer briefing ejecutivo",
        secondaryHref: "/executive-briefing",
      }
    : {
        title: "Results saved",
        subtitle:
          "We received your ROI inputs. An engineering lead can help validate assumptions and prioritize your first workflow.",
        primaryCta: "Schedule technical discovery",
        primaryHref: "/#contact",
        secondaryCta: "Read executive briefing",
        secondaryHref: "/executive-briefing",
      };
}

function careers(locale: Locale): ThankYouContent {
  return locale === "es"
    ? {
        title: "Aplicación enviada",
        subtitle:
          "Gracias por su interés en AgentBiz. Revisaremos su perfil y le contactaremos si hay un match con posiciones abiertas.",
        primaryCta: "Ver más recursos",
        primaryHref: "/resources",
        secondaryCta: "Volver al inicio",
        secondaryHref: "/",
      }
    : {
        title: "Application submitted",
        subtitle:
          "Thank you for your interest in AgentBiz. We'll review your profile and reach out if there's a match with open roles.",
        primaryCta: "Browse resources",
        primaryHref: "/resources",
        secondaryCta: "Back to homepage",
        secondaryHref: "/",
      };
}

export function getThankYouContent(type: ThankYouType, locale: Locale): ThankYouContent {
  switch (type) {
    case "contact":
      return contact(locale);
    case "resource":
      return resource(locale);
    case "roi":
      return roi(locale);
    case "careers":
      return careers(locale);
    default: {
      const _exhaustive: never = type;
      return _exhaustive;
    }
  }
}
