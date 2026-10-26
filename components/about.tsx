import { site } from "@/content/site";
import { splitEmphasis } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] scroll-mt-24 py-28 md:py-40 edge">
      <div className="grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" zh="关于" en="About" className="md:col-span-3" />
        <div className="space-y-8 md:col-span-9">
          <p className="mb-12 max-w-xl border-l border-accent pl-5 font-mono text-[10px] leading-6 tracking-[0.04em] text-muted">
            {site.bioEn}
          </p>
          {site.about.map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="font-display text-[clamp(1.9rem,3.4vw,3.4rem)] leading-[1.28] tracking-[-0.02em]">
                {splitEmphasis(para).map((seg, j) =>
                  seg.em ? (
                    <em
                      key={j}
                      className="italic text-accent underline decoration-1 underline-offset-[0.18em]"
                    >
                      {seg.text}
                    </em>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  ),
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
