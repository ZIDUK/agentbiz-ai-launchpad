/// <reference types="vite/client" />

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
