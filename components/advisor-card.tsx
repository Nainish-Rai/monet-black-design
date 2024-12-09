import Image from "next/image";
import type { Advisor } from "@/types/team";

interface AdvisorCardProps {
  advisor: Advisor;
}

export function AdvisorCard({ advisor }: AdvisorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900">
      <div className="aspect-square">
        <Image
          src={advisor.image}
          alt={advisor.name}
          width={400}
          height={400}
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="absolute bottom-0 w-full p-4">
        <h3 className="font-medium text-white">{advisor.name}</h3>
        <p className="text-sm text-yellow-500">{advisor.role}</p>
        {advisor.description && (
          <p className="mt-1 text-xs text-gray-400">{advisor.description}</p>
        )}
      </div>
    </div>
  );
}
