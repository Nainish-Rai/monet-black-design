import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import React from "react";
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
    title:
      "Monet, India’s First-Ever Interoperable Product On Blockchain And AI",
    logo: "/icons/Outlook.svg",
    articleUrl:
      "https://www.outlookindia.com/hub4business/monet-indias-first-ever-interoperable-product-on-blockchain-and-ai-promises-a-new-era-of-rewards-programes",
  },
  {
    title: "This startup is making loyalty programs flexible",
    logo: "/icons/YourStory.svg",
    articleUrl:
      "https://yourstory.com/2024/07/how-bengaluru-based-monet-making-loyalty-programs-flexible",
  },
  {
    title: "RazorPay Rize on Linkedin",
    logo: "/icons/LinkedIn.png",
    articleUrl:
      "https://www.linkedin.com/posts/razorpayrize_razorpayrize-monetwork-d2c-activity-7262736502575501312-_Y1E/",
  },
  {
    title: "Dazeinfo Media & Research on Linkedin",
    logo: "/icons/LinkedIn.png",
    articleUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7267146286531796992/",
  },
];

function HighlightsSection({}: Props) {
  // No need to track API state for this design

  return (
    <div className="w-full mt-20 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl lg:text-6xl font-medium text-white"
      >
        Monet in the spotlight
      </motion.h2>

      <div className="w-full  mt-16 relative  ">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className=" lg:pl-4">
            {highlightsData.map((highlight, index) => (
              <CarouselItem
                key={index}
                className=" pl-0 lg:basis-1/3 h-[400px] transition-opacity duration-300"
              >
                <motion.div
                  variants={textVariant(0.1 * (index + 1))}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full relative"
                >
                  <HighlightCard {...highlight} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -bottom-20 right-0 flex items-center justify-end gap-2">
            <CarouselPrevious className="static h-12 w-12 translate-y-0 bg-neutral-900 border-neutral-800 hover:bg-neutral-800 transition-all duration-300 rounded-full" />
            <CarouselNext className="static h-12 w-12 translate-y-0 bg-neutral-900 border-neutral-800 hover:bg-neutral-800 transition-all duration-300 rounded-full" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default HighlightsSection;
