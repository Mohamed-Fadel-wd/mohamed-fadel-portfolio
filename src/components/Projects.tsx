"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ title }: { title: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 88%" },
          y: 70,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="work" className="section projects">
      <div className="section-index"><span>03</span><span>SELECTED WORK / 2021—NOW</span></div>
      <div className="projects-heading">
        <h2>{title}</h2>
        <p>Selected initiatives translated into sharper workflows, clearer decision-making, and systems people can trust under pressure.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.id}>
            <div className="project-number"><span>{project.id}</span><i>CASE</i></div>
            <div className="project-main">
              <small>{project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="project-visual" aria-hidden="true">
              <span className="visual-index">{project.id}</span>
              <span className="visual-line one" />
              <span className="visual-line two" />
              <span className="visual-line three" />
              <span className="visual-core">MF</span>
            </div>
            <div className="project-sigil"><span>MF/{project.id}</span><b>↗</b></div>
          </article>
        ))}
      </div>
    </section>
  );
}
