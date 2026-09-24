import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import { ghfillTreePlugin } from "./src/data/ghfillTree.js"

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [ghfillTreePlugin(), react(), tailwindcss()],
  base: mode === "production" ? "/nsi/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
}))
