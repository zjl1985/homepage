import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/nav";
import { PointerHalo } from "@/components/pointer-halo";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const description = "zero 的个人作品集。关注全栈开发、local-first 桌面工具、AI Agent 工作流与有趣的小项目。Small tools. Real leverage.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description,
  keywords: ["zero", "full-stack developer", "independent builder", "AI Agent", "local-first", "open source"],
  authors: [{ name: site.name, url: "https://github.com/zjl1985" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
  },
  twitter: { card: "summary_large_image", title: site.name, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#191b1b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${serif.variable} antialiased`}>
      <head>
        <noscript><style>{".intro-curtain{display:none!important}"}</style></noscript>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/fontsource/css/maple-mono@latest/index.css"
        />
      </head>
      <body className="grain min-h-dvh">
        <Nav />
        <PointerHalo />
        {children}
      </body>
    </html>
  );
}
