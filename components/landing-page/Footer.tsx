import React from "react";
import FooterLinkComponent from "./footer-link-component";
import FooterSocialComponent from "./footer-social-component";
import { Linkedin, Twitter } from "lucide-react";

type Props = {};

function Footer({}: Props) {
  const footerItems = [{}];
  return (
    <footer className=" border-t mt-64 w-full text-white text-center py-2">
      <div className="w-full px-4 lg:px-0 flex flex-col max-w-7xl mx-auto mt-5 mb-2">
        <div className="flex gap-2 lg:gap-12 flex-col lg:flex-row ">
          <FooterLinkComponent link={"#about"} name={"About"} />
          <FooterLinkComponent
            link={"#building"}
            name={"What are we building"}
          />
          <FooterLinkComponent link={"#community"} name={"Community"} />
          <FooterLinkComponent
            link={"https://monet-work.github.io/web3-points/"}
            name={"Docs"}
          />
          <FooterLinkComponent
            link={"https://web3-points.stage.monet.work/"}
            name={"Product"}
          />
        </div>
        <div className="text-left text-gray-300 flex-col lg:flex-row flex justify-between text-sm mt-4 lg:mt-2">
          <p>
            For any queries, please contact us at{" "}
            <span className=" font-medium text-yellow-500">
              example@monet.work
            </span>{" "}
          </p>
          <div className="flex lg:flex-row-reverse  mt-4 lg:mt-0 gap-2 lg:gap-4">
            <FooterSocialComponent
              icon={<Linkedin />}
              link={"https://www.linkedin.com/company/monetdotwork"}
            />
            <FooterSocialComponent
              svg="/icons/telegram.svg"
              link={"https://t.me/monet_dot_work"}
            />
            <FooterSocialComponent
              icon={<Twitter />}
              link={"https://twitter.com/monetdotwork"}
            />
            <FooterSocialComponent
              svg="/icons/discord.svg"
              link={"https://discord.gg/monet"}
            />
          </div>
        </div>
        <p className="text-sm text-gray-300">
          © Monet Work 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
