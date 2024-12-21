import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  {
    title: "Our Product",
    name: "product",
    items: [
      {
        title: "Loyalty Made Fluid",
        href: "/product/loyalty",
        description: "For Consumers and Businesses",
        image: "/placeholder.svg?height=400&width=800",
        cta: {
          primary: "For Consumers",
          secondary: "For Business",
        },
      },
      {
        title: "Our Roadmap",
        href: "/roadmap",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        title: "Work with Us",
        href: "/careers",
        image: "/placeholder.svg?height=200&width=400",
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
      },
      {
        title: "Meet the Team",
        href: "/team",
      },
      {
        title: "Backed By",
        href: "/team#investors",
      },
    ],
  },
  {
    title: "Careers",
    name: "careers",
    items: [
      {
        title: "Current Openings",
        href: "/careers",
      },
    ],
  },
  {
    title: "Use Cases",
    name: "case-studies",
    items: [
      {
        title: "Starbucks Rewards : Coffee & Beyond",
        href: "/case-studies/starbucks",
        description: "A timely nudge before they expire",
      },
      {
        title: "Zomato",
        href: "/case-studies/zomato",
      },
      // {
      //   title: "Swiggy",
      //   href: "/case-studies/swiggy",
      // },
    ],
  },
];
