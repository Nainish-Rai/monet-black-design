import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import HighlightCard, { HighlightCardProps } from "./HighlightCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

// Sample highlight data
const highlightsData: HighlightCardProps[] = [
  {
    title: "Monet's Product Launch",
    date: "13 Nov",
    place: "Bangalore",
    description: "On November 13th, we launched Monet in Bangalore—a groundbreaking loyalty ecosystem redefining flexibility and transparency. The event featured two insightful panel discussions, followed by our report launch and finally culminating in the official product unveiling.",
    gradient: "blue",
    articleUrl: "/news/product-launch"
  },
  {
    title: "Monet, India's First-Ever interoperable product on blockchain and AI promises a new era of rewards programs",
    logo: "/images/assets/startupfyi.svg",
    description: "StartupFYI covers Monet's innovative approach to loyalty programs using blockchain technology.",
    gradient: "purple",
    articleUrl: "https://startupfyi.com/monet-article"
  },
  {
    title: "Forbes Features Monet's Revolutionary Approach",
    logo: "/images/assets/forbes-logo.png",
    image: "/images/assets/grid1.png",
    description: "Forbes highlights how Monet is changing the loyalty landscape in India.",
    date: "25 Oct",
    gradient: "green",
    articleUrl: "https://forbes.com/monet-feature"
  },
  {
    title: "Monet, India's First-Ever Interoperable Product On Blockchain And AI Promises A New Era Of Reward programs",
    logo: "/images/assets/outlook.svg",
    description: "Outlook Business explores how Monet is revolutionizing customer loyalty.",
    gradient: "yellow",
    articleUrl: "https://outlook.com/monet-article"
  },
  {
    title: "The Future of Loyalty Programs",
    image: "/images/assets/grid2.png",
    description: "How Monet is leading the charge in transforming traditional loyalty systems with blockchain technology.",
    date: "18 Dec",
    gradient: "red",
    articleUrl: "/blog/future-of-loyalty"
  }
];

function HighlightsSection({ }: Props) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full mt-24 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center capitalize text-base font-medium tracking-[0.08rem] leading-[120%]"
      >
        HIGHLIGHTS
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-2 text-center text-2xl lg:text-5xl font-medium text-white lg:leading-[65px]"
      >
        Monet in the spotlight
      </motion.h3>

      <div className="w-full max-w-7xl mt-10 relative px-4 md:px-6 lg:px-8 pb-20">
        <div className="absolute inset-0 bg-gradient-radial-blue opacity-5 blur-3xl -z-10 rounded-full"></div>
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-4 gap-2">
            {highlightsData.map((highlight, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 h-[500px] transition-opacity duration-300"
              >
                <motion.div
                  variants={textVariant(0.1 * (index + 1))}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden border border-neutral-800 h-full relative shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
                >
                  <HighlightCard {...highlight} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-4">
            <CarouselPrevious className="static h-10 w-10 translate-y-0 bg-background/10 backdrop-blur-sm border-neutral-700 hover:bg-background/20 transition-all duration-300 hover:scale-110" />
            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === current - 1 ? 'w-6 bg-white' : 'w-2 bg-neutral-600 hover:bg-neutral-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="static h-10 w-10 translate-y-0 bg-background/10 backdrop-blur-sm border-neutral-700 hover:bg-background/20 transition-all duration-300 hover:scale-110" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HighlightsSection;
