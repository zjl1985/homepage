import { site } from "@/content/site";
import { Clock } from "./clock";
import { Reveal } from "./reveal";

/** 联系方式 + 页脚（深色幕布） */
export function Footer() {
  const year = "2026"; // 静态年份，避免在服务端组件里读取当前时间
  return (
    <footer
      id="contact"
      className="relative mt-20 rounded-t-[2rem] bg-curtain pb-8 pt-28 text-on-curtain md:rounded-t-[3rem] md:pt-40 edge"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
        <span className="text-accent">§ 04</span> · 联系 / Contact
      </p>
      <Reveal>
        <h2 className="mt-8 font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-tight">
          一起做点
          <br />
          <span className="italic text-accent">有意思的</span>东西吧。
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-baseline gap-3 font-display text-3xl md:text-5xl"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {site.email}
            </span>
            <span className="text-accent">↗</span>
          </a>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-6 md:justify-end">
          {site.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.18em] opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
        <span>
          © {year} {site.name} · {site.nickname}
        </span>
        <span>
          {site.city}, <Clock />
        </span>
        <a href="#top" className="transition hover:text-accent">
          回到顶部 ↑
        </a>
      </div>
    </footer>
  );
}
