import { preact } from "@preact/preset-vite"
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [preact(), tsConfigPaths()],
  build: {
    target: "esnext",
    emptyOutDir: true,
    outDir: "target/www",
  },
  optimizeDeps: {
    esbuildOptions: { target: "es2022" },
  },
  server: { port: 5656 },
})
