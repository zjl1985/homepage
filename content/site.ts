/**
 * 站点配置 — Site config
 * ------------------------------------------------------------
 * 这里是整个首页唯一需要改的数据源。
 * 项目封面为概念视觉，不代表真实产品截图或使用数据。
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
  /** 编辑式概念封面 */
  cover: string;
  /** 项目阶段，可选 */
  status?: "New" | "Research";
  /** 首页精选 */
  featured?: boolean;
};

export type Link = { label: string; href: string };

export const site = {
  name: "zero",
  // 部署后可通过 NEXT_PUBLIC_SITE_URL 设置为正式域名。
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zero-homepage.vercel.app",
  locale: "zh-CN",
  timezone: "Asia/Shanghai",
  city: "Online",

  tagline: "把复杂的问题，做成简单的工具。",
  taglineEn: "Small tools. Real leverage.",
  role: "Full-stack Developer · Independent Builder",

  // 用 *星号* 包裹的词会被高亮
  about: [
    "你好，我是 *zero*，一名全栈开发者。我喜欢把日常遇到的麻烦事，变成 *简单、可靠、真正有人愿意用* 的工具。Web、桌面应用和 AI Agent，是我经常折腾的方向。",
    "我偏爱 *local-first*、清晰的边界和克制的交互。既做解决实际问题的开发工具，也留一些空间给 *纯粹的好玩*——比如一整面可以自己捏猫的像素猫墙。",
  ],
  bioEn: "I build thoughtful tools across the web, desktop, and AI-agent workflows—with a soft spot for local-first design and playful side projects.",
  email: "zjl1985@gmail.com",

  links: [
    { label: "GitHub", href: "https://github.com/zjl1985" },
    // 按需补充其他公开链接，例如：
    // { label: "X", href: "https://x.com/your-handle" },
    // { label: "Blog", href: "https://..." },
  ] satisfies Link[],

  approach: [
    { title: "发现摩擦", body: "留意重复、耗时、不必要的步骤。一个好工具，往往从很小的不顺手开始。" },
    { title: "缩小问题", body: "先找到最关键的使用场景，把想法缩成能亲手验证的最小版本。" },
    { title: "做好边界", body: "明确数据去哪儿、操作会影响什么，以及失败时怎么恢复。" },
    { title: "持续发布", body: "让作品上线、接受反馈、再继续打磨。能用的版本，比无限期的设想更有价值。" },
  ],

  humanSide: [
    { title: "City walks", label: "城市漫游", body: "去陌生的街区走走，看看建筑、路牌和小店。换一种视角，往往能带回新想法。" },
    { title: "Games & pixels", label: "游戏与像素", body: "喜欢有策略感的游戏，也喜欢把一个微小角色的表情和动作改到顺眼为止。" },
    { title: "Tiny obsessions", label: "小小执念", body: "效率工具、终端主题、桌面交互、像素猫。一句“应该还能更好用”，就是一个新项目的开始。" },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "zero-notice",
    name: "zero-notice",
    summary: "把 Agent 任务完成、等待权限确认等事件推送到 Bark；只传安全字段，不发送命令或回答。",
    summaryEn: "Quiet, privacy-conscious Bark notifications for agent events.",
    tags: ["Node.js", "Codex", "Bark"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-notice",
    cover: "/assets/projects/00-zero-notice.svg",
    status: "New",
    featured: true,
  },
  {
    slug: "life-decision",
    name: "Life Decision",
    summary: "用类型化 AI 排序原始建议，保留证据等级与出处，让人生选择更容易拆解。",
    summaryEn: "Evidence-aware guidance, grounded in original sources.",
    tags: ["Next.js", "Jev", "Decision AI"],
    year: "2026",
    repo: "https://github.com/zjl1985/life-decision",
    url: "https://life-decision-fawn.vercel.app",
    cover: "/assets/projects/01-life-decision.svg",
    featured: true,
  },
  {
    slug: "agent-sweep",
    name: "Agent Sweep",
    summary: "统一查看 Codex、Claude Code 等五种 Agent 的本地会话与空间占用，按能力安全清理。",
    summaryEn: "Understand agent sessions. Clean safely, locally.",
    tags: ["Tauri 2", "Rust", "Preact"],
    year: "2026",
    repo: "https://github.com/zjl1985/agent-sweep",
    cover: "/assets/projects/02-agentsweep.svg",
    featured: true,
  },
  {
    slug: "baton",
    name: "Baton",
    summary: "只读提取编码 Agent 的上下文，打包并交接到另一个 Agent 的新会话。",
    summaryEn: "Hand off context, not control.",
    tags: ["Tauri 2", "Rust", "AI Agents"],
    year: "2026",
    repo: "https://github.com/zjl1985/baton",
    cover: "/assets/projects/03-baton.svg",
    featured: true,
  },
  {
    slug: "meow-wall",
    name: "Meow Wall",
    summary: "一面没什么用、但很快乐的像素猫猫墙。捏猫、收藏、说话卡片，全都在浏览器里。",
    summaryEn: "A wonderfully useless pixel cat gallery and studio.",
    tags: ["Next.js", "Pixel Art", "Just for Fun"],
    year: "2026",
    repo: "https://github.com/zjl1985/meow-wall",
    url: "https://meow-wall.vercel.app",
    cover: "/assets/projects/04-meow-wall.svg",
    featured: true,
  },
  {
    slug: "zero-jev",
    name: "Zero Jev",
    summary: "研究类型化语义判断如何融入 Browser Use 与 Computer Use 工作流。",
    summaryEn: "Exploring typed semantic decisions for computer-use workflows.",
    tags: ["Research", "Jev", "Automation"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-jev",
    cover: "/assets/projects/05-zero-jev.svg",
    status: "Research",
  },
];

export const nav = [
  { label: "关于", en: "About", href: "/#about" },
  { label: "作品", en: "Work", href: "/#work" },
  { label: "方法", en: "Approach", href: "/#approach" },
  { label: "联系", en: "Contact", href: "/#contact" },
] as const;
