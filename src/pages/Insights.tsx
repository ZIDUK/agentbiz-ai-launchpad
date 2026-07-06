import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { insightArticles } from "@/data/insights-content";

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">INSIGHTS</p>
            <h1 className="text-display mb-6">
              Enterprise AI <span className="gradient-text">perspectives</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">
              Practical thinking on production AI, governed agents, and operational transformation —
              from the engineering and delivery side.
            </p>
          </div>

          <div className="grid gap-6">
            {insightArticles.map((article) => (
              <article key={article.slug} className="card-hover p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <time className="text-xs text-muted-foreground" dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{article.title}</h2>
                <p className="text-secondary mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link to={`/insights/${article.slug}`}>
                    Read article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center card-hover p-10">
            <h2 className="text-2xl font-bold mb-4">Turn insight into a production plan</h2>
            <p className="text-secondary mb-6 max-w-xl mx-auto">
              Speak with an engineering lead about your highest-impact workflow.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/#contact">Book a strategy call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
