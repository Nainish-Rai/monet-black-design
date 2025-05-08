import Image from "next/image";
import type { Advisor } from "@/types/team";

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <div className="group cursor-crosshair ">
      <div className="aspect-square overflow-hidden  bg-white">
        <Image
          src={advisor.image}
          alt={advisor.name}
          width={600}
          height={600}
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="font-medium text-[2rem] text-white">{advisor.name}</h3>
        <p className="text-base text-gray-200">{advisor.role}</p>
      </div>
    </div>
  );
}
