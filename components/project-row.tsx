import Image from "next/image";
import type { Project } from "@/content/site";

/** 编辑式作品行：保留大字排版，以概念封面提供视觉锚点。 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.repo ?? "#";

  return (
    <li className="group relative border-b border-line">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.name} — ${project.summaryEn ?? project.summary}`}
        className="relative grid grid-cols-12 items-center gap-x-4 gap-y-6 py-9 md:py-12"
      >
        <span className="col-span-2 self-start pt-1 font-mono text-xs text-muted md:col-span-1 md:self-center md:pt-0">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="col-span-10 md:col-span-4">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2">
              {project.name}
            </h3>
            {project.status && (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                / {project.status}
              </span>
            )}
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:hidden">
            {project.year} · {project.url ? "Live project" : "Open source"}
          </p>
        </div>

        <div className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto md:pr-8">
          <p className="max-w-md text-sm leading-7 text-ink/70 dark:text-ink/70">
            {project.summary}
            {project.summaryEn && (
              <span className="mt-2 block text-xs leading-6 text-muted md:text-sm">
                {project.summaryEn}
              </span>
            )}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
            {project.tags.map((tag) => (
              <span key={tag} className="before:mr-3 before:content-['·'] first:before:mr-0 first:before:content-none">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative col-span-10 col-start-3 md:col-span-3 md:col-start-auto">
          <div className="relative aspect-[8/5] overflow-hidden rounded-lg border border-ink/10 bg-curtain dark:border-white/10">
            <Image
              src={project.cover}
              alt={`${project.name} 概念封面`}
              fill
              sizes="(min-width: 768px) 25vw, 84vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          </div>
          <span className="absolute bottom-2 right-2 grid size-8 place-items-center rounded-md border border-white/10 bg-paper/90 text-sm text-ink shadow-sm backdrop-blur transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </a>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out group-hover:scale-x-100"
      />
    </li>
  );
}
