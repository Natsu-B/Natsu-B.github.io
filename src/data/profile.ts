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

export interface Career {
  period: string;
  title: string;
  summary: string;
  url?: string;
}

export type SlideFormat = "pdf" | "pptx" | "speakerdeck";

export interface SlideDeck {
  slug: string;
  title: string;
  date: string;
  event?: string;
  description: string;
  format: SlideFormat;
  url: string;
  embedUrl?: string;
  embedHtml?: string;
  tags?: string[];
}

export const profile = {
  name: "ほたるいか",
  handle: "@hotaru",
  avatar: "/images/hotaru.jpg",
  bio: "低レイヤが好きです",
  longBio:
    "ハイパーバイザやコンパイラなど低レイヤーソフトウェア全般が好きです\n他にも基板作成などハードウェア寄りのこともやります",
  links: [
    { label: "GitHub", url: "https://github.com/Natsu-B" },
    { label: "X", url: "https://x.com/0x00000000_" },
    { label: "Articles", url: "/articles/" },
    { label: "Slides", url: "/slides/" },
  ] satisfies ProfileLink[],
  contact: {
    github: "https://github.com/Natsu-B",
    x: "@0x00000000_",
    emailMasked: "hotaru.dev.jp [at] gmail.com",
  },
} as const;

export const interests = [
  "AArch64 / Virtualization",
  "Compiler / Debugger Internals",
  "Rustでの低レイヤ実装",
  "基板作成",
] as const;

export const skills = [
  "Rust",
  "C / C++",
  "AArch64",
  "QEMU / GDB",
  "KiCad",
] as const;

export const careers: Career[] = [
  {
    period: "2025.5 - 2026.3",
    title: "SecHack365 '25",
    summary: "SecHack365 坂井ゼミに所属",
  },
  {
    period: "2025.10 - ",
    title: "サイボウズ・ラボユース",
    summary: "サイボウズ・ラボユースにて、Raspberry Pi 5でのAMPの開発"
  },
  {
    period: "2024夏",
    title: "セキュリティキャンプ 2024 全国大会",
    summary: "AArch64 UEFI環境向けのType-1 Hypervisorを実装。",
    url: "https://trap.jp/post/2355/"
  },
  {
    period: "2024.4 - ",
    title: "東京科学大学",
    summary: "東京科学大学 情報理工学院 情報工学系に在籍",
  }
];

export const slideDecks: SlideDeck[] = [
  /*
  // PDFをpublic/slidesに置く場合
  {
    slug: "example-slide",
    title: "発表タイトル",
    date: "2026-05-18",
    event: "イベント名",
    description: "発表内容の一行説明",
    format: "pdf",
    url: "/slides/example-slide.pdf",
    embedUrl: "/slides/example-slide.pdf",
    tags: ["AArch64", "Hypervisor"],
  },

  // Speaker Deckのiframeまたはscript埋め込みを貼る場合
  {
    slug: "example-speakerdeck",
    title: "Speaker Deckの発表タイトル",
    date: "2026-05-18",
    event: "イベント名",
    description: "発表内容の一行説明",
    format: "speakerdeck",
    url: "https://speakerdeck.com/user/deck-id",
    embedHtml: '<iframe src="https://speakerdeck.com/player/deck-id" title="Speaker Deckの発表タイトル" allowfullscreen></iframe>',
    tags: ["Rust"],
  },
  */
  {
    slug: "create-linker",
    title: "リンカを1週間で作ってみた",
    date: "2026-04-17",
    event: "コンパイラのコンパの部分 第2回",
    description: "newlibを標準ライブラリとしてリンクするリンカを作成して、その仕組みを説明",
    format: "speakerdeck",
    url: "https://speakerdeck.com/hotaru_jp/rinkawozuo-tutemita",
    embedHtml: '<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/82b46ccec8be42039137c8fdba697e99" title="リンカを作ってみた" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>',
    tags: ["Rust", "Linker"],
  },
  {
    slug: "raspberry-pi-5-bootprocess",
    title: "Raspberry Pi 5の起動プロセスについて",
    date: "2026-03-20",
    event: "Kernel/VM つくば",
    description: "Raspberry Pi 5の起動プロセスについての詳細な解説",
    format: "speakerdeck",
    url: "https://speakerdeck.com/hotaru_jp/raspberry-pi-5noqi-dong-purosesunituite",
    embedHtml: '<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/ca6b8d5de7e64a35b0c61e833b6095d3" title="Raspberry Pi 5の起動プロセスについて" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>',
    tags: ["Raspberry Pi 5", "Boot Process"],
  },
  {
    slug: "hypervisor",
    title: "デバッグ支援ハイパーバイザとRaspberry Pi 5でのAMP",
    date: "2026-03-09",
    event: "BitVisor Summit 14",
    description: "デバッグ支援ハイパーバイザとRaspberry Pi 5でのAMPについての発表",
    format: "speakerdeck",
    url: "https://speakerdeck.com/hotaru_jp/debatuguzhi-yuan-haipabaizatoraspberry-pi-5denoamp",
    embedHtml: '<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/0bd8810b22a7469bb2990eb232377037" title="デバッグ支援ハイパーバイザとRaspberry pi 5でのAMP" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>',
    tags: ["Raspberry Pi 5", "Hypervisor", "Debugging"],
  }
];

export const projects: Project[] = [
  {
    name: "aarch64_type1_hypervisor",
    description:
      "AArch64向けのType-1 Hypervisor実装 GDBに接続可能なハイパーバイザ型OSデバッガのHyprProbeや、Raspberry Pi 5上で動作するハイパーバイザなどを作成",
    url: "https://github.com/Natsu-B/aarch64_type1_hypervisor",
    tags: ["Rust", "AArch64", "Hypervisor", "U-Boot", "Raspberry Pi 5", "HyprProbe"],
  },
  {
    name: "hypervisor",
    description:
      "セキュリティキャンプ 2024 全国大会にて作成したハイパーバイザ AArch64 uefi環境向けのType-1 Hypervisor",
    url: "https://github.com/Natsu-B/hypervisor",
    tags: ["Rust", "AArch64", "Hypervisor", "UEFI"],
  },
  {
    name: "linker",
    description: "newlibを標準ライブラリとして静的リンクできるリンカ",
    url: "https://github.com/Natsu-B/my_linker",
    tags: ["Rust", "Linker", "newlib"],
  },
  {
    name: "c_compiler",
    description:
      "プリプロセッサや中間言語を実装したCコンパイラ",
    url: "https://github.com/Natsu-B/c_compiler",
    tags: ["C", "Compiler"],
  },
];
