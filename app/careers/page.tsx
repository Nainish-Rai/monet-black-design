"use client";
import { Footer } from "@/components/footer";
import { JobCard } from "@/components/job-card";
import WhiteRectangleWrapper from "@/components/landing-page/WhiteRectangleWrapper";
import { textVariant } from "@/lib/anims";
import { motion } from "framer-motion";
import Image from "next/image";

const jobs = [
  {
    title: "Full Stack Software Developer",
    experience: "3+ years of experience",
    location: "Remote",
    href: "careers/full-stack-software-developer",
  },
  {
    title: "Investor Relations Manager",
    experience: "3-5+ years of experience",
    location: "Remote",
    href: "careers/investor-relations-manager",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black bg-cover bg-center  bg-no-repeat pt-32 pb-32"
    >
      <WhiteRectangleWrapper className="px-0 pb-0 lg:px-0 lg:py-0 lg:pt-12">
        <div className="container mx-auto px-0 mt-4 pb-0">
          <div className="relative ">
            <div className="w-full">
              <motion.h1
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                className="heading  text-center text-balance"
              >
                Join Our Team to Shape the <br /> Future of Loyalty
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="overflow-hidden ">
              <Image
                src="/images/team/monet-team.png"
                alt="Monet Team"
                width={1200}
                height={1200}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="mt-12 lg:mt-24"
          >
            <motion.h2 variants={itemVariants} className="heading text-center">
              Current Openings
            </motion.h2>
            <motion.div
              variants={containerVariants}
              className="mt-8 grid  sm:grid-cols-2"
            >
              {jobs.map((job, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <JobCard
                    title={job.title}
                    experience={job.experience}
                    location={job.location}
                    href={job.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </WhiteRectangleWrapper>
    </motion.div>
  );
}
