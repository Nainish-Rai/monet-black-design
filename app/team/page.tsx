"use client";
import { AdvisorCard } from "@/components/advisor-card";
import { Footer } from "@/components/footer";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
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
      className="min-h-screen bg-black mb-32  pt-32"
    >
      <WhiteRectangleWrapper className="px-0  pb-0">
        <main className="container pt-8 px-0 ">
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div className="mb-16 w-full px-0 items-center mx-auto flex flex-col text-center">
              <motion.h1 variants={textVariant(0.2)} className="heading">
                Our Team
              </motion.h1>
              <motion.p
                variants={textVariant(0.2)}
                className="subheading mt-4 w-full max-w-5xl text-center"
              >
                Our diverse team combines expertise in loyalty programs,
                blockchain technology, and AI to revolutionize rewards systems.
              </motion.p>
            </motion.div>
            <WhiteRectangleWrapper className="px-0 py-0">
              <motion.div
                variants={containerVariants}
                className="grid  sm:grid-cols-2 lg:grid-cols-4"
              >
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={textVariantStaggerChild()}
                  >
                    {" "}
                    <WhiteRectangleWrapper className="w-full h-full p-6">
                      <TeamMemberCard member={member} />
                    </WhiteRectangleWrapper>
                  </motion.div>
                ))}
              </motion.div>
            </WhiteRectangleWrapper>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            id="investors"
            className="mb-0"
          >
            <motion.div className="mb-16 w-full items-center mx-auto flex flex-col text-center">
              <motion.h1 variants={textVariant(0.2)} className="heading">
                Our Advisors
              </motion.h1>
              <motion.p
                variants={textVariant(0.2)}
                className="subheading mt-4 w-full max-w-5xl text-center"
              >
                The team has a cumulative experience of more than 50 years. More
                than 20 projects on AI and Blockchain executed.
              </motion.p>
            </motion.div>
            <WhiteRectangleWrapper className="px-0 py-0">
              <motion.div
                variants={containerVariants}
                className="grid sm:grid-cols-2 lg:grid-cols-4"
              >
                {advisors.map((advisor) => (
                  <motion.div
                    key={advisor.name}
                    variants={textVariantStaggerChild(0.2, 0)}
                  >
                    <WhiteRectangleWrapper className="w-full h-full p-6">
                      <AdvisorCard advisor={advisor} />
                    </WhiteRectangleWrapper>
                  </motion.div>
                ))}
              </motion.div>
            </WhiteRectangleWrapper>
          </motion.section>
        </main>
      </WhiteRectangleWrapper>
    </motion.div>
  );
}
