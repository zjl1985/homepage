# zero · 个人首页

zero 的个人主页与作品集。Next.js App Router + TypeScript + Tailwind CSS v4 + Motion，部署在 Vercel。

页面采用米白、石墨与鼠尾草绿功能色的编辑式视觉，以及大号 zero 字标和 0 → zero → 揭幕的开场。配色借鉴 [Pentagram 对 Cohere 的设计](https://www.pentagram.com/work/cohere)中自然中性色与局部功能色的运用；本站色值为适配值，并非官方 HEX。揭幕后，首屏右侧的程序化 zero 字纹织物持续起伏并响应鼠标，导航配合阅读进度线。关于段落的关键词嵌有项目封面纸卡，滚动时自然衔接作品区；桌面端的关键词纸卡随滚动飞出、汇成一堆再展开，并可随反向滚动回收；手机和减少动态效果模式使用静态索引切换卡片。项目介绍支持中文 / EN，详情按需展开。

[Oyin](https://www.oyin.design/) 仅作为交互小巧思的参考，不复制其页面结构。

项目封面是依据各项目内容制作的原创概念插画，并非产品截图。像素猫视觉仅用于对应的猫猫项目。

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

个人文案、社交链接与项目列表集中在 `content/site.ts`。首页按列表顺序展示全部八个项目，第一项 Life Decision 为精选。`status` 可标记 `Coming soon` 或 `Research`；Zero Bot 标记为即将推出且不提供外链。封面路径与替代文字同样在项目列表中维护。

联系入口使用 `content/site.ts` 中配置的邮箱，并保留 GitHub 链接。正式域名可通过 `NEXT_PUBLIC_SITE_URL` 设置。

## 部署

推送到 `main` 即可由 Vercel 自动部署（需在 Vercel 导入此仓库）。

## 首页风格

导航中的「换个风格」在经典首页 `/` 与手绘札记 `/sketch` 之间切换。
手绘版参考 Kevin T. Ngo 网站的纸张、手绘线条和作品剪贴簿语言；天空 SVG 为本站绘制，项目封面复用已有素材。
两个版本共用 `content/site.ts`，手绘版样式限定在 `.sketch-home` 与对应导航内，始终使用浅色纸张配色。
支持移动端导航、原生项目笔记展开，以及减少动态效果偏好。风格由 URL 决定，可直接收藏或分享 `/sketch`。
