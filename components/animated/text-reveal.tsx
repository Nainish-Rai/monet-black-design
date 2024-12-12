"use client";

import { cn } from "@/lib/utils";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef, useEffect, useState } from "react";

interface Props {
  paragraph: string;
  className?: string;
  onComplete?: () => void;
}

const TextRevealByWord: FC<Props> = ({ paragraph, className, onComplete }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 80%", "end 20%"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.8 },
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.8 && isInView && onComplete) {
        onComplete();
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isInView, onComplete]);

  const words = paragraph.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[50vh] md:h-[75vh] lg:h-[40vh]", className)}
    >
      <div className="sticky top-0 mx-auto flex h-[50vh] md:h-[75vh] lg:h-screen w-full items-start justify-center bg-transparent px-[1rem]">
        <p
          ref={targetRef}
          className="flex flex-wrap justify-center items-center p-3 text-lg font-medium text-black/20 leading-[120%] tracking-[-0.025rem] dark:text-white/20 text-center md:p-6 md:text-2xl lg:p-10 lg:text-4xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 text-current relative mx-1 lg:mx-2.5">
      <span className={"absolute transition-all duration-200 opacity-30"}>
        {children}
      </span>
      <motion.span
        style={{ opacity: opacity }}
        transition={{ duration: 0.5 }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
