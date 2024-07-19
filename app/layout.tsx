import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/landing-page/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monet Work",
  description: "Loyalty rewards platform powered by blockchain technology",
  keywords: ["Monet", "Blockchain", "Rewards", "Loyalty"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
