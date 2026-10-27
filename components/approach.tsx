import { site } from "@/content/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1600px] scroll-mt-24 py-24 md:py-36 edge">
      <div className="grid gap-8 md:grid-cols-12">
        <SectionLabel index="03" zh="方法" en="Approach" className="md:col-span-3" />
        <div className="md:col-span-9">
          <Reveal><h2 className="font-display text-4xl leading-tight tracking-tight md:text-6xl">先解决问题，<span className="italic text-muted">再决定用什么技术。</span></h2></Reveal>
          <ol className="mt-12 border-t border-line">
            {site.approach.map((step, i) => <li key={step.title} className="border-b border-line"><details className="group"><summary className="flex cursor-pointer list-none items-center gap-5 py-5 marker:content-none"><span className="font-mono text-[10px] text-accent">0{i + 1}</span><span className="font-display text-2xl md:text-3xl">{step.title}</span><span className="ml-auto text-muted transition-transform duration-300 group-open:rotate-45" aria-hidden>＋</span></summary><p className="max-w-xl pb-6 pl-9 text-sm leading-7 text-muted">{step.body}</p></details></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
