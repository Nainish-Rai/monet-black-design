import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Props = {};

function CTA({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-16 px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[#E5E5E5] text-4xl md:text-5xl font-semibold text-center tracking-tight leading-[1.2]"
      >
        See Loyalty in action
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ButtonWithIcon
          className="bg-white hover:bg-gray-100 text-[#0A0A0A]"
          icon={<ChevronRight />}
        >
          Explore our playground
        </ButtonWithIcon>
      </motion.div>
    </div>
  );
}

export default CTA;
