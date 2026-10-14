"use client";
import { MotionConfig } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/sections/Hero";
import Projects from "@/app/sections/Projects";
import Services from "@/app/sections/Services";
import Contact from "@/app/sections/Contact";
import { site } from "@/data/site";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </MotionConfig>
  );
}