"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight } from "lucide-react";
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
  href: string;
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
    href: "/product",
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
    href: "/company",
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
    href: "/careers",
    items: [
      {
        title: "Current Openings",
        href: "/careers",
      },
    ],
  },
  {
    title: "Use Cases",
    href: "/use-cases",
    items: [
      {
        title: "Starbucks Rewards : Coffee & Beyond",
        href: "/use-cases/starbucks",
        description: "A timely nudge before they expire",
      },
      {
        title: "Zomato",
        href: "/use-cases/zomato",
      },
      {
        title: "Swiggy",
        href: "/use-cases/swiggy",
      },
    ],
  },
];

export function NavbarMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>("/product");

  const handleMenuClick = (href: string) => {
    setActiveMenu(href);
  };

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
      <SheetContent className="fixed inset-0 w-full border-0 bg-black overflow-x-hidden min-w-full p-4 font-neue">
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <div className="flex h-14 items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <MonetWorkLogo className="h-8" />
          </Link>
        </div>
        <div className="grid h-[calc(100vh-3.5rem)] grid-cols-1 items-center overflow-auto lg:grid-cols-2">
          <nav className="flex flex-col gap-8 p-6">
            {menuItems.map((item, i) => (
              <div key={i}>
                {/* add hover style and active style */}
                <button
                  className={`flex items-center gap-4 text-2xl ${
                    activeMenu === item.href
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                  onClick={() => handleMenuClick(item.href)}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </nav>
          {activeMenu === "/product" ? (
            <div className="flex flex-col gap-4">
              <Card>
                <CardContent className="h-[200px] flex items-center">
                  <div className="w-40"></div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl">Loyalty Made Fluid</h3>

                    <div className="flex gap-4">
                      <Button>For Consumers</Button>
                      <Button>For Business</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Link href={"/roadmap"} className="w-full">
                  <Card>
                    <CardContent className="h-[100px] flex items-end w-full">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Our Roadmap</h3>
                      </div>
                      <div className="w-20"></div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href={"/careers"} className="w-full">
                  <Card>
                    <CardContent className="h-[100px] flex items-end w-full">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Work with Us</h3>
                      </div>
                      <div className="w-20"></div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {menuItems
                .find((item) => item.href === activeMenu)
                ?.items?.map((subItem, j) => (
                  <div key={j}>
                    <Link
                      href={subItem.href}
                      className="group flex items-center justify-between"
                      onClick={() => setOpen(false)}
                    >
                      <div className="space-y-1">
                        <span className="text-2xl text-white">
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
                      (menuItems.find((item) => item.href === activeMenu)?.items
                        ?.length || 0) -
                        1 && <hr className="my-4 border-neutral-800" />}
                  </div>
                ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
