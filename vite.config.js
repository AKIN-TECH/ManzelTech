import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // If you plan to publish to https://AKIN-TECH.github.io/ManzelTech/
  // set base to "/ManzelTech/". If you publish to the user/org root site,
  // set base to "/".
  base: '/',
  plugins: [react()],
});
