"use client";

import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/content/site";
import { ProjectStage } from "./project-stage";
import { WordCard } from "./about";
import { SectionLabel } from "./section-label";

const destinations = [[-300,-115,-10],[-115,-165,-5],[90,-155,3],[275,-90,9],[-265,80,-7],[-85,105,-2],[100,95,5],[270,90,10]];
const short: Record<string, [string,string]> = {
  "life-decision": ["为人生选择找到有据可查的建议。", "Find evidence-backed advice for life's choices."],
  "zero-bot": ["边聊天，边完成后台任务。", "Chat while tasks run in the background."],
  "zero-api-key": ["本地优先的密钥管理工具。", "A local-first secret manager."],
  "agent-sweep": ["整理编码助手的本地会话。", "Organize local coding-agent sessions."],
  baton: ["让 Agent 上下文继续接力。", "Hand agent context to the next session."],
  "zero-notice": ["把 Codex 状态送到手机。", "Send Codex status to your phone."],
  "meow-wall": ["捏一只属于你的像素猫。", "Make a pixel cat of your own."],
  "zero-jev": ["探索类型化语义判断。", "Explore typed semantic decisions."],
};

function StoryCard({ project, index, progress, origin, selected, onSelect }: { project: Project; index: number; progress: MotionValue<number>; origin: [number,number]; selected: boolean; onSelect: () => void }) {
  const [dx,dy,angle] = destinations[index];
  const start = index * 0.012;
  const x = useTransform(progress, [0, start + 0.34, 0.55, 0.9], [origin[0], index * 2, index * 2, dx]);
  const y = useTransform(progress, [0, start + 0.34, 0.55, 0.9], [origin[1], index * 2, index * 2, dy]);
  const scale = useTransform(progress, [0, 0.34, 0.55, 0.9], [0.25, 0.85, 0.85, 0.85]);
  const rotate = useTransform(progress, [0, 0.4, 0.55, 0.9], [-6, (index - 4) * 1.5, (index - 4) * 1.5, angle]);
  return <motion.button type="button" onClick={onSelect} aria-label={`选择 ${project.name}`} aria-pressed={selected} style={{ x,y,scale,rotate,zIndex: index + 1 }} className={`absolute left-1/2 top-1/2 -ml-20 -mt-24 w-40 border bg-paper p-2 text-left shadow-[0_8px_22px_rgb(23_21_19/0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${selected ? "border-accent" : "border-ink/30"}`}>
    <span className="relative block h-36 overflow-hidden border border-ink/15 bg-surface"><Image src={project.cover} alt="" fill sizes="144px" unoptimized={project.slug === "zero-bot" || project.slug === "meow-wall"} className="object-cover" /><span className="absolute inset-x-0 bottom-0 bg-paper/90 px-2 py-1 font-display text-xl leading-none text-ink">{project.name}</span></span>
    <span className="flex justify-between pt-2 font-mono text-[8px] uppercase tracking-wider text-muted"><span>No. {String(index+1).padStart(2,"0")}</span><span>{project.status === "Coming soon" ? "Soon" : project.status === "Research" ? "Research" : index === 0 ? "Featured" : "Work"}</span></span>
  </motion.button>;
}

export function ProgrammeWork() {
  const target = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const cardLayer = useRef<HTMLDivElement>(null);
  const textActiveRef = useRef(true);
  const anchors = useRef<(HTMLSpanElement | null)[]>([]);
  const [origins,setOrigins] = useState<[number,number][]>([[0,0],[0,0],[0,0]]);
  const [selected,setSelected] = useState(0);
  const [english,setEnglish] = useState(false);
  const [textActive,setTextActive] = useState(true);
  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });
  const textOpacity = useTransform(scrollYProgress,[0,0.22,0.38],[1,1,0]);
  useMotionValueEvent(scrollYProgress, "change", value => {
    const active = value < 0.3;
    if (active !== textActiveRef.current) {
      textActiveRef.current = active;
      setTextActive(active);
    }
  });
  useEffect(() => {
    const measure = () => {
      if (!cardLayer.current) return;
      const box = cardLayer.current.getBoundingClientRect();
      setOrigins(anchors.current.map((anchor) => { const a = anchor?.getBoundingClientRect(); return a ? [a.left+a.width/2-box.left-box.width/2, a.top+a.height/2-box.top-box.height/2] : [0,0]; }));
    };
    let mounted = true;
    measure();
    document.fonts.ready.then(() => { if (mounted) measure(); });
    const observer = new ResizeObserver(measure);
    if (frame.current) observer.observe(frame.current);
    if (cardLayer.current) observer.observe(cardLayer.current);
    window.addEventListener("resize", measure);
    return () => { mounted = false; observer.disconnect(); window.removeEventListener("resize", measure); };
  },[]);
  const current=projects[selected];
  return <div id="about" className="relative">
    <div ref={target} className="relative hidden h-[240vh] lg:block motion-reduce:lg:hidden [@media(max-height:599px)]:lg:hidden">
      <div ref={frame} className="sticky top-0 h-screen overflow-hidden edge">
        <motion.div style={{ opacity: textOpacity, pointerEvents: textActive ? "auto" : "none" }} inert={!textActive} aria-hidden={!textActive} className="absolute left-[8%] right-[8%] top-[16%] z-10 grid grid-cols-12 gap-8">
          <SectionLabel index="01 / 02" zh="关于与作品" en="About & work" className="col-span-3" />
          <p className="col-span-9 max-w-4xl font-display text-[clamp(2rem,3.1vw,3.25rem)] leading-[1.55]">我是 zero，喜欢把日常的小麻烦做成 <WordCard word="小工具" title="Agent Sweep" detail="Local tools" anchorRef={el => { anchors.current[0]=el; }} />，探索 <WordCard word="AI Agent" title="Baton" detail="Agent workflows" anchorRef={el => { anchors.current[1]=el; }} />，也留点时间给 <WordCard word="像素猫" title="Meow Wall" detail="Just for fun" anchorRef={el => { anchors.current[2]=el; }} />。</p>
        </motion.div>
        <div ref={cardLayer} className="absolute inset-x-[8%] top-[100px] bottom-[175px]" aria-label="作品卡片 / Project cards">
          {projects.map((project,index)=><StoryCard key={project.slug} project={project} index={index} progress={scrollYProgress} origin={origins[index%3] ?? [0,0]} selected={selected===index} onSelect={()=>setSelected(index)} />)}
        </div>
        <div className="absolute bottom-7 left-[8%] right-[8%] z-20 flex items-end justify-between gap-8 border-t border-line bg-paper pt-3">
          <div aria-live="polite"><p className="font-mono text-[10px] uppercase tracking-wider text-accent">{selected===0?"精选 / Featured":current.status === "Coming soon"?"即将推出 / Coming soon":current.status === "Research"?"研究项目 / Research":"作品 / Project"}</p><h2 className="mt-1 font-display text-2xl">{current.name}</h2><p className="mt-1 text-xs text-muted">{short[current.slug][english?1:0]}</p><div className="mt-2 flex gap-4 text-xs">{current.url && <a href={current.url} target="_blank" rel="noreferrer" className="border-b border-ink">体验 / Visit ↗</a>}{current.repo && <a href={current.repo} target="_blank" rel="noreferrer" className="border-b border-line">源码 / GitHub ↗</a>}<Link href="/projects" className="border-b border-line">全部项目 / All projects →</Link></div></div>
          <div className="flex flex-col items-end gap-3"><button type="button" onClick={()=>setEnglish(!english)} className="font-mono text-[10px] text-muted">{english?"EN / 中文":"中文 / EN"}</button><div className="flex gap-1">{projects.map((p,i)=><button key={p.slug} type="button" onClick={()=>setSelected(i)} aria-label={`选择 ${p.name}`} aria-pressed={selected===i} className={`size-8 border font-mono text-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${selected===i?"border-accent text-accent":"border-line"}`}>{String(i+1).padStart(2,"0")}</button>)}</div></div>
        </div>
      </div>
    </div>
    <div className="lg:hidden motion-reduce:lg:block [@media(max-height:599px)]:lg:block">
      <section className="mx-auto max-w-[1600px] py-24 edge"><SectionLabel index="01" zh="关于" en="About" /><p className="mt-8 max-w-3xl font-display text-3xl leading-relaxed">我是 zero，喜欢把日常的小麻烦做成 <WordCard word="小工具" title="Agent Sweep" detail="Local tools" />，探索 <WordCard word="AI Agent" title="Baton" detail="Agent workflows" />，也留点时间给 <WordCard word="像素猫" title="Meow Wall" detail="Just for fun" />。</p></section>
    </div>
    <span id="work" className="block scroll-mt-24 lg:absolute lg:top-[120vh] motion-reduce:lg:static [@media(max-height:599px)]:lg:static" />
    <div className="lg:hidden motion-reduce:lg:block [@media(max-height:599px)]:lg:block">
      <section className="mx-auto max-w-[1600px] pb-24 edge"><SectionLabel index="02" zh="作品" en="Work" /><div className="mt-10"><ProjectStage projects={projects} /></div><Link href="/projects" className="mt-10 inline-block border-b border-line text-xs">全部项目 / All projects →</Link></section>
    </div>
  </div>;
}
