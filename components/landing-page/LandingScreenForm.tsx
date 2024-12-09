"use client";
import { textVariant } from "@/lib/anims";
import { motion, useTransform } from "framer-motion";
import React from "react";

type Props = {
  scrollYProgress: any;
};

function LandingScreenForm({ scrollYProgress }: Props) {
  const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      id="form"
      style={{ opacity: opacityTransform }}
      className="fixed top-0 z-10 flex justify-center items-center h-screen w-full bg-black"
    >
      {/* left part */}
      <div className="w-1/2 bg-[url('/images/background/landingFormLeft.svg')] bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center items-center">
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView={"show"}
          className="text-[4.5rem] font-medium leading-[120%] max-w-md text-center"
        >
          Loyalty Made Fluid
        </motion.h2>
        <motion.p
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-[1.125rem] mt-[0.5rem] font-medium leading-[120%] max-w-md text-center"
        >
          Stop Collecting, Start Converting
        </motion.p>
      </div>
      {/* right part */}
      <div className="w-1/2 h-full">HEllo</div>
    </motion.div>
  );
}

export default LandingScreenForm;
