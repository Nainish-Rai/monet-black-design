import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { cn } from "@/lib/utils";
import { NavbarMenu } from "./navbar-menu";
import Image from "next/image";

type Props = {
  className?: string;
};

export function Navbar({ className }: Props) {
  return (
    <header
      className={cn("fixed top-0 z-50 w-full bg-transparent pt-8", className)}
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={"/"}>
          <MonetWorkLogo className="w-32 rounded-full bg-black/30 p-2" />
        </Link>
        <div className="flex items-center gap-4 bg-neutral-900 rounded-lg p-2 cursor-pointer group">
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
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
}
