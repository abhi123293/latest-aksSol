"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function QuoteForm() {
  const [service, setService] = useState("Marble Polishing");

  const services = [
    "Marble Polishing",
    "Granite Honing",
    "Stone Sealing",
    "Crystallization",
    "Floor Grinding",
    "Restoration",
  ];

  return (
    <form className="bg-white border border-[#46515F] rounded-[17px] p-[42px] w-full max-w-[665px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]" noValidate>
      {/* Form Header */}
      <div className="mb-[30px]">
        <h3 className="text-[#14243A] font-bold uppercase text-[22px] leading-[1.2]">
          SEND QUOTE REQUEST
        </h3>
        <p className="mt-[10px] text-[#8FA5BB] font-normal text-[14px] leading-[1.5]">
          Submit the details below to receive a call back within 15 minutes.
        </p>
      </div>

      {/* First Row - Name & Phone */}
      <div className="flex gap-[22px] mb-[22px]">
        <div className="flex-1">
          <label className="block text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
            YOUR NAME
          </label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
          />
        </div>
        <div className="flex-1">
          <label className="block text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-[22px]">
        <label className="block text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] text-[15px] leading-[1.2] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
        />
      </div>

      {/* Service Required */}
      <div className="mb-[22px]">
        <label className="block text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          SERVICE REQUIRED
        </label>
        <div className="relative">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full h-[50px] bg-white border border-[#E1E5EA] rounded-[9px] px-[18px] pr-[48px] text-[15px] leading-[1.2] appearance-none cursor-pointer focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="absolute right-[18px] top-1/2 -translate-y-1/2 text-[#8FA5BB] pointer-events-none">
            <ChevronDown size={18} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Message Details */}
      <div className="mb-[30px]">
        <label className="block text-[#8FA5BB] font-bold uppercase text-[12px] leading-[1.2] tracking-[0.5px] mb-[8px]">
          MESSAGE DETAILS
        </label>
        <textarea
          placeholder="Tell us about your stone type, approximate floor size, and specific problems..."
          required
          className="w-full h-[112px] bg-white border border-[#E1E5EA] rounded-[9px] p-[17px] text-[15px] leading-[1.5] placeholder-[#B0B8C1] focus:outline-none focus:border-[#55B52A] focus:ring-1 focus:ring-[#55B52A] transition-colors resize-y min-h-[112px]"
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full h-[50px] bg-[#55B52A] text-white font-bold uppercase text-[13px] leading-[1.2] rounded-[8px] shadow-[0_4px_15px_rgba(85,181,42,0.3)] transition-all duration-300 hover:bg-[#4A9E24] hover:shadow-[0_6px_20px_rgba(85,181,42,0.4)] hover:-translate-y-[1px]">
        SUBMIT REQUEST
      </button>
    </form>
  );
}