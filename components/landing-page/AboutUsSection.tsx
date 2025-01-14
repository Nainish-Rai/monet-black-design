"use client";
import React from "react";
import TextRevealByWord from "../animated/text-reveal";
import { useScroll } from "../context/ScrollContext";
import { ArrowUpRight } from "lucide-react";
import ButtonWithIcon from "../ui/button-with-icon";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/anims";
import Link from "next/link";

function AboutUsSection() {
  const { isTextRevealed, setTextRevealed } = useScroll();

  return (
    <div id="about" className="pt-20 sm:pt-36">
      <div className="flex sticky top-5 flex-col items-center justify-center font-neue">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-base font-medium tracking-[0.08rem]"
        >
          ABOUT US
        </motion.h2>
        <TextRevealByWord
          paragraph="Welcome to the future of loyalty rewards! At Monet, we're transforming how rewards work with $MONET, your crypto for flexible, blockchain-based rewards. Join us in revolutionizing loyalty programs—where you can earn, trade, and use rewards seamlessly across different platforms. Experience loyalty redefined!"
          onComplete={() => setTextRevealed(true)}
          className=" "
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:-mt-48 lg:mt-44 xl:mt-16 z-10"
        >
          <ButtonWithIcon
            className="w-full max-w-[21rem] font-medium text-lg mt-6"
            icon={<ArrowUpRight className="h-6 w-6" />}
            href="/company/vision"
          >
            Learn More
          </ButtonWithIcon>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsSection;
