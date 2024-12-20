"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { roadmapData } from "@/data/roadmap";
import { useState } from "react";

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
    <div className="relative min-h-screen bg-[url('/images/background/roadmap-bg.webp')]  bg-cover pt-36  lg:pt-52 bg-center bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative mx-auto px-4 -mt-28 py-16 pb-32"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex flex-col lg:flex-row w-full col-span-2 justify-between"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl font-medium text-white sm:text-6xl"
            >
              Monet Roadmap
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base max-sm:mt-2 text-[#C3C3C3] max-w-2xl  sm:text-4xl"
            >
              Learn about the history of Monet and our roadmap for upcoming
              products.
            </motion.p>
          </motion.div>
          <div className="hidden lg:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 mx-auto w-full"
        >
          <Tabs
            defaultValue="Web 2"
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as keyof typeof roadmapData)
            }
            className="w-full rounded-2xl  mx-auto "
          >
            <TabsList className="flex items-center w-fit mx-auto justify-center flex-wrap h-auto space-y-1 p-3 px-5 rounded-full bg-[#2D2D2D] text-neutral-400">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.title}
                  className="rounded-full lg:px-4 lg:py-3 lg:text-xl font-medium transition-all hover:text-neutral-100 data-[state=active]:bg-white data-[state=active]:text-neutral-900"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent className="w-full" value={activeTab}>
              <div className=" mt-16">
                <Timeline items={roadmapData[activeTab] as any} />
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
