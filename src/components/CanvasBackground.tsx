"use client";
import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0, w = 0, h = 0;
    let dots: { x: number; y: number; r: number; v: number }[] = [];
    const resize = () => {
      const dpr = Math.min(devicePixelRatio, 2); w = innerWidth; h = innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = Array.from({ length: Math.min(90, Math.floor(w / 14)) }, () => ({ x: Math.random()*w, y: Math.random()*h, r: Math.random()*.8+.2, v: Math.random()*.12+.03 }));
    };
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      for (const d of dots) { d.y -= d.v; if (d.y < 0) d.y = h; ctx.fillStyle = "rgba(100,150,255,.28)"; ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fill(); }
      raf = requestAnimationFrame(draw);
    };
    resize(); draw(); addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="canvas-bg" aria-hidden="true" />;
}
