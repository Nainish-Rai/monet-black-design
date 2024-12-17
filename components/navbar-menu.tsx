"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MonetWorkLogo } from "./monet-work-logo";
import { Card, CardContent } from "./ui/card";

interface MenuItem {
  title: string;
  name: string;
  items?: {
    title: string;
    href: string;
    description?: string;
    image?: string;
    cta?: {
      primary?: string;
      secondary?: string;
    };
  }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Our Product",
    name: "product",
    items: [
      {
        title: "Loyalty Made Fluid",
        href: "/product/loyalty",
        description: "For Consumers and Businesses",
        image: "/placeholder.svg?height=400&width=800",
        cta: {
          primary: "For Consumers",
          secondary: "For Business",
        },
      },
      {
        title: "Our Roadmap",
        href: "/roadmap",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Work with Us",
        href: "/careers",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  },
  {
    title: "Company",
    name: "company",
    items: [
      {
        title: "Our Vision",
        href: "/company/vision",
      },
      {
        title: "Meet the Team",
        href: "/team",
      },
      {
        title: "Backed By",
        href: "/company/investors",
      },
    ],
  },
  {
    title: "Careers",
    name: "careers",
    items: [
      {
        title: "Current Openings",
        href: "/careers",
      },
    ],
  },
  {
    title: "Use Cases",
    name: "case-studies",
    items: [
      {
        title: "Starbucks Rewards : Coffee & Beyond",
        href: "/case-studies/starbucks",
        description: "A timely nudge before they expire",
      },
      {
        title: "Zomato",
        href: "/case-studies/zomato",
      },
      {
        title: "Swiggy",
        href: "/case-studies/swiggy",
      },
    ],
  },
];

export function NavbarMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>("product");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="fixed inset-0 w-full border-0 bg-black min-w-full p-4 font-neue">
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <div className="flex h-14  items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <MonetWorkLogo className="h-6 sm:h-8" />
          </Link>
        </div>
        <motion.div
          className="grid h-[calc(100vh-5.5rem)] grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col gap-4 lg:gap-6 p-2 lg:px-16 overflow-y-auto">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                className="w-fit"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  className={`flex w-fit items-center gap-4 text-lg lg:text-subheading-1 transition-colors duration-200 cursor-pointer ${
                    activeMenu === item.name
                      ? "text-white hover:text-primary"
                      : "text-neutral-500 hover:text-primary"
                  }`}
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onClick={() => setActiveMenu(item.name)}
                >
                  {item.title}
                </button>
              </motion.div>
            ))}
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-2 lg:px-0 overflow-y-auto"
            >
              {activeMenu === "product" ? (
                <div className="flex flex-col gap-4 px-2 lg:px-0">
                  <Card>
                    <CardContent className="h-auto lg:h-[200px] flex flex-col lg:flex-row items-start lg:items-center p-4 lg:p-6">
                      <div className="w-full lg:w-40 mb-4 lg:mb-0"></div>
                      <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-xl lg:text-subheading-2">
                          Loyalty Made Fluid
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                          <Link
                            href={"/features?active=customers"}
                            className="w-full"
                          >
                            <Button className="text-neutral-950 w-full">
                              For Consumers
                            </Button>
                          </Link>
                          <Link
                            href={"/features?active=merchants"}
                            className="w-full"
                          >
                            <Button className="bg-white text-neutral-950 w-full">
                              For Business
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href={"/roadmap"} className="w-full">
                      <Card>
                        <CardContent className="h-[80px] lg:h-[100px] flex items-end w-full p-4 lg:p-6">
                          <div className="flex flex-col gap-2 lg:gap-4">
                            <h3 className="text-lg lg:text-xl">Our Roadmap</h3>
                          </div>
                          <div className="w-20"></div>
                        </CardContent>
                      </Card>
                    </Link>

                    <Link href={"/careers"} className="w-full">
                      <Card>
                        <CardContent className="h-[80px] lg:h-[100px] flex items-end w-full p-4 lg:p-6">
                          <div className="flex flex-col gap-2 lg:gap-4">
                            <h3 className="text-lg lg:text-xl">Work with Us</h3>
                          </div>
                          <div className="w-20"></div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="px-2 lg:px-0">
                  {menuItems
                    .find((item) => item.name === activeMenu)
                    ?.items?.map((subItem, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        <Link
                          href={subItem.href}
                          className="group flex items-center justify-between"
                          onClick={() => setOpen(false)}
                        >
                          <div className="space-y-1">
                            <span className="text-lg lg:text-subheading-2 text-white">
                              {subItem.title}
                            </span>
                            {subItem.description && (
                              <p className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">
                                {subItem.description}
                              </p>
                            )}
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
                        </Link>
                        {j <
                          (menuItems.find((item) => item.name === activeMenu)
                            ?.items?.length || 0) -
                            1 && (
                          <hr className="my-6 lg:my-8 border-neutral-800" />
                        )}
                      </motion.div>
                    ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
