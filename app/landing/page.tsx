"use client";
import { Metadata } from "next";
import LandingPageRoot from "@/components/landing-page/LandingPageRoot";
import React from "react";
import { Navbar } from "@/components/navbar";
import { ScrollProvider } from "@/components/context/ScrollContext";

type Props = {};

function LandingPage({}: Props) {
  return (
    <ScrollProvider>
      <main>
        <Navbar />
        <LandingPageRoot />
      </main>
    </ScrollProvider>
  );
}

export default LandingPage;
