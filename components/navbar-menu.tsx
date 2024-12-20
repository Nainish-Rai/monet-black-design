"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowUpRight, X } from "lucide-react";
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
import { menuItems } from "@/config/menu-items";
import { MenuItem, SubMenuItem } from "@/types/menu";

const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    variant="ghost"
    size="icon"
    className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
    onClick={onClick}
  >
    <Menu className="h-6 w-6" />
    <span className="sr-only">Toggle menu</span>
  </Button>
);

const ProductSection = () => (
  <div className="flex flex-col gap-4 px-2 lg:px-0">
    <Card className="border-none">
      <CardContent className="h-auto rounded-2xl sm:border-none bg-[url('/images/background/loyalty-made-fluid-bg.webp')] lg:flex lg:items-center lg:justify-end lg:h-[280px] bg-cover bg-center p-3 sm:p-4 lg:p-8 lg:pr-32">
        {/* <div className="w-full bg-white lg:w-[50%] mb-4 lg:mb-0"></div> */}
        <div className="flex lg:w-[50%]  flex-col gap-4 ">
          <h3 className="text-xl lg:text-subheading-2">Loyalty Made Fluid</h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <Link href={"/features?active=customers"} className="w-full">
              <Button className="text-neutral-950 bg-[#FFDB1A] p-6 rounded-2xl  w-full">
                For Consumers
              </Button>
            </Link>
            <Link href={"/features?active=brands"} className="w-full">
              <Button className="bg-white  p-6 rounded-2xl text-neutral-950 w-full">
                For Business
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>

    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
      <Link href={"/roadmap"} className="w-full">
        <Card className="bg-[#1C1C1C] hover:bg-[#1C1C1C]/50 cursor-pointer duration-300 p-4 pt-8 rounded-2xl">
          <CardContent className="h-[80px] lg:h-[100px] flex items-end justify-between w-full p-4 lg:p-6">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h3 className="text-lg lg:text-[2rem]">Our Roadmap</h3>
            </div>

            <Image
              src={"/images/assets/Destination.svg"}
              alt=""
              width={64}
              height={64}
            />
          </CardContent>
        </Card>
      </Link>

      <Link href={"/careers"} className="w-full">
        <Card className="bg-[#1C1C1C] hover:bg-[#1C1C1C]/50 cursor-pointer duration-300 p-4 pt-8 rounded-2xl">
          <CardContent className="h-[100px] lg:h-[100px] flex items-end justify-between w-full p-4 lg:p-6">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h3 className="text-lg lg:text-[2rem]">Work with Us</h3>
            </div>

            <Image
              src={"/images/assets/Briefcase.svg"}
              alt=""
              className="-mb-2"
              width={64}
              height={64}
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  </div>
);

const SubMenuItems = ({
  items,
  onClose,
}: {
  items: SubMenuItem[];
  onClose: () => void;
}) => (
  <div className="px-2 lg:px-0">
    {items.map((subItem, j) => (
      <motion.div
        key={j}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: j * 0.1 }}
      >
        <Link
          href={subItem.href}
          className="group flex items-center justify-between"
          onClick={onClose}
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
        {j < items.length - 1 && (
          <hr className="my-6 lg:my-8 border-neutral-800" />
        )}
      </motion.div>
    ))}
  </div>
);

export function NavbarMenu() {
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string>("product");

  const activeItems = React.useMemo(
    () => menuItems.find((item) => item.name === activeMenu)?.items,
    [activeMenu],
  );

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuButton onClick={() => setOpen(true)} />
      </SheetTrigger>
      <SheetContent className="fixed inset-0 w-full border-0 bg-black min-w-full p-2 sm:p-4 font-neue [&>button]:hidden">
        <SheetTitle className="sr-only">Main menu</SheetTitle>

        {/* Header */}
        <div className="flex justify-between w-full items-center">
          <div className="flex h-14  items-center">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <MonetWorkLogo className="h-6 sm:h-8" />
            </Link>
          </div>
          <div className="pr-16">
            <motion.div
              className="h-6 w-6 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <X
                className="h-6 w-6 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="grid h-[calc(100vh-5.5rem)] grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start lg:items-center overflow-y-auto lg:overflow-hidden pt-4 lg:pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Navigation */}
          <nav className="flex flex-col gap-3 lg:gap-6 px-2 lg:px-16 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
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

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-2 lg:px-0 col-span-1 lg:col-span-2 lg:pr-16 overflow-y-auto h-[60vh] lg:h-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {activeMenu === "product" ? (
                <ProductSection />
              ) : (
                activeItems && (
                  <SubMenuItems
                    items={activeItems}
                    onClose={() => setOpen(false)}
                  />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
