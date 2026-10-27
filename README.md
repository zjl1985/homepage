# zero · 个人首页

zero 的个人主页与作品集。Next.js App Router + TypeScript + Tailwind CSS v4 + Motion，部署在 Vercel。

页面采用米白、石墨与鼠尾草绿功能色的编辑式视觉，以及大号 zero 字标和 0 → zero → 揭幕的开场。配色借鉴 [Pentagram 对 Cohere 的设计](https://www.pentagram.com/work/cohere)中自然中性色与局部功能色的运用；本站色值为适配值，并非官方 HEX。揭幕后，首屏右侧的程序化 zero 字纹织物持续起伏并响应鼠标，导航配合阅读进度线。关于段落的关键词嵌有占位纸卡，滚动时自然衔接作品区；桌面端的关键词纸卡随滚动飞出、汇成一堆再展开，并可随反向滚动回收；手机和减少动态效果模式使用静态索引切换卡片。项目介绍支持中文 / EN，详情按需展开。

[Oyin](https://www.oyin.design/) 仅作为交互小巧思的参考，不复制其页面结构。

目前所有项目图片均为占位，待整体风格确认后再逐一依据真实项目设计封面。像素猫素材只用于对应的猫猫项目，不作为全站统一视觉主题。

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

个人文案、社交链接与项目列表集中在 `content/site.ts`。首页按列表顺序展示全部八个项目，第一项 Life Decision 为精选。`status` 可标记 `Coming soon` 或 `Research`；Zero Bot 标记为即将推出且不提供外链。作品封面目前为占位，后续确认方向后再设计。

联系入口使用 `content/site.ts` 中配置的邮箱，并保留 GitHub 链接。正式域名可通过 `NEXT_PUBLIC_SITE_URL` 设置。

## 部署

推送到 `main` 即可由 Vercel 自动部署（需在 Vercel 导入此仓库）。
