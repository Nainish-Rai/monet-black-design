"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { MarketCard } from "@/components/market-card";
import caseStudies from "@/data/case-studies.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const slug = params.slug as keyof typeof caseStudies;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return notFound();
  }

  return (
    <div className="min-h-screen w-full bg-black">
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto w-full"
      >
        {/* Hero Section */}
        <motion.div
          style={{ y, opacity }}
          className="grid gap-8 w-full bg-[url('/images/background/usecaseBg.png')] bg-cover bg-no-repeat bg-center px-6 pt-32 lg:px-32 lg:grid-cols-2"
        >
          <motion.div
            variants={staggerContainer}
            className="flex flex-col items-start gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Image
                src={caseStudy.logo}
                alt="Company Logo"
                width={120}
                height={120}
                className="rounded-full bg-white p-1"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </motion.h1>
              <motion.p className="mt-2 text-2xl text-white/80 sm:text-3xl lg:text-4xl">
                {caseStudy.subtitle}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <Image
              src={caseStudy.appImage}
              alt="App Screenshot"
              width={400}
              height={800}
              className="ml-auto"
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pb-16 container grid gap-8 lg:grid-cols-[250px,1fr]"
        >
          <TableOfContents />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Introduction */}
            <motion.section variants={fadeInUp}>
              <h2
                id="introduction"
                className="mb-8 text-4xl font-medium text-white"
              >
                Introduction
              </h2>
              <p className="text-lg text-[#CECECE]">
                {caseStudy.introduction.text}
              </p>
              <p className="mt-6 text-lg text-[#CECECE]">
                According to a CNN report, by October 2022, there were{" "}
                <span className="text-yellow-400">
                  {caseStudy.introduction.stats}
                </span>
                . {caseStudy.introduction.conclusion}{" "}
              </p>
              <p className="mt-6 text-lg text-[#CECECE]">
                {` Here's a take on their most successful program `}
                <span className="text-yellow-400">Starbucks Rewards</span>.
              </p>
            </motion.section>

            {/* Market Numbers */}
            <motion.section variants={fadeInUp}>
              <h2
                id="market-numbers"
                className="mb-8 text-4xl font-medium text-white"
              >
                Capturing the Coffee Market: Numbers
              </h2>
              <motion.div variants={staggerContainer} className="space-y-4">
                {caseStudy.marketStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MarketCard
                      title={stat.title}
                      description={stat.description}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
