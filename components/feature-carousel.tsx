"use client";
import * as React from "react";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import featuresData from "@/data/features.json";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureCarouselProps {
  setCurrentFeatureIndex: (index: number) => void;
  currentFeatureIndex: number;
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = React.memo(
  ({ setCurrentFeatureIndex, currentFeatureIndex }) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <FeatureCarouselContent
          setCurrentFeatureIndex={setCurrentFeatureIndex}
          currentFeatureIndex={currentFeatureIndex}
        />
      </Suspense>
    );
  },
);

function FeatureCarouselContent({
  setCurrentFeatureIndex,
  currentFeatureIndex,
}: FeatureCarouselProps) {
  const searchParams = useSearchParams();
  const activeParam = searchParams?.get("active") || "customers";

  const features = React.useMemo(
    () =>
      (featuresData[activeParam as keyof typeof featuresData] as Feature[]) ||
      [],
    [activeParam],
  );

  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentFeatureIndex(api.selectedScrollSnap());
    });
  }, [api, setCurrentFeatureIndex]);

  const carouselOptions = React.useMemo(
    () => ({
      startIndex: currentFeatureIndex,
      loop: true,
      duration: 300,
      skipSnaps: true,
      axisDirection: "ltr",
    }),
    [currentFeatureIndex],
  );

  if (!features.length) return <div>No features available</div>;

  return (
    <Carousel
      className="w-full relative"
      setApi={setApi}
      opts={carouselOptions}
    >
      <CarouselContent className="transition-all duration-300">
        {features.map((feature: Feature, index: number) => (
          <CarouselItem
            key={`${feature.title}-${index}`}
            className="transition-all duration-300"
          >
            <Card className="border-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative aspect-[778/474] w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-all duration-300"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

FeatureCarousel.displayName = "FeatureCarousel";

export default FeatureCarousel;
