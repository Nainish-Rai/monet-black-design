"use client";
import { ScrollProvider } from "@/components/context/ScrollContext";
import LandingPageRoot from "@/components/landing-page/LandingPageRoot";
// import LandingScreenForm from "@/components/landing-page/LandingScreenForm";
// import SplashScreen from "@/components/landing-page/SplashScreen";
import { useScroll } from "framer-motion";
import React from "react";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const { scrollYProgress } = useScroll({});
  const containerRef = useRef(null);
  // const [showForm, setShowForm] = React.useState(() => {
  //   // Check if we're in the browser and if form was previously submitted
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("formSubmitted") !== "true";
  //   }
  //   return true;
  // });

  // remove below show form line to make form appear
  const [showForm, setShowForm] = React.useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  React.useEffect(() => {
    if (!showForm && lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [showForm]);

  const startViewTransition = () => {
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        localStorage.setItem("formSubmitted", "true");
        setShowForm(false);
      });
    } else {
      localStorage.setItem("formSubmitted", "true");
      setShowForm(false);
    }
  };

  // Add RAF for Lenis
  useEffect(() => {
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <ScrollProvider>
      <main ref={containerRef}>
        <LandingPageRoot />
      </main>
    </ScrollProvider>
  );
}
