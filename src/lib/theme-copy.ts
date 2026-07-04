export type ThemeId = "pale" | "terminal";

export const themeCopy = {
  pale: {
    logo: "Engineer Portfolio",
    navLabels: { home: "ホーム", career: "経歴", skills: "スキル" },
    eyebrowPrefix: "",
    headingPrefix: "",
    strengthIndex: (i: number) => String(i + 1),
    projectStat2: "6",
    toggleLabel: { open: "詳細を見る ▼", close: "閉じる ▲" },
    expandCollapseAll: { expand: "すべて展開", collapse: "すべて折りたたむ" },
    bullet: "▸",
  },
  terminal: {
    logo: ">_ engineer.portfolio",
    navLabels: { home: "./home", career: "./career", skills: "./skills" },
    eyebrowPrefix: "// ",
    headingPrefix: "## ",
    strengthIndex: (i: number) => String(i + 1).padStart(2, "0"),
    projectStat2: "06",
    toggleLabel: { open: "detail ▼", close: "close ▲" },
    expandCollapseAll: { expand: "expand all", collapse: "collapse all" },
    bullet: "›",
  },
} as const satisfies Record<ThemeId, unknown>;
