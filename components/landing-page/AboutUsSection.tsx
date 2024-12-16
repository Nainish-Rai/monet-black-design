"use client";
import React from "react";
import TextRevealByWord from "../animated/text-reveal";
import { useScroll } from "../context/ScrollContext";
import { ArrowUpRight } from "lucide-react";
import ButtonWithIcon from "../ui/button-with-icon";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";

function AboutUsSection() {
  const { isTextRevealed, setTextRevealed } = useScroll();

  return (
    <div
      id="about"
      className="flex min-h-screen flex-col items-center justify-center font-neue py-16"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-base font-medium tracking-[0.08rem]"
      >
        ABOUT US
      </motion.h2>
      <TextRevealByWord
        paragraph="Welcome to the future of loyalty rewards! At Monet, we're transforming how rewards work with $MONET, your crypto for flexible, blockchain-based rewards. Join us in revolutionizing loyalty programs—where you can earn, trade, and use rewards seamlessly across different platforms. Experience loyalty redefined!"
        onComplete={() => setTextRevealed(true)}
        className="min-h-[60vh] sticky top-0"
      />
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        className="mt-8"
      >
        <ButtonWithIcon
          className="w-full max-w-[21rem] font-medium text-lg"
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Learn More About Us
        </ButtonWithIcon>
      </motion.div>
    </div>
  );
}

export default AboutUsSection;
