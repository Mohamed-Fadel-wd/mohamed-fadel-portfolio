"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  ["01", "Clarity before scale", "Turn messy operations into legible systems people can actually use."],
  ["02", "Data with a pulse", "Make dashboards feel like decision instruments, not storage rooms."],
  ["03", "Adoption is design", "Build the workflow, the story, and the behavior change together."],
] as const;

export default function About({ lead, body, resolve }: { lead: string; body: string; resolve: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
        y: 70,
        opacity: 0,
        stagger: 0.11,
        duration: 1,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="section about">
      <div className="section-index about-line"><span>02</span><span>ABOUT / POINT OF VIEW</span></div>
      <div className="about-grid">
        <h2 className="about-line">{lead}</h2>
        <div className="about-copy">
          <p className="about-line">{body}</p>
          <blockquote className="about-line">{resolve}</blockquote>
        </div>
      </div>

      <div className="principle-grid about-line">
        {principles.map(([number, title, text]) => (
          <article key={number} className="principle-card">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
        <article className="signal-card" aria-label="Mohamed Fadel signal">
          <span>MF SIGNAL</span>
          <b>People × Systems × Intelligence</b>
        </article>
      </div>

      <div className="capability-rail about-line">
        <span>HR TRANSFORMATION</span><i>✦</i><span>WORKFORCE INTELLIGENCE</span><i>✦</i><span>AI RECRUITMENT</span><i>✦</i><span>PROJECT DELIVERY</span>
      </div>
      <div className="manifesto about-line"><span>RELENTLESS</span><span>BY DESIGN</span></div>
    </section>
  );
}
