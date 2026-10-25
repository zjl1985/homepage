"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

/** 顶部悬浮胶囊导航 + 全屏菜单 */
export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="flex h-11 w-full max-w-sm items-center justify-between rounded-full border border-white/10 bg-[#171513]/90 px-2 text-[#efe9dd] shadow-lg shadow-black/10 backdrop-blur">
          <a
            href={`mailto:${site.email}`}
            aria-label="发邮件 / Email"
            className="grid size-8 place-items-center rounded-full transition hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-2xl italic leading-none tracking-tight"
            aria-label={`${site.name} — 首页`}
          >
            z<span className="text-accent">.</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "关闭菜单" : "打开菜单"}
            className="grid size-8 place-items-center rounded-full transition hover:bg-white/10"
          >
            <span className="relative block h-2.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-curtain pb-12 pt-28 text-on-curtain edge"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-6 py-4"
                  >
                    <span className="font-mono text-xs opacity-50">0{i + 1}</span>
                    <span className="font-display text-5xl transition-transform duration-500 group-hover:translate-x-3 md:text-7xl">
                      {item.label}
                    </span>
                    <span className="ml-auto font-mono text-xs uppercase tracking-widest opacity-50">
                      {item.en} →
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-xs opacity-60">{site.email}</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
