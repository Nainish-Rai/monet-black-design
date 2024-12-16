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
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { MonetWorkLogo } from "./monet-work-logo";

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
        className="h-screen w-screen border-none bg-gradient-to-br from-black to-zinc-900"
      >
        <div className="mx-auto h-full max-w-7xl">
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

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
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
                <SheetTitle className="text-5xl font-bold text-white">
                  Loyalty
                  <br />
                  Made Fluid
                </SheetTitle>
                <a
                  href="https://loyalty.monet.work"
                  target="_"
                  className="text-primary"
                >
                  <Button className="bg-primary text-black hover:bg-yellow-500">
                    Start Exploring
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6">
                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">
                      Points Dashboard
                    </h3>
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full bg-yellow-400" />
                      <span className="text-xl font-bold text-white">
                        3,821
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700"
                    >
                      Overview
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-zinc-400 hover:text-white"
                    >
                      Transactions
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-zinc-400 hover:text-white"
                    >
                      Points Tracker
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-red-500" />
                        <span className="text-sm text-white">{`McDonald's`}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="text-sm font-medium text-white">
                          1,242
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700"
                      >
                        Exchange
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700"
                      >
                        Redeem
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-red-600" />
                        <span className="text-sm text-white">H&M</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="text-sm font-medium text-white">
                          152
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
