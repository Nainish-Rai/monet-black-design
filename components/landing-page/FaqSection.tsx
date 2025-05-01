"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is Monet?",
    answer:
      "Monet is a platform that allows you to seamlessly convert your loyalty points between different brands. Whether you're shopping, traveling, or dining, Monet makes your points more flexible and valuable.",
  },
  {
    question: "How does Monet work?",
    answer:
      "Monet connects loyalty programs from different brands, allowing you to convert your points from one program (e.g., Brand A) to another (e.g., Brand B). This gives you the freedom to use your points where they matter most to you.",
  },
  {
    question: "How do I convert points between brands?",
    answer:
      "Using Monet is simple:\n• Log into the Monet platform (via app or website)\n• Select the loyalty program you want to transfer points from\n• Choose the program you want to transfer points to\n• Follow the prompts to complete the conversion",
  },
  {
    question: "Are there fees for converting points?",
    answer:
      "This depends on brand to brand - some brands or loyalty programs may charge a nominal fee. You'll be informed of any fees before completing a conversion.",
  },
  {
    question: "What types of loyalty programs are supported by Monet?",
    answer:
      "Monet supports loyalty programs across various sectors - and has no limitations as to which programs can be included / made fluid.",
  },
  {
    question: "What are the conversion rates between brands?",
    answer:
      "Conversion rates vary depending on the partnership between brands. Monet ensures you always see the conversion rate before completing a transaction, so you know exactly how many points you'll get.",
  },
  {
    question: "How long does it take to convert points?",
    answer:
      "Most conversions are processed instantly or within a few minutes. In rare cases, it may take up to 24 hours for the points to appear in the destination program.",
  },
  {
    question: "Is there a minimum / maximum limit to points conversions?",
    answer:
      "Yes, some loyalty programs have minimum or maximum limits for point transfers. These limits will be displayed during the conversion process.",
  },
  {
    question: "Can I transfer points between international brands?",
    answer:
      "Yes! Monet enables point conversions across both domestic and international brands, depending on the partnerships in place.",
  },

  {
    question: "Can I earn points through Monet?",
    answer:
      "Monet itself doesn't issue points but works with brands to enable conversions. You'll continue to earn points through the loyalty programs of the brands you interact with.",
  },
  {
    question: "How do I check my points balances across brands?",
    answer:
      "Once you link your loyalty accounts to Monet, you'll be able to view all your point balances in one place within the Monet app or platform.",
  },
  {
    question: "Do my converted points expire?",
    answer:
      "The expiry of converted points depends on the destination brand's loyalty program rules. Always check the terms of the program you're transferring points to.",
  },
  {
    question: "Can I reverse a points conversion?",
    answer:
      "Once points are converted, the transaction cannot be reversed. Please double-check your selections before completing a conversion.",
  },
  {
    question: "How do I get started with Monet?",
    answer:
      "Getting started is easy:\n• Download the Monet app or visit our website\n• Create an account and link your existing loyalty programs\n• Start converting your points between brands and enjoy the flexibility!",
  },
];

function FaqSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full flex flex-col items-center py-20">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center cursor-pointer group"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-2 text-center text-2xl lg:text-5xl font-medium text-white lg:leading-[65px] group-hover:text-neutral-300"
          >
            FAQs
          </motion.h3>
          <motion.div className="ml-4 flex items-center pt-4 justify-center">
            <ChevronDown className="w-6 h-6 text-white group-hover:text-neutral-300" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Accordion
                type="single"
                collapsible
                className="w-full mt-16 space-y-6"
              >
                {faqData.map((faq, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className=" [&[data-state=open]]:bg-neutral-900/50 [&[data-state=open]]:rounded-xl px-6 transition-all duration-300 border-b-2  "
                    >
                      <AccordionTrigger className="text-left text-lg lg:text-2xl font-medium hover:no-underline py-4 [&[data-state=open]]:text-white transition-colors ">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-400 text-sm lg:text-lg pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default FaqSection;
