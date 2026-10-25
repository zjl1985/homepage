import { site } from "@/content/site";
import { splitEmphasis } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 md:py-40 edge">
      <div className="grid gap-10 md:grid-cols-12">
        <SectionLabel index="01" zh="关于" en="About" className="md:col-span-3" />
        <div className="space-y-8 md:col-span-9">
          {site.about.map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="font-display text-3xl leading-[1.25] tracking-tight md:text-5xl">
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
