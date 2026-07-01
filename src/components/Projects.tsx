"use client";
import{useEffect,useRef}from"react";import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";import{projects}from"@/data/projects";import type{Locale}from"@/data/content";gsap.registerPlugin(ScrollTrigger);
export default function Projects({copy,locale}:{copy:{label:string;title:string;intro:string;caseLabel:string};locale:Locale}){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const ctx=gsap.context(()=>{
    gsap.to(".work-beacon",{xPercent:-35,scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:1}});
    gsap.utils.toArray<HTMLElement>(".project").forEach(card=>{
      gsap.from(card,{scrollTrigger:{trigger:card,start:"top 88%"},y:70,opacity:0,duration:.9,ease:"power3.out"});
      const visual=card.querySelector(".project-visual");
      const move=(e:PointerEvent)=>{const box=card.getBoundingClientRect();gsap.to(visual,{rotateY:((e.clientX-box.left)/box.width-.5)*12,rotateX:-((e.clientY-box.top)/box.height-.5)*8,duration:.45,ease:"power3.out"})};
      const leave=()=>gsap.to(visual,{rotateX:0,rotateY:0,duration:.75,ease:"elastic.out(1,.45)"});
      card.addEventListener("pointermove",move);card.addEventListener("pointerleave",leave);
    });
  },ref);return()=>ctx.revert()},[]);
  return <section ref={ref} id="work" className="section projects">
    <div className="work-beacon" aria-hidden="true">SELECTED / SYSTEMS / IMPACT</div>
    <div className="section-index"><span>03</span><span>{copy.label}</span></div>
    <div className="projects-heading"><h2>{copy.title}</h2><p>{copy.intro}</p></div>
    <div className="project-list">{projects[locale].map((project,index)=><a href={`/work/${project.slug}?lang=${locale}`} className={`project project-${index+1}`} key={project.id}>
      <div className="project-number"><span>{project.id}</span><i>{copy.caseLabel}</i></div>
      <div className="project-main"><small>{project.type}</small><h3>{project.title}</h3><p>{project.copy}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>
      <div className="project-visual" aria-hidden="true"><span className="visual-index">{project.id}</span><div className="artifact-ui"><i/><i/><i/><b>{project.id}</b></div><span className="visual-line one"/><span className="visual-line two"/><span className="visual-line three"/><span className="visual-core"><img src="/mf-mark-exact.png" alt=""/></span></div>
      <div className="project-sigil"><span>MF/{project.id}</span><b>↗</b></div>
    </a>)}</div>
  </section>
}
