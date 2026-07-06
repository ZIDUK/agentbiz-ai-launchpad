import { useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getThankYouContent, type ThankYouType } from "@/i18n/content/thank-you";
import { getResourceDownloadPath } from "@/i18n/content/resource-guides";
import { trackEvent } from "@/lib/analytics";

const VALID_TYPES = new Set<ThankYouType>(["contact", "resource", "roi", "careers"]);

const ThankYou = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { locale } = useLanguage();

  const thankYouType = VALID_TYPES.has(type as ThankYouType) ? (type as ThankYouType) : null;
  const content = thankYouType ? getThankYouContent(thankYouType, locale) : null;
  const resourceSlug = searchParams.get("slug");

  useEffect(() => {
    if (!thankYouType) {
      navigate("/", { replace: true });
      return;
    }
    trackEvent("thank_you_view", { type: thankYouType, resource_slug: resourceSlug || "" });
  }, [thankYouType, resourceSlug, navigate]);

  useEffect(() => {
    if (thankYouType !== "resource" || !resourceSlug) return;
    const path = getResourceDownloadPath(resourceSlug, locale);
    if (!path) return;

    const timer = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = path;
      link.download = "";
      link.click();
    }, 600);

    return () => window.clearTimeout(timer);
  }, [thankYouType, resourceSlug, locale]);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-6">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="text-display mb-4">{content.title}</h1>
          <p className="text-lead mb-10">{content.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-primary">
              <Link to={content.primaryHref}>
                {content.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to={content.secondaryHref}>{content.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
