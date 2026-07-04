import type { Metadata } from "next";
import { Noto_Sans_JP, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Engineer Portfolio — Sample",
  description: "要件定義から実装・保守運用まで一貫して対応できるエンジニアのポートフォリオ(サンプル)",
};

const noFlashScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("portfolio-theme");
    var theme;
    if (stored === "terminal" || stored === "pale") {
      theme = stored;
    } else if (stored === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "terminal" : "pale";
    } else {
      theme = "pale";
    }
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-theme="pale"
      suppressHydrationWarning
      className={`${notoSansJP.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
