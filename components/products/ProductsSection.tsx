"use client";
import React from "react";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const productsData = [
  {
    imageSrc: "/images/product.png",
    imageAlt: "Abstract background for Loyalty Studio card",
    title: "Loyalty Studio",
    description:
      "Integrated thirdweb wallet functionality to seamlessly onboard millions of users, serving as the largest multi-sig wallet tool in the world.",
    statistic: "Securing $100b+ \nin crypto assets.",
    iconSrc: "/images/products/card-link-arrow.svg",
    cardLinkAriaLabel: "Learn more about Loyalty Studio",
  },
  {
    imageSrc: "/images/product.png",
    imageAlt: "Abstract background for Orbit card",
    title: "Orbit",
    description:
      "Launched collectible avatar NFTs using thirdweb, providing a seamless user experience and accessibility for users at scale.",
    statistic: "1,800 packs sold in \nunder 2 minutes.",
    iconSrc: "/images/products/card-link-arrow-orbit.svg",
    cardLinkAriaLabel: "Learn more about Orbit",
  },
  {
    imageSrc: "/images/product.png",
    imageAlt: "Abstract background for Pulse card",
    title: "Pulse",
    description:
      "Bringing onchain experiences to the real world — with seamless NFT creation, delivery, & transaction management via the Coinbase Wallet app.",
    statistic: "1000+ real world \ntransactions.",
    iconSrc: "/images/products/card-link-arrow-pulse.svg",
    cardLinkAriaLabel: "Learn more about Pulse",
  },
];

const ProductsSection: React.FC = () => {
  const handlePlaygroundClick = () => {
    // Placeholder for navigation or action
    console.log("Explore Playground button clicked");
  };

  const handlePlaygroundKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handlePlaygroundClick();
    }
  };

  return (
    <WhiteRectangleWrapper className="py-12 px-0 md:py-16">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
        <h2 className="heading mb-4">Explore Our Loyalty Tech Stack</h2>
        <p className="subheading font-normal mb-8">
          A powerful suite of products to launch, scale, and manage loyalty
          ecosystems — backed by AI and blockchain.
        </p>
        <button
          type="button"
          aria-label="Explore Playground"
          onClick={handlePlaygroundClick}
          onKeyDown={handlePlaygroundKeyDown}
          className="bg-white text-black text-sm font-medium pr-3.5 pl-5 py-2.5 rounded-full flex items-center justify-center gap-1.5 mx-auto group hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          tabIndex={0}
        >
          Explore Playground
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 border-l border-b border-[#1F1F1F]">
        {productsData.map((product) => (
          <ProductCard
            key={product.title}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            description={product.description}
            statistic={product.statistic}
            iconSrc={product.iconSrc}
            cardLinkAriaLabel={product.cardLinkAriaLabel}
          />
        ))}
      </div>
    </WhiteRectangleWrapper>
  );
};

export default ProductsSection;
