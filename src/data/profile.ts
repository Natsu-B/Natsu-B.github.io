export interface ProfileLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export const profile = {
  name: "Natsu B",
  handle: "@natsu-b",
  avatar: "/images/avatar.svg",
  bio: "低レイヤからWebまで、設計と実装を行き来しながら作って検証して公開する開発者。",
  longBio:
    "AArch64・Rust・ハイパーバイザ実装を中心に、調査から実装、検証までを一気通貫で進めるのが得意です。最近は学習ログや技術メモを継続して発信できるよう、Web側の発信基盤も整備しています。",
  links: [
    { label: "GitHub", url: "https://github.com/Natsu-B" },
    { label: "Articles", url: "/articles/" },
    { label: "RSS", url: "/rss.xml" },
  ] satisfies ProfileLink[],
  contact: {
    github: "https://github.com/Natsu-B",
    x: "@natsu_b",
    emailMasked: "natsu.dev [at] example.com",
  },
} as const;

export const interests = [
  "AArch64 / Virtualization",
  "Rustでの低レイヤ実装",
  "検証自動化と開発体験の改善",
  "技術記事の継続的な公開",
] as const;

export const skills = [
  "Rust",
  "C / C++",
  "AArch64",
  "QEMU / GDB",
  "Astro / TypeScript",
  "GitHub Actions",
] as const;

export const projects: Project[] = [
  {
    name: "aarch64_type1_hypervisor",
    description:
      "AArch64向けのType-1 Hypervisor実装。ブートから例外処理、デバッグフローまでを段階的に検証。",
    url: "https://github.com/Natsu-B/aarch64_type1_hypervisor",
    tags: ["Rust", "AArch64", "Hypervisor"],
  },
  {
    name: "Natsu-B.github.io",
    description:
      "この個人サイト。Astro + Content Collectionsで記事管理し、GitHub Pagesへ自動デプロイ。",
    url: "https://github.com/Natsu-B/Natsu-B.github.io",
    tags: ["Astro", "Tailwind CSS", "GitHub Pages"],
  },
  {
    name: "gdb_remote",
    description:
      "デバッグ支援を目的にした実験的なツール群。リモート実行環境の観測を効率化するための検証を実施。",
    url: "https://github.com/Natsu-B",
    tags: ["Rust", "Debug", "Tooling"],
  },
  {
    name: "SECCON/SECCAMP Demo Assets",
    description:
      "発表・デモ用コンテンツの管理と公開導線の整備。リンク整理と再利用性向上を重視。",
    url: "https://github.com/Natsu-B",
    tags: ["Presentation", "Docs", "Web"],
  },
];

