import Image from "next/image";
import type { Project } from "@/content/site";
import { Reveal } from "./reveal";

/** 最新作品采用专题首展，与后续目录式项目行形成层级。 */
export function FeaturedProject({ project }: { project: Project }) {
  const href = project.url ?? project.repo ?? "#";

  return (
    <Reveal>
      <article className="group border-y border-line py-8 md:py-12">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="grid items-center gap-10 md:grid-cols-12 md:gap-8"
          aria-label={`查看 ${project.name} 项目`}
        >
          <div className="md:col-span-5 md:pr-8 lg:col-span-4 lg:col-start-2">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="text-accent">01 / Latest</span>
              <span className="h-px w-8 bg-line" aria-hidden />
              <span>{project.year}</span>
            </div>
            <h3 className="mt-6 font-display text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.035em]">
              {project.name}
            </h3>
            <p className="mt-7 max-w-md text-[15px] leading-7 text-ink/75 dark:text-ink/70">
              {project.summary}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-muted">
              {project.summaryEn}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <span className="mt-9 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-xs transition-colors group-hover:border-accent group-hover:text-accent">
              查看项目 / View on GitHub
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </span>
          </div>

          <div className="relative md:col-span-7 lg:col-span-7">
            <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-ink/10 bg-curtain shadow-[0_24px_70px_rgb(23_21_19/0.10)] dark:border-white/10">
              <Image
                src={project.cover}
                alt={`${project.name} 概念封面：Agent 事件通过通知铃铛传递到移动设备`}
                fill
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              />
            </div>
            <p className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <span>Concept visual · Not a product screenshot</span>
              <span aria-hidden>Fig. 01</span>
            </p>
          </div>
        </a>
      </article>
    </Reveal>
  );
}
