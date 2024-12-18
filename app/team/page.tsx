"use client";
import { AdvisorCard } from "@/components/advisor-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TeamMemberCard } from "@/components/team-member-card";
import { advisors, teamMembers } from "@/constants/team";
import {
  textVariant,
  textVariantStagger,
  textVariantStaggerChild,
} from "@/lib/anims";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black"
    >
      <Navbar />
      <main className="container px-4 pt-32">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div className="mb-16 grid gap-8 md:grid-cols-2">
            <motion.h1
              variants={textVariant(0.2)}
              className="text-5xl lg:text-6xl font-medium text-white"
            >
              Our Team
            </motion.h1>
            <motion.p
              variants={textVariant(0.2)}
              className="text-2xl lg:text-4xl leading-[120%] text-[#C3C3C3]"
            >
              Our diverse team combines expertise in loyalty programs,
              blockchain technology, and AI to revolutionize rewards systems.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={textVariantStaggerChild()}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div className="mb-16 grid gap-8 md:grid-cols-2">
            <motion.h2
              variants={textVariant(0.2)}
              className="text-5xl lg:text-6xl  font-medium text-white"
            >
              Our Advisors
            </motion.h2>
            <motion.p
              variants={textVariant(0.2)}
              className="text-2xl lg:text-4xl leading-[120%] text-[#C3C3C3]"
            >
              The team has a cumulative experience of more than 50 years. More
              than 50 projects on AI and Blockchain executed.
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {advisors.map((advisor) => (
              <motion.div
                key={advisor.name}
                variants={textVariantStaggerChild(0.2, 0)}
              >
                <AdvisorCard advisor={advisor} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </motion.div>
  );
}
