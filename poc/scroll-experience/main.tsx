import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import "./poc-scroll.css";
import { PocProviders } from "./PocProviders";
import ScrollPocApp from "./ScrollPocApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PocProviders>
      <ScrollPocApp />
    </PocProviders>
  </StrictMode>,
);
