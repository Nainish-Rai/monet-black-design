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

const q1Items = [
  {
    id: 1,
    done: true,
    date: "Jan 15, 2025",
    title: "Monet Points On-chain (PoC)",
    description: "Proof of concept for Monet Points on-chain.",
  },
  {
    id: 2,
    done: true,
    date: "Feb 1, 2025",
    title: "Loyalty Studio (PoC)",
    description: "Proof of concept for Loyalty Studio.",
  },
  {
    id: 3,
    done: true,
    date: "Feb 15, 2025",
    title: "Smart Contracts Architecture",
    description: "Design system for multi-tenant support.",
  },
  {
    id: 4,
    done: true,
    date: "Feb 15, 2025",
    title: "System Design for Multi-Tenant Support",
    description: "Design system for multi-tenant support.",
  },
  {
    id: 5,
    done: true,
    date: "Mar 1, 2025",
    title: "Internal Testing Sandbox Environment",
    description: "Set up sandbox environment for internal testing.",
  },
];
const q2Items = [
  {
    id: 1,
    done: true,
    date: "Apr 10, 2025",
    title: "Smart Contracts Deployment (Testnet)",
    description: "Deploy smart contracts on testnet.",
  },
  {
    id: 2,
    done: true,
    date: "Apr 25, 2025",
    title: "Monet On-chain Points Deployment (Beta Testing)",
    description: "Beta testing for Monet on-chain points deployment.",
  },
  {
    id: 3,
    done: true,
    date: "May 15, 2025",
    title: "Loyalty Studio (Beta Testing)",
    description: "Beta testing for Loyalty Studio.",
  },
  {
    id: 4,

    date: "May 30, 2025",
    title: "ZKP Initial Integration",
    description: "Initial integration of zero-knowledge proofs (ZKP).",
  },
  {
    id: 5,

    date: "Jun 15, 2025",
    title: "Products Documentation",
    description: "Complete documentation for products.",
  },
];
const q3Items = [
  {
    id: 1,

    date: "Jul 10, 2025",
    title: "Monet On-chain Points Deployment (Mainnet)",
    description: "Deploy Monet on-chain points on mainnet.",
  },
  {
    id: 2,

    date: "Jul 25, 2025",
    title: "Loyalty Studio (Public Launch)",
    description: "Public launch of Loyalty Studio.",
  },
  {
    id: 3,

    date: "Aug 15, 2025",
    title: "Partner Onboarding Automation",
    description: "Automate partner onboarding process.",
  },
  {
    id: 4,

    date: "Aug 30, 2025",
    title: "ZKP Private Transactions (Alpha)",
    description: "Alpha release for ZKP private transactions.",
  },
  {
    id: 5,
    date: "Sep 15, 2025",
    title: "Monet Token Generation Event (TGE)",
    description: "Token generation event for Monet.",
  },
];
const q4Items = [
  {
    id: 1,
    date: "Oct 15, 2025",
    title: "Placeholder",
    description: "Placeholder milestone.",
  },
  {
    id: 2,
    date: "Nov 1, 2025",
    title: "Placeholder",
    description: "Placeholder milestone.",
  },
  {
    id: 3,
    date: "Nov 15, 2025",
    title: "Placeholder",
    description: "Placeholder milestone.",
  },
  {
    id: 4,
    date: "Dec 1, 2025",
    title: "Placeholder",
    description: "Placeholder milestone.",
  },
  {
    id: 5,
    date: "Dec 1, 2025",
    title: "Placeholder",
    description: "Placeholder milestone.",
  },
];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof roadmapData>("Web 2");

  return (
    <div className="relative min-h-screen   bg-cover py-36     bg-center bg-no-repeat">
      <WhiteRectangleWrapper className="px-0 pb-0 lg:px-0 lg:py-0">
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
        <div className="hidden lg:block">
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent title="Q1" items={q1Items} />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent title="Q2" items={q2Items} />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent title="Q3" items={q3Items} />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent title="Q4" items={q4Items} />
          </WhiteRectangleWrapper>
        </div>
        <div className="lg:hidden">
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent
              direction="vertical"
              title="Q1"
              items={q1Items}
            />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent
              direction="vertical"
              title="Q2"
              items={q2Items}
            />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent
              direction="vertical"
              title="Q3"
              items={q3Items}
            />
          </WhiteRectangleWrapper>
          <WhiteRectangleWrapper className="lg:px-4 lg:py-10 lg:p-8">
            <TimelineComponent
              direction="vertical"
              title="Q4"
              items={q4Items}
            />
          </WhiteRectangleWrapper>
        </div>
      </WhiteRectangleWrapper>
    </div>
  );
}
