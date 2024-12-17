"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Section {
  id: string;
  title: string;
}

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Get all h2 elements from the page
    const headings = Array.from(document.querySelectorAll("h2")).map(
      (heading) => ({
        id:
          heading.id ||
          heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
          "",
        title: heading.textContent || "",
      }),
    );
    setSections(headings);

    // Set up intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      },
    );

    // Observe all section headings
    document.querySelectorAll("h2").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-24 justify-self-end w-full lg:w-fit z-10 h-fit space-y-4 rounded-xl bg-[#1C1C1C] p-4 lg:p-8 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg leading-[120%] lg:text-[2rem] text-white">
          Table of Contents
        </h2>
      </div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="lg:hidden">
        <CollapsibleTrigger className="flex w-full items-center justify-between">
          <span className="text-lg text-neutral-400">Toggle sections</span>
          <ChevronDown
            className={`h-4 w-4 text-neutral-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="mt-2 flex flex-col space-y-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={`text-2xl transition-colors hover:text-yellow-400 ${
                  activeSection === section.id
                    ? "text-yellow-400"
                    : "text-neutral-400"
                }`}
                onClick={(e) => handleClick(e, section.id)}
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </CollapsibleContent>
      </Collapsible>
      <nav className="hidden lg:flex lg:flex-col lg:space-y-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`text-lg transition-colors hover:text-yellow-400 ${
              activeSection === section.id
                ? "text-yellow-400"
                : "text-neutral-400"
            }`}
            onClick={(e) => handleClick(e, section.id)}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
