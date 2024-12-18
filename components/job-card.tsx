import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface JobCardProps {
  title: string;
  experience: string;
  location: string;
  href: string;
}

export function JobCard({ title, experience, location, href }: JobCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#1C1C1C] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-neutral-900/50"
    >
      <div className="space-y-2">
        <h3 className="text-3xl font-medium text-white">{title}</h3>
        <p className="text-lg text-neutral-400">
          {experience} | {location}
        </p>
      </div>
      <ArrowUpRight className="absolute right-6 top-6 h-8 w-8 text-white  group-hover:text-yellow-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
    </Link>
  );
}
