"use client";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {};

function FeatureSwitcher({}: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeatureSwitcherContent />
    </Suspense>
  );
}

function FeatureSwitcherContent() {
  const activePathname = usePathname();
  const searchParams = useSearchParams();
  const activeParam = searchParams.get("active");

  const isVisible = activePathname === "/features";
  const isCustomer = activeParam === "customers";
  const isBrand = activeParam === "brands";

  const router = useRouter();
  return (
    <div className={`${isVisible ? "flex" : "hidden"}`}>
      <div className="border p-0 lg:p-2 transition-all max-sm:flex bg-black/20 backdrop-blur rounded-full">
        {!isCustomer ? (
          <Button
            onClick={() => router.push("/features?active=customers")}
            className=" bg-transparent text-[0.6rem]   lg:text-sm hover:bg-transparent text-white rounded-3xl"
          >
            I&apos;m a Customer
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/features?active=customers")}
            className=" rounded-3xl bg-white text-black text-[0.6rem] lg:text-sm "
          >
            I&apos;m a Customer
          </Button>
        )}
        {!isBrand ? (
          <Button
            onClick={() => router.push("/features?active=brands")}
            className=" bg-transparent text-[0.6rem]   lg:text-sm hover:bg-transparent text-white rounded-3xl"
          >
            I&apos;m a Brand
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/features?active=brands")}
            className=" rounded-3xl bg-white text-black text-[0.6rem]  lg:text-sm "
          >
            I&apos;m a Brand
          </Button>
        )}
      </div>
    </div>
  );
}

export default FeatureSwitcher;
