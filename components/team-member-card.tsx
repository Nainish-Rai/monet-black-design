import Image from "next/image";
import type { TeamMember } from "@/types/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group ">
      <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-900">
        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={400}
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="w-full p-4">
        <h3 className="font-medium text-white">{member.name}</h3>
        <p className="text-sm text-yellow-500">{member.role}</p>
      </div>
    </div>
  );
}
