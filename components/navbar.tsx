"use client";

import * as React from "react";
import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { cn } from "@/lib/utils";
import { NavbarMenu } from "./navbar-menu";
import Image from "next/image";
import LoyaltyPopup from "./loyalty-popup";
import FeatureSwitcher from "./feature-switcher";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { menuItems } from "@/config/menu-items";
import { MenuItem, SubMenuItem } from "@/types/menu";

import { Book, ChevronDown, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
  };
  className?: string;
}

export const Navbar = ({
  menu = menuItems, // Use the imported menuItems as default
  auth = {
    login: { title: "Launch Playground", url: "#" },
  },
  className,
}: Navbar1Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.header
      className={cn("fixed top-0 z-50 w-full bg-transparent p-6", className)}
      animate={{
        padding: isScrolled ? "0.5rem" : "1.5rem",
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.4)" : "transparent",
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between items-center lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={"/"}>
              <MonetWorkLogo className="w-40 rounded-full p-2 pr-3" />
            </Link>
          </div>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex relative gap-2">
            <Badge className="absolute -bottom-3 text-gray-100 border border-red-500 right-[30%] bg-red-500/100 hover:bg-red-500 text-[0.5rem]">
              Coming Soon
            </Badge>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full px-6"
            >
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={"/"}>
              <MonetWorkLogo className="w-24 h-12" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <ChevronDown className="size-4" />
              </SheetTrigger>
              <SheetContent side={"top"} className="overflow-y-auto">
                <SheetHeader>
                  <MonetWorkLogo className="w-24 h-12" />
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col relative gap-3">
                    <Badge className="absolute -bottom-3 text-gray-100 border border-red-500 right-[36%] bg-red-500/100 hover:bg-red-500 text-[0.5rem]">
                      Coming Soon
                    </Badge>
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent rounded-full">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="">
          <ul className="grid w-[400px] bg-black/50! sm:rounded-lg gap-3 p-4 md:w-[500px] lg:w-[600px] md:grid-cols-2">
            {item.items.map((subItem) => (
              <ListItem
                icon={subItem.icon ? subItem.icon : null}
                key={subItem.title}
                title={subItem.title}
                href={subItem.href}
              >
                {subItem.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link href={`/${item.name}`} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-lg py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={`/${item.name}`}
      className="text-md font-semibold"
    >
      {item.title}
    </a>
  );
};

// Replace SubMenuLink with ListItem
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ReactNode;
    title: string;
  }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex gap-4 select-none rounded-md  items-center p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {icon && <div className="text-foreground">{icon}</div>}
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-xs pt-1 leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Update the SubMenuLink for mobile menu compatibility with the menu items structure
const SubMenuLink = ({ item }: { item: SubMenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.href}
    >
      {item.icon && <div className="text-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};
