---
title: Astroで個人サイトを再構築した
date: 2026-02-24
description: 既存の静的HTMLをAstro + Content Collectionsへ移行し、記事運用できる構成に刷新したメモです。
tags:
  - Astro
  - GitHub Pages
  - Frontend
draft: false
lang: ja
---

個人サイトを「固定ページだけの場所」から「記事を書き続ける場所」へ移行した。

今回の主な変更点は次の3つ。

1. ルーティングを整理して `/articles` と `/tags` を追加
2. Markdown記事を `src/content/articles` で管理
3. GitHub Actions経由でPagesへデプロイ

運用上のポイントは `draft` フラグで、公開前の記事を一覧から除外できること。
これで下書きと公開記事を1つのリポジトリで扱いやすくなった。

