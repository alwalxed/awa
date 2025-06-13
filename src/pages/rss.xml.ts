import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);

  return rss({
    title: 'awa',
    description: `i write about software, share what i'm learning, and document my journey.`,
    site: context.site!,
    items: articles
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((article) => ({
        title: article.data.title,
        pubDate: article.data.date,
        description: article.data.excerpt,
        link: `/articles/${ article.slug }/`,
        categories: article.data.tags || [],
      })),
    customData: `<language>en-us</language>`,
  });
}