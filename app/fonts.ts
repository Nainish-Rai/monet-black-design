import { Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/neue-montreal/neue-montreal-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-montreal/neue-montreal-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/neue-montreal/neue-montreal-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/neue-montreal/neue-montreal-light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-neue-montreal",
});
