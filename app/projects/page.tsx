import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { ProjectRow } from "@/components/project-row";
import { SectionLabel } from "@/components/section-label";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "项目 / Projects",
  description: "zero 做过的所有项目。",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main id="top">
      <section className="pb-24 pt-36 edge">
        <SectionLabel index="—" zh="全部项目" en="All projects" />
        <h1 className="mt-8 font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] tracking-tight">
          Projects<span className="italic text-accent">.</span>
        </h1>
        <ul className="mt-16 border-t border-line">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </ul>
        <Link
          href="/"
          className="mt-10 inline-block font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-accent"
        >
          ← 返回首页 / Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}
