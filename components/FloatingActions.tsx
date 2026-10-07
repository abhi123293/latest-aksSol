"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop side buttons - fixed right side with ~15px spacing from edge */}
      <div className="fixed right-[15px] top-[48%] z-[1000] hidden flex-col md:flex">
        <a
          href="https://wa.me/97333661188"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[72px] w-[75px] flex-col items-center justify-center bg-[#55B52B] text-white transition-colors rounded-[8px] shadow-[0_4px_20px_rgba(85,181,43,0.3)]"
          aria-label="WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="mt-1 text-[11px] font-semibold leading-[15px]">
            WhatsApp
          </span>
        </a>

        <a
          href="tel:+97333661188"
          className="flex h-[72px] w-[75px] flex-col items-center justify-center border-t border-white/20 bg-[#55B52B] text-white transition-colors rounded-[8px] mt-2 shadow-[0_4px_20px_rgba(85,181,43,0.3)]"
          aria-label="Call Now"
        >
          <Phone size={26} />
          <span className="mt-1 text-[11px] font-semibold leading-[15px]">
            Call Now
          </span>
        </a>
      </div>

      {/* Bottom-right circular WhatsApp button - visible on all screens */}
      <a
        href="https://wa.me/97333661188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[28px] right-[28px] z-[1000] flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
        aria-label="WhatsApp"
      >
        <MessageCircle size={34} />
      </a>
    </>
  );
}