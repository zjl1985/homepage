# zero · 个人首页

zero 的个人主页与作品集。Next.js App Router + TypeScript + Tailwind CSS v4 + Motion，部署在 Vercel。

暖纸色、墨绿、朱砂红与编辑式排版；项目封面为原创概念视觉，不代表真实产品界面或使用数据。

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
  layout.tsx             # 字体、全局 metadata、导航
  page.tsx               # Hero / About / Work / Approach / Human side / Footer
  projects/page.tsx      # 全部项目
  opengraph-image.png    # 静态社交分享图（twitter-image.png 同）
  icon.svg · sitemap.ts · robots.ts · not-found.tsx
components/              # 页面组件与动效
content/site.ts          # 唯一内容数据源：个人介绍、链接、方法、项目列表
public/assets/           # 品牌图形与项目概念封面
lib/utils.ts
```

## 改内容

个人文案、社交链接与项目列表集中在 `content/site.ts`。项目的 `cover` 指向 `public/assets/projects/` 中的 SVG；`featured` 控制是否出现在首页精选，`status` 可标记 `New` 或 `Research`。

联系入口使用 `content/site.ts` 中配置的邮箱，并保留 GitHub 链接。正式域名可通过 `NEXT_PUBLIC_SITE_URL` 设置。

## 部署

推送到 `main` 即可由 Vercel 自动部署（需在 Vercel 导入此仓库）。
