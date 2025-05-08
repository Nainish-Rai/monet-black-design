"use client"; // If using Next.js App Router and any client-side interactivity is planned in future or for hooks

import React from "react";
import Link from "next/link";
import Image from "next/image";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";

interface CaseStudyCardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  href,
  imageUrl,
  title,
  description,
  date,
  readTime,
}) => {
  return (
    <WhiteRectangleWrapper className="p-6">
      <Link href={href} className="group block">
        <div className="flex ">
          {/* Image container with fixed aspect ratio */}
          <div className="relative w-1/3  aspect-[16/9]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content section */}
          <div className="flex w-2/3 flex-col justify-between flex-grow p-6">
            <div>
              <h3 className="text-xl font-medium leading-tight mb-2 text-[#F5F3EF] line-clamp-2 group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="text-sm text-[#B4B4B4] mb-6 line-clamp-3">
                {description}
              </p>
            </div>

            <div className="flex items-center text-xs text-[#8A8A8A]">
              <span>{date}</span>
              <span className="mx-2">•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </WhiteRectangleWrapper>
  );
};

// Sample data for case studies
const caseStudiesData = [
  {
    id: "1",
    href: "/case-studies/zk-email-rhinestone", // Example link, update as needed
    imageUrl: "/images/case-studies/case-study-zk-email-rhinestone.png", // Path to the downloaded image
    title: "Email-based Account Recovery using ZK Email and Rhinestone",
    description:
      "This blog post explains the importance of zk email-based account recovery modules, and how to use it for any smart contract wallet.",
    date: "2024-06-26",
    readTime: "15 min read",
  },
  {
    id: "2",
    href: "/case-studies/zk-email-rhinestone", // Example link, update as needed
    imageUrl: "/images/case-studies/case-study-zk-email-rhinestone.png", // Path to the downloaded image
    title: "Email-based Account Recovery using ZK Email and Rhinestone",
    description:
      "This blog post explains the importance of zk email-based account recovery modules, and how to use it for any smart contract wallet.",
    date: "2024-06-26",
    readTime: "15 min read",
  },
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-inter text-[#F5F3EF]">
      <main className="lg:max-w-5xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className=" max-sm:text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#F5F3EF] mb-2">
            Case Studies
          </h1>
          <p
            className="text-base text-left sm:text-lg text-[#F5F3EF] max-w-xl md:max-w-2xl "
            // Figma: Inter, 16px (scaled up responsively here), 400 weight, color #F5F3EF, line-height: 1.5em
            // Tailwind's default line-height (e.g., leading-relaxed for text-lg) should be fine.
            // Can use leading-normal or leading-[1.5em] for precise control.
          >
            Latest case studies from our integrations
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 ">
          {caseStudiesData.map((study) => (
            <CaseStudyCard
              key={study.id}
              href={study.href}
              imageUrl={study.imageUrl}
              title={study.title}
              description={study.description}
              date={study.date}
              readTime={study.readTime}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage;
