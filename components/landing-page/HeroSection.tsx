import { motion } from "framer-motion";
import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { textVariant } from "@/lib/anims";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="lg:h-screen max-sm:px-1 w-full lg:flex-row items-center lg:items-end justify-between flex-col flex pb-20 ">
      {/* left */}
      <div className=" max-w-[22rem]">
        <motion.h2
          id="text1"
          style={{ viewTransitionName: "text1" }}
          initial={{ opacity: 1, y: -50, x: 50, textAlign: "center" }}
          whileInView={{ opacity: 1, y: 0, x: 0, textAlign: "left" }}
          transition={{ duration: 0.3 }}
          className="max-lg:mt-16 text-6xl lg:text-[4rem] font-medium leading-[120%] max-w-sm tracking-[-0.04rem] text-left"
        >
          Loyalty Made Fluid
        </motion.h2>
        <motion.p
          id="text2"
          style={{ viewTransitionName: "text2" }}
          initial={{ opacity: 1, y: -50, x: 50, textAlign: "center" }}
          whileInView={{ opacity: 1, y: 0, x: 0, textAlign: "left" }}
          transition={{ duration: 0.3 }}
          className="text-[1.125rem] mt-[0.5rem] font-medium leading-[120%] max-w-md text-left"
        >
          Stop Collecting, Start Converting
        </motion.p>
        <ButtonWithIcon
          className="max-w-[21rem] max-lg:hidden py-6 font-medium w-full text-md self-end mt-[2.5rem] lg:text-lg "
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Start Exploring
        </ButtonWithIcon>
      </div>
      {/* middle */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="-mb-2 max-lg:mt-8 justify-self-end"
      >
        <Image
          src="/images/assets/hero.svg"
          alt="hero"
          width={600}
          height={600}
        />
      </motion.div>
      {/* right */}
      <div className="max-w-[19rem] max-lg:hidden">
        <motion.div className="w-full   lg:max-w-[37rem] flex flex-col ">
          <motion.h2
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView={"show"}
            className="text-[#FBC926]   leading-normal lg:leading-[120%] text-5xl lg:text-[2.5rem] font-medium"
          >
            No limits. <br /> No expiry.
            <br /> No nonsense.
          </motion.h2>
          <motion.p
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView={"show"}
            className="lg:mt-[1.38rem]  text-3xl lg:text-lg font-regular leading-normal lg:leading-[120%]"
          >
            Fluid loyalty to take your shopping experience a notch above. Using
            Monet - you can convert and spend loyalty points from Brand A to
            Brand B as per your convenience.
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView={"show"}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:hidden  w-full"
      >
        <ButtonWithIcon
          className="max-w-[21rem] lg:py-6 font-medium text-base w-full text-md self-end mt-[2.5rem] lg:text-lg "
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Start Exploring
        </ButtonWithIcon>
      </motion.div>
    </section>
  );
}

export default HeroSection;
