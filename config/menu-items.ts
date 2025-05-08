import { MenuItem } from "@/types/menu";
import {
  Gift,
  BookOpen,
  Building,
  Briefcase,
  Coffee,
  CreditCard,
  Cloud,
  Store,
  Users,
  Eye as EyeIcon,
  UsersRound,
  Landmark,
  Map,
  BookMarked,
} from "lucide-react";
import React from "react";

export const menuItems: MenuItem[] = [
  {
    title: "Products",
    name: "product",
    items: [
      {
        title: "Loyalty Made Fluid",
        href: "/product/loyalty",
        description:
          "Discover our innovative loyalty solutions that adapt to your business needs",
        image: "/placeholder.svg?height=400&width=800",
        icon: React.createElement(Gift),
        cta: {
          primary: "For Consumers",
          secondary: "For Business",
        },
      },
    ],
  },
  {
    title: "Case Studies",
    name: "case-studies",
    items: [
      {
        title: "Starbucks Rewards : Coffee & Beyond",
        href: "/case-studies/starbucks",
        description:
          "How Starbucks revolutionized customer loyalty with timely engagement",
        icon: React.createElement(Coffee),
      },
      // {
      //   title: "Zomato",
      //   href: "/case-studies/zomato",
      // },
      {
        title: "Banking Loyalty",
        href: "/case-studies/banking-loyalty",
        description:
          "Financial institutions creating meaningful customer connections through loyalty",
        icon: React.createElement(CreditCard),
      },
      {
        title: "Cloud Service",
        href: "/case-studies/cloud-service",
        description:
          "How cloud providers build long-term customer relationships through loyalty",
        icon: React.createElement(Cloud),
      },
      {
        title: "Retail Loyalty",
        href: "/case-studies/retail-loyalty",
        description:
          "Transforming shopping experiences with personalized loyalty programs",
        icon: React.createElement(Store),
      },
      {
        title: "Group Loyalty",
        href: "/case-studies/group-loyalty",
        description:
          "Building community through shared rewards and collaborative loyalty",
        icon: React.createElement(Users),
      },
    ],
  },
  {
    title: "Company",
    name: "company",
    items: [
      {
        title: "Our Vision",
        href: "/company/vision",
        description:
          "The future we're building and the values that drive us forward",
        icon: React.createElement(EyeIcon),
      },
      {
        title: "Meet the Team",
        href: "/team",
        description: "The passionate people behind our innovative solutions",
        icon: React.createElement(UsersRound),
      },
      {
        title: "Backed By",
        href: "/team#investors",
        description:
          "Our trusted investors and strategic partners supporting our growth",
        icon: React.createElement(Landmark),
      },
      {
        title: "Our Roadmap",
        href: "/roadmap",
        description: "See where we're headed and our plans for the future",
        image: "/placeholder.svg?height=200&width=400",
        icon: React.createElement(Map),
      },
      {
        title: "Work with Us",
        href: "/careers",
        description: "Join our team and help shape the future of loyalty",
        image: "/placeholder.svg?height=200&width=400",
        icon: React.createElement(Briefcase),
      },
    ],
  },
  {
    title: "Docs",
    name: "careers",
    items: [
      {
        title: "Current Openings",
        href: "/careers",
        description:
          "Explore available positions and become part of our growing team",
        icon: React.createElement(BookMarked),
      },
    ],
  },
];
