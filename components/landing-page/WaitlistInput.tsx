import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WaitlistInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2 mt-4">
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1  h-12 rounded-e-none border-[#FBC926] shadow-none focus-visible:z-10"
          placeholder="Enter your email"
          type="email"
        />
        <button className="border-[#FBC926] bg-[#FBC926] text-black hover:bg-[#FBC926]/90  focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50">
          Subscribe
        </button>
      </div>
    </div>
  );
}
