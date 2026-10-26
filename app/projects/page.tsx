import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { ProjectRow } from "@/components/project-row";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "项目 / Projects",
  description: "zero 的开源项目：AI Agent 工作流、local-first 桌面工具与有趣的小实验。",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="top">
      <section className="mx-auto max-w-[1600px] pb-24 pt-36 edge">
        <SectionLabel index="§" zh="全部项目" en="All projects" />
        <h1 className="mt-8 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] tracking-tight">
          Projects<span className="italic text-accent">.</span>
        </h1>
        <div className="mt-10 flex max-w-2xl flex-col gap-3 text-sm leading-relaxed text-muted md:flex-row md:items-center md:justify-between">
          <p>真实的问题，克制的工具，以及一点纯粹的好玩。</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">Selected experiments · 2026</p>
        </div>
        <ul className="mt-12 border-t border-line">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </ul>
        <Link
          href="/"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-accent"
        >
          ← 返回首页 / Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}
