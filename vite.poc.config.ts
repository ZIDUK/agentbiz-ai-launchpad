import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/** AgentBiz production site — Jarvis scroll experience + full routing */
export default defineConfig({
  root: path.resolve(__dirname, "poc/scroll-experience"),
  publicDir: path.resolve(__dirname, "public"),
  envDir: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
  optimizeDeps: {
    include: ["three", "gsap", "lenis"],
  },
  server: {
    port: 5174,
    open: "/",
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
