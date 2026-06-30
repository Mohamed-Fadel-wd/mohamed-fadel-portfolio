"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader({ onEnter }: { onEnter: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const phrase = "Discipline. Growth. Impact.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".boot-letter", { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.045, duration: 0.25, ease: "power2.out" });
      gsap.to(".load-fill", { scaleX: 1, duration: 2.15, ease: "expo.out", onComplete: () => setReady(true) });
    }, root);

    return () => ctx.revert();
  }, []);

  const exit = () => {
    if (!ready) return;
    const tl = gsap.timeline({ onComplete: onEnter });
    tl.to(".pre-content", { opacity: 0, y: -20, duration: 0.4 })
      .to(".pre-black", { yPercent: -100, duration: 1, ease: "power4.inOut" })
      .to(".pre-blue", { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=.7");
  };

  return (
    <div ref={root} className="preloader">
      <div className="pre-blue" /><div className="pre-black" />
      <div className="pre-content">
        <span className="pre-brand" aria-hidden="true"><img src="/mf-mark-exact.png" alt="" /><span>MOHAMEED<br />FADEL.</span></span>
        <p className="system-label">MF / SYSTEM INITIALIZATION</p>
        <h1><span>Booting</span><br /><span className="accent">{phrase.split("").map((letter, index) => <span className="boot-letter" key={index}>{letter === " " ? "\u00a0" : letter}</span>)}</span></h1>
        <div className="load-track"><span className="load-fill" /></div>
        <div className="pre-footer">
          <span>{ready ? "BOOTING COMPLETE" : "ESTABLISHING INTENT..."}</span>
          <button disabled={!ready} onClick={exit}>ENTER <i>↗</i></button>
        </div>
      </div>
    </div>
  );
}
