"use client";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React from "react";
import HeroSection from "./HeroSection";
import AboutUsSection from "./AboutUsSection";
import SponsorSection from "./SponsorSection";
import HighlightsSection from "./HighlightsSection";
import JoinUsSection from "./JoinUsSection";
import FaqSection from "./FaqSection";
import { Navbar } from "../navbar";
import { Footer } from "../footer";

type Props = {};

function LandingPageRoot({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[540vh] bg-[url('/images/background/landing-bg.svg')] bg-cover bg-center bg-no-repeat"
    >
      <Navbar />
      <div className="flex px-4 flex-col pb-16 gap-16 w-full mx-auto max-w-[1400px]">
        <HeroSection />
        <AboutUsSection />
        <SponsorSection />
        <HighlightsSection />
        <JoinUsSection />
        <FaqSection />
      </div>
      <Footer />
    </motion.div>
  );
}

export default LandingPageRoot;
