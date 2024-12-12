import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { cn } from "@/lib/utils";
import { NavbarMenu } from "./navbar-menu";

type Props = {
  className?: string;
};

export function Navbar({ className }: Props) {
  return (
    <header className={cn("fixed top-0 z-50 w-full bg-transparent", className)}>
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href={"/"}>
          <MonetWorkLogo className="w-32 rounded-full bg-black/30  p-2   " />
        </Link>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
            LOYALTY
            <span className="ml-2 rounded-full bg-yellow-500 px-2 py-0.5 text-xs">
              PRO
            </span>
          </button>
          <NavbarMenu />
        </div>
      </div>
    </header>
  );
}
