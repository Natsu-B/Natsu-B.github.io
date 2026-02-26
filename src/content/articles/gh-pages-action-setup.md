---
title: GitHub PagesデプロイをActionsに統一した
date: 2026-02-14
description: GitHub PagesのSourceをGitHub Actionsに切り替え、ビルド済みartifactをdeployする構成にした。
tags:
  - GitHub Actions
  - GitHub Pages
  - CI
draft: false
lang: ja
---

GitHub Pagesの公開方法を、手動更新からActionsベースへ変更した。

フローはシンプルで、push時に

1. 依存関係をインストール
2. `npm run build`
3. artifact upload
4. deploy

という順で実行する。

この形にしておくと、ローカルと本番の差分が追いやすくなる。

