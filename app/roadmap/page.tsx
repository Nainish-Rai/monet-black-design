import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { CircleCheckBig } from "lucide-react";

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
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-blue-950">
      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Monet Roadmap
            </h1>
            <p className="text-xl text-neutral-400 sm:text-2xl">
              Learn about the history of Monet and our roadmap for upcoming
              products.
            </p>
          </div>
          <div className="hidden lg:block" />
        </div>

        <div className="mt-8">
          <Tabs defaultValue="Web 2" className="w-full">
            <TabsList className="flex items-center justify-start flex-wrap h-auto space-y-1 rounded-full bg-neutral-800/50 p-1 text-neutral-400">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.title}
                  className="rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:text-neutral-100 data-[state=active]:bg-white data-[state=active]:text-neutral-900"
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="relative mt-16">
          <Timeline />
          <div className="absolute right-0 top-0 -translate-y-1/2">
            <CircleCheckBig className="h-48 w-48 text-blue-500/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
