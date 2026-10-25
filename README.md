# zero · 个人首页

zero（Zjl）的个人主页。Next.js App Router + TypeScript + Tailwind CSS v4 + Motion，部署在 Vercel。

> 视觉灵感来自编辑感/作品集风格的个人站（大字标、等宽小标签、暖纸色 + 深色幕布、克制的进场动画）。代码与文案均为原创。

## 开发

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build
```

## 结构

```
app/
  layout.tsx            # 字体、全局 metadata、导航
  page.tsx              # 首页：Hero / About / Work / Approach / Footer
  projects/page.tsx     # 全部项目
  opengraph-image.tsx   # 动态 OG 图（twitter-image.tsx 同）
  icon.svg · sitemap.ts · robots.ts · not-found.tsx
components/             # hero, nav, about, work, project-row, approach, footer, clock, reveal, section-label
content/site.ts         # ★ 唯一数据源：名字、简介、链接、项目列表
lib/utils.ts
```

## 改内容

几乎所有文案都在 `content/site.ts`，标了 `TODO` 的是占位内容：

- `email` — 目前是 `hello@example.com`
- `tagline` / `about` / `role` / `city` / `approach`
- `links` — 可加 X、博客等
- `projects` — 项目简介（`life-decision` 简介为占位）
- `url` — 正式域名，或在 Vercel 设置环境变量 `NEXT_PUBLIC_SITE_URL`

## 部署

推送到 `main` 即可由 Vercel 自动部署（需在 Vercel 导入此仓库）。
