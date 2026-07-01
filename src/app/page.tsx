"use client";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import CanvasBackground from "@/components/CanvasBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoReveal from "@/components/PhotoReveal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { content, type Locale } from "@/data/content";
import { useLenis } from "@/hooks/useLenis";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    const requested = new URLSearchParams(location.search).get("lang");
    const saved = localStorage.getItem("mf-locale");
    if (requested === "ar" || requested === "en") setLocale(requested);
    else if (saved === "ar" || saved === "en") setLocale(saved);
  }, []);
  const changeLocale = (next: Locale) => {
    setLocale(next);
    localStorage.setItem("mf-locale", next);
  };
  const c = content[locale];
  useLenis(entered);
  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"}>
      <CanvasBackground />
      {!entered && <Preloader onEnter={() => setEntered(true)} />}
      <div className={`site ${entered ? "is-visible" : ""}`}>
        <Navbar nav={c.nav} locale={locale} setLocale={changeLocale} />
        <Hero copy={c.hero} />
        <About copy={c.about} />
        <PhotoReveal captions={c.photo} />
        <Projects copy={c.work} locale={locale} />
        <Contact copy={c.contact} />
      </div>
    </main>
  );
}
