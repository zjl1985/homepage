import Image from "next/image";
import { site } from "@/content/site";
import { Clock } from "./clock";
import { Reveal } from "./reveal";

/** 联系方式 + 页脚（深色幕布） */
export function Footer() {
  const year = "2026"; // 静态年份，避免在服务端组件里读取当前时间
  return (
    <footer
      id="contact"
      className="dark-surface relative mt-4 scroll-mt-24 overflow-hidden rounded-t-[2rem] bg-curtain pb-8 pt-24 text-on-curtain md:rounded-t-[2.5rem] md:pt-36 edge"
    >
      <div className="flex items-start justify-between gap-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
          <span className="text-accent">§ 05</span> · 联系 / Contact
        </p>
        <Image
          src="/assets/brand/zero-stamp.svg"
          alt=""
          aria-hidden
          width={64}
          height={64}
          className="-mt-3 size-14 rounded-xl border border-white/10 opacity-80 md:size-16"
        />
      </div>
      <Reveal>
        <h2 className="mt-8 font-display text-[clamp(2.1rem,9.5vw,3rem)] leading-[1.02] tracking-tight md:text-[clamp(3rem,10vw,9rem)] md:leading-[0.95]">
          有个想法？
          <br />
          一起把它<span className="italic text-accent">做出来。</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="max-w-md text-sm leading-7 opacity-65">
            聊开发、工具、AI Agent，或者只是分享一个有意思的项目。
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-7 inline-flex items-baseline gap-3 break-all rounded-sm font-display text-[clamp(1.75rem,4vw,3.5rem)]"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {site.email}
            </span>
            <span className="text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
          </a>
        </div>
        <ul className="flex flex-wrap content-start gap-x-8 gap-y-3 md:col-span-5 md:justify-end">
          {site.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm py-2 font-mono text-[10px] uppercase tracking-[0.16em] opacity-75 transition hover:text-accent hover:opacity-100"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] opacity-60">
        <span>© {year} {site.name}</span>
        <span>{site.city}, <Clock /></span>
        <a href="#top" className="transition hover:text-accent">回到顶部 ↑</a>
      </div>
    </footer>
  );
}
