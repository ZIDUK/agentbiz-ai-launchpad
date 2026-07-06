import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getExecutiveFaq } from "@/i18n/content/faq";

const ExecutiveFaq = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const items = getExecutiveFaq(locale);

  return (
    <section id="faq" className="section bg-muted/30">
      <div className="container max-w-3xl">
        <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase text-center">
          {t("faq.eyebrow")}
        </p>
        <h2 className="text-headline text-center mb-6">
          {t("faq.title")}{" "}
          <span className="gradient-text">{t("faq.titleHighlight")}</span>
        </h2>
        <p className="text-lead text-center mb-12">{t("faq.subtitle")}</p>

        <Accordion type="single" collapsible className="space-y-3">
          {items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="card-hover px-6 border border-border rounded-xl"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-secondary leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ExecutiveFaq;
