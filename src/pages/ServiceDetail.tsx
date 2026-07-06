import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/site-content";
import NotFound from "@/pages/NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFound />;
  }

  const Icon = service.icon;
  const categoryLabel = service.category === "ai" ? "AI Development" : "Software Development";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-4xl">
          <Link
            to="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All services
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Icon className="text-primary" size={32} />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide">{categoryLabel}</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h1>
            </div>
          </div>

          <p className="text-lead mb-10">{service.description}</p>

          <div className="card-hover p-8 mb-10">
            <h2 className="text-xl font-semibold mb-6 text-foreground">What you get</h2>
            <ul className="space-y-4">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-secondary">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="btn-primary">
              <Link to="/#contact">Schedule a consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/#career">Join our team</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
