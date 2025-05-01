import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

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
        <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors">
          Explore Our Playground
          <svg
            className="ml-2 w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 8H12.6667"
              stroke="#0A0A0A"
              strokeWidth="1.333"
              strokeLinecap="round"
            />
            <path
              d="M8 3.33333L12.6667 8L8 12.6667"
              stroke="#0A0A0A"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </motion.div>
    </div>
  );
}

export default CTA;
