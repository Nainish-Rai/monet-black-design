import React from "react";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import Image from "next/image";
import {
  ChevronRight,
  CircleDollarSignIcon,
  OrbitIcon,
  PickaxeIcon,
} from "lucide-react"; // Using Lucide for a generic arrow icon
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { Button } from "@/components/ui/button";
import { productData } from "@/config/product-data";
import WaitlistSection from "@/components/landing-page/WaitlistSection";
import Link from "next/link";

// Placeholder for Nebula icon - assuming it's a component or direct SVG usage
const NebulaIcon = () => (
  <div className="flex items-center space-x-2">
    <OrbitIcon />
    <span className="text-base font-medium text-zinc-100">Nebula</span>
  </div>
);

// Placeholder for a generic button, customize as needed
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

type FeatureCardProps = {
  icon?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  icon,
  description,
}) => {
  return (
    <WhiteRectangleWrapper className=" w-1/2 min-h-72  m-0 lg:p-8 ">
      <div className=" rounded-lg w-full items-center  flex flex-col">
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} width={120} height={120} />
        ) : (
          icon
        )}

        <h3 className="subheading text-2xl font-medium text-zinc-100 mt-2 mb-2">
          {title}
        </h3>
        <p className="text-zinc-400 text-center text-base leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </WhiteRectangleWrapper>
  );
};

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const {
    title,
    subheading,
    name,
    features,
    featureHeading,
    appflow,
    appflowTitle,
  } = productData.find((item: any) => item.id === id) || {};
  return (
    <div className="min-h-screen  bg-black py-32 text-zinc-300">
      {/* Hero Section */}
      <WhiteRectangleWrapper className="py-16  md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className=" mb-6 flex gap-2">
              {id == "monet-points" && <CircleDollarSignIcon />}
              {id == "loyalty-studio" && <PickaxeIcon />}
              <span className="font-md"> {name}</span>
            </div>
            <h1 className="heading mb-4">{title}</h1>
            <p className="subheading  mb-6">{subheading}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              {/* <Button
                variant={"default"}
                className="bg-gradient-to-r to-[#FFE55C] from-[#FDF2CD] text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors"
              >
                Explore Our Playground
                <ChevronRight className="w-4 h-4" />
              </Button> */}
              <Link
                href="https://calendly.com/haedarah-ali-monet"
                target="_blank"
              >
                <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden ">
              <Image
                src={
                  id == "loyalty-studio"
                    ? "/images/landing/cube.gif"
                    : "/images/landing/sphere.gif"
                }
                alt="Monet Token loyalty platform illustration"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </WhiteRectangleWrapper>

      {/* Designed for web3 developers Section */}
      <WhiteRectangleWrapper className="py-16 lg:px-0   px-0 pb-0 md:py-24 md:pb-0 lg:py-0 lg:pt-16 ">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading max-w-3xl mx-auto">{featureHeading}</h2>
        </div>
        <div className="flex  flex-col flex-wrap w-full lg:flex-row gap-0 items-center justify-center">
          {features?.map((feature: any, index: number) => (
            <FeatureCard
              key={index}
              imageSrc={feature.image || ""}
              icon={feature.icon}
              imageAlt={""}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </WhiteRectangleWrapper>

      {/* An AI model built for the blockchain ecosystem Section */}
      <WhiteRectangleWrapper className="py-16 md:py-24">
        {/* Left Content */}
        <div className=" text-center flex items-center justify-center flex-col  w-full lg:text-left">
          {appflowTitle ? (
            <h2 className="heading max-w-4xl text-6xl text-slate-200 mb-4 text-center ">
              {appflowTitle}
            </h2>
          ) : (
            <>
              <h2 className="heading mb-4">
                An AI model built for the <br className="hidden md:block" />
                blockchain ecosystem
              </h2>
              <p className="subheading text-center mb-6">
                Nebula is designed to understand and interact with the web3
                ecosystem. It far outperforms generic LLMs for both basic and
                sophisticated queries.
              </p>
            </>
          )}
          <div className="flex justify-center mt-8 flex-wrap lg:justify-start">
            {/* <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors">
              Explore Our Playground
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33333 8H12.6667"
                  stroke="#0A0A0A"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                />
                <path
                  d="M8 3.33333L12.6667 8L8 12.6667"
                  stroke="#0A0A0A"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button> */}
            {appflow &&
              appflow.map((item: any, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 w-full ${item.direction == "right" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center`}
                >
                  <Image
                    src={item.image}
                    alt="Monet Token loyalty platform illustration"
                    width={500}
                    className="hover:scale-105 duration-300 transition-all"
                    height={500}
                  />
                  <div className="w-full">
                    <h3 className="heading pl-16  font-medium text-zinc-100 mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="subheading pl-16 mt-4 text-zinc-400">
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </WhiteRectangleWrapper>

      {/* Placeholder for "Sign up for early access" Section */}
      {/* <WhiteRectangleWrapper className="py-16 flex flex-col items-center justify-center md:py-24 text-center">
        <h2 className="heading text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-50 mb-4">
          Sign up for early access.
        </h2>
        <p className="subheading text-lg md:text-xl text-zinc-400 mb-8">
          Be one of the first to try Nebula.
        </p>
        <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors">
          Explore Our Playground
          <svg
            className="ml-2 w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 8H12.6667"
              stroke="#0A0A0A"
              strokeWidth="1.333"
              strokeLinecap="round"
            />
            <path
              d="M8 3.33333L12.6667 8L8 12.6667"
              stroke="#0A0A0A"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </WhiteRectangleWrapper> */}

      <WhiteRectangleWrapper className="">
        <WaitlistSection />
      </WhiteRectangleWrapper>
    </div>
  );
}

export default ProductPage;
