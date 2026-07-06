import type { Locale } from "@/i18n/types";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  updated: string;
  sections: LegalSection[];
}

const privacyEn: LegalPageContent = {
  title: "Privacy Policy",
  updated: "March 2026",
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "AgentBiz (\"we\", \"us\") operates agentbiz.io. This policy explains how we collect and use information when you visit our site, download resources, submit forms, or apply for careers.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We may collect your name, email address, company name, workflow interests, messages you submit, CV files for job applications, and technical data such as browser type and pages visited (if you consent to analytics).",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        "We use this information to respond to inquiries, improve our services, manage job applications, and understand how visitors use our site. We do not sell your personal information.",
      ],
    },
    {
      heading: "Data storage",
      paragraphs: [
        "Form submissions and applications are stored securely using Supabase infrastructure. CV files are stored in protected storage buckets accessible only to authorized administrators.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "You may request access, correction, or deletion of your personal data by contacting hello@agentbiz.ai.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions about this policy: hello@agentbiz.ai"],
    },
  ],
};

const privacyEs: LegalPageContent = {
  title: "Política de privacidad",
  updated: "Marzo 2026",
  sections: [
    {
      heading: "Resumen",
      paragraphs: [
        "AgentBiz (\"nosotros\") opera agentbiz.io. Esta política explica cómo recopilamos y usamos información cuando visita nuestro sitio, descarga recursos, envía formularios o aplica a vacantes.",
      ],
    },
    {
      heading: "Información que recopilamos",
      paragraphs: [
        "Podemos recopilar su nombre, email, empresa, intereses de flujos de trabajo, mensajes enviados, archivos CV para aplicaciones laborales y datos técnicos como tipo de navegador y páginas visitadas (si acepta analytics).",
      ],
    },
    {
      heading: "Cómo usamos la información",
      paragraphs: [
        "Usamos esta información para responder consultas, mejorar servicios, gestionar aplicaciones laborales y entender el uso del sitio. No vendemos su información personal.",
      ],
    },
    {
      heading: "Almacenamiento",
      paragraphs: [
        "Los envíos de formularios y aplicaciones se almacenan de forma segura en Supabase. Los CV se guardan en buckets protegidos accesibles solo por administradores autorizados.",
      ],
    },
    {
      heading: "Sus derechos",
      paragraphs: [
        "Puede solicitar acceso, corrección o eliminación de sus datos contactando hello@agentbiz.ai.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: ["Preguntas sobre esta política: hello@agentbiz.ai"],
    },
  ],
};

const termsEn: LegalPageContent = {
  title: "Terms of Use",
  updated: "March 2026",
  sections: [
    {
      heading: "Acceptance",
      paragraphs: [
        "By accessing agentbiz.io you agree to these terms. If you do not agree, please do not use the site.",
      ],
    },
    {
      heading: "Use of content",
      paragraphs: [
        "Content on this site — including guides, insights, and case studies — is for informational purposes. It does not constitute legal, financial, or professional advice.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "All site content, branding, and materials are owned by AgentBiz unless otherwise stated. You may not reproduce materials without written permission.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "AgentBiz provides this site \"as is\" without warranties. We are not liable for damages arising from use of the site or reliance on its content.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions: hello@agentbiz.ai"],
    },
  ],
};

const termsEs: LegalPageContent = {
  title: "Términos de uso",
  updated: "Marzo 2026",
  sections: [
    {
      heading: "Aceptación",
      paragraphs: [
        "Al acceder a agentbiz.io acepta estos términos. Si no está de acuerdo, no utilice el sitio.",
      ],
    },
    {
      heading: "Uso del contenido",
      paragraphs: [
        "El contenido del sitio — guías, insights y casos de estudio — es informativo. No constituye asesoría legal, financiera o profesional.",
      ],
    },
    {
      heading: "Propiedad intelectual",
      paragraphs: [
        "Todo el contenido, marca y materiales son propiedad de AgentBiz salvo indicación contraria. No reproduzca materiales sin permiso escrito.",
      ],
    },
    {
      heading: "Limitación de responsabilidad",
      paragraphs: [
        "AgentBiz provee el sitio \"tal cual\" sin garantías. No somos responsables por daños derivados del uso del sitio o confianza en su contenido.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: ["Preguntas: hello@agentbiz.ai"],
    },
  ],
};

export function getPrivacyContent(locale: Locale): LegalPageContent {
  return locale === "es" ? privacyEs : privacyEn;
}

export function getTermsContent(locale: Locale): LegalPageContent {
  return locale === "es" ? termsEs : termsEn;
}
