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
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { ArrowUpRight } from "lucide-react";

export function CarouselComponent() {
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
}

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-black to-blue-950">
      <div className="container relative lg:h-screen mx-auto px-4 py-16">
        <div className="flex w-full justify-center mt-16 lg:-mt-6 lg:h-screen items-center flex-col lg:flex-row gap-4 lg:gap-[7rem]">
          <div className="relative lg:w-[60%]">
            <Image
              src={"/images/assets/macbook.svg"}
              alt="Macbook mockup"
              width={1000}
              height={609}
              className="relative z-10 w-full h-auto"
            />
            <div className="absolute top-[6%] left-[11.3%] right-[11.3%] z-20">
              <CarouselComponent />
            </div>
          </div>
          <div className="flex flex-col  lg:max-w-[26%] gap-6">
            <div className="flex grow-1 h-full pb-40 flex-col gap-3 bg-[#353535] p-[2.5rem] rounded-2xl">
              <h2 className=" text-[2rem] leading-[120%]  font-medium text-white">
                Seamless Points Conversion
              </h2>
              <p className="text-lg text-[#BEBEBE] leading-[120%]">
                Easily exchange your loyalty points between partnered brands.
                Maximize value across platforms with transparent conversion
                rates and minimal fees.
              </p>
            </div>
            <ButtonWithIcon
              className="w-full self-end lg:w-fit font-medium text-lg"
              icon={<ArrowUpRight className="h-6 w-6" />}
            >
              Join the Waitlist
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
