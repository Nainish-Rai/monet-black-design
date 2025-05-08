import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  statistic: string;
  iconSrc: string;
  cardLinkAriaLabel: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  statistic,
  iconSrc,
  cardLinkAriaLabel,
}) => {
  const handleLinkClick = () => {
    // Placeholder for navigation or action
    console.log("Card link clicked for:", title);
  };

  const handleLinkKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleLinkClick();
    }
  };

  return (
    <div className="flex flex-col border-t border-r border-[#1F1F1F] bg-black">
      <div className="w-full p-2 mt-8">
        <div className="w-full  h-48 relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="opacity-75 " // Image as a background pattern/illustration
          />
        </div>
      </div>
      <div className="p-6 flex  flex-col flex-grow">
        <h3 className="text-xl font-medium text-neutral-50 mb-2">{title}</h3>
        <p className="text-base text-neutral-400 mb-6 flex-grow">
          {description}
        </p>
        <button className="border rounded-full w-fit p-2 bg-[#0A0A0A]">
          <ArrowUpRight />
        </button>
      </div>
      <div className="flex p-12 min-h-36 items-center  border-t border justify-between mt-auto ">
        <p className="text-xl font-bold text-neutral-50 leading-tight">
          {statistic.split("\\n").map((line, index, arr) => (
            <React.Fragment key={index}>
              {line}
              {index < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
