import type { Project } from "@/content/site";

/** 作品列表的一行：悬停时整行反色、箭头滑入 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.repo ?? "#";
  return (
    <li className="group relative border-b border-line">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 grid grid-cols-12 items-baseline gap-x-4 gap-y-2 py-7 md:py-9"
      >
        <span className="col-span-2 font-mono text-xs text-muted md:col-span-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="col-span-10 font-display text-4xl leading-none tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 md:col-span-4 md:text-6xl">
          {project.name}
        </h3>
        <p className="col-span-10 col-start-3 text-base text-muted md:col-span-4 md:col-start-auto">
          {project.summary}
          {project.summaryEn && (
            <span className="mt-1 block text-sm opacity-70">{project.summaryEn}</span>
          )}
        </p>
        <div className="col-span-10 col-start-3 flex flex-wrap items-center gap-2 md:col-span-3 md:col-start-auto md:justify-end">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {t}
            </span>
          ))}
          <span className="ml-1 text-xl text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
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
