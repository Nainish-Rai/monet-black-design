"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function SponsorSection({}: Props) {
  return (
    <div className="w-full mt-24  lg:mt-48 flex-col items-center mx-auto max-w-7xl">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center capitalize text-base font-medium tracking-[0.08rem] leading-[120%] "
      >
        WORKING WITH
      </motion.h2>
      <motion.h3
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className=" mt-2 text-center text-2xl lg:text-5xl font-medium text-white lg:leading-[65px]  "
      >
        Trusted By
      </motion.h3>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        initial={{ opacity: 0 }}
        x-data="{}"
        x-init="$nextTick(() => {
      let ul = $refs.logos;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
  })"
        className="w-full inline-flex mt-20 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>{" "}
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>{" "}
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>{" "}
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>{" "}
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>{" "}
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/sponsors/image1.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image2.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image3.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
          <li>
            <Image
              src="/images/sponsors/image4.svg"
              width={160}
              height={160}
              className="rounded-lg"
              alt="Facebook"
            />
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default SponsorSection;
