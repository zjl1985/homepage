/**
 * 站点配置 — Site config
 * ------------------------------------------------------------
 * 这里是整个首页唯一需要改的数据源。
 * 标记了 `TODO` 的字段是占位内容，请替换成你自己的信息。
 */

export type Project = {
  slug: string;
  name: string;
  /** 一句话简介（中文） */
  summary: string;
  /** 英文副标题，可选 */
  summaryEn?: string;
  tags: string[];
  year: string;
  repo?: string;
  url?: string;
  /** 首页精选 */
  featured?: boolean;
};

export type Link = { label: string; href: string };

export const site = {
  name: "zero",
  nickname: "Zjl",
  // TODO: 换成你的正式域名（部署到 Vercel 后可先用 *.vercel.app）
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zero-homepage.vercel.app",
  locale: "zh-CN",
  timezone: "Asia/Shanghai",
  city: "China", // TODO: 例如 "Shanghai" / "上海"

  // TODO: 一句话介绍自己
  tagline: "写代码，也做一些让生活更顺手的小工具。",
  taglineEn: "Developer building small, local-first tools.",
  role: "Developer · Builder", // TODO

  // TODO: 关于我 — 用 *星号* 包裹的词会被高亮
  about: [
    "你好，我是 *zero*，也叫 Zjl。一名开发者，喜欢把模糊的想法打磨成 *真正好用* 的小产品。",
    "最近在折腾 *本地优先* 的桌面应用、AI Agent 工作流，以及帮人做决定的工具。",
  ],

  // TODO: 换成你的真实邮箱（这里是占位）
  email: "hello@example.com",

  links: [
    { label: "GitHub", href: "https://github.com/zjl1985" },
    // TODO: 按需补充
    // { label: "X", href: "https://x.com/your-handle" },
    // { label: "Blog", href: "https://..." },
  ] satisfies Link[],

  // 「做事方式」— TODO: 改成你自己的方法论
  approach: [
    { title: "观察", body: "先弄清楚真正的问题是什么，而不是急着写代码。" },
    { title: "原型", body: "用最小的版本验证想法，越早拿到反馈越好。" },
    { title: "打磨", body: "细节决定体验：性能、交互、文案，一个都不放过。" },
    { title: "发布", body: "上线、开源、记录，然后进入下一轮迭代。" },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "life-decision",
    name: "Life Decision",
    // TODO: 补充真实简介
    summary: "帮你把纠结的人生选择拆开来看的小工具。",
    summaryEn: "A small tool for thinking through life decisions.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    year: "2026",
    repo: "https://github.com/zjl1985/life-decision",
    url: "https://life-decision-fawn.vercel.app",
    featured: true,
  },
  {
    slug: "agent-sweep",
    name: "Agent Sweep",
    summary: "本地优先的 macOS 应用，查看并清理 ChatGPT / Codex 的本地会话，释放磁盘。",
    summaryEn: "Inspect and clean local ChatGPT & Codex sessions.",
    tags: ["Tauri 2", "Rust", "Preact"],
    year: "2026",
    repo: "https://github.com/zjl1985/agent-sweep",
    featured: true,
  },
  {
    slug: "baton",
    name: "Baton",
    summary: "把编码 Agent 的上下文从一个 Agent 交接到另一个的本地桌面应用。",
    summaryEn: "Hand off coding-agent context between agents.",
    tags: ["Desktop", "AI Agents"],
    year: "2026",
    repo: "https://github.com/zjl1985/baton",
    featured: true,
  },
  {
    slug: "meow-wall",
    name: "Meow Wall",
    summary: "像素猫画廊与定制工作室，一个好玩的小项目。",
    summaryEn: "A playful pixel cat gallery & studio.",
    tags: ["Web", "Pixel art"],
    year: "2026",
    repo: "https://github.com/zjl1985/meow-wall",
    featured: true,
  },
  {
    slug: "zero-jev",
    name: "Zero Jev",
    summary: "关于浏览器 / 电脑操控与类型化决策工作流的研究和实验。",
    summaryEn: "Research on computer-use & typed decision workflows.",
    tags: ["Research", "Agents"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-jev",
  },
  {
    slug: "gx-cli",
    name: "gx-cli",
    summary: "基于 commander 的脚手架命令行工具。",
    summaryEn: "A commander-based scaffolding CLI.",
    tags: ["Node.js", "CLI"],
    year: "—",
    repo: "https://github.com/zjl1985/gx-cli",
  },
];

export const nav = [
  { label: "关于", en: "About", href: "/#about" },
  { label: "作品", en: "Work", href: "/#work" },
  { label: "方法", en: "Approach", href: "/#approach" },
  { label: "联系", en: "Contact", href: "/#contact" },
] as const;
