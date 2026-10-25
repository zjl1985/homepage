import Link from "next/link";
import { projects } from "@/content/site";
import { ProjectRow } from "./project-row";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" className="scroll-mt-24 py-28 md:py-40 edge">
      <div className="mb-14 grid gap-8 md:grid-cols-12">
        <SectionLabel index="02" zh="作品" en="Selected work" className="md:col-span-3" />
        <Reveal className="md:col-span-9">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
            一些做过的东西，<span className="italic text-muted">大多开源。</span>
          </h2>
        </Reveal>
      </div>
      <ul className="border-t border-line">
        {featured.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </ul>
      <div className="mt-10 flex justify-end">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]"
        >
          全部项目 / All projects
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
