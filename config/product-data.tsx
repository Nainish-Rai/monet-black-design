import React from "react";
import { Link, Waypoints, Laptop, Banknote } from "lucide-react";
export const productData: {
  id: string;
  name: string;
  title: string;
  subheading: string;
  features: {
    icon: React.ReactNode | undefined;
    title: string;
    image?: string;
    description: string;
  }[];
  featureHeading: string;
  appflowTitle?: string;
  appflow?: {
    image: string;
    description: string;
    title: string;
    direction?: "left" | "right";
  }[];
}[] = [
  {
    id: "loyalty-studio",
    name: "Loyalty Studio",
    title: "Launch Loyalty Programs in Minutes, Not Months",
    subheading:
      "Loyalty Studio is an API-first platform for building powerful, personalized loyalty experiences. From white-label portals to developer-friendly APIs, Loyalty Studio empowers brands to create and scale loyalty programs tailored to their customers.",
    features: [
      {
        icon: <Laptop className="w-6 h-6 mb-4 text-white" />,
        title: "Rapid Launch",
        image: "/images/product/launch.png",
        description:
          "Deploy fully branded loyalty programs in under 10 minutes using white-label portals and smart defaults.",
      },
      {
        icon: <Banknote className="w-6 h-6 mb-4 text-white" />,
        title: "Reward Engine",
        image: "/images/product/reward.png",
        description:
          "Support for digital and physical rewards, tiers, coupon rules, and personalized campaigns with full analytics.",
      },
      {
        icon: <Waypoints className="w-6 h-6 mb-4 text-white" />,
        title: "Multi-Program Support",
        image: "/images/product/multi.png",
        description:
          "Run multiple programs across brands, regions, or audiences — all from a single dashboard.",
      },
      {
        icon: <Link className="w-6 h-6 mb-4 text-white" />,
        title: "Plug & Play Integrations",
        image: "/images/product/plug.png",
        description:
          "Connect to 50+ platforms, including Shopify, Square, and CRM/marketing tools, with built-in integrations or custom APIs.",
      },
    ],
    featureHeading: "Built for Teams and Developers",
    appflowTitle:
      "Go from setup to scale - fast, flexible, and fully integrated. ",
    appflow: [
      {
        image: "/images/product/studio.png",
        title: "Design & Launch Loyalty Programs",
        description:
          "Quickly create custom loyalty programs with AI assistance. Define tiers, rewards, and rules, then integrate with your tools via API, SDKs, or webhooks — all in real time.",
      },
      {
        image: "/images/product/campaign.png",
        title: "Engage and Reward Customers",
        description:
          "Launch campaigns, automate rewards, and communicate with members across channels. Offer targeted perks based on behavior, tier, or milestones — all with full analytics tracking.",
        direction: "right",
      },
      {
        image: "/images/product/studio-3.png",
        title: "Optimize with Insights",
        description:
          "Monitor key KPIs like redemption rates, engagement, and ROI. Use real-time dashboards and reports to refine your program, launch new campaigns, and maximize business impact.",
      },
    ],
  },
  {
    id: "monet-points",
    name: "Monet Points",
    title: "Traditional loyalty is broken, Monet Points fix it",
    subheading:
      "Businesses can distribute and accept Monet Points on-chain with easy conversions. Users earn Monet Points by shopping and can use them as currency across many partner brands.",
    features: [
      {
        icon: <Link className="w-6 h-6 mb-4 text-white" />,
        title: "On-Chain Rewards",
        image: "/images/product/onchain.png",
        description: "Monet Points live on-chain. Secure and transparent.",
      },
      {
        icon: <Waypoints className="w-6 h-6 mb-4 text-white" />,
        title: "Cross-Brand Usage",
        image: "/images/product/crossbrand.png",
        description:
          "Accept and spend points across a network of partner brands and apps.",
      },
      {
        icon: <Laptop className="w-6 h-6 mb-4 text-white" />,
        title: "Web2-Like Experience",
        image: "/images/product/web2.png",
        description:
          "Built-in wallets for businesses and users — no Web3 knowledge needed.",
      },
      {
        icon: <Banknote className="w-6 h-6 mb-4 text-white" />,
        title: "Gas-Sponsored Transactions ",
        image: "/images/product/gas.png",
        description: "Instant transactions with zero gas fees.",
      },
    ],
    featureHeading: "Smooth Onboarding for Businesses and Users",
    appflowTitle: "Simplifying Loyalty with On-Chain Infrastructure",
    appflow: [
      {
        image: "/images/product/signup.png",
        title: "Sign up with your email and set up your profile in minutes",
        description:
          "Get started quickly — no wallet or technical setup required.",
      },
      {
        image: "/images/product/receive.png",
        title: "Earn Monet Points when you shop at partner businesses",
        description:
          "Simply show your QR code at checkout to get rewarded instantly.",
        direction: "right",
      },
      {
        image: "/images/product/send.png",
        title: "Spend your points across a wide network of businesses  ",
        description:
          "Enjoy seamless redemption across categories — from retail to services.",
      },
    ],
  },
];
