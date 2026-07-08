import { SiteRoutes } from "@/SiteRoutes";
import { useSeo } from "@/hooks/useSeo";
import { usePageTracking } from "@/hooks/usePageTracking";
import CookieConsent from "@/components/CookieConsent";
import ScrollHomeShell from "./ScrollHomeShell";

function SiteChrome() {
  useSeo();
  usePageTracking();
  return <CookieConsent />;
}

export default function ScrollPocApp() {
  return (
    <>
      <SiteRoutes home={<ScrollHomeShell />} />
      <SiteChrome />
    </>
  );
}
