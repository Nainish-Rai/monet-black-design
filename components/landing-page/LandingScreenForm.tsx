"use client";
import { textVariant } from "@/lib/anims";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import React, { useCallback } from "react";
import LandingFormComponent from "./LandingFormComponent";
import LandingFormSubmittedComponent from "./LandingFormSubmittedComponent";
import { ArrowDownIcon } from "lucide-react";
import type Lenis from "@studio-freight/lenis";

type Props = {
  scrollYProgress: any;
  setShowForm: (show: boolean) => void;
  lenis: Lenis | null;
};

function LandingScreenForm({ scrollYProgress, setShowForm, lenis }: Props) {
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [view, setView] = React.useState("form");

  // Preload the submitted component
  React.useEffect(() => {
    const preloadComponent = new Image();
    preloadComponent.src = "/images/background/landingFormLeft.svg";
  }, []);

  // Memoize the wheel handler
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0) {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        }
        setShowForm(false);
      }
    },
    [lenis, setShowForm],
  );

  // Replace scroll handler with wheel event handler
  React.useEffect(() => {
    if (view === "submitted") {
      window.addEventListener("wheel", handleWheel);
      return () => window.removeEventListener("wheel", handleWheel);
    }
  }, [view, handleWheel]);

  return (
    <motion.div
      id="form"
      style={{ opacity: opacityTransform }}
      className="fixed top-0 z-10 flex flex-col lg:flex-row justify-center items-center h-screen w-full bg-black"
    >
      {/* left part */}
      <div className="hidden w-1/2 bg-[url('/images/background/landingFormLeft.svg')] bg-cover bg-center bg-no-repeat h-full lg:flex flex-col justify-center items-center">
        <motion.h2
          id="text1"
          style={{ viewTransitionName: "text1" }}
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView={"show"}
          className="text-[4.5rem] font-medium leading-[120%] max-w-md text-center"
        >
          Loyalty Made Fluid
        </motion.h2>
        <motion.p
          id="text2"
          style={{ viewTransitionName: "text2" }}
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-[1.125rem] mt-[0.5rem] font-medium leading-[120%] max-w-md text-center"
        >
          Stop Collecting, Start Converting
        </motion.p>
        <div
          onClick={() => setShowForm(false)}
          className="rounded-full absolute bottom-8 w-10 h-10 flex items-center justify-center cursor-pointer bg-[#4D4D4D] left-10 aspect-square"
        >
          <ArrowDownIcon className=" " />
        </div>
      </div>
      {/* right part */}
      <div className="w-full px-4 lg:w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "form" ? (
            <LandingFormComponent
              key="form"
              onSubmit={() => {
                setView("submitted");
              }}
            />
          ) : (
            <LandingFormSubmittedComponent key="submitted" />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default LandingScreenForm;
