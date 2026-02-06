import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // GitHub Pages: /ManzelTech/ | Custom domain: /
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ["manzeltech.co", "www.manzeltech.co", "localhost", "127.0.0.1"],
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ["manzeltech.co", "www.manzeltech.co", "localhost", "127.0.0.1"],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});