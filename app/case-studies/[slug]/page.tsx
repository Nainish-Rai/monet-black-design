import Image from "next/image";
import { notFound } from "next/navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { MarketCard } from "@/components/market-card";

const caseStudies = {
  starbucks: {
    logo: "/placeholder.svg",
    title: "Starbucks Rewards",
    subtitle: "Coffee & Beyond",
    appImage: "/placeholder.svg",
    introduction: {
      text: "Starbucks, a pioneer in the premium coffee experience since 1971, has become synonymous with coffee culture. Known for its high-quality coffees, teas, handcrafted beverages, and fresh food items, it's safe to say Starbucks has an abundance of loyal customers. The iconic brand has revolutionized the coffee industry and changed the way everyone consumes coffee. Starbucks took something that had been done the same way for decades and turned it upside down with effective partnerships, beautiful branding, and a variety of types of coffee drinks. They have been doing things differently ever since, including customer loyalty.",
      stats: "28.7 million active Starbucks reward members",
      conclusion:
        "Giving Starbucks a 16% year-over-year growth in its loyalty program.",
    },
    marketStats: [
      {
        title: "Market Size & Growth",
        description:
          "Valued at $552.8 million, the Indian coffee market is projected to grow at a 9.97% CAGR, reaching $1.23 billion by 2032.",
      },
      {
        title: "Revenue Surge",
        description:
          "Tata Starbucks earned ₹1,087 crore ($130 million) in FY 2023, up 71% YoY, fueled by 71 new stores and rising demand.",
      },
      {
        title: "Consumer Shift",
        description:
          "Millennials and Gen Z are driving demand for specialty options like Indian Arabica and Monsooned Malabar at Starbucks Reserve.",
      },
      {
        title: "Market Drivers",
        description:
          "Urbanization (35% of the population) and evolving preferences are boosting café culture and coffee consumption over traditional tea.",
      },
      {
        title: "Growth Rate",
        description:
          "Growing at 8-9% annually, fueled by rising incomes, urbanization, and a post-pandemic boom in coffee culture among young consumers.",
      },
      {
        title: "Market Dynamics",
        description:
          "Nescafe dominates with 40% market share, Bru follows at 32.45%. Starbucks, a rising player, holds 20-24%, competing closely with local favorites like Blue Tokai and Third Wave Coffee.",
      },
    ],
  },
};

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
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-yellow-950/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <Image
              src={caseStudy.logo}
              alt="Company Logo"
              width={120}
              height={120}
              className="rounded-full bg-white p-4"
            />
            <div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
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
        <div className="mt-24 grid gap-8 lg:grid-cols-[250px,1fr]">
          <TableOfContents />
          <div className="space-y-16">
            {/* Introduction */}
            <section>
              <p className="text-lg text-neutral-300">
                {caseStudy.introduction.text}
              </p>
              <p className="mt-6 text-lg">
                According to a CNN report, by October 2022, there were{" "}
                <span className="text-yellow-400">
                  {caseStudy.introduction.stats}
                </span>
                . {caseStudy.introduction.conclusion}
              </p>
              <p className="mt-6 text-lg">
                {` Here's a take on their most successful program`}
                <span className="text-yellow-400">Starbucks Rewards</span>.
              </p>
            </section>

            {/* Market Numbers */}
            <section>
              <h2 className="mb-8 text-3xl font-bold text-white">
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
