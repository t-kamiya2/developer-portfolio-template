# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

Next.js (App Router) + TypeScript + Tailwind CSS v4 で構築された、日本語のエンジニア向けポートフォリオサイトのテンプレート。`src/lib/portfolio-data.ts` の内容は個人情報を含まないよう完全にジェネリック化されたサンプルデータであり、実データは別のPrivateリポジトリで管理される(README.md参照)。

## コマンド

```bash
npm run dev      # 開発サーバー起動 (Turbopack)
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLint実行
```

テストは現時点で構成されていない。

## アーキテクチャ

### データ駆動の構造

全ページコンテンツは `src/lib/portfolio-data.ts` にエクスポートされた型付きデータ(`profile`, `strengths`, `stackHighlights`, `projects`, `skillGroups`, `qualifications`, `contact`)に集約されている。コンポーネント側はロジック・レイアウトのみを担い、文言・経歴・スキルレベルなどのコンテンツは一切ハードコードしない。新しいプロジェクト経歴やスキルを追加する場合は、まずこのファイルの該当する配列に要素を追加する。

### デュアルテーマシステム(pale / terminal)

サイトは "pale"(明るい/柔らかい)と "terminal"(ダーク/ターミナル風)という2つの視覚テーマを持ち、UI文言・フォント・記号までテーマごとに出し分けている。

- **状態管理**: `src/components/theme/ThemeProvider.tsx` が `ThemeContext` でテーマ状態(`ThemeId = "pale" | "terminal"`)を提供。`localStorage`(キー: `portfolio-theme`)に永続化し、`<html data-theme="...">` 属性に反映する。
- **FOUC対策**: `src/app/layout.tsx` にインラインスクリプト(`noFlashScript`)を埋め込み、React hydration前に `localStorage` の値を読んで `data-theme` を即時設定している。ここを変更する際はSSR出力とズレないよう注意。
- **配色トークン**: `src/app/globals.css` の `[data-theme="pale"]` / `[data-theme="terminal"]` ブロックでCSSカスタムプロパティ(`--surface`, `--text`, `--accent`, `--level-*` など)を定義。すべて `oklch()` で色指定。コンポーネントはこれらの変数を `style={{ color: "var(--text)" }}` のように直接参照する(Tailwindのカラーユーティリティではなく、CSS変数越しに配色する設計)。
- **テーマ別文言**: `src/lib/theme-copy.ts` の `themeCopy[theme]` オブジェクトが、ロゴ文字列・ナビラベル・見出しプレフィックス(`## ` など)・記号(`▸` vs `›`)といったテーマ依存のUI文言をまとめて保持する。新しいUI文言を追加する際、テーマで表現を変えたい場合はここに追加する。
- 各クライアントコンポーネントは `useTheme()` でテーマを取得し、`theme === "terminal"` の分岐で `var(--font-mono)` / `var(--font-sans)` を切り替えるパターンが繰り返し使われている(`Nav.tsx`, `SkillsContent.tsx` など)。

### スキルレベル表現

`src/lib/skill-levels.ts` がスキル評価(`A`〜`E` または `null`)の並び替え・色/テキスト表示ロジックを提供する(`sortByLevel`, `levelDotVar`, `levelTextVar`)。レベルごとの色は `globals.css` の `--level-a`〜`--level-e`, `--level-none` に対応し、テーマごとに別の色に解決される。

### ページ構成

`src/app/` はルートごとに `page.tsx` を持ち、実際のUIは `src/components/{home,career,skills}/` 配下のコンポーネントに委譲する薄いラッパー(App Router標準パターン)。共通レイアウト(`Nav`, `Footer`, `ThemeProvider`)は `src/app/layout.tsx` に集約。

### claude-design/ ディレクトリ

Claude Design (claude.ai/design) のデザインキャンバス成果物(`.dc.html`, `support.js`, `portfolio-data.js` など)が置かれている。ビルド・lintの対象外(`eslint.config.mjs` で明示的にignore)。実装との同期は手動で行う想定で、アプリケーションコードとは独立している。

## パスエイリアス

`@/*` → `src/*`(`tsconfig.json` で設定)。
