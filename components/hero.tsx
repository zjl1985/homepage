"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { site } from "@/content/site";
import { Clock } from "./clock";

const ease = [0.76, 0, 0.24, 1] as const;

/** 首屏：开场幕布 + 超大字标 + 一句话介绍 */
export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const letters = site.name.split("");

  return (
    <section ref={ref} className="relative mx-auto flex min-h-dvh max-w-[1600px] flex-col justify-end overflow-hidden pb-8 pt-32 edge">
      <Image
        src="/assets/brand/hero-orbit.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="pointer-events-none object-cover opacity-45 dark:opacity-25 dark:invert"
      />
      {/* 字标开场：超大 0 与最终的 o 对齐，字母展开后幕布退出。 */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="dark-surface pointer-events-none fixed inset-0 z-[70] grid place-items-center overflow-hidden bg-curtain text-on-curtain"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, delay: 1.3, ease }}
        >
          <div className="relative flex select-none items-center justify-center font-display text-[clamp(14rem,46vw,40rem)] leading-[0.75] tracking-[-0.055em]">
            <motion.span
              className="absolute inline-block italic text-accent"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.82, 1, 1, 1.08] }}
              transition={{ duration: 0.85, times: [0, 0.2, 0.58, 1], ease: [0.22, 1, 0.36, 1] }}
            >
              0
            </motion.span>
            <span className="flex">
              {letters.map((letter, index) => (
                <span key={index} className="inline-block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className={`inline-block ${index === letters.length - 1 ? "pr-[0.08em] italic text-accent" : ""}`}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.43 + index * 0.055, ease }}
                  >
                    {letter}
                  </motion.span>
                </span>
              ))}
            </span>
          </div>
          <motion.p
            className="absolute bottom-8 font-mono text-[9px] uppercase tracking-[0.24em] opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.75, duration: 0.4 }}
          >
            Small tools. Real leverage.
          </motion.p>
        </motion.div>
      )}

      <div className="relative flex items-start justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <span className="max-w-52 leading-relaxed sm:max-w-none">{site.role}</span>
        <span className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {site.city} · <Clock />
        </span>
      </div>

      <motion.div style={reduce ? undefined : { y }} className="relative mt-auto">
        <h1 className="sr-only">{site.name}</h1>
        <p
          aria-hidden
          className="flex select-none font-display leading-[0.8] tracking-[-0.04em] text-[clamp(7rem,36vw,30rem)]"
        >
          {letters.map((l, i) => (
            <span
              key={i}
              className={`inline-block overflow-hidden pb-[0.06em] ${i === letters.length - 1 ? "pr-[0.12em]" : ""}`}
            >
              <motion.span
                className={`inline-block ${i === letters.length - 1 ? "italic text-accent" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: reduce ? 0 : 1.35 + i * 0.055, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div
        className="relative mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-12"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: reduce ? 0 : 1.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="md:col-span-7">
          <p className="font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-tight tracking-tight">
            {site.tagline}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {site.taglineEn}
          </p>
        </div>
        <div className="flex items-end justify-between gap-4 md:col-span-5 md:justify-end md:gap-8">
          <a
            href="#work"
            className="group inline-flex min-h-11 items-center gap-4 rounded-md border border-ink px-4 py-2 text-xs transition-colors hover:bg-ink hover:text-paper"
          >
            浏览精选作品
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a href="#about" className="rounded-sm py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent">
            关于我 ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}
