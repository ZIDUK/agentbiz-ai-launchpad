import { cn } from "@/lib/utils";

interface MarkProps {
  className?: string;
  title?: string;
}

/** Assessment — map unfolds, owner pin on the critical path */
export function PackageMarkAssessment({
  className,
  title = "Assessment",
}: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Folded map sheet */}
      <path
        d="M8 11l10-3 14 4v18l-14-4-10 3V11z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M18 8v18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Path through the map */}
      <path
        d="M12 20c2.5-3 5-2 7 0s4.5 2.5 7-1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Owner pin */}
      <circle cx="26" cy="17" r="2.4" fill="currentColor" />
      <path d="M26 19.5V24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

/** Build — tangled lines resolve into a clean owned cadence */
export function PackageMarkBuild({ className, title = "Build" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Chaos left */}
      <path
        d="M7 12c3 2 2 5 0 7M10 10c2 4 1 8-1 11M13 13c1.5 3 .5 6-1 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Divider */}
      <path
        d="M17 9v22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2.5"
        opacity="0.35"
      />
      {/* Clean cadence right */}
      <rect x="21" y="11" width="12" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="21" y="18.5" width="12" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="21" y="26" width="12" height="5" rx="1.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

/** Pod — owned system handed over (module + key) */
export function PackageMarkPod({ className, title = "Pod" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Module / package */}
      <rect x="7" y="10" width="18" height="20" rx="3" stroke="currentColor" strokeWidth="1.75" />
      <path d="M7 16h18" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="23" r="3.2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 20.2V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ownership key */}
      <circle cx="31" cy="18" r="3.2" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M31 21.2V30M31 26h3.5M31 29h2.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function packageMarkForSlug(slug: string) {
  switch (slug) {
    case "agentic-readiness-sprint":
      return PackageMarkAssessment;
    case "agentic-operations-build":
      return PackageMarkBuild;
    case "custom-delivery-pod":
      return PackageMarkPod;
    default:
      return PackageMarkAssessment;
  }
}
