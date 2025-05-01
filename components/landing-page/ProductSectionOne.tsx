import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductSectionProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  imageAlt?: string;
  flexDirection?: "row" | "col";
}

const ProductBadge = ({ text = "Loyalty Studio" }: { text?: string }) => (
  <div className="flex gap-3 items-center">
    <div className="bg-[#E5E5E5] w-4 h-2 rounded-full"></div>
    <p className="text-[#E5E5E5] text-base font-medium">{text}</p>
  </div>
);

const ProductTitle = ({
  title = "Design your loyalty program, no code required",
}: {
  title?: string;
}) => (
  <h2 className="text-[#E5E5E5] text-4xl md:text-5xl font-semibold leading-[120%] mb-4 max-w-3xl">
    {title}
  </h2>
);

const ProductDescription = ({
  description = "From rule-setting to analytics, launch and manage your loyalty program in one place. Tailored for business teams who want control without dev dependency.",
}: {
  description?: string;
}) => (
  <p className="text-[#A3A3A3] text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
    {description}
  </p>
);

const ProductButton = ({
  text = "Launch with Loyalty Studio",
}: {
  text?: string;
}) => (
  <Button className="bg-white text-black hover:bg-gray-100 font-medium text-sm py-3 px-6 rounded-full transition-colors">
    {text}
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
);

const ProductImagePlaceholder = ({
  alt = "Product preview",
}: {
  alt?: string;
}) => (
  <Card className="bg-[#1F1F1F] rounded-2xl w-full h-[400px] md:h-[500px] flex items-center justify-center">
    <div className="text-center p-6">
      <p className="text-white text-lg">Product Preview</p>
      <p className="text-gray-400 text-sm mt-2">
        Image placeholder for blockchain-powered loyalty studio product
      </p>
    </div>
  </Card>
);

function ProductSectionOne({
  badgeText,
  title,
  description,
  buttonText,
  imageAlt,
  flexDirection = "row",
}: ProductSectionProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className={`flex ${flexDirection === "row" ? "flex-row" : "flex-col"} items-center gap-12`}
        >
          {/* Text Content Section */}
          <div className="md:w-1/2 space-y-6">
            <ProductBadge text={badgeText} />
            <ProductTitle title={title} />
            <ProductDescription description={description} />
            <ProductButton text={buttonText} />
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <ProductImagePlaceholder alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSectionOne;
