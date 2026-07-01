"use client";
import {useEffect,useRef,type CSSProperties} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type AboutCopy={label:string;lead:string;body:string;resolve:string;principles:readonly(readonly[string,string,string])[];signal:string;signalText:string;live:string;capabilities:readonly string[];manifesto:readonly[string,string]};

export default function About({copy}:{copy:AboutCopy}){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const ctx=gsap.context(()=>{
    gsap.from(".about-line",{scrollTrigger:{trigger:ref.current,start:"top 72%"},y:80,opacity:0,stagger:.1,duration:1,ease:"power4.out"});
    gsap.fromTo(".principle-card",{y:120,rotateX:-18},{y:0,rotateX:0,stagger:.1,ease:"none",scrollTrigger:{trigger:".principle-grid",start:"top 90%",end:"center 48%",scrub:1}});
    gsap.to(".about-blueprint",{rotate:38,scale:1.16,scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:1.5}});
    gsap.to(".manifesto span:first-child",{xPercent:16,scrollTrigger:{trigger:".manifesto",start:"top bottom",end:"bottom top",scrub:1.2}});
    gsap.to(".manifesto span:last-child",{xPercent:-18,scrollTrigger:{trigger:".manifesto",start:"top bottom",end:"bottom top",scrub:1.2}});
  },ref);return()=>ctx.revert()},[]);
  return <section ref={ref} id="about" className="section about">
    <div className="about-blueprint" aria-hidden="true"><i/><i/><i/><span>MF / OPERATING SYSTEM</span></div>
    <div className="section-index about-line"><span>02</span><span>{copy.label}</span></div>
    <div className="about-grid"><h2 className="about-line">{copy.lead}</h2><div className="about-copy"><p className="about-line">{copy.body}</p><blockquote className="about-line">{copy.resolve}</blockquote></div></div>
    <div className="principle-grid about-line">
      {copy.principles.map(([n,t,x],index)=><article key={n} className="principle-card"><span>{n}</span><div className="principle-meter"><i style={{"--level":`${72+index*9}%`} as CSSProperties}/></div><h3>{t}</h3><p>{x}</p><b>↗</b></article>)}
      <article className="signal-card"><span>{copy.signal}</span><b>{copy.signalText}</b><em>{copy.live}</em><div className="signal-radar"><i/><i/><i/></div></article>
    </div>
    <div className="capability-rail about-line">{copy.capabilities.map((item,i)=><span key={item}>{i>0&&<i>✦</i>}{item}</span>)}</div>
    <div className="manifesto about-line"><span>{copy.manifesto[0]}</span><span>{copy.manifesto[1]}</span></div>
  </section>
}
