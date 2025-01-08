"use client";
import { Footer } from "@/components/footer";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";

export default function OurVisionPage() {
  return (
    <div className="min-h-screen bg-[url('/images/background/careers-bg.webp')]  bg-cover bg-center bg-no-repeat">
      <div className="container relative mx-auto px-4 py-16 pt-32">
        <motion.div className="mb-16 grid gap-5 md:grid-cols-2">
          <motion.h1
            variants={textVariant(0.2)}
            className="text-5xl lg:text-6xl font-medium text-white"
          >
            Our Vision
          </motion.h1>
          <motion.p
            variants={textVariant(0.2)}
            className="text-2xl lg:text-4xl leading-[120%] text-[#C3C3C3]"
          >
            We are a company that believes in empowering the owners with their
            data.
          </motion.p>
        </motion.div>
        <motion.p className="text-[1.3rem] pt-8 text-[#C3C3C3] leading-[120%]">
          If you are a business or an individual, we want you to be able to
          leverage and monetise on that data.
          <br />
          <br />
          As a business, you get insights about your customers - beyond your
          systems. You learn about their interactions with other brands and can
          thus, offer compelling solutions to your customers, and collaborate
          with brands they love - all from the comfort of your own systems. This
          helps you build a better relationship with your customers, effectively
          retaining and serving them better. For businesses, cost of acquiring a
          customer can be 5x-25x more than serving an existing one. Thus,
          retention plays an instrumental role in strengthening the overall
          bottom line for the brand. <br />
          <br />
          As an individual, you have ownership over your data. You get to learn
          where all your loyalty points sit. You get timely nudges before they
          expire and you can redeem them across different partner brands. This
          data is masked by the revolutionary ZKP technology and ensures that
          you are in thorough ownership of your data.
        </motion.p>
      </div>
      <Footer />
    </div>
  );
}
