"use client";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function LandingPageRoot({}: Props) {
  return (
    <div className="w-full h-[520vh] bg-[url('/images/background/landing-bg.svg')] bg-cover bg-center bg-no-repeat">
      <motion.h2
        id="text1"
        style={{ viewTransitionName: "text1" }}
        className="text-[4.5rem] font-medium leading-[120%] max-w-md text-center"
      >
        Loyalty Made Fluid
      </motion.h2>
      <motion.p
        id="text2"
        style={{ viewTransitionName: "text2" }}
        className="text-[1.125rem] mt-[0.5rem] font-medium leading-[120%] max-w-md text-center"
      >
        Stop Collecting, Start Converting
      </motion.p>
    </div>
  );
}

export default LandingPageRoot;
