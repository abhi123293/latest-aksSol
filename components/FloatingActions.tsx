"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop side buttons */}
      <div className="fixed right-0 top-[47%] z-[100] hidden flex-col md:flex">

        <a
          href="https://wa.me/97333661188"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[74px] w-[82px] flex-col items-center justify-center bg-[#63bd29] text-white transition hover:bg-[#52aa1e]"
        >
          <MessageCircle size={30} />

          <span className="mt-1 text-xs font-bold">
            WhatsApp
          </span>
        </a>

        <a
          href="tel:+97333661188"
          className="flex h-[74px] w-[82px] flex-col items-center justify-center border-t border-white/20 bg-[#63bd29] text-white transition hover:bg-[#52aa1e]"
        >
          <Phone size={29} />

          <span className="mt-1 text-xs font-bold">
            Call Now
          </span>
        </a>

      </div>

      {/* Mobile / Bottom floating WhatsApp */}
      <a
        href="https://wa.me/97333661188"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[100] flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-2xl md:hidden"
      >
        <MessageCircle size={42} />
      </a>
    </>
  );
}
