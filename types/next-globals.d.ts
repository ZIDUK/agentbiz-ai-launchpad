interface CalendlyInlineWidgetOptions {
  url: string;
  parentElement: HTMLElement;
}

interface CalendlyNamespace {
  initInlineWidget: (options: CalendlyInlineWidgetOptions) => void;
}

interface Window {
  Calendly?: CalendlyNamespace;
}

interface ImportMeta {
  readonly env: Record<string, string | undefined>;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
