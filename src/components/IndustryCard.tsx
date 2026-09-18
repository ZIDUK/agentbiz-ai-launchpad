import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

export function industryThumbnailSrc(slug: string) {
  return `/industries/${slug}.jpg`;
}

interface IndustryCardModel {
  slug: string;
  name: string;
  headline: string;
  workflows?: string[];
}

interface IndustryCardProps {
  industry: IndustryCardModel;
  titleAs?: "h2" | "h3";
  showWorkflows?: boolean;
}

export function IndustryCard({
  industry,
  titleAs = "h3",
  showWorkflows = true,
}: IndustryCardProps) {
  const { t } = useTranslation();
  const Title = titleAs;

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={industryThumbnailSrc(industry.slug)}
          alt=""
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <Title className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary lg:text-xl">
          {industry.name}
        </Title>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{industry.headline}</p>
        {showWorkflows && industry.workflows && industry.workflows.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-secondary">
            {industry.workflows.map((workflow) => (
              <li key={workflow} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{workflow}</span>
              </li>
            ))}
          </ul>
        )}
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
          {t("common.exploreIndustry").replace(/\s*→\s*$/, "")}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
