/**
 * 站点配置 — Site config
 * ------------------------------------------------------------
 * 这里是整个首页唯一需要改的数据源。
 * 项目封面为原创概念插画。
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
  cover: string;
  coverAlt: string;
  repo?: string;
  url?: string;
  /** 项目阶段，可选 */
  status?: "New" | "Research" | "Coming soon";
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
    slug: "life-decision",
    cover: "/assets/projects/covers/life-decision.webp",
    coverAlt: "放大镜下的建议卡与分支线条的概念插画",
    name: "Life Decision",
    summary: "输入人生处境，从《高性价比人生指南》中找到贴合的原文建议。",
    summaryEn: "Find relevant, source-backed advice for life's decisions.",
    tags: ["Next.js", "Jev", "Evidence"],
    year: "2026",
    repo: "https://github.com/zjl1985/life-decision",
    url: "https://life-decision-fawn.vercel.app",
  },
  {
    slug: "zero-bot",
    cover: "/assets/projects/covers/zero-bot.webp",
    coverAlt: "灰蓝像素猫与聊天、任务和文件符号的概念插画",
    name: "Zero Bot",
    summary: "可以边聊天边处理后台任务的猫猫助手。",
    summaryEn: "A cat assistant that chats while tasks run in the background.",
    tags: ["AI Assistant", "Background Tasks", "Work in Progress"],
    year: "2026",
    status: "Coming soon",
  },
  {
    slug: "zero-api-key",
    cover: "/assets/projects/covers/zero-api-key.webp",
    coverAlt: "钥匙形保险匣与终端、云端的概念插画",
    name: "ZeroApiKey",
    summary: "为 macOS 整理 API 密钥与密码的本地优先工具，桌面应用和命令行共用数据。",
    summaryEn: "A local-first secret manager for macOS, with a desktop app and CLI.",
    tags: ["macOS", "Tauri", "CLI"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-api-key",
  },
  {
    slug: "agent-sweep",
    cover: "/assets/projects/covers/agent-sweep.webp",
    coverAlt: "分类收纳的会话文件与放大镜的概念插画",
    name: "Agent Sweep",
    summary: "查看五种 AI 编码助手的本地会话、空间和 token 使用情况，按各自能力安全清理。",
    summaryEn: "Inspect and safely clean local coding-agent sessions.",
    tags: ["Tauri 2", "Rust", "Local-first"],
    year: "2026",
    repo: "https://github.com/zjl1985/agent-sweep",
  },
  {
    slug: "baton",
    cover: "/assets/projects/covers/baton.webp",
    coverAlt: "两个机器人交接文件的概念插画",
    name: "Baton",
    summary: "只读提取编码 Agent 的上下文，在本机生成交接包，让另一个 Agent 接着工作。",
    summaryEn: "Hand coding-agent context to a fresh session in another agent.",
    tags: ["Tauri 2", "Rust", "AI Agents"],
    year: "2026",
    repo: "https://github.com/zjl1985/baton",
  },
  {
    slug: "zero-notice",
    cover: "/assets/projects/covers/zero-notice.webp",
    coverAlt: "桌面信号经铃铛传送到手机的概念插画",
    name: "zero-notice",
    summary: "将 Codex 任务结束和权限请求推送到 Bark，不发送命令或回答。",
    summaryEn: "Bark notifications for Codex task completion and permission requests.",
    tags: ["Node.js", "Codex", "Bark"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-notice",
  },
  {
    slug: "meow-wall",
    cover: "/assets/projects/covers/meow-wall.webp",
    coverAlt: "灰蓝像素猫和不同配饰猫头的概念插画",
    name: "Meow Wall",
    summary: "一面可以捏猫、收藏和分享的像素猫墙，所有自定义猫猫都保存在浏览器里。",
    summaryEn: "A playful pixel-cat wall, studio, and sharing space.",
    tags: ["Next.js", "Pixel Art", "Just for Fun"],
    year: "2026",
    repo: "https://github.com/zjl1985/meow-wall",
    url: "https://meow-wall.vercel.app",
  },
  {
    slug: "zero-jev",
    cover: "/assets/projects/covers/zero-jev.webp",
    coverAlt: "浏览器结构经棱镜转化为类型化结果的概念插画",
    name: "Zero Jev",
    summary: "研究类型化语义判断在浏览器与桌面自动化中的应用，目前处于资料研究阶段。",
    summaryEn: "Researching typed semantic decisions for browser and desktop automation.",
    tags: ["Research", "Jev", "Automation"],
    year: "2026",
    repo: "https://github.com/zjl1985/zero-jev",
    status: "Research",
  },
];

export const nav = [
  { label: "关于", en: "About", href: "/#about" },
  { label: "作品", en: "Work", href: "/#work" },
  { label: "方法", en: "Approach", href: "/#approach" },
  { label: "联系", en: "Contact", href: "/#contact" },
] as const;
