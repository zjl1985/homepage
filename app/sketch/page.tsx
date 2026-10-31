import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, site } from "@/content/site";
import "./sketch.css";

export const metadata: Metadata = {
  title: "手绘札记",
  description: `${site.name} 的手绘札记：一些认真做的小工具，和一些纯粹好玩的念头。`,
  alternates: { canonical: "/" },
};

export default function SketchHome() {
  return (
    <main id="top" className="sketch-home">
      <section className="sketch-hero" aria-labelledby="sketch-title">
        <div className="sketch-sky" aria-hidden="true" />
        <p className="sketch-edition">A builder’s field notes · Vol. 01</p>
        <div className="sketch-title">
          <p className="sketch-eyebrow">想法在这里，慢慢长成作品。</p>
          <h1 id="sketch-title">{site.name}<span className="sketch-star" aria-hidden="true">✳︎</span></h1>
          <p className="sketch-role">{site.role}</p>
          <p className="sketch-tagline">{site.tagline}</p>
        </div>
        <a href="#work" className="sketch-scroll">翻翻我的作品 <span aria-hidden="true">↓</span></a>
        <span className="sketch-margin-note" aria-hidden="true">a little curiosity,<br />a little code.</span>
      </section>

      <section id="work" className="sketch-sheet sketch-kraft" aria-labelledby="work-title">
        <div className="sketch-section-heading">
          <div><p className="sketch-index">01 / Things I’ve made</p><h2 id="work-title">作品剪贴簿<span>Selected work</span></h2></div>
          <p>一些认真做的小工具，<br />和一些纯粹好玩的念头。</p>
        </div>
        <ul className="sketch-projects">
          {projects.map((project, index) => (
            <li key={project.slug} className="sketch-project">
              <article>
                <div className="sketch-print">
                  <span className="sketch-tape" aria-hidden="true" />
                  <div className="sketch-cover"><Image src={project.cover} alt={project.coverAlt} fill sizes="(min-width: 1100px) 30vw, (min-width: 700px) 44vw, 90vw" className="object-cover" /></div>
                  <div className="sketch-caption"><span>No. {String(index + 1).padStart(2, "0")}</span><span>{project.status ?? "Made with care"} · {project.year}</span></div>
                </div>
                <h3>{project.name}</h3>
                <p className="sketch-summary">{project.summary}</p>
                <details className="sketch-details"><summary>项目笔记 / EN</summary><p lang="en">{project.summaryEn}</p><p>{project.tags.join(" · ")}</p></details>
                <div className="sketch-project-links">
                  {project.url && <a href={project.url} target="_blank" rel="noreferrer">去看看 ↗</a>}
                  {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  {project.status === "Coming soon" && <span>还在打磨，敬请期待。</span>}
                </div>
              </article>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="sketch-label-link">全部项目索引 ↗</Link>
      </section>

      <section id="about" className="sketch-sheet sketch-grid-paper" aria-labelledby="about-title">
        <div className="sketch-about">
          <div><p className="sketch-index">02 / A note about me</p><h2 id="about-title">你好，我是 zero。<span>Always a work in progress.</span></h2><div className="sketch-doodle" aria-hidden="true">&lt; / &gt;<span>keep making things.</span></div></div>
          <div className="sketch-letter">{site.about.map((paragraph) => <p key={paragraph}>{paragraph.split(/\*([^*]+)\*/g).map((part, index) => index % 2 ? <mark key={index}>{part}</mark> : part)}</p>)}<p className="sketch-signature">See you around, <em>zero</em></p></div>
        </div>
      </section>

      <section id="approach" className="sketch-sheet sketch-process" aria-labelledby="approach-title">
        <p className="sketch-index">03 / From a thought to a thing</p>
        <h2 id="approach-title">小工具，慢慢做。<span>Notes on the process</span></h2>
        <ol className="sketch-steps">{site.approach.map((step, index) => <li key={step.title}><span className="sketch-step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
        <div className="sketch-human"><p className="sketch-index">Off the screen / 屏幕之外</p>{site.humanSide.map((item) => <div key={item.title}><h3>{item.label}</h3><p>{item.body}</p></div>)}</div>
      </section>

      <footer id="contact" className="sketch-contact">
        <p className="sketch-index">04 / Leave a little note</p>
        <h2>有个想法？<br /><em>写封信吧。</em></h2>
        <a className="sketch-email" href={`mailto:${site.email}`}>{site.email} ↗</a>
        <div className="sketch-footer-line"><span>{site.name} · Small tools. Real leverage.</span><a href={site.links[0].href} target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">回到页首 ↑</a></div>
      </footer>
    </main>
  );
}
