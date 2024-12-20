"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ArrowRight, ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { MonetWorkLogo } from "./monet-work-logo";
import ButtonWithIcon from "./ui/button-with-icon";

export default function LoyaltyPopup() {
  return (
    <Sheet>
      <SheetTrigger className="rounded-2xl overflow-hidden relative" asChild>
        <div className="flex items-center gap-2 bg-black rounded-2xl p-2 sm:p-4 group duration-300 group-hover:bg-neutral-800">
          <span className="font-neue text-sm sm:text-xl font-semibold group-hover:text-primary">
            LOYALTY
          </span>
          <Image
            src={"/images/assets/loyalty-coins.svg"}
            width={8}
            height={8}
            className="h-6 w-6 sm:h-8 sm:w-10 pb-0.5"
            alt="loyalty-coins-image"
          />
          <div className="absolute bottom-2 left-24 pl-0.5 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 w-full translate-y-1 text-xs text-gray-400">
            Click to Expand
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        hideCloseButton
        side="top"
        className="h-screen w-screen border-none bg-loyalty-background bg-cover bg-right bg-no-repeat px-4 sm:px-6"
      >
        <div className="mx-auto h-full max-w-7xl">
          <SheetHeader className="relative">
            <div className="absolute right-0 top-0">
              <SheetClose className="rounded-full p-1 sm:p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </SheetClose>
            </div>
            <div className="flex items-center gap-2 py-4 sm:py-6">
              <MonetWorkLogo className="w-24 sm:w-32" />
            </div>
          </SheetHeader>

          <div className="grid gap-8 sm:gap-16 lg:grid-cols-2 lg:items-center my-8 sm:my-16">
            <div className="space-y-4 sm:space-y-8">
              <div className="relative">
                <Image
                  src="/images/assets/loyalty-coins.svg"
                  alt="Coins Illustration"
                  width={300}
                  height={300}
                  className="w-24 sm:w-32"
                />
              </div>
              <div className="space-y-4">
                <SheetTitle></SheetTitle>
                <h2 className="text-2xl sm:text-heading-2 text-white">
                  Loyalty
                  <br />
                  Made Fluid
                </h2>
                <ButtonWithIcon
                  className="max-w-sm py-4 sm:py-6 font-medium w-full text-sm sm:text-md mt-4 sm:mt-[2.5rem] lg:text-lg"
                  icon={<ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />}
                >
                  Start Exploring
                </ButtonWithIcon>
              </div>
            </div>

            <div className="relative"></div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
