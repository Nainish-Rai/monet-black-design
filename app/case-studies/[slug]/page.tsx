"use client";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { MarketCard } from "@/components/market-card";
import caseStudies from "@/data/case-studies.json";
import caseStudiesTwo from "@/data/case-studies-two.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { isValidCaseStudySlug } from "@/app/lib/routes";

// Define types for the case studies
interface MarketStat {
  title: string;
  description: string;
}

interface Introduction {
  text: string;
  stats: string;
  conclusion: string;
}

interface CaseStudy {
  logo: string;
  title: string;
  subtitle: string;
  appImage: string;
  introduction: Introduction;
  marketStats: MarketStat[];
}

interface NewCaseStudyFormat {
  title: string;
  clientContext: {
    industry: string;
    solutionCategory: string;
  };
  images?: {
    logo: string;
    appImage: string;
  };
  sections: {
    backgroundAndChallenges: {
      challenges: string[];
      impact: string;
    };
    monetSolution: {
      overview: string;
      keyFeaturesAndAdvantages: {
        [key: string]: {
          description: string;
          advantages: string[];
        };
      };
      howItWorks: string[];
    };
    results: string[];
    futureOfDigitalLoyalty?: {
      opportunities: string[];
    };
    futureOutlook?: {
      opportunities: string[];
    };
    conclusion: {
      keyAdvantages: string[];
      outcome: string;
    };
  };
  contact: {
    callToAction: string;
    details: string;
  };
}

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

// Adapter function to normalize case study format from case-studies-two.json
const adaptNewCaseStudyFormat = (
  newCaseStudy: NewCaseStudyFormat,
  slug: string,
): CaseStudy => {
  // Extract features from keyFeaturesAndAdvantages
  const featureKeys = Object.keys(
    newCaseStudy.sections.monetSolution.keyFeaturesAndAdvantages,
  );

  // Create market stats from available features
  const marketStats: MarketStat[] = featureKeys.map((key: string) => {
    const feature =
      newCaseStudy.sections.monetSolution.keyFeaturesAndAdvantages[
        key as keyof typeof newCaseStudy.sections.monetSolution.keyFeaturesAndAdvantages
      ];
    return {
      title: key
        .split(/(?=[A-Z])/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "), // Convert camelCase to Title Case
      description: `${feature.description} ${feature.advantages.join(" ")}`,
    };
  });

  // Different stats for different industries
  const industryStats: { [key: string]: string } = {
    banking:
      "over 70% of loyalty program points expire unused in traditional banking systems",
    retail:
      "approximately 85% of loyalty program points remain unredeemed in retail systems",
    cloud:
      "79% of enterprises overspend on cloud services without incentivized optimization",
    group:
      "87% of consumers leave 85% of their loyalty points unused across retail brands",
  };

  const industry = slug.split("-")[0];
  const statToUse = industryStats[industry] || industryStats["banking"];

  // Use image paths from the new format if available
  const logo = newCaseStudy.images?.logo || "/images/assets/loyalty-coins.svg";
  const appImage =
    newCaseStudy.images?.appImage || "/images/assets/starbucksApp.png";

  return {
    logo,
    title: newCaseStudy.title,
    subtitle: newCaseStudy.clientContext.industry,
    appImage,
    introduction: {
      text: `${newCaseStudy.sections.monetSolution.overview} Traditional ${industry} loyalty programs often face challenges such as ${newCaseStudy.sections.backgroundAndChallenges.challenges.slice(0, 2).join(" and ").toLowerCase()}`,
      stats: statToUse,
      conclusion: newCaseStudy.sections.backgroundAndChallenges.impact,
    },
    marketStats,
  };
};

export default function CaseStudyPage() {
  const params = useParams();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!params) {
    return notFound();
  }

  const slug = params.slug as string;

  // Validate slug
  if (!isValidCaseStudySlug(slug)) {
    return notFound();
  }

  // Check for case study in the regular format first
  let caseStudy = caseStudies[slug as keyof typeof caseStudies] as
    | CaseStudy
    | undefined;

  // Check if this is a case study from the new format
  const isNewFormat =
    slug === "banking-loyalty" ||
    slug === "cloud-service" ||
    slug === "group-loyalty" ||
    slug === "retail-loyalty";

  const newCaseStudy = isNewFormat
    ? (caseStudiesTwo[
        slug as keyof typeof caseStudiesTwo
      ] as NewCaseStudyFormat)
    : null;

  // If not found in regular format, adapt from new format
  if (!caseStudy && newCaseStudy) {
    caseStudy = adaptNewCaseStudyFormat(newCaseStudy, slug);
  }

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
                className="rounded-full  p-1"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <motion.h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </motion.h1>
              <motion.p className="mt-2 text-2xl text-white/80 sm:text-3xl lg:text-4xl">
                {caseStudy.subtitle}
              </motion.p>
              {isNewFormat && newCaseStudy && (
                <motion.p className="mt-2 text-lg text-white/80">
                  {newCaseStudy.clientContext.solutionCategory}
                </motion.p>
              )}
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
                According to industry research,{" "}
                <span className="text-yellow-400">
                  {caseStudy.introduction.stats}
                </span>
                . {caseStudy.introduction.conclusion}{" "}
              </p>
              {!isNewFormat && (
                <p className="mt-6 text-lg text-[#CECECE]">
                  {` Here's a take on their most successful program `}
                  <span className="text-yellow-400">Starbucks Rewards</span>.
                </p>
              )}
            </motion.section>

            {/* Background and Challenges - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="background-challenges"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  Background and Challenges
                </h2>
                <p className="text-lg text-[#CECECE] mb-4">
                  Traditional {newCaseStudy.clientContext.industry} loyalty
                  programs face several key challenges:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.backgroundAndChallenges.challenges.map(
                    (challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ),
                  )}
                </ul>
                <p className="mt-6 text-lg text-[#CECECE]">
                  <span className="text-yellow-400">Impact: </span>
                  {newCaseStudy.sections.backgroundAndChallenges.impact}
                </p>
              </motion.section>
            )}

            {/* Features & Advantages Section */}
            <motion.section variants={fadeInUp}>
              <h2
                id="key-features"
                className="mb-8 text-4xl font-medium text-white"
              >
                {isNewFormat && newCaseStudy
                  ? `${newCaseStudy.clientContext.industry} Loyalty Solutions: Key Features`
                  : "Capturing the Market: Key Numbers"}
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

            {/* How It Works - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="how-it-works"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  How It Works
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.monetSolution.howItWorks.map(
                    (step, index) => (
                      <li key={index}>{step}</li>
                    ),
                  )}
                </ol>
              </motion.section>
            )}

            {/* Results - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="results"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  Business Outcomes
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Future Opportunities - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="future-opportunities"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  {newCaseStudy.sections.futureOfDigitalLoyalty
                    ? "Future of Digital Loyalty"
                    : "Future Outlook"}
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.futureOfDigitalLoyalty
                    ? newCaseStudy.sections.futureOfDigitalLoyalty.opportunities.map(
                        (opportunity, index) => (
                          <li key={index}>{opportunity}</li>
                        ),
                      )
                    : newCaseStudy.sections.futureOutlook?.opportunities.map(
                        (opportunity, index) => (
                          <li key={index}>{opportunity}</li>
                        ),
                      )}
                </ul>
              </motion.section>
            )}

            {/* Conclusion - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="conclusion"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  Key Advantages
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.conclusion.keyAdvantages.map(
                    (advantage, index) => (
                      <li key={index}>{advantage}</li>
                    ),
                  )}
                </ul>
                <p className="mt-6 text-lg text-[#CECECE]">
                  {newCaseStudy.sections.conclusion.outcome}
                </p>
              </motion.section>
            )}

            {/* Contact - Only for new format case study */}
            {isNewFormat && newCaseStudy && (
              <motion.section variants={fadeInUp}>
                <h2
                  id="contact"
                  className="mb-8 text-4xl font-medium text-white"
                >
                  {newCaseStudy.contact.callToAction}
                </h2>
                <p className="text-lg text-[#CECECE]">
                  {newCaseStudy.contact.details}
                </p>
              </motion.section>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
