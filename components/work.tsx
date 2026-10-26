import Link from "next/link";
import { projects } from "@/content/site";
import { FeaturedProject } from "./featured-project";
import { ProjectRow } from "./project-row";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Work() {
  const featured = projects.filter((project) => project.featured);
  const [latest, ...selected] = featured;

  return (
    <section id="work" className="mx-auto max-w-[1600px] scroll-mt-24 py-28 md:py-40 edge">
      <div className="mb-14 grid gap-8 md:grid-cols-12">
        <SectionLabel index="02" zh="作品" en="Selected work" className="md:col-span-3" />
        <Reveal className="md:col-span-9">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
            从日常的小摩擦，<br className="hidden sm:block" />
            到 <span className="italic text-muted">AI 工作流。</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            一些已经可用的工具，一些还在验证的想法。都从真实的问题或好奇心开始。
          </p>
        </Reveal>
      </div>
      {latest && <FeaturedProject project={latest} />}
      <ul>
        {selected.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index + 1} />
        ))}
      </ul>
      <div className="mt-10 flex justify-end">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 rounded-sm border-b border-line pb-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
        >
          全部项目 / All projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
