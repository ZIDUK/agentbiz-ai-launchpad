import { redirect } from "next/navigation";

/**
 * /solutions → /services
 *
 * The product uses "Solutions" as the marketing-facing label (see i18n:
 * `services: "Solutions"`), but the canonical route is /services. This
 * redirect keeps the marketing URL working without duplicating the page
 * or breaking the existing /services route that all internal links use.
 */
export default function SolutionsRedirectPage(): never {
  redirect("/services");
}
