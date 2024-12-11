"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const sections = [
  { title: "Introduction", href: "#introduction" },
  { title: "Capturing the Coffee", href: "#capturing-the-coffee" },
  { title: "Market Numbers", href: "#market-numbers" },
  { title: "How to make?", href: "#how-to-make" },
  { title: "Special Tip", href: "#special-tip" },
];

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-24 h-fit space-y-4 rounded-xl bg-neutral-950/50 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Table of Contents</h2>
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:hidden">
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <span className="text-sm text-neutral-400">Toggle sections</span>
          <ChevronDown
            className={`h-4 w-4 text-neutral-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="mt-2 flex flex-col space-y-2">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className={`text-sm transition-colors hover:text-yellow-400 ${
                  index === 0 ? "text-yellow-400" : "text-neutral-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <nav className="hidden lg:flex lg:flex-col lg:space-y-2">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className={`text-sm transition-colors hover:text-yellow-400 ${
              index === 0 ? "text-yellow-400" : "text-neutral-400"
            }`}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
