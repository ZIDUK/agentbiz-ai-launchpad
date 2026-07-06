import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { insightArticles } from "@/data/insights-content";

const InsightsPreview = () => {
  const featured = insightArticles.slice(0, 2);

  return (
    <section id="insights" className="section bg-card/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary mb-3">INSIGHTS</p>
          <h2 className="text-headline mb-4">
            Enterprise AI <span className="gradient-text">perspectives</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Practical thinking on production AI, governed agents, and operational transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((article) => (
            <article key={article.slug} className="card-hover p-8 flex flex-col">
              <p className="text-xs text-muted-foreground mb-3">{article.readTime}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{article.excerpt}</p>
              <Button asChild variant="outline" className="w-fit">
                <Link to={`/insights/${article.slug}`}>
                  Read article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/insights" className="text-sm font-semibold text-primary hover:underline">
            View all insights →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
