import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {};

function FaqSection({}: Props) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex  items-center">
        <h3 className="max-sm:text-4xl">FAQs</h3>
        <ChevronDown />
      </div>
    </div>
  );
}

export default FaqSection;
