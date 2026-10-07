"use client";

import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function FreeQuoteCTA() {
  const [isHovered, setIsHovered] = useState(false);

  const callBtnStyles = isHovered
    ? "bg-[#DDAF24] text-[#111111] border-[#DDAF24]"
    : "bg-[#111111] text-white border-[#DDAF24]";

  const iconTextStyles = isHovered
    ? "text-[#111111]"
    : "text-white";

  const phoneTextStyles = isHovered
    ? "text-[#111111]"
    : "text-white";

  return (
    <section className="bg-[#111111] border border-[#DDAF24] rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.25)] mx-auto max-w-[1200px] px-[40px] py-[35px] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left - Icon */}
        <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border-2 border-[#DDAF24] lg:mx-auto lg:mr-0">
          <ClipboardList size={28} className="text-[#DDAF24]" strokeWidth={2} aria-hidden="true" />
        </div>

        {/* Middle - Text */}
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-white font-extrabold uppercase text-[30px] leading-[1.1] tracking-[-0.5px]">
            GET A FREE QUOTE TODAY!
          </h3>
          <p className="mt-[6px] text-[#C8D0DA] font-normal text-[15px] leading-[1.5]">
            Let us bring the shine back to your marble & stone surfaces.
          </p>
        </div>

        {/* Right - Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
          <button className="flex h-[58px] w-[230px] shrink-0 items-center justify-center gap-3 rounded-[8px] bg-[#55B52A] text-white font-bold uppercase text-[13px] leading-[1.2] shadow-[0_4px_15px_rgba(85,181,42,0.3)] transition-all duration-300 hover:bg-[#4A9E24] hover:shadow-[0_6px_20px_rgba(85,181,42,0.4)] hover:-translate-y-[1px]">
            <MessageCircle size={20} strokeWidth={2.5} aria-hidden="true" />
            WHATSAPP NOW
          </button>
          <button
            className={`call-btn flex h-[58px] w-[220px] shrink-0 flex-col items-center justify-center gap-1 rounded-[8px] border-2 ${callBtnStyles} font-bold uppercase text-[13px] leading-[1.2] transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            <div className={`call-btn__icon-text flex items-center gap-2 transition-colors duration-300 ${iconTextStyles}`}>
              <Phone size={18} strokeWidth={2.5} aria-hidden="true" />
              CALL US NOW
            </div>
            <span className={`call-btn__phone font-normal text-[13px] leading-[1.2] uppercase ${phoneTextStyles}`}>
              +973 3366 1188
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}