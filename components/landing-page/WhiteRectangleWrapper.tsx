import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function WhiteRectangleWrapper({ children, className }: Props) {
  return (
    <div
      className={cn(
        `border mx-auto border-[#1F1F1F] w-full lg:max-w-7xl py-6 lg:py-[2.5rem] px-4 lg:px-[5.9rem]` +
          (className ? ` ${className}` : "")
      )}
    >
      {children}
    </div>
  );
}

export default WhiteRectangleWrapper;
