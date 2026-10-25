"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
    <section ref={ref} className="relative flex min-h-dvh flex-col justify-end overflow-hidden pb-8 pt-28 edge">
      {/* 开场幕布 */}
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] grid place-items-center bg-curtain text-on-curtain"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1, delay: 0.9, ease }}
        >
          <motion.span
            className="font-display text-7xl italic"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            0
          </motion.span>
        </motion.div>
      )}

      <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>{site.role}</span>
        <span className="flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
          </span>
          {site.city} · <Clock />
        </span>
      </div>

      <motion.div style={reduce ? undefined : { y }} className="mt-auto">
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
                transition={{ duration: 1.1, delay: 1.5 + i * 0.07, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-12"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className="text-xl leading-snug md:col-span-6 md:text-2xl">
          {site.tagline}
          <span className="mt-1 block text-base text-muted">{site.taglineEn}</span>
        </p>
        <div className="flex items-end justify-between gap-4 md:col-span-6 md:justify-end md:gap-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-ink px-5 py-2.5 text-sm transition-colors hover:bg-ink hover:text-paper"
          >
            打个招呼
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#about" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            向下滚动 ↓
          </a>
        </div>
      </motion.div>
    </section>
  );
}
