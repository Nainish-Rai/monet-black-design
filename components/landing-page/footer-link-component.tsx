import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  link: any;
  newTab?: boolean;
  icon?: any;
  name: string;
};

function FooterLinkComponent({ link, newTab, icon, name }: Props) {
  return (
    <Link
      href={link}
      {...(newTab && { target: "_blank" })}
      className={
        " flex dark:text-neutral-50 items-center lg:flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
      }
    >
      {icon && (
        <Image
          src={icon}
          width={24}
          height={24}
          alt=""
          className="text-white pb-2"
        />
      )}
      <span className=" text-sm">{name}</span>
    </Link>
  );
}

export default FooterLinkComponent;
