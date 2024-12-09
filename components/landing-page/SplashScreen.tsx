"use client";
import { textVariant } from "@/lib/anims";
import { motion, useTransform } from "framer-motion";
import React from "react";
import { MonetWorkLogo } from "../monet-work-logo";
import Link from "next/link";

function SplashScreen({
  scrollYProgress,
}: {
  scrollYProgress: any;
}): JSX.Element {
  const rightTextX = useTransform(scrollYProgress, [0, 0.6], [0, 800]);
  const leftTextX = useTransform(scrollYProgress, [0, 0.6], [0, -1300]);
  const opacityTransform = useTransform(scrollYProgress, [0, 1.5], [1, 0]);

  return (
    <motion.main
      // style={{ opacity: opacityTransform }}
      className={`sticky shadow-2xl top-0 z-50 flex min-h-screen bg-black bg-opacity-100 bg-[url('/images/background/splash-screen.svg')] animate-fadeIn h-screen bg-cover bg-center bg-no-repeat overflow-hidden justify-center w-full`}
    >
      <div className="w-full h-screen flex flex-col justify-between max-w-screen-2xl">
        <motion.div
          variants={textVariant(0.2)}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          initial="hidden"
          animate="show"
        >
          <MonetWorkLogo className=" mt-20 ml-20 w-[20.5rem] " />
        </motion.div>
        <div className="flex flex-col justify-end flex-1">
          <motion.h2
            style={{ x: rightTextX }}
            variants={textVariant(0.3)}
            initial="hidden"
            animate="show"
            className="text-[8.5rem] w-full pr-20 tracking-[-0.175rem]  text-right font-medium -mb-4 text-white"
          >
            All-In-One
          </motion.h2>
          <motion.h2
            style={{ x: leftTextX }}
            variants={textVariant(0.4)}
            initial="hidden"
            animate="show"
            className="text-[8.5rem] pb-8 w-full tracking-[-0.175rem] pl-20 leading-0 font-medium mb-4 text-white"
          >
            Points Ecosystem
          </motion.h2>
        </div>
      </div>
    </motion.main>
  );
}

export default SplashScreen;
