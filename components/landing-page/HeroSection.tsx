import { motion } from "framer-motion";
import React from "react";
import ButtonWithIcon from "../ui/button-with-icon";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { textVariant } from "@/lib/anims";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

function HeroSection({}: Props) {
  return (
    <section className=" max-sm:px-1 w-full lg:flex-row items-center lg:items-end justify-between flex-col flex pb-[5.3rem]  ">
      {/* left */}
      <div className=" ">
        <motion.h2
          id="text1"
          style={{ viewTransitionName: "text1" }}
          initial={{ opacity: 1, y: -50, x: 50, textAlign: "center" }}
          whileInView={{ opacity: 1, y: 0, x: 0, textAlign: "left" }}
          transition={{ duration: 0.3 }}
          className="max-lg:mt-16 text-6xl lg:text-[3rem] heading text-balance font-medium leading-[120%]  tracking-[-0.04rem] text-left"
        >
          Reimagine Loyalty for the Blockchain Era
        </motion.h2>
        <motion.p
          id="text2"
          style={{ viewTransitionName: "text2" }}
          initial={{ opacity: 1, y: -50, x: 50, textAlign: "center" }}
          whileInView={{ opacity: 1, y: 0, x: 0, textAlign: "left" }}
          transition={{ duration: 0.3 }}
          className="subheading mt-6"
        >
          Build and manage custom loyalty programs with AI and blockchain —
          secure, scalable, and future-ready.
        </motion.p>
        <div className=" mt-6  flex gap-4">
          <ButtonWithIcon
            as={Link}
            openInNewTab
            href="https://loyalty-rewards.alpha.monet.work/"
            className=" max-lg:hidden px-3 py-1 font-medium w-fit self-end lg:text-[0.875rem]"
            // icon={<ArrowUpRight className="h-6 w-6" />}
          >
            Explore Products
          </ButtonWithIcon>

          <Button
            variant={"outline"}
            className="px-3 py-1 h-fit rounded-full text-[0.875rem] text-[#A3A3A3] border border-[#A3A3A] self-end"
            onClick={() => alert("Button clicked!")}
          >
            Contact Us
          </Button>
        </div>
      </div>
      {/* right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="-mb-2 max-lg:mt-8 justify-self-end"
      >
        <Image
          src="/images/assets/hero.png"
          alt="hero"
          width={600}
          height={600}
          className="cursor-crosshair"
        />
      </motion.div>

      {/* mobile */}
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView={"show"}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:hidden  w-full"
      >
        <ButtonWithIcon
          as={Link}
          openInNewTab
          href="https://loyalty-rewards.alpha.monet.work/"
          icon={<ArrowUpRight className="h-6 w-6" />}
        >
          Start Exploring
        </ButtonWithIcon>
      </motion.div>
    </section>
  );
}

export default HeroSection;
