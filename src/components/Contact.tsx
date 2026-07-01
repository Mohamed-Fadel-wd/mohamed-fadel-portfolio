"use client";
import{useEffect,useRef}from"react";import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";gsap.registerPlugin(ScrollTrigger);
type ContactCopy={label:string;ghost:string;title:string;body:string;action:string;openTo:string;availability:string;location:string;copyright:string;socials:readonly string[];top:string};
export default function Contact({copy}:{copy:ContactCopy}){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const ctx=gsap.context(()=>{
    gsap.from(".contact h2",{clipPath:"inset(0 0 100% 0)",y:110,scrollTrigger:{trigger:ref.current,start:"top 60%",end:"top 20%",scrub:1}});
    gsap.to(".contact-ghost",{xPercent:-18,scale:1.12,scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom bottom",scrub:1}});
    gsap.from(".contact-orbit",{scale:0,rotate:-180,scrollTrigger:{trigger:ref.current,start:"top 55%"},duration:1.2,ease:"elastic.out(1,.55)"});
    gsap.to(".contact-scan",{y:"92vh",scrollTrigger:{trigger:ref.current,start:"top 70%",end:"bottom bottom",scrub:.8}});
  },ref);return()=>ctx.revert()},[]);
  return <footer ref={ref} id="contact" className="contact">
    <div className="contact-scan" aria-hidden="true"/><div className="section-index"><span>04</span><span>{copy.label}</span></div>
    <div className="contact-stage"><span className="contact-ghost">{copy.ghost}</span><div className="contact-copy"><span className="contact-kicker">AVAILABLE FOR MEANINGFUL WORK</span><h2>{copy.title}</h2><p>{copy.body}</p></div><a className="contact-orbit" href="mailto:hello@mohamedfadel.com"><span>{copy.action} · {copy.action} ·</span><b>↗</b></a><div className="contact-plate"><span>{copy.openTo}</span><b>{copy.availability}</b><small>{copy.location}</small></div></div>
    <a className="email" href="mailto:hello@mohamedfadel.com"><span>HELLO@MOHAMEDFADEL.COM</span><b>↗</b></a>
    <div className="contact-bottom"><span>{copy.copyright}</span><div>{copy.socials.map(s=><a href="#" key={s}>{s}</a>)}</div><a href="#home">{copy.top} ↑</a></div>
  </footer>
}
