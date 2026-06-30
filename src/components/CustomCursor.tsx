"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null), ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const dx=gsap.quickTo(dot.current,"x",{duration:.08}),dy=gsap.quickTo(dot.current,"y",{duration:.08}),rx=gsap.quickTo(ring.current,"x",{duration:.42,ease:"power3"}),ry=gsap.quickTo(ring.current,"y",{duration:.42,ease:"power3"});
    const move=(e:PointerEvent)=>{dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY)};
    const over=(e:PointerEvent)=>{const t=(e.target as HTMLElement).closest("a,button,.project,.principle-card");const ar=document.querySelector("main")?.getAttribute("dir")==="rtl";ring.current?.classList.toggle("is-active",!!t);ring.current?.setAttribute("data-label",t?.classList.contains("project")?(ar?"عرض":"VIEW"):"")};
    addEventListener("pointermove",move);addEventListener("pointerover",over);
    return()=>{removeEventListener("pointermove",move);removeEventListener("pointerover",over)};
  },[]);
  return <><div ref={dot} className="cursor-dot"/><div ref={ring} className="cursor-ring"/></>;
}
