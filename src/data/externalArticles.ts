export interface ExternalArticle {
  title: string;
  date: string;
  source: string;
  description: string;
  url: string;
  tags: string[];
}

export const externalArticles: ExternalArticle[] = [
  {
    title: "セキュリティ・キャンプでハイパーバイザを作りました!!!",
    date: "2024-09-13",
    source: "traP",
    description:
      "セキュリティ・キャンプ2024 全国大会で、AArch64向けType-1 Hypervisorを作成し、QEMUとRaspberry Pi 5で動作させた参加記。",
    url: "https://trap.jp/post/2355/",
    tags: ["AArch64", "Hypervisor", "Raspberry Pi 5", "Security Camp"],
  },
  {
    title: "セキュリティ・キャンプ2024ハイパーバイザゼミ応募課題さらし",
    date: "2024-09-13",
    source: "Zenn",
    description:
      "セキュリティ・キャンプ2024 S12 ハイパーバイザゼミの応募課題と調査内容を公開した記事。",
    url: "https://zenn.dev/hotaru_jp/articles/a482bbd3520c39",
    tags: ["AArch64", "Hypervisor", "Security Camp"],
  },
];

export const sortedExternalArticles = [...externalArticles].sort((a, b) =>
  b.date.localeCompare(a.date),
);
