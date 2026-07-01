"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const root = document.documentElement;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!dotEl || !ringEl) return;
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, frame = 0;
    dotEl.style.transform = `translate3d(${x}px,${y}px,0)`;
    ringEl.style.transform = `translate3d(${rx}px,${ry}px,0)`;
    root.classList.add("has-custom-cursor", "cursor-seen");
    const move = (event: PointerEvent) => {
      x = event.clientX; y = event.clientY;
      dotEl.style.transform = `translate3d(${x}px,${y}px,0)`;
      root.classList.add("cursor-seen");
    };
    const over = (event: PointerEvent) => {
      x = event.clientX; y = event.clientY;
      dotEl.style.transform = `translate3d(${x}px,${y}px,0)`;
      const target = event.target as Element | null;
      root.classList.toggle("cursor-active", Boolean(target?.closest("a,button,[role='button'],input,textarea,select")));
    };
    const down = () => root.classList.add("cursor-down");
    const up = () => root.classList.remove("cursor-down");
    const leave = () => root.classList.remove("cursor-seen");
    const enter = () => root.classList.add("cursor-seen");
    const render = () => {
      rx += (x - rx) * .28; ry += (y - ry) * .28;
      ringEl.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      frame = requestAnimationFrame(render);
    };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerover", over, { passive: true });
    addEventListener("pointerdown", down, { passive: true });
    addEventListener("pointerup", up, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    frame = requestAnimationFrame(render);
    return () => {
      root.classList.remove("has-custom-cursor", "cursor-seen", "cursor-active", "cursor-down");
      removeEventListener("pointermove", move); removeEventListener("pointerover", over);
      removeEventListener("pointerdown", down); removeEventListener("pointerup", up);
      document.removeEventListener("mouseleave", leave); document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor-system" aria-hidden="true"><div ref={ring} className="cursor-ring"><span /></div><div ref={dot} className="cursor-dot" /></div>;
}
