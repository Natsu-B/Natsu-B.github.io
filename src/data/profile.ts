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
  featured?: boolean;
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
    period: "2026.8 - 2026.9",
    title: "ソニーグループ 職場密着インターン",
    summary: "System Architecture & Software [R&D] コースの組み込みLinux領域で、Linuxカーネル開発に4週間取り組んだ。",
    url: "https://www.sony.com/ja/SonyInfo/Jobs/sgc-recruit/newgrads/internship/long-internship/#hw_03",
  },
  {
    period: "2025.5 - 2026.3",
    title: "SecHack365 '25",
    summary: "坂井ゼミで、ソフトウェアのみで実機デバッグを可能にするハイパーバイザ型OSデバッガ「HyprProbe」を開発。GDB / VS Code連携、メモリアクセス監視、異常IRQ・例外処理失敗の検知などを実装し、QEMUとRaspberry Pi 4で動作を確認。",
    url: "https://sechack365.nict.go.jp/achievement/2025/pdf/30Ss.pdf",
  },
  {
    period: "2025.10 - 2026.9",
    title: "サイボウズ・ラボユース",
    summary: "Raspberry Pi 5でのAMP構成の開発に取り組み、RP1での独自ファームウェア起動やBCM2712上のLinuxとの連携を調査・実装。その後もrp1-halとして関連開発を継続。",
    url: "https://github.com/Natsu-B/rp1-hal",
  },
  {
    period: "2024.4 - 2026.8",
    title: "ロケットサークル CREATE（99L）",
    summary: "99L機の動翼制御系を担当。統合基板の設計から機体側・地上側の組込みソフトウェアまで開発し、ミッション基板ファームウェアは実際の飛行に使用された。",
    url: "https://youtu.be/iyHNUBBM54Y?si=uF9rUiykg44XpC5p",
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
    slug: "sechack365-2025-hyprprobe-poster",
    title: "HyprProbe: ソフトウェアのみでデバッグを可能にするハイパーバイザ型OSデバッガ",
    date: "2026-02-28",
    event: "SecHack365 2025 成果発表会",
    description: "SecHack365の成果ポスター。追加のデバッグ機材なしで動作するHyprProbeの仕組みやGDB / VS Code連携、メモリアクセス監視、異常IRQ検知、QEMUとRaspberry Pi 4での動作検証を紹介。",
    format: "pdf",
    featured: true,
    url: "https://sechack365.nict.go.jp/achievement/2025/pdf/30Ss.pdf",
    tags: ["AArch64", "Hypervisor", "HyprProbe", "Debugging", "Raspberry Pi 4"],
  },
  {
    slug: "raspberry-pi-5-rp1-custom-program",
    title: "Raspberry Pi 5のRP1でも自作プログラムをうごかしたい！",
    date: "2026-08-22",
    event: "kernel/VM 東京 No19",
    description: "Raspberry Pi 5のRP1で自作ファームウェアを動かし、BCM2712側のLinuxと共存させるためのブート、PCIe endpoint初期化、リソース共有についての発表",
    format: "speakerdeck",
    url: "https://speakerdeck.com/hotaru_jp/raspberry-pi-5-no-rp1-demo-jisaku-puroguramu-o-ugokashitai",
    embedHtml: '<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/11890bfc09f4469aa25936a59dcc8518" title="Raspberry Pi 5のRP1でも自作プログラムをうごかしたい！" allowfullscreen="true" allow="web-share" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>',
    tags: ["Raspberry Pi 5", "RP1", "PCIe", "Firmware", "Linux"],
  },
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
    name: "rp1-hal",
    description:
      "Raspberry Pi CM5のRP1内蔵Cortex-M3向けRust HAL・ランタイムを開発。2コア起動、BCM2712側のブートローダー、LinuxとのSCMI・UIO・共有メモリ通信を実装し、実機で動作を確認。",
    url: "https://github.com/Natsu-B/rp1-hal",
    tags: ["Rust", "RP1", "Cortex-M3", "AMP", "Linux"],
  },
  {
    name: "HyprProbe / AArch64 Hypervisor",
    description:
      "Rust製AArch64 Type-1ハイパーバイザとOSデバッガ「HyprProbe」を開発。GDB / VS Code連携、ブレークポイント・ウォッチポイント、メモリアクセス監視、異常IRQ・例外処理失敗の検知に対応し、QEMUとRaspberry Pi 4で動作を確認。",
    url: "https://github.com/Natsu-B/aarch64_type1_hypervisor",
    tags: ["Rust", "AArch64", "Hypervisor", "Debugging", "HyprProbe"],
  },
  {
    name: "C99L Mission Board",
    description:
      "ロケットサークルCREATEのC99L機の実飛行に使用したESP32-S3向けミッション基板ファームウェアを開発。離床・頂点判定、動翼制御、パラシュート制御、CAN通信、飛行ログ記録などを実装。",
    url: "https://github.com/Natsu-B/Avi_99L_MissionBoard",
    tags: ["C++", "ESP32-S3", "Rocket", "Control"],
  },
  {
    name: "reld",
    description: "Rust製のx86-64向けELFリンカ。newlibに加えてglibcの静的リンクにも対応し、TLSやIFUNCなどを実装。",
    url: "https://github.com/Natsu-B/reld",
    tags: ["Rust", "Linker", "newlib"],
  },
  {
    name: "c_compiler",
    description:
      "C99の一部に対応するCコンパイラをC言語で実装。プリプロセッサ、構文解析、独自の中間表現、x86-64アセンブリ生成を実装し、自身のソースコードをコンパイルするセルフホストを達成。",
    url: "https://github.com/Natsu-B/c_compiler",
    tags: ["C", "Compiler", "x86-64", "Self-hosting"],
  },
  {
    name: "hypervisor",
    description:
      "セキュリティキャンプ 2024 全国大会にて作成したハイパーバイザ AArch64 uefi環境向けのType-1 Hypervisor",
    url: "https://github.com/Natsu-B/hypervisor",
    tags: ["Rust", "AArch64", "Hypervisor", "UEFI"],
  },
];
