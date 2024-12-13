"use client";
import LandingPageRoot from "@/components/landing-page/LandingPageRoot";
import React from "react";
import { ScrollProvider } from "@/components/context/ScrollContext";

type Props = {};

function LandingPage({}: Props) {
  return (
    <ScrollProvider>
      <LandingPageRoot />
    </ScrollProvider>
  );
}

export default LandingPage;
