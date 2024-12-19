"use client";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function LandingFormSubmittedComponent({}: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full   lg:max-w-[37rem] flex flex-col gap-10"
    >
      <motion.h2
        variants={itemVariants}
        className="text-[#FBC926]   leading-normal lg:leading-[120%] text-5xl lg:text-[4rem] font-medium"
      >
        No limits. <br /> No expiry.
        <br /> No nonsense.
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="lg:mt-[3rem]  text-3xl lg:text-4xl font-medium leading-normal lg:leading-[120%]"
      >
        Well here at Monet, we&apos;re building a platform that lets you do all
        that and more!
      </motion.p>

      <Button className="bg-white text-black h-12 flex w-full lg:hidden items-center justify-center">
        Continue
      </Button>
    </motion.div>
  );
}

export default LandingFormSubmittedComponent;
