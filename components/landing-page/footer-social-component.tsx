import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  icon?: any;
  svg?: any;
  link: string;
};

function FooterSocialComponent({ icon, svg, link }: Props) {
  return (
    <Link href={link} target="_blank">
      {icon && icon}
      {svg && (
        <Image
          src={svg}
          width={24}
          height={24}
          alt=""
          className="text-white pb-2"
        />
      )}
    </Link>
  );
}

export default FooterSocialComponent;
