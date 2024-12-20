import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { cn } from "@/lib/utils";
import { NavbarMenu } from "./navbar-menu";
import Image from "next/image";
import LoyaltyPopup from "./loyalty-popup";
import FeatureSwitcher from "./feature-switcher";

type Props = {
  className?: string;
};

export function Navbar({ className }: Props) {
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-transparent pt-4 lg:pt-8",
        className,
      )}
    >
      <div className="container flex h-16 items-center max-sm:gap-1 justify-between px-4">
        <div className="flex flex-col lg:flex-row lg:gap-8  lg:items-center">
          <Link href={"/"}>
            <MonetWorkLogo className="w-32 max-sm:-mt-16  rounded-full bg-black/30 p-2" />
          </Link>
          <FeatureSwitcher />
        </div>
        <div className="flex items-center gap-4 bg-[#1C1C1C] rounded-2xl p-2 cursor-pointer group">
          <LoyaltyPopup />

          <NavbarMenu />
        </div>
      </div>
    </header>
  );
}
