import { site } from "@/content/site";
import { SectionLabel } from "./section-label";

export function HumanSide() {
  return (
    <section className="mx-auto max-w-[1600px] pb-28 md:pb-40 edge" aria-labelledby="human-side-title">
      <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12">
        <SectionLabel index="04" zh="工具之外" en="Off screen" className="md:col-span-3" />
        <div className="md:col-span-9">
          <h2 id="human-side-title" className="font-display text-3xl leading-tight tracking-tight md:text-5xl">在工具与玩具之间，<span className="italic text-muted">保留好奇心。</span></h2>
          <div className="mt-8 flex flex-wrap gap-3">{site.humanSide.map((item) => <details key={item.title} className="group"><summary className="cursor-pointer list-none rounded-full border border-line px-4 py-2 text-xs text-muted transition-colors hover:border-accent hover:text-accent marker:content-none">{item.title} · {item.label} <span aria-hidden className="inline-block transition-transform group-open:rotate-45">＋</span></summary><p className="mt-3 max-w-sm text-sm leading-7 text-muted">{item.body}</p></details>)}</div>
        </div>
      </div>
    </section>
  );
}
