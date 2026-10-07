"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop side buttons */}
      <div className="fixed right-[15px] top-[48%] z-[1000] hidden flex-col md:flex">
        <a
          href="https://wa.me/97333661188"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[72px] w-[75px] flex-col items-center justify-center rounded-[8px] bg-[#55B52B] text-white shadow-[0_4px_20px_rgba(85,181,43,0.3)] transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="mt-1 text-[11px] font-semibold leading-[15px]">
            WhatsApp
          </span>
        </a>

        <a
          href="tel:+97333661188"
          className="mt-2 flex h-[72px] w-[75px] flex-col items-center justify-center rounded-[8px] border-t border-white/20 bg-[#55B52B] text-white shadow-[0_4px_20px_rgba(85,181,43,0.3)] transition-colors"
          aria-label="Call Now"
        >
          <Phone size={26} />
          <span className="mt-1 text-[11px] font-semibold leading-[15px]">
            Call Now
          </span>
        </a>
      </div>

      {/* Mobile / Bottom floating WhatsApp */}
      <a
        href="https://wa.me/97333661188"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-[999] flex h-[70px] w-[70px] items-center justify-center rounded-full border-[2px] border-white bg-[#25D366] text-white shadow-[0_6px_25px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] sm:h-[75px] sm:w-[75px]"
      >
        <MessageCircle size={35} strokeWidth={1.8} />
      </a>
    </>
  );
}