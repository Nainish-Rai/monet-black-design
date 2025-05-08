"use client";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import { textVariant } from "@/lib/anims";
import { motion } from "motion/react";
import React from "react";

type Props = {};

function AboutPage({}: Props) {
  return (
    <div className="pt-32 pb-32">
      <WhiteRectangleWrapper className="px-0 pb-0">
        <div>
          <motion.div className="mb-16 w-full px-0 items-center mx-auto flex flex-col text-center">
            <motion.h1 variants={textVariant(0.2)} className="heading">
              About Us
            </motion.h1>
            <motion.p
              variants={textVariant(0.2)}
              className="subheading mt-4 w-full max-w-5xl text-center"
            >
              We are a company that believes in empowering the owners with{" "}
              <br />
              their data.
            </motion.p>
          </motion.div>
        </div>

        <WhiteRectangleWrapper>
          <div className="subheading text-center font-normal max-w-5xl py-12 mx-auto">
            If you are a business or an individual, we want you to be able to
            leverage and monetise on that data. <br />
            <br />
            As a business, you get insights about your customers - beyond your
            systems. You learn about their interactions with other brands and
            can thus, offer compelling solutions to your customers, and
            collaborate with brands they love - all from the comfort of your own
            systems. This helps you build a better relationship with your
            customers, effectively retaining and serving them better. For
            businesses, cost of acquiring a customer can be 5x-25x more than
            serving an existing one. Thus, retention plays an instrumental role
            in strengthening the overall bottom line for the brand. <br />
            <br /> As an individual, you have ownership over your data. You get
            to learn where all your loyalty points sit. You get timely nudges
            before they expire and you can redeem them across different partner
            brands. This data is masked by the revolutionary ZKP technology and
            ensures that you are in thorough ownership of your data.
          </div>
        </WhiteRectangleWrapper>
      </WhiteRectangleWrapper>
    </div>
  );
}

export default AboutPage;
