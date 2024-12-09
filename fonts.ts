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
  src: "./fonts/NeueMontreal.woff",
  variable: "--font-neue-montreal",
  weight: "100 900",
});
