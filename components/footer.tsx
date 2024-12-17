import Image from "next/image";
import Link from "next/link";
import { MonetWorkLogo } from "./monet-work-logo";

type FooterLink = {
  name: string;
  href: string;
  target?: string;
};

const footerLinks: Record<string, FooterLink[]> = {
  "Our Product": [
    { name: "Loyalty", href: "https://loyalty.monet.work", target: "_blank" },
    { name: "Roadmap", href: "/roadmap" },
    {
      name: "Points Marketplace",
      href: "https://web3-points.stage.monet.work/",
      target: "_blank",
    },
    { name: "Shopify App", href: "https://apps.shopify.com", target: "_blank" },
  ],
  Company: [
    { name: "Our Vision", href: "/company/vision" },
    { name: "Meet the Team", href: "/team" },
    { name: "Docs", href: "#" },
  ],
  Careers: [{ name: "Job Openings", href: "/careers" }],
  "Use Cases": [
    { name: "Starbucks", href: "/case-studies/starbucks" },
    { name: "Zomato", href: "/case-studies/zomato" },
  ],
};

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container px-4 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
          <MonetWorkLogo className="w-28" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 text-base font-medium text-white">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.target ? link.target : undefined}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              Disclaimer: Brand names and logos are for illustrative purposes
              only and do not imply partnerships.
            </p>
            <div className="flex mt-4 md:mt-0 md:items-center">
              <div className="flex flex-col">
                <div className="flex md:justify-between gap-4">
                  <Link
                    href="/terms-of-use"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  © {currentYear} Monet. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
