import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const description = `${site.tagline} ${site.taglineEn}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description,
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
    { media: "(prefers-color-scheme: light)", color: "#f3efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <body className="grain min-h-dvh">
        <Nav />
        {children}
      </body>
    </html>
  );
}
