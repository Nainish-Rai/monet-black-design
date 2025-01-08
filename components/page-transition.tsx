"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const PathAnimation = () => (
  <svg
    className="absolute w-screen h-screen"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{
        pathLength: 1,
        transition: { duration: 0.9, ease: "easeInOut" },
      }}
      exit={{
        pathLength: 0,
        transition: { duration: 0.7, ease: "easeInOut" },
      }}
      d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
      fill="none"
      stroke="#FFD700"
      strokeWidth="0.5"
    />
  </svg>
);

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  console.log(currentPath);

  const displayName = currentPath?.substring(1) || "Monet";

  return (
    <AnimatePresence mode="wait">
      <motion.div key={currentPath} className="relative w-full">
        {/* Content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>

        {/* Transition overlay */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <PathAnimation />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-white capitalize font-neue text-4xl">
              Loyalty Made Fluid
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
