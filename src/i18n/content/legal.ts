import type { Locale } from "@/i18n/types";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  eyebrow: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}

const privacyEn: LegalPageContent = {
  title: "Privacy Policy",
  eyebrow: "LEGAL",
  lead:
    "How AgentBiz collects, uses, and protects information when you visit agentbiz.io, request a call, or work with us.",
  updated: "September 17, 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "AgentBiz (\"AgentBiz\", \"we\", \"us\") operates agentbiz.io and related marketing properties. We help organizations with operational transformation, enterprise architecture, process design, and governed AI delivery.",
        "This policy applies to information collected through our website, contact forms, discovery calls, newsletters, and career applications. Client engagement data under a signed statement of work is governed by that agreement and any data-processing addendum.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "Information you provide: name, email, company, role, phone (if shared), message content, meeting preferences, and files you upload (for example a CV).",
        "Information collected automatically: IP address, browser type, device type, pages viewed, referring URL, and approximate location derived from IP — only when analytics or essential cookies are active per your consent choice.",
        "We do not intentionally collect special-category data (health, biometrics, political opinions). Please do not submit that information through website forms.",
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        "Respond to inquiries and schedule discovery calls.",
        "Deliver requested materials (insights, proposals, follow-ups).",
        "Improve the site experience and understand which pages help buyers.",
        "Evaluate career applications and communicate with candidates.",
        "Meet legal, security, and accounting obligations when required.",
        "We do not sell personal information. We do not use website form data to train third-party foundation models.",
      ],
    },
    {
      heading: "Legal bases (where applicable)",
      paragraphs: [
        "Depending on your location, we process data under: consent (cookies / optional analytics), legitimate interests (responding to B2B inquiries and securing our site), contract (when you engage us), and legal obligation (when the law requires retention or disclosure).",
      ],
    },
    {
      heading: "Cookies and similar technologies",
      paragraphs: [
        "We use essential cookies to run the site (for example language preference and cookie-consent state).",
        "Optional analytics cookies load only after you accept them in the consent banner. You can change your choice by clearing site data or contacting us.",
      ],
    },
    {
      heading: "Sharing",
      paragraphs: [
        "We share information with processors who help us operate the business — for example hosting, form storage, email, calendar, and analytics providers — under contracts that limit use to our instructions.",
        "We may disclose information if required by law, to protect rights and safety, or in connection with a corporate transaction (merger, acquisition, or asset sale), with appropriate safeguards.",
      ],
    },
    {
      heading: "International transfers",
      paragraphs: [
        "AgentBiz serves clients across LATAM and the United States. Data may be processed in the United States or other countries where our providers operate. Where required, we use appropriate transfer mechanisms and contractual protections.",
      ],
    },
    {
      heading: "Retention",
      paragraphs: [
        "Inquiry and form data: typically kept for up to 24 months after the last meaningful contact, unless a longer period is needed for an active opportunity or legal claim.",
        "Career applications: typically kept for up to 12 months unless you ask us to delete sooner or we hire you (then employment records apply).",
        "Analytics aggregates may be retained longer in anonymized or de-identified form.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We use reasonable administrative and technical measures to protect personal information, including access controls and encrypted transport (HTTPS). No method of transmission or storage is perfectly secure; if we become aware of a breach affecting your data, we will notify you and regulators as required by law.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Depending on your jurisdiction (including GDPR, CCPA/CPRA, and similar laws), you may have rights to access, correct, delete, restrict, or port your personal data, and to object to certain processing or withdraw consent.",
        "To exercise these rights, email jonathan@agentbiz.io with the subject line \"Privacy request\". We may need to verify your identity before responding. You may also lodge a complaint with your local supervisory authority.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        "Our site and services are directed to business professionals. We do not knowingly collect personal information from children under 16. If you believe a child has submitted data, contact us and we will delete it.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update this policy from time to time. The \"Last updated\" date at the top reflects the latest revision. Material changes will be posted on this page.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Privacy questions: jonathan@agentbiz.io",
        "AgentBiz — operational excellence, powered by AI. Website: https://agentbiz.io",
      ],
    },
  ],
};

const privacyEs: LegalPageContent = {
  title: "Política de privacidad",
  eyebrow: "LEGAL",
  lead:
    "Cómo AgentBiz recopila, usa y protege la información cuando visita agentbiz.io, pide una llamada o trabaja con nosotros.",
  updated: "17 de septiembre de 2026",
  sections: [
    {
      heading: "Quiénes somos",
      paragraphs: [
        "AgentBiz (\"AgentBiz\", \"nosotros\") opera agentbiz.io y propiedades de marketing relacionadas. Ayudamos a organizaciones con transformación operativa, arquitectura empresarial, diseño de procesos y entrega de IA gobernada.",
        "Esta política aplica a la información recopilada por el sitio, formularios de contacto, llamadas de discovery, newsletters y aplicaciones de carrera. Los datos de un engagement bajo orden de trabajo firmada se rigen por ese acuerdo y cualquier adenda de tratamiento de datos.",
      ],
    },
    {
      heading: "Información que recopilamos",
      paragraphs: [
        "Información que usted provee: nombre, email, empresa, rol, teléfono (si lo comparte), contenido del mensaje, preferencias de reunión y archivos que sube (por ejemplo un CV).",
        "Información automática: dirección IP, tipo de navegador, dispositivo, páginas vistas, URL de referencia y ubicación aproximada derivada de la IP — solo cuando analytics o cookies esenciales están activos según su consentimiento.",
        "No recopilamos a propósito datos de categorías especiales (salud, biometría, opiniones políticas). No envíe esa información por formularios del sitio.",
      ],
    },
    {
      heading: "Cómo usamos la información",
      paragraphs: [
        "Responder consultas y agendar llamadas de discovery.",
        "Entregar materiales solicitados (insights, propuestas, seguimientos).",
        "Mejorar la experiencia del sitio y entender qué páginas ayudan a los compradores.",
        "Evaluar aplicaciones de carrera y comunicarnos con candidatos.",
        "Cumplir obligaciones legales, de seguridad y contables cuando corresponda.",
        "No vendemos información personal. No usamos datos de formularios del sitio para entrenar modelos de fundación de terceros.",
      ],
    },
    {
      heading: "Bases legales (cuando apliquen)",
      paragraphs: [
        "Según su ubicación, tratamos datos bajo: consentimiento (cookies / analytics opcionales), interés legítimo (responder consultas B2B y asegurar el sitio), contrato (cuando nos contrata) y obligación legal (cuando la ley exige retención o divulgación).",
      ],
    },
    {
      heading: "Cookies y tecnologías similares",
      paragraphs: [
        "Usamos cookies esenciales para operar el sitio (por ejemplo preferencia de idioma y estado del consentimiento).",
        "Las cookies opcionales de analytics solo se cargan si las acepta en el banner. Puede cambiar su elección borrando datos del sitio o contactándonos.",
      ],
    },
    {
      heading: "Compartición",
      paragraphs: [
        "Compartimos información con procesadores que nos ayudan a operar — hosting, almacenamiento de formularios, email, calendario y analytics — bajo contratos que limitan el uso a nuestras instrucciones.",
        "Podemos divulgar información si la ley lo exige, para proteger derechos y seguridad, o en una transacción corporativa (fusión, adquisición o venta de activos), con salvaguardas adecuadas.",
      ],
    },
    {
      heading: "Transferencias internacionales",
      paragraphs: [
        "AgentBiz atiende clientes en LATAM y Estados Unidos. Los datos pueden procesarse en Estados Unidos u otros países donde operan nuestros proveedores. Cuando se requiere, usamos mecanismos de transferencia y protecciones contractuales adecuados.",
      ],
    },
    {
      heading: "Retención",
      paragraphs: [
        "Consultas y formularios: normalmente hasta 24 meses después del último contacto relevante, salvo que se necesite más por una oportunidad activa o reclamo legal.",
        "Aplicaciones de carrera: normalmente hasta 12 meses, salvo que pida borrado antes o lo contratemos (entonces aplican registros laborales).",
        "Agregados de analytics pueden retenerse más tiempo en forma anonimizada o desidentificada.",
      ],
    },
    {
      heading: "Seguridad",
      paragraphs: [
        "Usamos medidas administrativas y técnicas razonables para proteger la información personal, incluyendo controles de acceso y transporte cifrado (HTTPS). Ningún método es perfectamente seguro; si tomamos conocimiento de una brecha que afecte sus datos, notificaremos según la ley.",
      ],
    },
    {
      heading: "Sus derechos",
      paragraphs: [
        "Según su jurisdicción (incluyendo GDPR, CCPA/CPRA y leyes similares), puede tener derechos de acceso, corrección, eliminación, restricción o portabilidad, y de oponerse a ciertos tratamientos o retirar el consentimiento.",
        "Para ejercerlos, escriba a jonathan@agentbiz.io con el asunto \"Solicitud de privacidad\". Podemos verificar su identidad antes de responder. También puede presentar una queja ante su autoridad de control local.",
      ],
    },
    {
      heading: "Menores",
      paragraphs: [
        "El sitio y los servicios están dirigidos a profesionales de negocio. No recopilamos a sabiendas datos de menores de 16 años. Si cree que un menor envió datos, contáctenos y los eliminaremos.",
      ],
    },
    {
      heading: "Cambios",
      paragraphs: [
        "Podemos actualizar esta política. La fecha de \"Última actualización\" refleja la revisión vigente. Los cambios materiales se publicarán en esta página.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: [
        "Preguntas de privacidad: jonathan@agentbiz.io",
        "AgentBiz — excelencia operativa, impulsada por IA. Sitio: https://agentbiz.io",
      ],
    },
  ],
};

const termsEn: LegalPageContent = {
  title: "Terms of Use",
  eyebrow: "LEGAL",
  lead:
    "Rules for using agentbiz.io and related marketing materials. Engagements for paid work are governed by a separate statement of work.",
  updated: "September 17, 2026",
  sections: [
    {
      heading: "Agreement",
      paragraphs: [
        "By accessing or using agentbiz.io (the \"Site\"), you agree to these Terms of Use and our Privacy Policy. If you do not agree, do not use the Site.",
        "These terms cover the public website and marketing content only. Consulting, software delivery, or managed services are governed by a signed statement of work, master services agreement, or order form between you and AgentBiz.",
      ],
    },
    {
      heading: "Who may use the Site",
      paragraphs: [
        "The Site is intended for business and professional use. You represent that you have authority to act for yourself or your organization when submitting forms or requesting a call.",
      ],
    },
    {
      heading: "Informational content — not advice",
      paragraphs: [
        "Insights, case studies, package descriptions, calculators, and other materials on the Site are for general information. They are not legal, financial, tax, investment, or regulated professional advice, and they are not a substitute for a scoped engagement.",
        "Outcomes described in case studies reflect specific contexts. Past results do not guarantee future results for your organization.",
      ],
    },
    {
      heading: "Accounts and submissions",
      paragraphs: [
        "When you submit a form, book a call, or apply for a role, you agree to provide accurate information and not to misuse the Site (spam, scraping at abusive rates, attempts to breach security, or uploading malware).",
        "You retain ownership of content you submit. You grant AgentBiz a limited license to use that content to respond to you and operate the business purpose for which you sent it.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The Site, including text, graphics, logos, icons, layout, and downloadable materials, is owned by AgentBiz or its licensors and protected by intellectual-property laws.",
        "You may view and share links to public pages for non-commercial reference. You may not copy, scrape, republish, train models on, or commercially exploit Site content without prior written permission, except as allowed by mandatory law (for example fair use / fair dealing where applicable).",
      ],
    },
    {
      heading: "Third-party links and tools",
      paragraphs: [
        "The Site may link to third-party sites or embed third-party tools (calendar, analytics, video). We are not responsible for their content, availability, or privacy practices. Review their terms before use.",
      ],
    },
    {
      heading: "Disclaimers",
      paragraphs: [
        "THE SITE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.",
        "We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, AgentBiz and its principals will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your use of the Site or reliance on its content.",
        "Our aggregate liability arising from Site use is limited to one hundred U.S. dollars (USD $100) or the amount you paid us solely for Site access in the twelve months before the claim — whichever is greater. This limit does not apply to liability that cannot be excluded by law.",
      ],
    },
    {
      heading: "Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless AgentBiz from claims arising out of your misuse of the Site, your violation of these terms, or your infringement of third-party rights — except to the extent caused by our willful misconduct.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law rules, unless mandatory consumer or local law requires otherwise for your jurisdiction.",
        "Courts located in Delaware shall have exclusive jurisdiction over disputes arising from Site use, except where mandatory law gives you the right to sue in your home courts.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "We may update these terms. Continued use of the Site after changes are posted constitutes acceptance of the revised terms. The \"Last updated\" date shows the current version.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "Questions about these terms: jonathan@agentbiz.io",
        "AgentBiz — https://agentbiz.io",
      ],
    },
  ],
};

const termsEs: LegalPageContent = {
  title: "Términos de uso",
  eyebrow: "LEGAL",
  lead:
    "Reglas para usar agentbiz.io y materiales de marketing. El trabajo pago se rige por una orden de trabajo aparte.",
  updated: "17 de septiembre de 2026",
  sections: [
    {
      heading: "Acuerdo",
      paragraphs: [
        "Al acceder o usar agentbiz.io (el \"Sitio\"), acepta estos Términos de uso y nuestra Política de privacidad. Si no está de acuerdo, no use el Sitio.",
        "Estos términos cubren el sitio público y el contenido de marketing. Consultoría, entrega de software o servicios gestionados se rigen por una orden de trabajo, MSA u orden firmada entre usted y AgentBiz.",
      ],
    },
    {
      heading: "Quién puede usar el Sitio",
      paragraphs: [
        "El Sitio está pensado para uso profesional y empresarial. Usted declara que tiene autoridad para actuar por sí o por su organización al enviar formularios o pedir una llamada.",
      ],
    },
    {
      heading: "Contenido informativo — no es asesoría",
      paragraphs: [
        "Insights, casos, descripciones de paquetes, calculadoras y demás materiales son información general. No son asesoría legal, financiera, fiscal, de inversión ni profesional regulada, y no sustituyen un engagement con alcance.",
        "Los resultados de casos reflejan contextos específicos. Resultados pasados no garantizan resultados futuros en su organización.",
      ],
    },
    {
      heading: "Cuentas y envíos",
      paragraphs: [
        "Al enviar un formulario, agendar una llamada o aplicar a un rol, se compromete a dar información veraz y a no abusar del Sitio (spam, scraping abusivo, intentos de vulnerar seguridad o subir malware).",
        "Usted conserva la propiedad del contenido que envía. Otorga a AgentBiz una licencia limitada para usarlo a fin de responderle y operar el propósito para el que lo envió.",
      ],
    },
    {
      heading: "Propiedad intelectual",
      paragraphs: [
        "El Sitio, incluyendo texto, gráficos, logos, iconos, layout y materiales descargables, es propiedad de AgentBiz o sus licenciantes y está protegido por leyes de propiedad intelectual.",
        "Puede ver y compartir enlaces a páginas públicas para referencia no comercial. No puede copiar, scrapear, republicar, entrenar modelos con, ni explotar comercialmente el contenido del Sitio sin permiso escrito previo, salvo lo que permita la ley imperativa.",
      ],
    },
    {
      heading: "Enlaces y herramientas de terceros",
      paragraphs: [
        "El Sitio puede enlazar sitios de terceros o incrustar herramientas (calendario, analytics, video). No somos responsables de su contenido, disponibilidad o privacidad. Revise sus términos antes de usarlos.",
      ],
    },
    {
      heading: "Exclusión de garantías",
      paragraphs: [
        "EL SITIO SE OFRECE \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\", SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS, INCLUYENDO COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR Y NO INFRACCIÓN, EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY.",
        "No garantizamos que el Sitio sea ininterrumpido, libre de errores o de componentes dañinos.",
      ],
    },
    {
      heading: "Limitación de responsabilidad",
      paragraphs: [
        "En la máxima medida permitida por la ley, AgentBiz y sus principals no serán responsables por daños indirectos, incidentales, especiales, consecuenciales o punitivos, ni por pérdida de beneficios, datos o goodwill, derivados del uso del Sitio o de confiar en su contenido.",
        "Nuestra responsabilidad agregada por el uso del Sitio se limita a cien dólares estadounidenses (USD $100) o al monto que nos pagó solo por acceso al Sitio en los doce meses previos al reclamo — el mayor. Este límite no aplica a responsabilidad que la ley no permita excluir.",
      ],
    },
    {
      heading: "Indemnidad",
      paragraphs: [
        "Usted acepta indemnizar y mantener indemne a AgentBiz frente a reclamos derivados del mal uso del Sitio, la violación de estos términos o la infracción de derechos de terceros — salvo en la medida causada por dolo nuestro.",
      ],
    },
    {
      heading: "Ley aplicable",
      paragraphs: [
        "Estos términos se rigen por las leyes del Estado de Delaware, EE. UU., sin conflicto de leyes, salvo que una norma imperativa de su jurisdicción exija otra cosa.",
        "Los tribunales de Delaware tendrán jurisdicción exclusiva sobre disputas por el uso del Sitio, salvo que la ley imperativa le permita demandar en su domicilio.",
      ],
    },
    {
      heading: "Cambios",
      paragraphs: [
        "Podemos actualizar estos términos. El uso continuado del Sitio tras la publicación implica aceptación. La fecha de \"Última actualización\" muestra la versión vigente.",
      ],
    },
    {
      heading: "Contacto",
      paragraphs: [
        "Preguntas sobre estos términos: jonathan@agentbiz.io",
        "AgentBiz — https://agentbiz.io",
      ],
    },
  ],
};

export function getPrivacyContent(locale: Locale): LegalPageContent {
  return locale === "es" ? privacyEs : privacyEn;
}

export function getTermsContent(locale: Locale): LegalPageContent {
  return locale === "es" ? termsEs : termsEn;
}
