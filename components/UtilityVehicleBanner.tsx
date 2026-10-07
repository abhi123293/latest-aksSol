"use client";

import { Shield } from "lucide-react";

export default function UtilityVehicleBanner() {
  return (
    <section className="mx-auto max-w-[960px] bg-[#191919] border border-[#292929] rounded-[17px] p-[28px_36px] h-[138px] flex items-center gap-8">
      {/* Shield Icon */}
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#1E311A]">
        <Shield size={22} className="text-[#55B52A]" strokeWidth={2} aria-hidden="true" />
      </div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-extrabold uppercase text-[15px] leading-[1.3] tracking-[0.1px]">
          FULLY EQUIPPED UTILITY VEHICLES
        </h3>
        <p className="mt-1 text-[#8FA5BB] font-normal text-[13px] leading-[1.5] max-w-[500px]">
          Our technicians travel with all standard machinery, sealers, and testing kits. We ensure zero delay
          on-site.
        </p>
      </div>

      {/* CTA Button */}
      <a href="#contact-heading" className="flex h-[56px] w-[192px] shrink-0 items-center justify-center rounded-[5px] bg-[#55B52A] text-white font-bold text-[14px] leading-[1.2] whitespace-pre-line transition-colors hover:bg-[#4a9e24]">
        CHECK
        <br />
        AVAILABILITY
      </a>
    </section>
  );
}