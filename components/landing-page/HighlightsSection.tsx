import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import GridArticleComponent from "./GridArticleComponent";
import GridLargeComponent from "./GridLargeComponent";

type Props = {};

function HighlightsSection({}: Props) {
  return (
    <div className="w-full mt-24 flex flex-col items-center">
      {" "}
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center capitalize text-base font-medium tracking-[0.08rem] leading-[120%] "
      >
        HIGHLIGHTS
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" mt-2 text-center text-2xl lg:text-5xl font-medium text-white lg:leading-[65px]  "
      >
        Monet in the spotlight
      </motion.h3>
      <div className="grid w-full md:grid-rows-12 h-[36rem] max-w-7xl md:grid-cols-3 grid-cols-1  mt-10 gap-4">
        <motion.div
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          className="md:col-span-1 rounded-2xl  overflow-hidden  md:row-span-12 row-span-5 border  relative"
        >
          <GridLargeComponent />
        </motion.div>
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="md:row-span-7 rounded-2xl md:col-start-2 border col-span-1  row-span-5 overflow-hidden   relative"
        >
          <GridArticleComponent
            gradient="purple"
            text="Monet, India's First-Ever interoperable product on blockchain and AI promises a new era of rewards programs"
            image="/images/assets/startupfyi.svg"
          />
        </motion.div>
        <motion.div
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="md:row-span-5 rounded-2xl  border col-span-1 row-span-5 overflow-hidden   relative"
        >
          <Image
            src="/images/assets/grid1.png"
            alt="forbes"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          className="md:row-span-7  rounded-2xl  border col-span-1  row-span-5   overflow-hidden relative"
        >
          <GridArticleComponent
            gradient="yellow"
            text="Monet, India's First-Ever Interoperable Product On Blockchain And AI Promises A New Era Of Rewards Programes"
            image="/images/assets/outlook.svg"
          />
        </motion.div>
        <motion.div
          variants={textVariant(0.4)}
          initial="hidden"
          whileInView="show"
          className="md:row-span-5 rounded-2xl  border col-span-1  row-span-5 overflow-hidden   relative"
        >
          <Image
            src="/images/assets/grid2.png"
            alt="forbes"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HighlightsSection;
