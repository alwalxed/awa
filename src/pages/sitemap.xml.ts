import { getCollection } from "astro:content";

export const GET = async ({ site }: { site: any; }) => {
  const articles = await getCollection("articles", ({ data }) => !data.draft);

  const staticPages = [
    "",
  ];

  const staticUrls = staticPages.map(page => `
  <url>
    <loc>${ site }${ page }</loc>
    <lastmod>${ new Date().toISOString() }</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`).join("");

  const articleUrls = articles.map(article => `
  <url>
    <loc>${ site }articles/${ article.slug }</loc>
    <lastmod>${ article.data.date.toISOString() }</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ staticUrls }
  ${ articleUrls }
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};