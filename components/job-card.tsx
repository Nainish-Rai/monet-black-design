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
      className="group relative flex flex-col justify-between rounded-xl bg-neutral-800 p-6 backdrop-blur-sm transition-all hover:bg-neutral-900/50"
    >
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-neutral-400">
          {experience} | {location}
        </p>
      </div>
      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-neutral-600 transition-colors group-hover:text-yellow-400" />
    </Link>
  );
}
