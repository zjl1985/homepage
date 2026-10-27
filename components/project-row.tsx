"use client";

import { useState } from "react";
import type { Project } from "@/content/site";

/** A neutral placeholder keeps each project usable while its cover is being designed. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [english, setEnglish] = useState(false);
  return (
    <li id={`project-${project.slug}`} className="scroll-mt-28 border-t border-ink/25 py-7">
      <article className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_1.2fr] sm:gap-8">
        <div className="border border-ink/35 bg-paper p-2 shadow-[0_8px_24px_rgb(25_22_18/0.07)]">
          <div className="flex aspect-[8/5] flex-col justify-between border border-ink/15 bg-surface p-4 text-ink">
            <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50"><span>封面待设计</span><span>Image pending</span></div>
            <div><span className="font-mono text-[10px] text-ink/50">{String(index + 1).padStart(2, "0")} / 08</span><p className="mt-2 font-display text-3xl leading-none sm:text-4xl">{project.name}</p></div>
          </div>
          <p className="px-1 pt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50">No. {String(index + 1).padStart(2, "0")} · {project.year}</p>
        </div>
        <div className="flex flex-col items-start justify-center py-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">{index === 0 ? "精选 / Featured" : project.status === "Coming soon" ? "即将推出 / Coming soon" : project.status === "Research" ? "研究项目 / Research" : "作品 / Project"}</p>
          <h3 className="mt-3 break-words font-display text-[clamp(2rem,4vw,3.5rem)] leading-none">{project.name}</h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/75">{english ? project.summaryEn : project.summary}</p>
          <button type="button" onClick={() => setEnglish(!english)} className="mt-2 font-mono text-[9px] text-muted hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">{english ? "EN / 中文" : "中文 / EN"}</button>
          <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{project.tags.join(" · ")}</p>
          {(project.url || project.repo) && <div className="mt-6 flex flex-wrap gap-5 text-xs">
            {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="border-b border-ink pb-1 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">体验项目 / Visit project ↗</a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="border-b border-ink/30 pb-1 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">查看源码 / GitHub ↗</a>}
          </div>}
        </div>
      </article>
    </li>
  );
}
