"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero({ copy }: { copy: { eyebrow: string; name: string; mantra: string } }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.08,
        duration: 1.15,
        ease: "power4.out",
        delay: 0.12,
      });

      const move = (event: PointerEvent) => {
        const x = event.clientX / innerWidth - 0.5;
        const y = event.clientY / innerHeight - 0.5;
        gsap.to(".mf-sculpture", { x: x * 58, y: y * 44, rotateY: x * 14, rotateX: y * -10, duration: 1.4, ease: "power3.out" });
        gsap.to(".hero-lens", { x: x * -32, y: y * -22, duration: 1.8, ease: "power3.out" });
        gsap.to(".orb", { x: x * 76, y: y * 66, duration: 1.8, ease: "power3.out" });
      };

      addEventListener("pointermove", move);
      return () => removeEventListener("pointermove", move);
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-lens" aria-hidden="true" />
      <div className="mf-sculpture" aria-hidden="true">
        <span className="beam beam-one" />
        <span className="beam beam-two" />
        <span className="beam beam-three" />
        <span className="beam beam-four" />
        <b><img className="hero-logo" src="/mf-mark-exact.png" alt="" /></b>
      </div>
      <div className="spark-field" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => <i key={index} />)}
      </div>
      <div className="orb" aria-hidden="true"><span>MF</span><i /></div>
      <div className="hero-ghost" aria-hidden="true">MEANING</div>

      <div className="hero-top hero-reveal">
        <span>01</span>
        <span>{copy.eyebrow}</span>
      </div>

      <div className="hero-copy">
        <div className="clip">
          <h1 className="hero-reveal"><span>Mohamed</span><span>Fadel<i>.</i></span></h1>
        </div>
        <div className="hero-statement hero-reveal">
          <span>BUILDING</span>
          <p>{copy.mantra}</p>
          <span>SYSTEMS OF IMPACT</span>
        </div>
      </div>

      <aside className="hero-facts hero-reveal" aria-label="Portfolio facts">
        <span>EST. 2021</span>
        <span>STRATEGY × PEOPLE × DATA</span>
        <p>Digital products, people systems, and executive-ready intelligence built for clarity, scale, and trust.</p>
      </aside>

      <div className="hero-prompt hero-reveal">
        <span>HOLD THE LINE</span>
        <b>✦</b>
        <span>MAKE WORK MEASURABLE</span>
      </div>
      <div className="hero-code hero-reveal">32.8872° N<br />13.1913° E</div>
      <div className="hero-bottom hero-reveal"><span>TRIPOLI, LIBYA</span><a href="#about">SCROLL TO EXPLORE <i>↓</i></a></div>
    </section>
  );
}
