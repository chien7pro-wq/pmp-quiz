import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages: set VITE_BASE to "/<repo-name>/"
// e.g. VITE_BASE=/pmp-quiz/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
