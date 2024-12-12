import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  text: string;
  link?: string;
  gradient: string;
};

function GridArticleComponent({ image, text, link, gradient }: Props) {
  return (
    <div
      className={` p-6  w-full h-full bg-gradient-to-tl ${gradient == "purple" ? " from-[#AF41E2]/70 via-[#AF41E2]/30 to-[#252525]" : " from-[#FBC926]/70 via-[#FBC926]/30 to-[#252525]"} flex justify-between flex-col`}
    >
      <Image src={image} alt={text} width={250} height={40} />
      <div>
        <p className="text-[1.5rem] max-w-xs leading-[120%]">{text}</p>
        <p className="flex mt-6 text-[1rem] cursor-pointer hover:opacity-70 duration-200 transition-all font-medium gap-2 items-center">
          View Full Article <ArrowUpRight className="h-5 w-5" />
        </p>
      </div>
    </div>
  );
}

export default GridArticleComponent;
