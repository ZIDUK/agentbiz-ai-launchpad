import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getAboutContent } from "@/i18n/content/about";

const About = () => {
  const { t } = useTranslation();
  const { locale } = useLanguage();
  const content = getAboutContent(locale);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-4xl">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3 uppercase">
            {t("about.eyebrow")}
          </p>
          <h1 className="text-display mb-6">{content.headline}</h1>
          <p className="text-lead mb-16">{content.subtitle}</p>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">{content.missionTitle}</h2>
            <p className="text-secondary leading-relaxed">{content.missionBody}</p>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {content.values.map((value) => (
                <div key={value.title} className="card-hover p-6">
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-2">{content.teamTitle}</h2>
            <p className="text-secondary mb-8">{content.teamSubtitle}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {content.team.map((member) => (
                <div key={member.name} className="card-hover p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-lg font-bold text-primary">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-secondary leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Button asChild className="btn-primary">
              <Link to="/#contact">{t("common.talkToLead")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
