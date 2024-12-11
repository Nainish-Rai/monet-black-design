import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";
import { cn } from "@/lib/utils";

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
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
