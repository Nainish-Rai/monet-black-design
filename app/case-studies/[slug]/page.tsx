import Image from "next/image";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { MarketCard } from "@/components/market-card";
import caseStudies from "@/data/case-studies.json";

interface Params {
  slug: string;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const slug = (await params).slug as keyof typeof caseStudies;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return notFound();
  }

  return (
    <div className="min-h-screen w-full  bg-black">
      <div className=" mx-auto w-full ">
        {/* Hero Section */}
        <div className="grid gap-8 w-full bg-[url('/images/background/usecaseBg.png')] bg-cover bg-no-repeat bg-center px-6 pt-32 lg:px-32 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <Image
              src={caseStudy.logo}
              alt="Company Logo"
              width={120}
              height={120}
              className="rounded-full bg-white p-1"
            />
            <div>
              <h1 className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </h1>
              <p className="mt-2 text-2xl text-white/80 sm:text-3xl lg:text-4xl">
                {caseStudy.subtitle}
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={caseStudy.appImage}
              alt="App Screenshot"
              width={400}
              height={800}
              className="ml-auto"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-24 pb-16 container grid gap-8 lg:grid-cols-[250px,1fr]">
          <TableOfContents />
          <div className="space-y-16 ">
            {/* Introduction */}
            <section>
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
            </section>

            {/* Market Numbers */}
            <section>
              <h2
                id="market-numbers"
                className="mb-8 text-4xl font-medium text-white"
              >
                Capturing the Coffee Market: Numbers
              </h2>
              <div className="space-y-4">
                {caseStudy.marketStats.map((stat, index) => (
                  <MarketCard
                    key={index}
                    title={stat.title}
                    description={stat.description}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
