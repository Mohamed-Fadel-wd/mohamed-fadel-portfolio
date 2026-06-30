"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Locale } from "@/data/content";
import BrandMark from "./BrandMark";

export default function Navbar({ nav, locale, setLocale }: { nav: readonly string[]; locale: Locale; setLocale: (l: Locale) => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let last = 0;
    const scroll = () => {
      const y = scrollY;
      ref.current?.classList.toggle("scrolled", y > 40);
      ref.current?.style.setProperty("--progress", `${y / Math.max(1, document.documentElement.scrollHeight - innerHeight)}`);
      gsap.to(ref.current, { yPercent: y > last && y > 160 ? -110 : 0, duration: 0.45, ease: "power3.out" });
      last = y;
    };
    addEventListener("scroll", scroll, { passive: true });
    return () => removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav ref={ref} className="navbar">
      <span className="scroll-progress" aria-hidden="true" />
      <a href="#home" className="mark" aria-label="Mohamed Fadel home">
        <BrandMark className="nav-logo" />
        <span className="brand-name">MOHAMEED<br />FADEL.</span>
      </a>
      <div className="nav-links">{nav.map((item, index) => <a key={item} href={`#${["home", "about", "work", "contact"][index]}`}>{item}</a>)}</div>
      <button className="locale" onClick={() => setLocale(locale === "en" ? "ar" : "en")}>{locale === "en" ? "AR" : "EN"} <span>↗</span></button>
    </nav>
  );
}
