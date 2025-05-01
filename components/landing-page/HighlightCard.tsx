import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export type HighlightCardProps = {
  title: string;
  articleUrl?: string;
  logo?: string;
};

function HighlightCard({ title, articleUrl, logo }: HighlightCardProps) {
  return (
    <div className="p-6 w-full h-full bg-black/20 border border-neutral-800 flex flex-col overflow-hidden  hover:border-neutral-700 transition-all duration-300">
      {/* Card with fixed structure for consistent alignment */}
      <div className="flex flex-col h-full justify-between">
        {/* Top section with logo - centered */}
        <div className="flex-1 flex items-center justify-center mb-8">
          {logo ? (
            <div className="relative h-16 w-40">
              <Image src={logo} alt={title} fill className="object-contain" />
            </div>
          ) : (
            <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center">
              <span className="text-2xl font-bold text-white/80">M</span>
            </div>
          )}
        </div>

        {/* Bottom section with title and link */}
        <div>
          {/* Title */}
          <h3 className="text-lg font-medium leading-tight mb-4 line-clamp-2">
            {title}
          </h3>

          {/* Read More link */}
          {articleUrl && (
            <Link
              href={articleUrl}
              className="flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Read More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
