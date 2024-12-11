import { Metadata } from "next";
import LandingPageRoot from "@/components/landing-page/LandingPageRoot";
import React from "react";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page description",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

type Props = {};

function LandingPage({}: Props) {
  return <LandingPageRoot />;
}

export default LandingPage;
