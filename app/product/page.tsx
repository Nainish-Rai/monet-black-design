"use client";
import React from "react";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import Image from "next/image";
import { ChevronRight, OrbitIcon } from "lucide-react"; // Using Lucide for a generic arrow icon
import ButtonWithIcon from "@/components/ui/button-with-icon";
import { Button } from "@/components/ui/button";

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
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <WhiteRectangleWrapper className="p-6">
      <div className=" rounded-lg p-6 flex flex-col">
        <div className="relative w-full h-48 mb-6 rounded-md overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h3 className="subheading text-2xl font-medium text-zinc-100 mb-2">
          {title}
        </h3>
        <p className="text-zinc-400 text-base leading-relaxed">{description}</p>
      </div>
    </WhiteRectangleWrapper>
  );
};

function ProductPage() {
  return (
    <div className="min-h-screen  bg-black py-32 text-zinc-300">
      {/* Hero Section */}
      <WhiteRectangleWrapper className="py-16  md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-6">
              <NebulaIcon />
            </div>
            <h1 className="heading mb-4">
              Build seamless, cross-brand loyalty with Monet Token
            </h1>
            <p className="subheading  mb-6">
              Reward, redeem and track loyalty across a decentralized network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                variant={"default"}
                className="bg-gradient-to-r to-[#FFE55C] from-[#FDF2CD] text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors"
              >
                Explore Our Playground
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 mt-2 px-6 rounded-full transition-colors">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#1F1F1F]">
              <Image
                src="/images/product/hero-image.png"
                alt="Monet Token loyalty platform illustration"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </WhiteRectangleWrapper>

      {/* Designed for web3 developers Section */}
      <WhiteRectangleWrapper className="py-16 px-0 pb-0 md:py-24 md:pb-0">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading ">
            Designed for web3 developers <br className="hidden md:block" />
            at any level
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
          <FeatureCard
            imageSrc="/images/product/cross-brand-interoperability.png"
            imageAlt="Cross-Brand Interoperability illustration"
            title="Cross-Brand Interoperability"
            description="Users earn tokens in one place and spend them in another."
          />
          <FeatureCard
            imageSrc="/images/product/on-chain-transparency.png"
            imageAlt="On-Chain Transparency illustration"
            title="On-Chain Transparency"
            description="All token actions are recorded publicly for full auditability."
          />
          <FeatureCard
            imageSrc="/images/product/email-based-wallets.png"
            imageAlt="Email-Based Wallets illustration"
            title="Email-Based Wallets"
            description="Users onboard instantly with just their email - no crypto needed."
          />
        </div>
      </WhiteRectangleWrapper>

      {/* An AI model built for the blockchain ecosystem Section */}
      <WhiteRectangleWrapper className="py-16 md:py-24">
        {/* Left Content */}
        <div className=" text-center flex items-center justify-center flex-col  w-full lg:text-left">
          <h2 className="heading mb-4">
            An AI model built for the <br className="hidden md:block" />
            blockchain ecosystem
          </h2>
          <p className="subheading text-center mb-6">
            Nebula is designed to understand and interact with the web3
            ecosystem. It far outperforms generic LLMs for both basic and
            sophisticated queries.
          </p>
          <div className="flex justify-center lg:justify-start">
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
          </div>
        </div>
      </WhiteRectangleWrapper>

      {/* Placeholder for "Sign up for early access" Section */}
      <WhiteRectangleWrapper className="py-16 flex flex-col items-center justify-center md:py-24 text-center">
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
      </WhiteRectangleWrapper>
    </div>
  );
}

export default ProductPage;
