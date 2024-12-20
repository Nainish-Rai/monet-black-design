"use client";
import * as React from "react";
import Image from "next/image";
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { ArrowUpRight } from "lucide-react";
import FeatureCarousel from "@/components/feature-carousel";
import { useSearchParams } from "next/navigation";
import featuresData from "@/data/features.json";
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import { Suspense } from "react";

export default function FeaturesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesContent />
    </Suspense>
  );
}

function FeaturesContent() {
  const searchParams = useSearchParams();
  const activeParam = searchParams.get("active") || "customers";
  const [currentFeatureIndex, setCurrentFeatureIndex] =
    React.useState<number>(0);
  console.log(currentFeatureIndex);
  const features = featuresData[activeParam as keyof typeof featuresData];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-black to-blue-950">
      <div className="container relative lg:h-screen mx-auto px-4 py-16">
        <div className="flex w-full justify-center mt-16 lg:-mt-6 lg:h-screen items-center flex-col lg:flex-row gap-4 lg:gap-[7rem]">
          <motion.div
            className="relative lg:w-[60%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image
              src={"/images/assets/macbook.svg"}
              alt="Macbook mockup"
              width={1000}
              height={609}
              className="relative z-10 w-full h-auto"
            />
            <div className="absolute top-[6%] left-[11.3%] right-[11.3%] z-20">
              <FeatureCarousel
                setCurrentFeatureIndex={setCurrentFeatureIndex}
                currentFeatureIndex={currentFeatureIndex}
              />
            </div>
          </motion.div>
          <motion.div
            layout
            className="flex flex-col lg:max-w-[26%] gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              layout
              className="flex grow-1  h-96 pb-40 flex-col gap-3 bg-[#353535] p-[2.5rem] rounded-2xl"
              initial={{ borderRadius: "1rem" }}
              animate={{ borderRadius: "1rem" }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={features[currentFeatureIndex].title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="text-[2rem] leading-[120%] font-medium text-white"
                >
                  {features[currentFeatureIndex].title}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={features[currentFeatureIndex].description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                    delay: 0.1,
                  }}
                  className="text-lg text-[#BEBEBE] leading-[120%]"
                >
                  {features[currentFeatureIndex].description}
                </motion.p>
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2,
              }}
            >
              <ButtonWithIcon
                className="w-full self-end lg:w-fit font-medium text-lg"
                icon={<ArrowUpRight className="h-6 w-6" />}
              >
                Join the Waitlist
              </ButtonWithIcon>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
