import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { inter, neueMontreal } from "@/app/fonts";
import LenisScrollProvider from "@/components/context/LenisProvider";
import { PageTransition } from "@/components/page-transition";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://monet.work"),
  title: "Monet",
  alternates: {
    canonical: "/",
  },
  description:
    "Monet is a new era of loyalty programs. We're pioneering a new era of rewards using blockchain technology. Our innovative solution empowers businesses and delights customers with decentralized $POINTS - the currency of interoperable rewards.",
  openGraph: {
    title: "Monet",
    description:
      "Monet is a new era of loyalty programs. We're pioneering a new era of rewards using blockchain technology. Our innovative solution empowers businesses and delights customers with decentralized $POINTS - the currency of interoperable rewards.",
    images: [
      {
        url: "https://pbs.twimg.com/profile_banners/1640700298644824068/1723583013/1500x500",
        width: 1200,
        height: 630,
        alt: "Monet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monet",
    description:
      "Monet is a new era of loyalty programs. We're pioneering a new era of rewards using blockchain technology. Our innovative solution empowers businesses and delights customers with decentralized $POINTS - the currency of interoperable rewards.",
    images: [
      {
        url: "https://pbs.twimg.com/profile_banners/1640700298644824068/1723583013/1500x500",
        width: 1200,
        height: 630,
        alt: "Monet",
      },
    ],
    creator: "@monetdotwork",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={` ${inter.variable}`}>
        <ViewTransitions>
          <LenisScrollProvider>
            <PageTransition>
              <Navbar />
              {children}
              <Footer />
            </PageTransition>
          </LenisScrollProvider>
        </ViewTransitions>
        <GoogleAnalytics gaId="G-9CB7DP94RX" />
      </body>
    </html>
  );
}
