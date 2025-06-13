import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alwalxed.com",
  output: "static",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
      langs: [
        "javascript",
        "typescript",
        "html",
        "css",
        "json",
        "bash",
        "python",
        "go",
        "rust",
      ],
      wrap: true,
    },
    gfm: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["shiki"],
    },
  },
});
