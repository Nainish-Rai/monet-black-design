"use client";
import { Footer } from "@/components/footer";
import { JobCard } from "@/components/job-card";
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
      className="bg-[url('/images/background/careers-bg.webp')] bg-cover bg-center  bg-no-repeat pt-32 lg:pt-64"
    >
      <div className="container mx-auto px-4 pb-32">
        <div className="relative -mt-16">
          <div className="max-w-5xl">
            <motion.h1
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl"
            >
              Join Our Team to <br /> Shape the Future of Loyalty
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="overflow-hidden rounded-2xl">
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
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-medium text-white sm:text-5xl"
          >
            Current Openings
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2"
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
      <Footer />
    </motion.div>
  );
}
