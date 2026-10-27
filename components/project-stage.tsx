"use client";

import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/content/site";

const shortDescriptions: Record<string, [string, string]> = {
  "life-decision": ["为人生选择找到有据可查的建议。", "Find evidence-backed advice for life's choices."],
  "zero-bot": ["边聊天，边完成后台任务。", "Chat while tasks run in the background."],
  "zero-api-key": ["本地优先的密钥管理工具。", "A local-first secret manager."],
  "agent-sweep": ["整理编码助手的本地会话。", "Organize local coding-agent sessions."],
  "baton": ["让 Agent 上下文继续接力。", "Hand agent context to the next session."],
  "zero-notice": ["把 Codex 状态送到手机。", "Send Codex status to your phone."],
  "meow-wall": ["捏一只属于你的像素猫。", "Make a pixel cat of your own."],
  "zero-jev": ["探索类型化语义判断。", "Explore typed semantic decisions."],
};

export function ProjectStage({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState(0);
  const [english, setEnglish] = useState(false);
  const reduce = useReducedMotion();
  const current = projects[selected];
  return (
    <div>
      <div className="mb-8 flex justify-end"><button type="button" onClick={() => setEnglish(!english)} aria-label="切换项目介绍语言 / Switch project description language" className="border-b border-line pb-1 font-mono text-[10px] tracking-widest hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">{english ? "EN / 中文" : "中文 / EN"}</button></div>
      <div className="grid gap-10 border-t border-line pt-6 md:grid-cols-12 md:gap-16">
        <ol className="flex gap-2 overflow-x-auto pb-2 md:col-span-5 md:block md:overflow-visible md:pb-0">
          {projects.map((project, index) => (
            <li key={project.slug} className="shrink-0 border-b border-line">
              <button type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className="group flex w-full items-baseline gap-3 py-3 pr-3 text-left md:gap-4 md:py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                <span className="font-mono text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
                <span className={`flex-1 font-display text-lg md:text-[clamp(1.7rem,3vw,3rem)] leading-none transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none ${selected === index ? "text-accent" : ""}`}>{project.name}</span>
                <span className="font-mono text-[9px] uppercase text-muted">{project.status === "Coming soon" ? "Soon" : project.status === "Research" ? "Research" : index === 0 ? "Featured" : ""}</span>
              </button>
            </li>
          ))}
        </ol>
        <motion.div data-motion-reveal className="md:col-span-7 md:pt-5" initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <div className="relative mx-auto max-w-xl px-4 pb-5 pt-3 sm:px-8">
            <div className="absolute inset-4 rotate-[3deg] border border-ink/20 bg-curtain" aria-hidden />
            <AnimatePresence mode="wait" initial={false}>
            <motion.div key={current.slug} initial={reduce ? false : { opacity: 0, x: 22, rotate: 3 }} animate={{ opacity: 1, x: 0, rotate: -2 }} exit={reduce ? { opacity: 1 } : { opacity: 0, x: -18, rotate: -4 }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 240, damping: 25 }} className="relative border border-ink/40 bg-paper p-3 shadow-[0_14px_32px_rgb(23_21_19/0.1)]">
              <div className="relative aspect-[8/5] overflow-hidden border border-ink/15 bg-surface"><Image src={current.cover} alt={current.coverAlt} fill sizes="(min-width: 768px) 50vw, 90vw" unoptimized={current.slug === "zero-bot" || current.slug === "meow-wall"} className="object-cover" /></div>
              <p className="flex justify-between px-1 pt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted"><span>No. {String(selected + 1).padStart(2, "0")}</span><span>{current.year}</span></p>
            </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 max-w-xl" aria-live="polite" aria-atomic="true">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{selected === 0 ? "精选 / Featured" : current.status === "Coming soon" ? "即将推出 / Coming soon" : current.status === "Research" ? "研究项目 / Research" : "作品 / Project"}</p>
            <p className="mt-3 text-sm leading-7 text-ink/75">{shortDescriptions[current.slug][english ? 1 : 0]}</p>
            {(current.url || current.repo) && <div className="mt-5 flex flex-wrap gap-5 text-xs">{current.url && <a href={current.url} target="_blank" rel="noreferrer" className="border-b border-ink pb-1 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">体验 / Visit ↗</a>}{current.repo && <a href={current.repo} target="_blank" rel="noreferrer" className="border-b border-line pb-1 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">源码 / GitHub ↗</a>}</div>}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
