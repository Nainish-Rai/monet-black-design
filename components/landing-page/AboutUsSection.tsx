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
      className={`transition-all lg:mt-20 duration-300 ${!isTextRevealed ? "h-full   w-full overflow-hidden" : ""} flex flex-col  justify-center items-center`}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="text-center capitalize text-base font-medium tracking-[0.08rem] leading-[120%]"
      >
        ABOUT US
      </motion.h2>
      <TextRevealByWord
        paragraph="Welcome to the future of loyalty rewards! At Monet, we're transforming how rewards work with $MONET, your crypto for flexible, blockchain-based rewards. Join us in revolutionizing loyalty programs—where you can earn, trade, and use rewards seamlessly across different platforms. Experience loyalty redefined!"
        onComplete={() => setTextRevealed(true)}
      />
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView={"show"}
      >
        <ButtonWithIcon
          className="max-w-[21rem] self-center lg:py-6 font-medium w-full text-md lg:mt-[2.5rem] lg:text-lg "
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Learn More About Us
        </ButtonWithIcon>
      </motion.div>
    </div>
  );
}

export default AboutUsSection;
