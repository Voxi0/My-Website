// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Integrations/Plugins
import tailwindcss from "@tailwindcss/vite";

// Astro configuration
export default defineConfig({
  site: "https://voxi0.netlify.app/",
  integrations: [ mdx(), sitemap() ],
  vite: {
    plugins: [ tailwindcss() ],
  },
});
