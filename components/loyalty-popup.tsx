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
      <SheetTrigger asChild>
        <div className="flex items-center gap-2 bg-black rounded-lg p-4 group group-hover:bg-neutral-800">
          <span className="font-neue text-body-1 font-bold group-hover:text-primary">
            LOYALTY
          </span>
          <Image
            src={"/images/assets/loyalty-coins.svg"}
            width={8}
            height={8}
            className="h-8 w-8"
            alt="loyalty-coins-image"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        hideCloseButton
        side="top"
        className="h-screen w-screen border-none bg-loyalty-background bg-cover bg-right bg-no-repeat"
      >
        <div className="mx-auto h-full max-w-7xl ">
          <SheetHeader className="relative">
            <div className="absolute right-0 top-0">
              <SheetClose className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
                <X className="h-6 w-6" />
              </SheetClose>
            </div>
            <div className="flex items-center gap-2 py-6">
              <MonetWorkLogo className="w-32" />
            </div>
          </SheetHeader>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center my-16">
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/images/assets/loyalty-coins.svg"
                  alt="Coins Illustration"
                  width={300}
                  height={300}
                  className="w-32"
                />
              </div>
              <div className="space-y-4">
                <SheetTitle></SheetTitle>
                <h2 className="text-heading-2 text-white">
                  Loyalty
                  <br />
                  Made Fluid
                </h2>
                <ButtonWithIcon
                  className="max-w-sm py-6 font-medium w-full text-md mt-[2.5rem] lg:text-lg"
                  icon={<ArrowUpRight className="h-6 w-6" />}
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
