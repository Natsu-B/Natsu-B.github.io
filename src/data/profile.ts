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

export interface BoardSpec {
  label: string;
  value: string;
}

export interface HardwareBoard {
  slug: string;
  name: string;
  summary: string;
  description: string;
  stage?: string;
  period?: string;
  image?: {
    src: string;
    alt: string;
  };
  repositoryUrl?: string;
  links: ProfileLink[];
  tags: string[];
  specs: BoardSpec[];
  highlights: string[];
  notes?: string[];
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

export const hardwareBoards: HardwareBoard[] = [
  {
    slug: "avi-99l-mission-board",
    name: "Avi_99L_MissionBoard",
    summary:
      "99Lロケット向けのミッション基板。離床後の機体ロール角速度取得、動翼制御、飛行終盤のパラシュート機構開放を担う。",
    description:
      "ESP32-S3を中心に、IMU、CAN、I2C/CAN物理層変換、microSD、2系統のモータドライバ、5V保護railを載せたミッション基板。KiCadで回路・PCBを設計し、Rust firmware 側では board resources と device initialization を明示的に分割して扱う。",
    stage: "PCB / Firmware",
    period: "2026",
    repositoryUrl: "https://github.com/CREATE-ROCKET/Avi_99L_MissionBoard",
    links: [
      { label: "Repository", url: "https://github.com/CREATE-ROCKET/Avi_99L_MissionBoard" },
    ],
    tags: ["KiCad", "PCB", "Rust", "ESP32-S3", "Rocket"],
    specs: [
      { label: "MCU", value: "ESP32-S3-WROOM-1" },
      { label: "IMU", value: "ICM-42688-P" },
      { label: "Interface", value: "CAN / I2C / microSD / USB-C" },
      { label: "Motor Driver", value: "TB67H450FNG x2" },
      { label: "Power", value: "TPS2121 / LM66100 / TCKE800" },
      { label: "Firmware", value: "Rust / esp-hal" },
    ],
    highlights: [
      "動翼・パラシュート機構を制御するため、モータ、エンコーダ、IMU、SD、CANを用途別resourceとして分割。",
      "5V保護railを型状態で扱い、rail off時のdevice使用をcompile errorに寄せる設計。",
      "KiCad上のラベル名と実GPIO接続がずれやすい箇所をREADMEで明文化し、firmware側のGPIO定義を正にする運用。",
    ],
    notes: [
      "実物写真やKiCad 3D Viewerの画像を追加したら、image.src と image.alt を設定するだけで一覧・詳細ページの両方に反映される。",
    ],
  },
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
