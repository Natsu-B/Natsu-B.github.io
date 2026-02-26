import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedArticles } from "../lib/articles";

export async function GET(context: APIContext) {
  const articles = await getPublishedArticles();

  return rss({
    title: "Natsu-B Articles",
    description: "Natsu-B の技術記事RSSフィード",
    site: context.site ?? "https://natsu-b.github.io",
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.description,
      link: `/articles/${article.id}/`,
      categories: article.data.tags,
    })),
    customData: "<language>ja-jp</language>",
  });
}

