"use client";
import LandingScreenForm from "@/components/landing-page/LandingScreenForm";
import SplashScreen from "@/components/landing-page/SplashScreen";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll({});
  const containerRef = useRef(null);

  return (
    <main ref={containerRef}>
      <div className="relative h-[200vh]">
        <div className="z-10">
          <LandingScreenForm scrollYProgress={scrollYProgress} />
        </div>
        <div className="z-20">
          <SplashScreen scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </main>
  );
}
