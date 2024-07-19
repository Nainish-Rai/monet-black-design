"use client";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, House, HouseIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuActive, setMenuActive] = useState(false);
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "What are we building",
      link: "#building",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tokenomics",
      link: "#tokenomics",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Community",
      link: "#community",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      newTab: true,
      link: "https://web3-points.stage.monet.work/",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      isDropdown: true,
      subMenu: [
        {
          name: "Web3 Points (Beta)",
          url: "https://web3-points.stage.monet.work/",
        },
      ],
    },
    {
      name: "Docs",
      newTab: true,
      link: "https://monet-work.github.io/web3-points/",
      icon: <HouseIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      isDropdown: true,
      subMenu: [
        {
          name: "Web3 Points",
          url: "https://monet-work.github.io/web3-points/",
        },
      ],
    },
  ];
  return (
    <nav className="w-full ">
      <div className="w-full bg-black/20 backdrop-blur items-center flex justify-between lg:justify-evenly border-b-white/10 border-b fixed z-50 py-3 top-0 px-10">
        <Link href={"/"}>
          <MonetWorkLogo className="w-28 " />
        </Link>
        <div
          className={cn(
            "hidden lg:flex max-w-fit top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4"
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              {...(navItem.newTab && { target: "_blank" })}
              className={
                "relative hidden dark:text-neutral-50 items-center lg:flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              }
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
              {/* {navItem.isDropdown && (
                <div className="absolute top-0  group-hover:flex text-slate-300 p-4 mt-2 space-y-2 min-w-[300px] flex-col gap-2 bg-black/90 rounded-md">
                  {navItem.subMenu.map((subLink: any) => (
                    <a
                      key={subLink.name}
                      href={subLink.url}
                      className="hover:text-[#ffd700]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )} */}
            </Link>
          ))}{" "}
          <Link href={"#community"}>
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span>Join Us</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </Link>
        </div>
        <Link target="_blank" href={"https://web3-points.stage.monet.work/"}>
          <Button
            variant={"outline"}
            className="hidden lg:flex  border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          >
            Launch App
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </Button>
        </Link>
        {!menuActive ? (
          <ChevronDownIcon
            onClick={() => setMenuActive(true)}
            className="lg:hidden"
          />
        ) : (
          <X onClick={() => setMenuActive(false)} className="lg:hidden" />
        )}
        {menuActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ scale: 1, height: 300 }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
              delay: 0,
              duration: 0.2,
            }}
            className="w-full absolute top-12 h-fit p-8 bg-black/90 rounded  backdrop-blur-md   left-0"
          >
            <div className="w-full flex flex-col gap-4">
              <ul className="w-full flex flex-col text-xl  gap-4 items-center">
                {navItems.map((navItem: any, idx: number) => (
                  <li
                    key={`link=${navItem}`}
                    onClick={() => {
                      setMenuActive(false);
                    }}
                    className=" cursor-pointer hover:text-red-400 themegrad  text-"
                  >
                    <Link href={navItem.link}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
