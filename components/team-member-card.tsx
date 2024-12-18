import Image from "next/image";
import type { TeamMember } from "@/types/team";
import { motion } from "framer-motion";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      className="group cursor-crosshair"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-900">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={600}
            height={600}
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
      <motion.div
        className="w-full p-4"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="font-medium text-[2rem] text-white">{member.name}</h3>
        <p className="text-lg text-yellow-500">{member.role}</p>
      </motion.div>
    </motion.div>
  );
}
