"use client";
import { useReducedMotion } from "@/lib/use-reduced-motion";


import Link from "next/link";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

/** 杂志式页眉：桌面直接呈现章节，窄屏保留全屏目录。 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => { if (event.matches) setOpen(false); };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); return; }
      if (event.key !== "Tab") return;
      const links = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
      if (!links?.length) return;
      if (event.shiftKey && document.activeElement === buttonRef.current) { event.preventDefault(); links[links.length - 1].focus(); }
      else if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); buttonRef.current?.focus(); }
      else if (!event.shiftKey && document.activeElement === links[links.length - 1]) { event.preventDefault(); buttonRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-4 edge">
        <div className="pointer-events-auto relative mx-auto flex h-14 max-w-[1440px] items-center justify-between rounded-lg border border-ink/10 bg-paper/85 pl-3 pr-2 shadow-[0_8px_32px_rgb(23_21_19/0.05)] backdrop-blur-xl dark:border-white/10">
          {!reduce && <motion.span aria-hidden className="absolute bottom-0 left-2 right-2 h-px origin-left bg-accent/60" style={{ scaleX: scrollYProgress }} />}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex h-10 items-center gap-3 rounded-md px-1"
            aria-label={`${site.name} — 首页`}
          >
            <span className="font-display text-[1.75rem] italic leading-none tracking-tight">
              z<span className="text-accent">.</span>
            </span>
            <span className="hidden border-l border-line pl-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted sm:block">
              Independent builder
            </span>
          </Link>

          <nav aria-label="桌面导航" className="hidden items-center md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-sm px-4 py-2 text-xs text-muted transition-colors hover:text-ink"
              >
                {item.label}
                <span className="ml-1.5 font-mono text-[9px]">{item.en}</span>
                <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <a
              href={site.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="mr-2 hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent lg:block"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="发邮件 / Email"
              className="grid size-10 place-items-center rounded-md transition hover:bg-ink/5 dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "关闭菜单" : "打开菜单"}
              className="grid size-10 place-items-center rounded-md transition hover:bg-ink/5 md:hidden dark:hover:bg-white/10"
            >
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            id="site-menu"
            aria-label="移动端导航"
            className="dark-surface fixed inset-0 z-40 flex flex-col justify-end bg-curtain pb-12 pt-28 text-on-curtain edge"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduce ? 0 : 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="mb-auto font-mono text-[10px] uppercase tracking-[0.2em] opacity-50">
              Index / 目录
            </p>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {nav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.15 + index * 0.05, duration: reduce ? 0 : 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-5 py-4"
                  >
                    <span className="font-mono text-[10px] opacity-50">0{index + 1}</span>
                    <span className="font-display text-5xl transition-transform duration-500 group-hover:translate-x-2">
                      {item.label}
                    </span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest opacity-50">
                      {item.en} →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-mono text-xs opacity-60 transition hover:opacity-100"
            >
              {site.email}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
