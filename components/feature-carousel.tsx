"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const FeatureCarousel: React.FC = () => {
  return (
    <Carousel className="w-full relative">
      <CarouselContent>
        {Array.from({ length: 24 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="border-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-[778/474] w-full">
                  <Image
                    src={`/images/assets/featurescreen${(index % 2) + 1}.png`}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute lg:-left-24 top-1/2 -translate-y-1/2 z-30" />
      <CarouselNext className="absolute lg:-right-24 top-1/2 -translate-y-1/2 z-30" />
    </Carousel>
  );
};

export default FeatureCarousel;
