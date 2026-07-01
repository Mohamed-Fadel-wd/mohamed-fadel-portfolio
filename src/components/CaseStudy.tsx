"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import type { Locale } from "@/data/content";
gsap.registerPlugin(ScrollTrigger);

const labels = {
  en:{back:"Back to portfolio",challenge:"The challenge",approach:"The approach",system:"The system",outcome:"The outcome",next:"Next case",language:"AR"},
  ar:{back:"العودة إلى الموقع",challenge:"التحدي",approach:"المنهج",system:"النظام",outcome:"النتيجة",next:"المشروع التالي",language:"EN"},
};

export default function CaseStudy({ slug }: { slug:string }) {
  const [locale,setLocale]=useState<Locale>("en");
  const ref=useRef<HTMLElement>(null);
  const list=projects[locale], index=Math.max(0,list.findIndex(p=>p.slug===slug)), project=list[index], next=list[(index+1)%list.length], l=labels[locale];
  useEffect(()=>{const requested=new URLSearchParams(location.search).get("lang"),saved=localStorage.getItem("mf-locale");if(requested==="ar"||requested==="en")setLocale(requested);else if(saved==="ar"||saved==="en")setLocale(saved)},[]);
  const changeLocale=(next:Locale)=>{setLocale(next);localStorage.setItem("mf-locale",next);history.replaceState(null,"",`${location.pathname}?lang=${next}`)};
  useEffect(()=>{const ctx=gsap.context(()=>{
    gsap.from(".case-reveal",{y:80,opacity:0,stagger:.08,duration:1,ease:"power4.out"});
    gsap.utils.toArray<HTMLElement>(".case-block").forEach((block,i)=>gsap.from(block,{x:i%2?80:-80,opacity:0,scrollTrigger:{trigger:block,start:"top 78%"},duration:1,ease:"power4.out"}));
    gsap.to(".case-mark",{rotate:28,scale:1.12,scrollTrigger:{trigger:ref.current,start:"top top",end:"bottom bottom",scrub:1}});
  },ref);return()=>ctx.revert()},[locale]);
  return <main ref={ref} className={`case-page case-${slug}`} dir={locale==="ar"?"rtl":"ltr"}>
    <header className="case-nav"><a href={`/?lang=${locale}#work`}>← {l.back}</a><img src="/mf-mark-exact.png" alt="Mohamed Fadel"/><button onClick={()=>changeLocale(locale==="en"?"ar":"en")}>{l.language}</button></header>
    <section className="case-hero">
      <div className="case-grid"/><img className="case-mark" src="/mf-mark-exact.png" alt=""/><ProjectArtifact slug={slug}/>
      <span className="case-index case-reveal">CASE / {project.id}</span><p className="case-type case-reveal">{project.type}</p>
      <h1 className="case-reveal">{project.title}</h1><p className="case-intro case-reveal">{project.copy}</p>
      <div className="case-tags case-reveal">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
    </section>
    <section className="case-story">
      <article className="case-block"><span>01</span><h2>{l.challenge}</h2><p>{project.challenge}</p></article>
      <article className="case-block case-blue"><span>02</span><h2>{l.approach}</h2><p>{project.approach}</p></article>
      <article className="case-block case-system"><span>03</span><h2>{l.system}</h2><ol>{project.system.map((item,i)=><li key={item}><b>0{i+1}</b>{item}</li>)}</ol></article>
      <article className="case-block"><span>04</span><h2>{l.outcome}</h2><p>{project.outcome}</p></article>
    </section>
    <a className="case-next" href={`/work/${next.slug}?lang=${locale}`}><span>{l.next} / {next.id}</span><strong>{next.title}</strong><b>↗</b></a>
  </main>;
}

function ProjectArtifact({slug}:{slug:string}) {
  if(slug==="connect-program") return <div className="case-art journey-art"><i/><i/><i/><i/><b>01</b><b>02</b><b>03</b></div>;
  if(slug==="workforce-intelligence") return <div className="case-art data-art"><i/><i/><i/><i/><i/><span>72</span></div>;
  if(slug==="hr-e-archive") return <div className="case-art archive-art"><i/><i/><i/><i/><i/><b>HR</b></div>;
  if(slug==="recoai-jobs") return <div className="case-art match-art"><i/><i/><span>87%</span><b>↔</b></div>;
  return <div className="case-art insurance-art"><i/><i/><i/><i/><span>Q4</span></div>;
}
