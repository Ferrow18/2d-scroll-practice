"use client";

import Hero from "@/components/hero";
import ZoomInPicture from "@/components/zoom-in-picture";
import ZoomParallax from "@/components/zoom-parallax";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="">
      <Hero />
      <ZoomParallax />
      <Hero />
      <ZoomInPicture />
    </main>
  );
}
