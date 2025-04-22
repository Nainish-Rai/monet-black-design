import { ArrowUpRight, CalendarCheck, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export type HighlightCardProps = {
  title: string;
  date?: string;
  place?: string;
  description?: string;
  image?: string;
  articleUrl?: string;
  logo?: string;
  gradient?: "blue" | "purple" | "yellow" | "green" | "red";
};

function HighlightCard({
  title,
  date,
  place,
  description,
  image,
  articleUrl,
  logo,
  gradient = "blue",
}: HighlightCardProps) {
  // Define gradient colors based on the gradient prop
  const gradientStyles = {
    blue: "from-[#031BCC80]/60 via-[#000FC740]/30 to-[#252525]",
    purple: "from-[#AF41E2]/70 via-[#AF41E2]/30 to-[#252525]",
    yellow: "from-[#FBC926]/70 via-[#FBC926]/30 to-[#252525]",
    green: "from-[#00C853]/70 via-[#00C853]/30 to-[#252525]",
    red: "from-[#FF5252]/70 via-[#FF5252]/30 to-[#252525]",
  };

  return (
    <div
      className={`p-6 w-full h-full bg-gradient-to-tl ${gradientStyles[gradient]} flex flex-col overflow-hidden backdrop-blur-sm`}
    >
      {/* Card with fixed structure for consistent alignment */}
      <div className="flex flex-col h-full">
        {/* Top section with logo - fixed height */}
        <div className="h-14 flex items-start">
          {logo ? (
            <div className="relative h-10 w-40 bg-black/20 p-2 rounded-md backdrop-blur-sm">
              <Image
                src={logo}
                alt="Publisher logo"
                fill
                className="object-contain object-left"
              />
            </div>
          ) : (
            <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-white/80" />
            </div>
          )}
        </div>

        {/* Middle section with title and date/place - flexible height but with constraints */}
        <div className="flex-1 flex flex-col min-h-0 mb-4">
          <h3 className="text-2xl font-medium leading-tight mb-3 line-clamp-2">{title}</h3>

          {(date || place) && (
            <div className="flex items-center gap-3 text-sm font-medium mb-3 bg-black/20 inline-flex py-1 px-2 rounded-full">
              {date && (
                <span className="flex items-center gap-1 text-[#FCD400]">
                  <CalendarCheck className="h-4 w-4" /> {date}
                </span>
              )}
              {place && (
                <span className="flex items-center gap-1 text-[#FCD400]">
                  <MapPin className="h-4 w-4" /> {place}
                </span>
              )}
            </div>
          )}

          {/* Description with fixed line clamp */}
          <div className="flex-1 min-h-0 overflow-hidden">
            {description ? (
              <p className="text-base text-neutral-200 leading-relaxed line-clamp-2 opacity-80">
                {description}
              </p>
            ) : (
              <div className="h-12"></div>
            )}
          </div>
        </div>

        {/* Bottom section with fixed height for consistent alignment */}
        <div className="h-[120px] mt-auto">
          {/* Image section with fixed height */}
          {image ? (
            <div className="relative h-[80px] w-full mb-4 rounded-lg overflow-hidden ring-1 ring-white/10">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ) : (
            <div className="h-[80px] w-full mb-4 bg-gradient-to-r from-black/40 to-black/10 rounded-lg"></div>
          )}

          {/* Link section with fixed position */}
          <div className="h-9 flex items-center">
            {articleUrl ? (
              <Link
                href={articleUrl}
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#FCD400] transition-colors duration-300 bg-black/20 py-2 px-3 rounded-md backdrop-blur-sm hover:bg-black/30 w-full justify-center"
              >
                View Full Article <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <div className="h-9"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
