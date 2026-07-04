// Sample data for the skill-sheet portfolio site.
// Fully genericized for public display — no real PII.

export interface Profile {
  role: string;
  tagline: string;
  years: string;
  summary: string[];
  heroEyebrow: string;
  heroHeadline: string[];
  heroStackLabel: string;
  heroStackSubLabel: string;
}

export interface Strength {
  title: string;
  body: string;
}

export type SkillLevel = "A" | "B" | "C" | "D" | "E" | null;

export interface SkillItem {
  label: string;
  level: SkillLevel;
}

export interface SkillGroup {
  name: string;
  items: SkillItem[];
}

export interface Project {
  period: string;
  title: string;
  role: string;
  scale: string;
  process: string[];
  stack: string[];
  body: string[];
  summary: string;
}

export interface Contact {
  github: string;
  note: string;
}

export const profile: Profile = {
  role: "フルスタックエンジニア",
  tagline:
    "要件定義から設計・実装・テスト・保守運用まで、一貫して対応できるエンジニア",
  years: "10年以上",
  summary: [
    "エンジニアとして10年以上のキャリアがあり、要件定義から設計、実装、テスト、保守運用まで一通り経験。自走して作業が可能です。",
    "SIer企業での受託開発・社内SEを経てフリーランスへ。Javaでのバックエンド開発を軸に、C#・JavaScript/TypeScript・Vue.js・React・Pythonを習得しフルスタックで従事しています。",
    "近年はAWS/GCP/Azureを問わずクラウドインフラの構築も経験。AIコーディングはClaude Codeを日常的に活用しています。",
  ],
  heroEyebrow: "FULL-STACK ENGINEER",
  heroHeadline: ["要件定義から運用まで、", "一貫して任せられる", "エンジニアです。"],
  heroStackLabel: "Full-stack",
  heroStackSubLabel: "要件定義〜保守運用",
};

export const strengths: Strength[] = [
  {
    title: "開発効率・保守性を意識した設計",
    body: "共通化を常に意識して実装。デザインパターンやパフォーマンスも考慮した開発ができます。",
  },
  {
    title: "コミュニケーション能力",
    body: "要件定義で顧客・他チームとの調整に従事した経験があり、円滑な合意形成が得意です。",
  },
  {
    title: "キャッチアップ能力",
    body: "多様なプロジェクトで初見の業務・技術に触れる機会が多く、成長意欲も高いためキャッチアップが早いです。",
  },
];

export const stackHighlights: string[] = [
  "Python",
  "TypeScript",
  "React",
  "Vue.js",
  "FastAPI",
  "GCP",
  "Azure",
  "AWS",
  "GitHub",
];

export const projects: Project[] = [
  {
    period: "2024年 〜 現在",
    title: "ECサイトの新規開発・保守運用",
    role: "メンバー",
    scale: "6〜10名",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "テスト", "保守・運用"],
    stack: ["TypeScript", "React", "Node.js", "GCP", "Cloud Run", "Firestore", "GitHub"],
    body: [
      "商品検索・注文管理機能のAPI設計・実装。非同期処理を用いた在庫連携バッチ基盤を構築。",
      "管理画面のフロントエンド開発。既存デザインシステムに沿ったコンポーネント設計を担当。",
      "レポート出力機能の開発。外部サービスとのデータ連携を行うAgent的な処理を実装。",
    ],
    summary:
      "クラウドサービスの実務初採用が多い環境でしたが、個人開発でも並行して環境を構築し理解を深めながらキャッチアップ。クリーンアーキテクチャとSRPを適用し、コードレビューを通じて保守性の高いコードベース維持に貢献しました。パフォーマンス制約に対しては自ら手法を調査・特定し、UXを改善しました。",
  },
  {
    period: "2023年 〜 2024年",
    title: "業務支援ツールの開発",
    role: "メンバー",
    scale: "1〜5名",
    process: ["基本設計", "詳細設計", "製造・実装", "単体テスト", "結合テスト"],
    stack: ["Python", "Flask", "React", "Azure", "Azure Functions", "Azure WebApp", "Docker", "GitHub"],
    body: [
      "キュー/タイマートリガーのAzure Functionsを構築。Azure WebApp(API: Flask, Frontend: React)を構築。",
      "外部APIを用いたデータ処理機能を実装。別システムDBからのETL処理を設計・実装。",
      "認証方式の切り替え、シークレット管理の移行、コンテナ化を担当。",
    ],
    summary:
      "言語・クラウド基盤ともに実務初採用でしたが、独学の知見を活かしスムーズにキャッチアップ。大規模データでも耐えるETLの方式を提案・実装し、フロントエンドのUXも改善しました。",
  },
  {
    period: "2022年 〜 2023年",
    title: "会計システムのリニューアル(C# WebAPI + React)",
    role: "メンバー",
    scale: "100名以上",
    process: ["詳細設計", "製造・実装", "単体テスト"],
    stack: ["C#", ".NET Core", "TypeScript", "React", "Redux", "SQL Server"],
    body: [
      "帳票作成機能、マスタ情報のDB更新・削除機能を担当。",
      "帳票レイアウト作成(複数本)、API詳細設計、データ取得〜加工〜出力までを実装。",
    ],
    summary:
      "短期間で複数帳票を作成し、効率的なやり方をチームに提案。複数帳票種別で共通する処理を多態性を意識して共通化し、量産時の工数削減に貢献しました。",
  },
  {
    period: "2019年 〜 2022年",
    title: "自社SaaS製品のフロント/バックエンド開発",
    role: "リーダー",
    scale: "11〜50名",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "テスト", "保守・運用"],
    stack: ["TypeScript", "Vue.js", "Quasar", "Backlog", "Git"],
    body: [
      "既存の掲示板・カレンダーアプリのバグ改修や追加機能開発を担当。",
      "新規ワークフローアプリの技術選定・機能検討・テーブル設計・API設計〜開発を主導。",
    ],
    summary:
      "APIファーストでの設計を中心となって推進し、他アプリからも利用可能な設計を実現。ツリー構造のUIを提案しUXを改善。常に共通化を意識し保守性の高い製品開発に貢献しました。",
  },
  {
    period: "2016年 〜 2019年",
    title: "社内SEとして業務効率化システムの企画〜運用を一貫担当",
    role: "リーダー",
    scale: "6〜10名",
    process: ["要件定義", "製造・実装", "テスト", "保守・運用"],
    stack: ["GCP", "SQL Server", "AWS", "C#"],
    body: [
      "受付システムの要件定義〜開発〜リリース〜ユーザーサポートまで一貫担当。",
      "基幹システムのバージョンアップに伴うサーバ移行、業務システムのリプレイス、定型作業の自動化を担当。",
    ],
    summary:
      "関係チームとの調整をリードしながら複数システムの刷新を推進。要件定義から保守運用までを一気通貫で担当し、複数拠点への導入・サポートも実施しました。",
  },
  {
    period: "2013年 〜 2016年",
    title: "業務システム開発プロジェクト(SES)",
    role: "リーダー",
    scale: "100名以上",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "単体テスト"],
    stack: ["Java", "C#", "PostgreSQL", ".NET Framework", "Spring"],
    body: [
      "業務システム開発支援ツールの一括データインポートバッチ・帳票出力機能を開発。",
      "複数の大規模プロジェクトに要件定義〜開発支援まで従事。",
    ],
    summary:
      "現行仕様の読み解きから新システムへの仕様策定までを主導し、若手メンバーの育成や進捗管理も担当しました。",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "担当工程",
    items: [
      { label: "システム企画提案", level: null },
      { label: "要件定義", level: "B" },
      { label: "基本設計", level: "A" },
      { label: "詳細設計", level: "A" },
      { label: "製造・実装", level: "A" },
      { label: "単体テスト", level: "A" },
      { label: "結合・総合テスト", level: "A" },
      { label: "保守・運用", level: "B" },
      { label: "マネジメント", level: null },
    ],
  },
  {
    name: "言語",
    items: [
      { label: "Java", level: "A" },
      { label: "JavaScript", level: "A" },
      { label: "TypeScript", level: "A" },
      { label: "Python", level: "A" },
      { label: "C#", level: "A" },
      { label: "HTML/CSS", level: "B" },
      { label: "SQL", level: "A" },
      { label: "PL/SQL", level: null },
      { label: "Kotlin", level: null },
      { label: "Java(Android)", level: "B" },
      { label: "Swift", level: null },
      { label: "PHP", level: "B" },
      { label: "Go", level: null },
      { label: "Shell", level: null },
      { label: "VB", level: null },
    ],
  },
  {
    name: "フレームワーク / ライブラリ",
    items: [
      { label: "React", level: "A" },
      { label: "Vue.js", level: "A" },
      { label: "Angular", level: null },
      { label: "Node.js", level: "D" },
      { label: "Flask", level: "B" },
      { label: "Django", level: null },
      { label: "Spring / Spring Boot", level: "B" },
      { label: "Struts", level: null },
      { label: ".NET Framework / Core", level: null },
      { label: "Ruby on Rails", level: null },
      { label: "Bootstrap", level: null },
      { label: "jQuery", level: null },
      { label: "Laravel", level: null },
      { label: "Firebase", level: "D" },
    ],
  },
  {
    name: "クラウド / インフラ",
    items: [
      { label: "GCP", level: "B" },
      { label: "Azure", level: "B" },
      { label: "AWS", level: "C" },
      { label: "Salesforce", level: "B" },
      { label: "GitHub", level: "A" },
      { label: "Backlog", level: "B" },
      { label: "Docker", level: null },
    ],
  },
  {
    name: "データベース",
    items: [
      { label: "MySQL", level: "B" },
      { label: "PostgreSQL", level: "B" },
      { label: "SQL Server", level: "B" },
      { label: "Oracle", level: "B" },
      { label: "DB2", level: "B" },
      { label: "MongoDB", level: "E" },
    ],
  },
  {
    name: "OS",
    items: [
      { label: "Windows", level: "A" },
      { label: "Linux", level: "B" },
      { label: "Mac OS", level: "A" },
      { label: "Android", level: "C" },
    ],
  },
];

export const qualifications: string[] = [
  "基本情報技術者試験",
  "応用情報技術者試験",
  "AWS認定 ソリューションアーキテクト - アソシエイト",
  "TOEIC 800点",
];

export const contact: Contact = {
  github: "https://github.com/",
  note: "本サイトの内容はポートフォリオ公開用のサンプルデータです。実際の経歴書とは異なる場合があります。",
};
