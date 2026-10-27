"use client";

import { useState, type Ref } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function WordCard({ word, title, detail, anchorRef }: { word: string; title: string; detail: string; anchorRef?: Ref<HTMLSpanElement> }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <span className="group relative inline-block">
      <button type="button" onClick={() => setOpen(!open)} onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) setOpen(true); }} onBlur={() => setOpen(false)} aria-expanded={open} className="border-b border-accent text-accent transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        {word}<span ref={anchorRef} aria-hidden className="ml-2 inline-flex h-7 w-10 -rotate-6 items-end border border-ink/40 bg-surface p-1 align-middle shadow-sm"><span className="w-full border-t border-ink/30 text-right font-mono text-[6px] leading-none text-ink/60">{detail === "Local tools" ? "01" : detail === "Agent workflows" ? "02" : "03"}</span></span>
      </button>
      <motion.span aria-hidden={!open} initial={false} animate={open ? { opacity: 1, y: 0, scale: 1, rotate: -3 } : { opacity: 0, y: 8, scale: 0.85, rotate: -6 }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 340, damping: 25 }} className="pointer-events-none absolute bottom-[105%] left-0 z-20 w-40 border border-ink/30 bg-paper p-2 shadow-lg">
        <span className="flex aspect-[8/5] items-end border border-ink/15 bg-surface p-2 font-display text-lg leading-none text-ink">{title}</span>
        <span className="mt-2 block font-mono text-[8px] uppercase tracking-wider text-muted">{detail} · Image pending</span>
      </motion.span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] scroll-mt-24 py-28 md:py-40 edge">
      <div className="grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" zh="关于" en="About" className="md:col-span-3" />
        <Reveal className="md:col-span-9">
          <p className="max-w-4xl font-display text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[1.45] tracking-[-0.02em]">
            我是 zero，喜欢把日常的小麻烦做成 <WordCard word="小工具" title="Agent Sweep" detail="Local tools" />，探索 <WordCard word="AI Agent" title="Baton" detail="Agent workflows" />，也留点时间给 <WordCard word="像素猫" title="Meow Wall" detail="Just for fun" />。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
