"use client";
import { useEffect,useRef } from "react";
import { gsap } from "gsap";
type HeroCopy={eyebrow:string;name:readonly[string,string];mantra:string;ghost:string;building:string;systems:string;established:string;disciplines:string;summary:string;promptA:string;promptB:string;location:string;scroll:string};
export default function Hero({copy}:{copy:HeroCopy}) {
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const ctx=gsap.context(()=>{
  gsap.from(".hero-reveal",{yPercent:120,opacity:0,stagger:.08,duration:1.15,ease:"power4.out",delay:.12});
  const move=(e:PointerEvent)=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to(".mf-sculpture",{x:x*58,y:y*44,rotateY:x*14,rotateX:y*-10,duration:1.4,ease:"power3.out"});gsap.to(".hero-lens",{x:x*-32,y:y*-22,duration:1.8,ease:"power3.out"});gsap.to(".orb",{x:x*76,y:y*66,duration:1.8,ease:"power3.out"})};
  addEventListener("pointermove",move);return()=>removeEventListener("pointermove",move);
 },ref);return()=>ctx.revert()},[]);
 return <section ref={ref} id="home" className="hero">
  <div className="hero-grid"/><div className="hero-lens"/><div className="mf-sculpture"><span className="beam beam-one"/><span className="beam beam-two"/><span className="beam beam-three"/><span className="beam beam-four"/><b><img className="hero-logo" src="/mf-mark-exact.png" alt=""/></b></div>
  <div className="spark-field">{Array.from({length:18}).map((_,i)=><i key={i}/>)}</div><div className="orb"><span><img src="/mf-mark-exact.png" alt=""/></span><i/></div><div className="hero-ghost">{copy.ghost}</div>
  <div className="hero-top hero-reveal"><span>01</span><span>{copy.eyebrow}</span></div>
  <div className="hero-copy"><div className="clip"><h1 className="hero-reveal"><span>{copy.name[0]}</span><span>{copy.name[1]}<i>.</i></span></h1></div><div className="hero-statement hero-reveal"><span>{copy.building}</span><p>{copy.mantra}</p><span>{copy.systems}</span></div></div>
  <aside className="hero-facts hero-reveal"><span>{copy.established}</span><span>{copy.disciplines}</span><p>{copy.summary}</p></aside>
  <div className="hero-prompt hero-reveal"><span>{copy.promptA}</span><b>✦</b><span>{copy.promptB}</span></div>
  <div className="hero-code hero-reveal">32.8872° N<br/>13.1913° E</div><div className="hero-bottom hero-reveal"><span>{copy.location}</span><a href="#about">{copy.scroll} <i>↓</i></a></div>
 </section>;
}
