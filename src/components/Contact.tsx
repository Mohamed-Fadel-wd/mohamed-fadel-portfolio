"use client";
import { useEffect,useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Contact({line}:{line:string}) {
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{const ctx=gsap.context(()=>{
  gsap.from(".contact h2",{clipPath:"inset(0 0 100% 0)",y:110,scrollTrigger:{trigger:ref.current,start:"top 60%",end:"top 20%",scrub:1}});
  gsap.to(".contact-ghost",{xPercent:-18,scale:1.12,scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom bottom",scrub:1}});
  gsap.from(".contact-orbit",{scale:0,rotate:-180,scrollTrigger:{trigger:ref.current,start:"top 55%"},duration:1.2,ease:"elastic.out(1,.55)"});
 },ref);return()=>ctx.revert()},[]);
 return <footer ref={ref} id="contact" className="contact">
  <div className="section-index"><span>04</span><span>CONTACT / BEGIN</span></div>
  <div className="contact-stage"><span className="contact-ghost">BEGIN</span><div className="contact-copy"><h2>{line}</h2><p>For collaborations, systems work, dashboards, HR transformation, or intelligent product ideas that need a sharper operating shape.</p></div><a className="contact-orbit" href="mailto:hello@mohamedfadel.com"><span>START A CONVERSATION · START A CONVERSATION ·</span><b>↗</b></a><div className="contact-plate"><span>OPEN TO</span><b>Selective collaborations</b><small>Tripoli · Remote · Global</small></div></div>
  <a className="email" href="mailto:hello@mohamedfadel.com">HELLO@MOHAMEDFADEL.COM <span>↗</span></a>
  <div className="contact-bottom"><span>© 2026 MOHAMED FADEL</span><div><a href="#">LINKEDIN</a><a href="#">INSTAGRAM</a><a href="#">X / TWITTER</a></div><a href="#home">BACK TO TOP ↑</a></div>
 </footer>;
}
