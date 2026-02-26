import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"articles">;

export interface TagSummary {
  label: string;
  value: string;
  slug: string;
  count: number;
}

const formatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}

export function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

export function encodeTag(tag: string): string {
  return encodeURIComponent(normalizeTag(tag));
}

export async function getPublishedArticles(): Promise<Article[]> {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function getTagSummaries(articles: Article[]): TagSummary[] {
  const map = new Map<string, TagSummary>();

  for (const article of articles) {
    for (const rawTag of article.data.tags) {
      const normalized = normalizeTag(rawTag);
      if (!normalized) continue;

      const existing = map.get(normalized);
      if (existing) {
        existing.count += 1;
        continue;
      }

      map.set(normalized, {
        label: rawTag,
        value: normalized,
        slug: encodeURIComponent(normalized),
        count: 1,
      });
    }
  }

  return [...map.values()].sort(
    (a, b) => b.count - a.count || a.value.localeCompare(b.value),
  );
}

export function hasTag(article: Article, tag: string): boolean {
  const normalized = normalizeTag(tag);
  return article.data.tags.some((entryTag) => normalizeTag(entryTag) === normalized);
}

