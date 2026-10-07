"use client";

import { Shield } from "lucide-react";

export default function UtilityVehicleBanner() {
  return (
    <section
      className="
        mx-auto w-full max-w-[960px]
        rounded-[17px] border border-[#292929]
        bg-[#191919]
        p-5
        flex flex-col items-center gap-5
        sm:flex-row sm:items-center sm:gap-6 sm:p-7
        lg:gap-8 lg:px-9
      "
    >
      {/* Shield Icon */}
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#1E311A]">
        <Shield
          size={22}
          className="text-[#55B52A]"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      {/* Text Content */}
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h3 className="text-[15px] font-extrabold uppercase leading-[1.3] tracking-[0.1px] text-white">
          FULLY EQUIPPED UTILITY VEHICLES
        </h3>

        <p className="mt-2 text-[13px] font-normal leading-[1.5] text-[#8FA5BB] sm:max-w-[500px]">
          Our technicians travel with all standard machinery, sealers, and
          testing kits. We ensure zero delay on-site.
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="#contact-heading"
        className="
          flex h-[52px] w-full shrink-0
          items-center justify-center
          rounded-[5px]
          bg-[#55B52A]
          px-6
          text-center text-[13px] font-bold leading-[1.2] text-white
          transition-colors hover:bg-[#4a9e24]
          sm:h-[56px] sm:w-[192px]
        "
      >
        CHECK
        <br />
        AVAILABILITY
      </a>
    </section>
  );
}