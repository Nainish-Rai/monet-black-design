"use client";
import { ScrollProvider } from "@/components/context/ScrollContext";
import LandingPageRoot from "@/components/landing-page/LandingPageRoot";
import LandingScreenForm from "@/components/landing-page/LandingScreenForm";
import SplashScreen from "@/components/landing-page/SplashScreen";
import { useScroll } from "framer-motion";
import React from "react";
import { useRef, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll({});
  const containerRef = useRef(null);

  const [showForm, setShowForm] = React.useState(true);

  React.useEffect(() => {
    if (!showForm) {
      window.scrollTo(0, 0);
    }
  }, [showForm]);

  const startViewTransition = () => {
    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        setShowForm(false);
      });
    } else {
      setShowForm(false);
    }
  };

  return (
    <ScrollProvider>
      <main ref={containerRef}>
        {showForm ? (
          <div className="relative h-[200vh]">
            <div className="z-10">
              <LandingScreenForm
                setShowForm={startViewTransition}
                scrollYProgress={scrollYProgress}
              />
            </div>
            <div className="z-20">
              <SplashScreen scrollYProgress={scrollYProgress} />
            </div>
          </div>
        ) : (
          <LandingPageRoot />
        )}
      </main>
    </ScrollProvider>
  );
}
