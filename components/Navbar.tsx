"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#", label: "HOME", active: true },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES", hasDropdown: true },
  { href: "#gallery", label: "GALLERY" },
  { href: "#testimonials", label: "TESTIMONIALS" },
  { href: "#contact", label: "CONTACT US" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-[100] w-full bg-white">
        <div className="mx-auto flex h-[105px] max-w-[1350px] items-center justify-between px-[30px] sm:px-[40px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/images/logo.jpg"
              alt="AKS Solutions"
              className="w-[95px] h-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-[35px] lg:ml-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-semibold uppercase tracking-[0.3px] text-[15px] leading-[22px] transition-colors ${
                  link.active
                    ? "font-bold text-[#55B52B]"
                    : "text-[#18283B] font-semibold hover:text-[#55B52B]"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown
                    size={9}
                    className="ml-1 inline-block"
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4 lg:ml-8">
            <button className="h-[50px] w-[135px] rounded-[6px] border border-[#DDAF24] bg-white font-bold text-[13px] leading-[20px] tracking-[0.2px] text-[#DDAF24] transition-colors hover:bg-[#DDAF24] hover:text-white">
              BRAND GUIDE
            </button>
            <button className="h-[50px] w-[170px] rounded-[6px] bg-[#55B52B] font-bold text-[13px] leading-[20px] tracking-[0.2px] text-white transition-colors hover:bg-[#4a9e24]">
              GET FREE QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="block h-[2px] w-6 bg-[#111111]" />
              <span className="mt-1.5 block h-[2px] w-6 bg-[#111111]" />
              <span className="mt-1.5 block h-[2px] w-6 bg-[#111111]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-[#E5E5E5] px-[30px] pb-8"
          >
            <nav className="flex flex-col gap-1 pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-semibold uppercase tracking-[0.3px] text-[15px] leading-[22px] py-3 transition-colors ${
                    link.active
                      ? "font-bold text-[#55B52B]"
                      : "text-[#18283B] font-semibold"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#E5E5E5]">
                <button className="h-[50px] w-full rounded-[6px] border border-[#DDAF24] bg-white font-bold text-[13px] leading-[20px] tracking-[0.2px] text-[#DDAF24]">
                  BRAND GUIDE
                </button>
                <button className="h-[50px] w-full rounded-[6px] bg-[#55B52B] font-bold text-[13px] leading-[20px] tracking-[0.2px] text-white">
                  GET FREE QUOTE
                </button>
              </div>
            </nav>
          </div>
        )}
      </nav>

      {/* Black Separator */}
      <div className="h-[12px] bg-[#111111] w-full" aria-hidden="true" />
    </>
  );
}