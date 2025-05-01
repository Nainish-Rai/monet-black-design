"use client";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React from "react";
import { Settings, BarChart, Users, RefreshCw } from "lucide-react";
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
  const features = [
    {
      icon: <Settings className="w-6 h-6 mb-4 text-white" />,
      title: "Drag-and-Drop Layout",
      description:
        "Set rules, rewards, and workflows with simple visual tools.",
    },
    {
      icon: <BarChart className="w-6 h-6 mb-4 text-white" />,
      title: "Real-Time Analytics",
      description: "Track user behavior and loyalty performance instantly.",
    },
    {
      icon: <Users className="w-6 h-6 mb-4 text-white" />,
      title: "Multi-User Dashboard",
      description: "Give admins and operators custom access and controls.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 mb-4 text-white" />,
      title: "Instant Updates",
      description:
        "Make live edits to your program without redeploys or downtime.",
    },
  ];

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
        <WhiteRectangleWrapper className="border-t-0 p-0 pb-0">
          <FeaturesSectionOne features={features} />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0">
          <ProductSectionOne flexDirection="right" />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0 p-0 pb-0">
          <FeaturesSectionOne features={features} />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0">
          <ProductSectionOne />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper className="border-t-0 p-0 pb-0">
          <FeaturesSectionOne features={features} />
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
