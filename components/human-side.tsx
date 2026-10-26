import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

/** 工作之外：保留一点生活感与项目背后的好奇心。 */
export function HumanSide() {
  return (
    <section className="mx-auto max-w-[1600px] pb-28 md:pb-40 edge" aria-labelledby="human-side-title">
      <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
        <SectionLabel index="04" zh="工具之外" en="Off screen" className="md:col-span-3" />
        <div className="md:col-span-9">
          <Reveal>
            <div className="flex items-start justify-between gap-8">
              <h2
                id="human-side-title"
                className="max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-6xl"
              >
                在工具与玩具之间，<span className="italic text-muted">保留好奇心。</span>
              </h2>
              <Image
                src="/assets/brand/zero-cat-mark.svg"
                alt="zero 的像素感猫猫标识"
                width={88}
                height={88}
                className="size-16 shrink-0 rounded-full border border-line dark:invert md:size-22"
              />
            </div>
          </Reveal>

          <ul className="mt-12 border-t border-line">
            {site.humanSide.map((item, index) => (
              <li key={item.title} className="grid gap-3 border-b border-line py-7 sm:grid-cols-12 sm:gap-6">
                <span className="font-mono text-[10px] text-accent sm:col-span-1">
                  0{index + 1}
                </span>
                <h3 className="font-display text-2xl sm:col-span-4">
                  {item.title}
                  <span className="ml-3 align-middle font-sans text-xs font-normal text-muted">
                    {item.label}
                  </span>
                </h3>
                <p className="max-w-xl text-sm leading-7 text-muted sm:col-span-7">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Built with curiosity. Shipped with care.
          </p>
        </div>
      </div>
    </section>
  );
}
