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
import WhiteRectangleWrapper from "./WhiteRectangleWrapper";
import CTA from "./CTA";
import ProductSectionOne from "./ProductSectionOne";
import FeaturesSectionOne from "./FeaturesSectionOne";

type Props = {};

function LandingPageRoot({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full bg-black bg-cover bg-center overflow-hidden bg-no-repeat"
    >
      <Navbar />
      <div className="flex px-4 flex-col pb-16  w-full mx-auto ">
        <WhiteRectangleWrapper className="mt-32">
          <HeroSection />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0">
          <CTA />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0">
          <ProductSectionOne />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0">
          <FeaturesSectionOne />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0 px-0 p-0 py-0">
          <HighlightsSection />
        </WhiteRectangleWrapper>
        <SponsorSection />

        <FaqSection />
      </div>
      <Footer />
    </motion.div>
  );
}

export default LandingPageRoot;
