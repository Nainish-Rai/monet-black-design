"use client";
import React from "react";
import TextRevealByWord from "../animated/reveal-text";
import { motion } from "framer-motion";
import { textVariant, textVariant2 } from "@/lib/anims";
import WhatAreWeBuildingComponent from "./what-are-we-building-component";
import CommunityBar from "./CommunityBar";
import {
  Home,
  Linkedin,
  MessageCircleMoreIcon,
  TwitchIcon,
  Twitter,
} from "lucide-react";

type Props = {};

function JoinUs({}: Props) {
  return (
    <div
      id="community"
      className="w-full min-h-screen flex-col px-4 lg:px-0  items-center justify-center my-4 flex mt-56  max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center">
        <motion.h1
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1 }}
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          className="scroll-m-20 mt-6 max-w-4xl text-4xl text-center drop-shadow-sm font-semibold leading-[105%] tracking-tight lg:text-7xl"
        >
          Get exclusive
          <span className=" text-yellow-400"> access </span>to our launch event
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          // animate={{ opacity: 1 }}
          className=" leading-[28px] text-center mt-8 lg:text-lg text-base max-w-2xl"
        >
          Join us for an exclusive unveiling of our revolutionary loyalty
          rewards platform. Experience the future of rewards with decentralized
          $POINTS and cutting-edge blockchain tech. Don&apos;t miss out - secure
          your spot today!
        </motion.p>
      </div>
      <div className="flex w-full justify-center flex-wrap p-4 mt-16 lg:px-16">
        <CommunityBar
          svg="/icons/discord.svg"
          title="Discord"
          description="Contribute to wide-ranging Monet discussions"
          link={"https://discord.gg/monet"}
        />
        <CommunityBar
          icon={<Twitter />}
          title="Twitter"
          description="Share ideas and participate in discussions"
          link={"https://twitter.com/monetdotwork"}
        />
        <CommunityBar
          svg="/icons/telegram.svg"
          title="Telegram"
          description="Ask and engage questions"
          link={"https://t.me/monet_dot_work"}
        />
        <CommunityBar
          icon={<Linkedin />}
          title="Linkedin"
          description="Stay up to date with Monet news and updates"
          link={"https://www.linkedin.com/company/monetdotwork"}
        />
      </div>
    </div>
  );
}

export default JoinUs;
