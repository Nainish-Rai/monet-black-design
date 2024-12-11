"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import ButtonWithIcon from "../ui/button-with-icon";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

type Props = {
  onSubmit?: () => void;
};

function LandingFormComponent({ onSubmit }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: boolean;
  }>({});

  const handleOptionToggle = (text: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-[37rem] flex flex-col gap-10"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl font-medium leading-[120%]"
      >
        What would make you love your loyalty points even more?
      </motion.h2>
      <motion.div
        variants={itemVariants}
        className="w-full flex flex-col gap-6"
      >
        <FormOptions
          text="A timely nudge before they expire"
          isSelected={selectedOptions["A timely nudge before they expire"]}
          onToggle={handleOptionToggle}
        />
        <FormOptions
          text="The freedom to redeem them at any brand you like"
          isSelected={
            selectedOptions["The freedom to redeem them at any brand you like"]
          }
          onToggle={handleOptionToggle}
        />
        <FormOptions
          text="A single dashboard to track points across all brands"
          isSelected={
            selectedOptions[
              "A single dashboard to track points across all brands"
            ]
          }
          onToggle={handleOptionToggle}
        />
        <ButtonWithIcon
          className=" self-end mt-2 text-lg "
          icon={<ArrowUpRight className="h-6 w-6" />}
          onClick={onSubmit}
        >
          Continue
        </ButtonWithIcon>
      </motion.div>
    </motion.div>
  );
}

export default LandingFormComponent;

function FormOptions({
  text,
  isSelected,
  onToggle,
}: {
  text: string;
  isSelected?: boolean;
  onToggle: (text: string) => void;
}) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        backgroundColor: isSelected ? "rgba(161, 128, 0, 0.3)" : "#3F3F3F",
      }}
      transition={{ duration: 0.2 }}
      className={`flex items-center space-x-2 p-5 rounded-[1rem] cursor-pointer ${
        isSelected ? "border-[#FFDB1A] border" : ""
      }`}
      onClick={() => onToggle(text)}
    >
      <Checkbox
        className="pb-1"
        id={text}
        checked={isSelected}
        onCheckedChange={() => onToggle(text)}
      />

      <motion.label
        htmlFor={text}
        animate={{
          color: isSelected ? "#FFDB1A" : "#FFFFFF",
        }}
        className="text-lg cursor-pointer font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </motion.label>
    </motion.div>
  );
}
