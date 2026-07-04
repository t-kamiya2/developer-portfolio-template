# developer-portfolio-template

ポートフォリオの雛形用のリポジトリ。実際の内容は個人情報を含むためPrivateリポジトリに記載。

## 技術スタック

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- React 19 / TypeScript
- Tailwind CSS v4

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できる。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 (Turbopack) |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | ESLint実行 |

## 構成

- `src/lib/portfolio-data.ts` — プロフィール・経歴・スキルなど全ページのコンテンツデータ(本リポジトリではサンプル値)。中身を差し替えるだけでポートフォリオを更新できる。
- `src/lib/theme-copy.ts` / `src/lib/skill-levels.ts` — テーマ別文言・スキル評価レベルのロジック。
- `src/components/` — ページごとのUIコンポーネント(`home/`, `career/`, `skills/`)と共通コンポーネント(`Nav`, `Footer`, `theme/`)。
- `src/app/` — App Routerのルーティング(`/`, `/career`, `/skills`)。
- `claude-design/` — [Claude Design](https://claude.ai/design) で作成したデザインキャンバス成果物。ビルド・lint対象外で、実装との同期は手動。

## テーマ

サイトは "pale"(明るい)と "terminal"(ダーク/ターミナル風)の2テーマを切り替えられる。テーマはヘッダー右上のトグルボタンで変更でき、選択状態は`localStorage`に保存される。配色は`src/app/globals.css`のCSSカスタムプロパティ、テーマ別文言は`src/lib/theme-copy.ts`で管理している。

詳細なアーキテクチャはCLAUDE.mdを参照。
