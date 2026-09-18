import { cn } from "@/lib/utils";

interface MarkProps {
  className?: string;
  title?: string;
}

/** Empty owner seat above a process node — why pilots die */
export function InsightMarkPilots({ className, title = "Why pilots die" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Process plate */}
      <rect x="8" y="22" width="24" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 28h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" opacity="0.35" />
      {/* Dashed ownership line */}
      <path
        d="M20 22V14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="2.5 2.5"
      />
      {/* Empty seat */}
      <path
        d="M14 14c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeDasharray="2.2 2.4"
      />
      <path d="M13 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      {/* Missing-owner slash */}
      <path d="M12 8l16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Strategy → Operations → AI as three rising plates */
export function InsightMarkSequence({ className, title = "The sequence" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect x="4" y="24" width="9" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <rect x="15.5" y="16" width="9" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <rect x="27" y="8" width="9" height="26" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M13 26.5l2.5-3M24.5 18.5l2.5-3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* AI tip mark on last plate */}
      <circle cx="31.5" cy="14" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Human as the decision hub; agents as subordinate nodes */
export function InsightMarkHumanLoop({ className, title = "Human in the loop" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.75" />
      {/* Human — filled so they read as the call */}
      <circle cx="20" cy="16" r="3.2" fill="currentColor" />
      <path
        d="M13.5 27.5c1.4-3.2 3.6-4.8 6.5-4.8s5.1 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Agent satellites */}
      <circle cx="20" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="30" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="33" cy="30" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 9v2.5M10.2 27.2l1.8-1.5M29.8 27.2l-1.8-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function insightMarkForSlug(slug: string) {
  switch (slug) {
    case "why-enterprise-ai-pilots-fail":
      return InsightMarkPilots;
    case "strategy-operations-then-ai":
      return InsightMarkSequence;
    case "governed-agents-human-in-the-loop":
      return InsightMarkHumanLoop;
    default:
      return InsightMarkPilots;
  }
}
