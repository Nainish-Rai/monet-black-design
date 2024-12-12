"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MonetWorkLogo } from "./monet-work-logo";

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
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const handleMenuHover = (title: string) => {
    setActiveMenu(title);
  };

  const handleMenuClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setActiveMenu(activeMenu === href ? null : href);
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
      <SheetContent
        side="left"
        className="fixed inset-0 w-full border-0 bg-black min-w-full"
      >
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <MonetWorkLogo className="h-8" />
          </Link>
          {/* <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
            onClick={() => setOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close menu</span>
          </Button> */}
        </div>
        <div className="grid h-[calc(100vh-3.5rem)] grid-cols-1 overflow-auto lg:grid-cols-2 items-center">
          <nav className="flex flex-col gap-4 p-6">
            {menuItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <button
                  className={`text-left text-[2.5rem] font-medium leading-none ${
                    activeMenu === item.href ? "text-white" : "text-neutral-600"
                  } transition-colors hover:text-white`}
                  onMouseEnter={() => handleMenuHover(item.href)}
                  onClick={(e) => handleMenuClick(e, item.href)}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </nav>
          <div className="hidden p-6 lg:block">
            {activeMenu && (
              <div className="space-y-8">
                {activeMenu === "/product" ? (
                  <div className="grid gap-6">
                    {menuItems
                      .find((item) => item.href === activeMenu)
                      ?.items?.map((subItem, j) => (
                        <div
                          key={j}
                          className={`${j === 0 ? "col-span-2" : "col-span-1"}`}
                        >
                          <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 via-black to-blue-950">
                            <div className="flex flex-col gap-4 p-6">
                              <Image
                                src={
                                  subItem.image ||
                                  "/placeholder.svg?height=200&width=400"
                                }
                                alt={subItem.title}
                                width={j === 0 ? 600 : 400}
                                height={200}
                                className="rounded-xl"
                              />
                              <h3 className="text-3xl font-medium text-white">
                                {subItem.title}
                              </h3>
                              {subItem.description && (
                                <p className="text-neutral-400">
                                  {subItem.description}
                                </p>
                              )}
                              {subItem.cta && (
                                <div className="flex gap-3">
                                  <Button className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
                                    {subItem.cta.primary}
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                                  >
                                    {subItem.cta.secondary}
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  menuItems
                    .find((item) => item.href === activeMenu)
                    ?.items?.map((subItem, j) => (
                      <div key={j}>
                        {subItem.image ? (
                          <div className="rounded-2xl bg-gradient-to-br from-yellow-500/20 via-black to-blue-950">
                            <div className="flex flex-col gap-4 p-6">
                              <Image
                                src={subItem.image}
                                alt={subItem.title}
                                width={600}
                                height={200}
                                className="rounded-xl"
                              />
                              <h3 className="text-3xl font-medium text-white">
                                {subItem.title}
                              </h3>
                              {subItem.description && (
                                <p className="text-neutral-400">
                                  {subItem.description}
                                </p>
                              )}
                              {subItem.cta && (
                                <div className="flex gap-3">
                                  <Button className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500">
                                    {subItem.cta.primary}
                                  </Button>
                                  <Button
                                    variant="outline"
                                    className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10"
                                  >
                                    {subItem.cta.secondary}
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
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
                        )}
                        {activeMenu !== "/product" &&
                          j <
                            (menuItems.find((item) => item.href === activeMenu)
                              ?.items?.length || 0) -
                              1 && <hr className="my-4 border-neutral-800" />}
                      </div>
                    ))
                )}
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
