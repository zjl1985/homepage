import Link from "next/link";
import { projects } from "@/content/site";
import { ProjectStage } from "./project-stage";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] scroll-mt-24 py-28 md:py-40 edge">
      <div className="mb-14 grid gap-8 md:grid-cols-12">
        <SectionLabel index="02" zh="作品" en="Selected work" className="md:col-span-3" />
        <Reveal className="md:col-span-9"><h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">从日常的小摩擦，<br className="hidden sm:block" />到 <span className="italic text-muted">AI 工作流。</span></h2></Reveal>
      </div>
      <ProjectStage projects={projects} />
      <div className="mt-12 flex justify-end"><Link href="/projects" className="border-b border-line pb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] hover:text-accent">全部项目 / All projects →</Link></div>
    </section>
  );
}
