"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function PhotoReveal() {
  const ref = useRef<HTMLElement>(null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".portrait-mask", { clipPath: "inset(48% 24% 48% 24%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 65%", scrub: 1.1 } });
      gsap.fromTo(".portrait-media", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 65%", scrub: 1.1 } });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="photo-section">
      <div className="portrait-mask">
        {!missing ? <img className="portrait-media" src="/photo.jpg" alt="Mohamed Fadel" onError={() => setMissing(true)} /> : <div className="portrait-media portrait-fallback"><span>MF</span></div>}
      </div>
      <div className="photo-caption"><span>THE HUMAN BEHIND THE SYSTEMS</span><span>DISCIPLINE IS A DAILY DECISION.</span></div>
    </section>
  );
}
