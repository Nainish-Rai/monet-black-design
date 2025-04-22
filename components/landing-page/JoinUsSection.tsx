import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { fadeIn } from "@/lib/anims";
import Link from "next/link";

type Props = {};

function JoinUsSection({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className=" rounded-2xl border lg:mx-10 bg-[url('/images/background/joinus-bg.svg')] mt-24  bg-cover bg-center flex justify-between bg-no-repeat p-8  lg:p-20  "
    >
      <div className="flex items-start flex-col">
        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left capitalize text-base font-medium tracking-[0.08rem] leading-[120%] "
        >
          JOIN US
        </motion.h2>
        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" mt-2 text-left text-[2.5rem] lg:text-[4rem] font-medium text-white lg:leading-[120%] max-w-xl  "
        >
          Revive Your Unused Points With Monet
        </motion.h3>
        <ButtonWithIcon
          as={Link}
          openInNewTab
          href="https://loyalty-rewards.alpha.monet.work/"
          className="max-w-[21rem]  max-sm:py-3 py-6 font-medium w-full text-md  mt-[8rem] lg:mt-[2.5rem] lg:text-lg "
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Join Now
        </ButtonWithIcon>
      </div>
    </motion.div>
  );
}

export default JoinUsSection;
