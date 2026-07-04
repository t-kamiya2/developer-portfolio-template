// Shared sample data for the skill-sheet portfolio site design.
// NOTE: fully genericized for public display — no real PII.

export const profile = {
  role: "フルスタックエンジニア",
  tagline: "要件定義から設計・実装・テスト・保守運用まで、一貫して対応できるエンジニア",
  years: "14年以上",
  summary: [
    "SEとして14年以上のキャリアがあり、要件定義から設計、実装、テスト、保守運用まで一通り経験。自走して作業が可能です。",
    "SIer企業でのSES(7年)・社内SE(2年半)・自社製品開発(3年)を経てフリーランスへ。Javaでのバックエンド開発を軸に、C#・JavaScript/TypeScript・Vue.js・React・Pythonを習得しフルスタックで従事しています。",
    "直近2年はAzure/GCPでのインフラ構築も経験。AIコーディングはClaude Codeを1年以上活用し、個人開発ではCursorも使用しています。"
  ]
};

export const strengths = [
  {
    title: "開発効率・保守性を意識した設計",
    body: "共通化を常に意識して実装。デザインパターンやパフォーマンスも考慮した開発ができます。"
  },
  {
    title: "コミュニケーション能力",
    body: "要件定義で顧客・他チームとの調整に従事した経験があり、円滑な合意形成が得意です。"
  },
  {
    title: "キャッチアップ能力",
    body: "多様なプロジェクトで初見の業務・技術に触れる機会が多く、成長意欲も高いためキャッチアップが早いです。"
  }
];

export const stackHighlights = [
  "Python", "TypeScript", "React", "Vue.js", "FastAPI", "GCP", "Azure", "AWS", "GitHub"
];

export const projects = [
  {
    period: "2025.10 〜 現在",
    title: "LLMを活用した営業支援アプリケーション群の設計・開発・保守運用",
    role: "メンバー",
    scale: "6〜10名",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "テスト", "保守・運用"],
    stack: ["Python", "TypeScript", "FastAPI", "GAS", "GCP", "Cloud Run", "Pub/Sub", "Firestore", "Salesforce API", "ADK", "Claude Code"],
    body: [
      "会話データ解析およびSalesforce連携バッチの開発。LLMを用いた課題抽出・提案自動生成のバッチ基盤を構築し、Salesforce API経由で結果を自動連携。",
      "提案資料自動生成Googleスライド拡張(アドオン)の開発。Pub/Sub・Firestoreを組み合わせた非同期処理アーキテクチャを構築。",
      "情報集約・レポート出力AI Agentの開発。社内LLMと外部Web検索結果を動的に統合しレポートを出力。"
    ],
    summary: "Cloud Run・Pub/Sub・Firestore・ADKは実務初採用でしたが、個人開発でも並行してGCP環境を構築し理解を深めながらキャッチアップ。クリーンアーキテクチャとSRPを適用し、コードレビューを通じて保守性の高いコードベース維持に貢献しました。GASの実行時間制限に対しては自ら手法を調査・特定し、UXを改善しました。"
  },
  {
    period: "2025.04 〜 2025.09",
    title: "LLMを活用した営業員スキル向上のためのアプリ開発",
    role: "メンバー",
    scale: "1〜5名",
    process: ["基本設計", "詳細設計", "製造・実装", "単体テスト", "結合テスト"],
    stack: ["Python", "Flask", "ReactJS", "Azure", "Azure Functions", "Azure WebApp", "Azure OpenAI", "Docker", "GitHub"],
    body: [
      "QueueTrigger/TimerTriggerのAzure Functionsを構築。Azure WebApp(API: Flask, Frontend: React)を構築。",
      "文字起こしテキストと顧客情報を用いたAzure OpenAI API呼び出しを実装。別システムDBからのETL処理を設計・実装。",
      "SQL認証/マネージドID認証の切り替え、KeyVaultへの移行、Container Registryを用いたコンテナ化を担当。"
    ],
    summary: "Python・Azure構築ともに実務初採用でしたが、独学の知見を活かしスムーズにキャッチアップ。数十万件規模でも耐えるETLのスワップ方式を提案・実装し、フロントエンドのUXも改善しました。"
  },
  {
    period: "2024.10 〜 2025.02",
    title: "会計パッケージのリニューアル(C# WebAPI + React)",
    role: "メンバー",
    scale: "100名以上",
    process: ["詳細設計", "製造・実装", "単体テスト"],
    stack: ["C#", ".NET Core", "TypeScript", "React", "Redux", "SQL Server", "ActiveReports"],
    body: [
      "固定資産の法人税別表・少額減価償却資産明細の帳票作成機能、減損登録情報のDB更新・削除機能を担当。",
      "帳票レイアウト作成(11本)、DDDを考慮したAPI詳細設計、データ取得〜加工〜共通ファイル出力までを実装。"
    ],
    summary: "2週間で帳票11本を作成し、効率的なやり方をチームに提案。複数帳票種別で共通する処理を多態性を意識して共通化し、量産時の工数削減に貢献しました。"
  },
  {
    period: "2021.11 〜 2024.09",
    title: "自社SaaSグループウェア製品のフロント/バックエンド開発",
    role: "リーダー",
    scale: "11〜50名",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "テスト", "保守・運用"],
    stack: ["TypeScript", "Vue.js", "Quasar", "LWC", "Apex", "Salesforce", "dayjs", "Backlog", "Git"],
    body: [
      "既存の掲示板・カレンダーアプリのバグ改修や追加機能開発を担当。",
      "新規ワークフローアプリの技術選定・機能検討・テーブル設計・API設計〜開発を主導。"
    ],
    summary: "APIファーストでの設計を中心となって推進し、他アプリからも利用可能な設計を実現。ツリー構造の申請カテゴリUIを提案しUXを改善。常に共通化を意識し保守性の高い製品開発に貢献しました。"
  },
  {
    period: "2019.03 〜 2021.10",
    title: "社内SEとして業務効率化システム・アプリの企画〜運用を一貫担当",
    role: "リーダー",
    scale: "6〜10名",
    process: ["要件定義", "製造・実装", "テスト", "保守・運用"],
    stack: ["OutSystems", "GCP", "GAS", "SQL Server", "AWS", "Salesforce", "Asteria", "UiPath", "C#"],
    body: [
      "タブレット受付システムの要件定義〜開発〜リリース〜ユーザーサポートまで一貫担当。",
      "OutSystemsバージョンアップに伴うAPサーバ移行、派遣社員管理システムのリプレイス、RPAによる予約データ登録の自動化を担当。"
    ],
    summary: "オフショア/インフラチームとの調整をリードしながら複数システムの刷新を推進。要件定義から保守運用までを一気通貫で担当し、4拠点への導入・サポートも実施しました。"
  },
  {
    period: "2012.04 〜 2019.02",
    title: "金融系システム開発プロジェクト(SES)",
    role: "リーダー",
    scale: "100名以上",
    process: ["要件定義", "基本設計", "詳細設計", "製造・実装", "単体テスト"],
    stack: ["Java", "C#", "PostgreSQL", "HiRDB", ".NET Framework", "WPF", "Spring", "Interstage"],
    body: [
      "業務システム開発支援ツールの一括データインポートバッチ・帳票出力機能を開発。",
      "次世代バンキングシステム、カード会社システム統合、確定拠出年金データ登録システムなど複数の金融系プロジェクトに要件定義〜開発支援まで従事。"
    ],
    summary: "現行仕様の読み解きから新システムへの仕様策定までを主導し、若手メンバーの育成や画面チームの進捗管理も担当しました。"
  }
];

export const skillGroups = [
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
      { label: "マネジメント", level: null }
    ]
  },
  {
    name: "言語",
    items: [
      { label: "Java", level: "A" }, { label: "JavaScript", level: "A" }, { label: "TypeScript", level: "A" },
      { label: "Python", level: "A" }, { label: "C#", level: "A" }, { label: "HTML/CSS", level: "B" },
      { label: "SQL", level: "A" }, { label: "PL/SQL", level: null }, { label: "Kotlin", level: null },
      { label: "Java(Android)", level: "B" }, { label: "Swift", level: null }, { label: "PHP", level: "B" },
      { label: "Go", level: null }, { label: "Shell", level: null }, { label: "VB", level: null }
    ]
  },
  {
    name: "フレームワーク / ライブラリ",
    items: [
      { label: "React", level: "A" }, { label: "Vue.js", level: "A" }, { label: "Angular", level: null },
      { label: "Node.js", level: "D" }, { label: "Flask", level: "B" }, { label: "Django", level: null },
      { label: "Spring / Spring Boot", level: "B" }, { label: "Struts", level: null }, { label: ".NET Framework / Core", level: null },
      { label: "Ruby on Rails", level: null }, { label: "Bootstrap", level: null }, { label: "jQuery", level: null },
      { label: "Laravel", level: null }, { label: "Firebase", level: "D" }
    ]
  },
  {
    name: "クラウド / インフラ",
    items: [
      { label: "GCP", level: "B" }, { label: "Azure", level: "B" }, { label: "AWS", level: "C" },
      { label: "Salesforce", level: "B" }, { label: "GitHub", level: "A" }, { label: "Backlog", level: "B" },
      { label: "Docker", level: null }
    ]
  },
  {
    name: "データベース",
    items: [
      { label: "MySQL", level: "B" }, { label: "PostgreSQL", level: "B" }, { label: "SQL Server", level: "B" },
      { label: "Oracle", level: "B" }, { label: "DB2", level: "B" }, { label: "MongoDB", level: "E" }
    ]
  },
  {
    name: "OS",
    items: [
      { label: "Windows", level: "A" }, { label: "Linux", level: "B" }, { label: "Mac OS", level: "A" },
      { label: "Android", level: "C" }
    ]
  }
];

export const qualifications = [
  "JavaScriptデベロッパー",
  "Oracle Database 11g Bronze",
  "応用情報技術者試験",
  "TOEIC 910",
  "OutSystems Associate Developer",
  "Salesforce認定アドミニストレーター"
];

export const contact = {
  github: "https://github.com/",
  note: "本サイトの内容はポートフォリオ公開用のサンプルデータです。実際の経歴書とは異なる場合があります。"
};
