"use client";
import { useState } from "react";
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
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const c = content[locale];
  useLenis(entered);
  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"}>
      <CanvasBackground />
      <CustomCursor />
      {!entered && <Preloader onEnter={() => setEntered(true)} />}
      <div className={`site ${entered ? "is-visible" : ""}`}>
        <Navbar nav={c.nav} locale={locale} setLocale={setLocale} />
        <Hero copy={{ eyebrow: c.eyebrow, name: c.name, mantra: c.mantra }} />
        <About lead={c.aboutLead} body={c.aboutBody} resolve={c.resolve} />
        <PhotoReveal />
        <Projects title={c.workTitle} />
        <Contact line={c.contact} />
      </div>
    </main>
  );
}
