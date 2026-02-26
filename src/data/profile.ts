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
    name: "c_compiler",
    description:
      "プリプロセッサや中間言語を実装したCコンパイラ",
    url: "https://github.com/Natsu-B/c_compiler",
    tags: ["C", "Compiler"],
  },
];
