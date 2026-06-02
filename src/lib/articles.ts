import { getCollection, type CollectionEntry } from "astro:content";
import type { ExternalArticle } from "../data/externalArticles";
import type { Project, SlideDeck } from "../data/profile";

export type Article = CollectionEntry<"articles">;
export type TaggableItem = Article | Project | SlideDeck | ExternalArticle;

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
  return getTagSummariesFromItems(articles, (article) => article.data.tags);
}

export function getTagSummariesFromItems<T>(
  items: T[],
  getTags: (item: T) => readonly string[] | undefined,
): TagSummary[] {
  const map = new Map<string, TagSummary>();

  for (const item of items) {
    for (const rawTag of getTags(item) ?? []) {
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

export function getCombinedTagSummaries(
  articles: Article[],
  projects: Project[],
  slides: SlideDeck[] = [],
  externalArticles: ExternalArticle[] = [],
): TagSummary[] {
  return getTagSummariesFromItems(
    [...articles, ...projects, ...slides, ...externalArticles] satisfies TaggableItem[],
    (item) => {
      if ("data" in item) return item.data.tags;
      return item.tags;
    },
  );
}

export function hasTag(article: Article, tag: string): boolean {
  const normalized = normalizeTag(tag);
  return article.data.tags.some((entryTag) => normalizeTag(entryTag) === normalized);
}

export function hasStringTag(tags: readonly string[] | undefined, tag: string): boolean {
  const normalized = normalizeTag(tag);
  return (tags ?? []).some((entryTag) => normalizeTag(entryTag) === normalized);
}
