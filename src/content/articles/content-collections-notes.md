---
title: Content Collections運用メモ
date: 2026-02-19
description: frontmatterスキーマを定義して、記事データの品質を保つための最小ルールをまとめました。
tags:
  - Astro
  - Content Collections
  - TypeScript
draft: false
lang: ja
---

frontmatterに最低限のスキーマを定義すると、記事追加時の事故をかなり減らせる。

必須項目は以下。

- `title`
- `date`
- `description`
- `tags`
- `draft`

任意項目として `lang` を入れておくと、日本語記事と英語記事を今後分離しやすい。

