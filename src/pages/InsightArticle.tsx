import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getInsightBySlug } from "@/data/insights-content";
import NotFound from "@/pages/NotFound";

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getInsightBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
            <span>{article.readTime}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{article.title}</h1>
          <p className="text-lead mb-10">{article.excerpt}</p>

          <div className="prose prose-invert max-w-none space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-foreground mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-secondary leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 card-hover p-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Apply this to your organization</h2>
            <p className="text-secondary mb-6">
              Map your highest-volume workflow to a governed production roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="btn-primary">
                <Link to="/#contact">Talk to an Engineering Lead</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/resources">Enterprise resources</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default InsightArticle;
