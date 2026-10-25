import { site } from "@/content/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 py-28 md:py-40 edge">
      <div className="mb-14 grid gap-8 md:grid-cols-12">
        <SectionLabel index="03" zh="方法" en="Approach" className="md:col-span-3" />
        <Reveal className="md:col-span-9">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
            不管项目大小，<span className="italic text-muted">节奏都差不多。</span>
          </h2>
        </Reveal>
      </div>
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {site.approach.map((step, i) => (
          <li key={step.title} className="flex min-h-64 flex-col bg-paper p-6 md:p-8">
            <Reveal delay={i * 0.08} className="flex h-full flex-col">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-auto pt-16 font-display text-4xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
