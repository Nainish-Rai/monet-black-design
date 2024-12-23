// components/landing-page/SplashScreen.tsx

"use client";
import { textVariant } from "@/lib/anims";
import { motion, useTransform } from "framer-motion";
import React from "react";
import { MonetWorkLogo } from "../monet-work-logo";

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
      className={`sticky top-0 z-50 flex flex-col lg:flex-row min-h-screen animate-fadeIn h-dvh lg:h-screen overflow-hidden justify-center w-full shadow-2xl
      bg-black bg-opacity-100 animated-radial-gradient`}
    >
      <div className="w-full h-screen flex flex-col justify-between max-w-screen-2xl">
        <motion.div
          layout
          layoutId="monetLogo"
          variants={textVariant(0.2)}
          transition={{
            duration: 0.5,
            type: "spring",
          }}
          initial="hidden"
          animate="show"
        >
          <MonetWorkLogo className="ml-6 mt-6 lg:mt-20 lg:ml-20 w-[10rem] lg:w-[20.5rem]" />
        </motion.div>
        <div className="flex flex-col justify-center lg:justify-end flex-1">
          <motion.h2
            layout
            layoutId="loyaltyText"
            style={{ x: rightTextX }}
            variants={textVariant(0.3)}
            initial="hidden"
            animate="show"
            className="text-7xl lg:text-[8.5rem] w-full pr-4 lg:pr-20 tracking-[-0.175rem] text-right font-neue font-medium mb-6 lg:mb-6 text-white"
          >
            All-In-One
          </motion.h2>
          <motion.h2
            style={{ x: leftTextX }}
            variants={textVariant(0.4)}
            initial="hidden"
            animate="show"
            className="text-7xl lg:text-[8.5rem] pb-8 w-full tracking-[-0.175rem] pl-4 lg:pl-20 leading-0 font-neue font-medium mb-4 text-white"
          >
            Points Ecosystem
          </motion.h2>
        </div>
      </div>
    </motion.main>
  );
}

export default SplashScreen;
