"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  href: string;
  description?: string;
  items?: {
    title: string;
    href: string;
    description?: string;
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
      },
      {
        title: "Our Roadmap",
        href: "/product/roadmap",
      },
      {
        title: "Work with Us",
        href: "/product/work-with-us",
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
        href: "/company/team",
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
        href: "/careers/openings",
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black pl-1 pr-0">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <span className="font-bold text-yellow-400">monet</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 text-lg text-neutral-400">
          {menuItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 px-7 py-4">
              <Link
                href={item.href}
                className="text-2xl font-medium transition-colors hover:text-neutral-50"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
              {item.items?.map((subItem, j) => (
                <Link
                  key={j}
                  href={subItem.href}
                  className="group flex flex-col gap-1 transition-colors hover:text-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  <span>{subItem.title}</span>
                  {subItem.description && (
                    <span className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-400">
                      {subItem.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <Button
          variant="ghost"
          className="absolute right-4 top-4 px-0 text-neutral-400 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close menu</span>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
