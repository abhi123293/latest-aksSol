"use client";

import {
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    
      {/* Announcement Bar */}
    <div className="bg-[#111111] border-b border-[#252525]">
  <div className="mx-auto flex h-[80px] lg:h-[40px] max-w-[1400px] items-center justify-center gap-1 px-6 text-[14px] lg:text-[12px] flex-col sm:flex-row">

    <div className="flex items-center gap-1">
      <span className="font-semibold text-white">
        Currently viewing:
      </span>

      <span className="font-bold text-[#dcb735]">
        AKS SOLUTIONS WEBSITE
      </span>
    </div>

    <button className="ml-0 sm:ml-2 rounded-md bg-[#5fba28] px-5 py-1 mt-1 text-[10px] font-bold text-white transition hover:bg-[#70cc35] ">
      SWITCH TO BRAND GUIDELINES
    </button>

  </div>
</div>

      {/* Contact / Social Bar */}
      <div className="hidden bg-[#111111] md:block">
        <div className="mx-auto flex h-[40px] max-w-[1400px] items-center justify-between px-6">

          {/* Location */}
          <div className="flex items-center gap-2 text-sm font-medium text-white text-[11px] ml-5">
            <MapPin
              size={19}
              strokeWidth={2}
              className="text-[#dcb735]"
            />

            <span>Serving All Across Bahrain</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">

            {/* Phone */}
            <div className="flex items-center gap-2 font-semibold text-[#dcb735] text-[12px]">
              <Phone size={18} />
              <span>+973 3366 1188</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 ">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#353535] text-xs font-bold text-white transition hover:border-[#dcb735] hover:text-[#dcb735]">
                IG
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#353535] text-xs font-bold text-white transition hover:border-[#dcb735] hover:text-[#dcb735]">
                f
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#353535] text-xs font-bold text-white transition hover:border-[#dcb735] hover:text-[#dcb735]">
                X
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
     <nav className="sticky top-0 z-[100] w-full bg-white">
        <div className="mx-auto flex h-[90px] max-w-[1400px] items-center justify-between px-4 sm:h-[80px] sm:px-6 lg:h-[90px]">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.jpg"
              alt="AKS Solutions"
              className="h-[62px] w-auto object-contain"
            />
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 lg:flex text-[12px]">


            <a
              href="#"
              className="font-semibold text-[#5fba28] transition"
            >
              HOME
            </a>

            <a
              href="#about"
              className="font-semibold text-[#111111] transition hover:text-[#5fba28]"
            >
              ABOUT US
            </a>

            <a
              href="#services"
              className="flex items-center gap-1 font-semibold text-[#111111] transition hover:text-[#5fba28]"
            >
              SERVICES
              <ChevronDown size={15} />
            </a>

            <a
              href="#gallery"
              className="font-semibold text-[#111111] transition hover:text-[#5fba28]"
            >
              GALLERY
            </a>

            <a
              href="#testimonials"
              className="font-semibold text-[#111111] transition hover:text-[#5fba28]"
            >
              TESTIMONIALS
            </a>

            <a
              href="#contact"
              className="font-semibold text-[#111111] transition hover:text-[#5fba28]"
            >
              CONTACT US
            </a>

            {/* Brand Guide */}
            <button className="rounded-md border border-[#dcb735] px-5 py-3 font-bold text-[#dcb735] transition hover:bg-[#dcb735] hover:text-white">
              BRAND GUIDE
            </button>

            {/* Quote */}
            <button className="rounded-md bg-[#5fba28] px-7 py-3 font-bold text-white transition hover:bg-[#4da51c]">
              GET FREE QUOTE
            </button>

          </div>
          

          {/* Mobile Menu Button */}
    
<div className="flex items-center gap-3 lg:hidden">
  <button className="rounded-md border border-[#dcb735] px-3 py-2 text-[9px] font-bold text-[#dcb735]">
    BRAND GUIDE
  </button>

  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="p-1"
    aria-label="Toggle menu"
  >
    <span className="block h-[2px] w-5 bg-[#111111]" />
    <span className="my-1.5 block h-[2px] w-5 bg-[#111111]" />
    <span className="block h-[2px] w-5 bg-[#111111]" />
  </button>
</div>

        </div>
         {isMenuOpen && (
    <div className="h-[390px] border-t border-gray-200 bg-white px-10 py-7 lg:hidden">
      <div className="flex flex-col gap-7 text-[14px] font-semibold">

        <a
          href="#"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#5fba28]"
        >
          HOME
        </a>

        <a
          href="#about"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#404040] hover:text-[#5fba28]"
        >
          ABOUT US
        </a>

        <a
          href="#services"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#404040] hover:text-[#5fba28]"
        >
          SERVICES
        </a>

        <a
          href="#gallery"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#404040] hover:text-[#5fba28]"
        >
          GALLERY
        </a>

        <a
          href="#testimonials"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#404040] hover:text-[#5fba28]"
        >
          TESTIMONIALS
        </a>

        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="text-[#404040] hover:text-[#5fba28]"
        >
          CONTACT US
        </a>

        <button className="mx-auto w-[350px] rounded-md -ml-5 bg-[#5fba28] px-4 py-3 text-[13px] font-bold text-white">
  GET FREE QUOTE
</button>

      </div>
    </div>
  )}
        
      </nav>
      </>

   
  );
}