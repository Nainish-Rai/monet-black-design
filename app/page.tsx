import Landing from "@/components/landing-page/landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monet",
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-black justify-between  w-full">
      <Landing />
    </main>
  );
}
