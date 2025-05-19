"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { Footer } from "@/components/footer";
import { motion } from "motion/react";
import { roadmapData } from "@/data/roadmap";
import { useState } from "react";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import { textVariant } from "@/lib/anims";
import TimelineComponent from "@/components/roadmap";

const tabs = [
  {
    title: "Web 2",
    description: "Web 2 description",
    status: "completed",
  },
  {
    title: "Web 3",
    description: "Web 3 description",
    status: "current",
  },
  {
    title: "Loyalty Infrastructure",
    description: "Loyalty Infrastructure description",
    status: "upcoming",
  },
  {
    title: "Data Monetisation",
    description: "Data Monetisation description",
    status: "upcoming",
  },
];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof roadmapData>("Web 2");

  return (
    <div className="relative min-h-screen   bg-cover py-36     bg-center bg-no-repeat">
      <WhiteRectangleWrapper className="px-0 pb-0">
        <motion.div className="mb-16 w-full px-0 pt-8 items-center mx-auto flex flex-col text-center">
          <motion.h1 variants={textVariant(0.2)} className="heading">
            Monet Roadmap
          </motion.h1>
          <motion.p
            variants={textVariant(0.2)}
            className="subheading mt-4 w-full max-w-4xl text-center"
          >
            Learn about the history of Monet and our roadmap for upcoming year
            where we launch multiples products.
          </motion.p>
        </motion.div>
        <WhiteRectangleWrapper>
          <TimelineComponent />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper>
          <TimelineComponent />
        </WhiteRectangleWrapper>
        <WhiteRectangleWrapper>
          <TimelineComponent />
        </WhiteRectangleWrapper>
      </WhiteRectangleWrapper>
    </div>
  );
}
