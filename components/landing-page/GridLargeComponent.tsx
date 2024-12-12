import { CalendarCheck, MapPin } from "lucide-react";
import React from "react";

type Props = {};

function GridLargeComponent({}: Props) {
  return (
    <div
      className={` p-8 bg-[#252525] w-full h-full bg-gradient-to-tl  from-[#031BCC80]/60 via-[#000FC740]/30 to-[#252525] flex justify-between flex-col`}
    >
      <div>
        <p className="text-[2.5rem] leading-[120%] font-medium">
          Monet&apos;s Product Launch
        </p>
        <p className="text-[#FCD400] mt-2 flex items-center gap-2 font-bold text-[1.5rem]">
          <CalendarCheck className="h-6 w-6 inline" /> 13 Nov{" "}
          <MapPin className="h-6 w-6 inline" /> Bangalore
        </p>
      </div>
      <p className="text-lg text-[#ddd] leading-[120%]">
        On November 13th, we launched Monet in Bangalore—a groundbreaking
        loyalty ecosystem redefining flexibility and transparency. The event
        featured two insightful panel discussions, followed by our report launch
        and finally culminating in the official product unveiling.
      </p>
    </div>
  );
}

export default GridLargeComponent;
