"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null), ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    gsap.set([dot.current,ring.current],{xPercent:-50,yPercent:-50});
    const dx=gsap.quickTo(dot.current,"x",{duration:.03,ease:"none"}),dy=gsap.quickTo(dot.current,"y",{duration:.03,ease:"none"}),rx=gsap.quickTo(ring.current,"x",{duration:.2,ease:"power3.out"}),ry=gsap.quickTo(ring.current,"y",{duration:.2,ease:"power3.out"});
    const move=(e:PointerEvent)=>{dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY)};
    const over=(e:PointerEvent)=>{const t=(e.target as HTMLElement).closest("a,button,.project,.principle-card");const ar=document.querySelector("main")?.getAttribute("dir")==="rtl";ring.current?.classList.toggle("is-active",!!t);ring.current?.setAttribute("data-label",t?.classList.contains("project")?(ar?"عرض":"VIEW"):"")};
    const leave=()=>gsap.to([dot.current,ring.current],{autoAlpha:0,duration:.15});
    const enter=()=>gsap.to([dot.current,ring.current],{autoAlpha:1,duration:.15});
    addEventListener("pointermove",move);addEventListener("pointerover",over);document.documentElement.addEventListener("mouseleave",leave);document.documentElement.addEventListener("mouseenter",enter);
    return()=>{removeEventListener("pointermove",move);removeEventListener("pointerover",over);document.documentElement.removeEventListener("mouseleave",leave);document.documentElement.removeEventListener("mouseenter",enter)};
  },[]);
  return <><div ref={dot} className="cursor-dot"/><div ref={ring} className="cursor-ring"/></>;
}
