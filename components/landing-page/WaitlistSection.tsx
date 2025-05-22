"use client";
import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import WaitlistInput from "./WaitlistInput";

type Props = {};

function WaitlistSection({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-16 px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[#E5E5E5] text-4xl md:text-5xl font-semibold text-center tracking-tight leading-[1.2]"
      >
        Sign-up for our newsletter. 
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" subheading text-balance max-w-2xl mt-4 text-center"
      >
        Subscribe to our newsletter to stay updated with the latest news and
        offers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <WaitlistInput />
      </motion.div>
    </div>
  );
}

export default WaitlistSection;
