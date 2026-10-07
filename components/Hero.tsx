"use client";

import { MessageCircle } from "lucide-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {

     const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroContentRef.current) return;

    gsap.fromTo(
      heroContentRef.current,
      {
        x: -35,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );
  }, []);
  return (
   <section className="relative overflow-hidden bg-[#111111] font-[var(--font-montserrat)]">

      <div className="grid min-h-[625px] grid-cols-1 lg:grid-cols-[60%_40%] mt-14">

        {/* LEFT SIDE */}
        <div className="flex min-h-[440px] items-center bg-[#111111] lg:min-h-[600px]">

          <div   ref={heroContentRef} className="w-full px-5 py-8 sm:px-8 sm:py-14 lg:px-10 lg:py-5 xl:pl-[14%] xl:pr-0">

            {/* Small Heading */}
            <p className="mb-2 text-2xl font-extrabold tracking-wide text-white sm:text-1xl lg:text-2xl max-sm:font-[var(--font-montserrat)]">
              RESTORE THE
            </p>

            {/* Gold Heading */}
           <h1 className="whitespace-normal lg:whitespace-nowrap text-6xl font-black uppercase leading-[0.95] tracking-tight text-[#dfb832] sm:text-5xl lg:text-6xl xl:text-[65px] max-sm:font-[var(--font-montserrat)]">
              NATURAL BEAUTY
            </h1>

            {/* White Heading */}
           <h2 className="mt-4 max-w-[680px] text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[50px] max-sm:font-[var(--font-montserrat)]">
              OF YOUR MARBLE &
              <br />
              STONE SURFACES
            </h2>

            {/* Description */}
           <p className="mt-6 max-w-[620px] text-base leading-7 text-[#e2e2e2] sm:text-lg lg:text-xl max-sm:text-[22px] max-sm:leading-7 max-sm:mt-7 max-sm:mb-6 max-sm:font-[var(--font-montserrat)]"> Professional Marble Polishing, Stone Restoration & Cleaning Services Across Bahrain.
               </p>
            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">

              {/* Quote */}
              <button className="flex h-[60px] items-center justify-center gap-3 rounded-md bg-[#5fba28] px-7 text-base font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-[#6bcf2d]">
                <MessageCircle size={24} strokeWidth={2} />
                GET FREE QUOTE
              </button>

              {/* WhatsApp */}
              <button className="flex h-[60px] items-center justify-center gap-3 rounded-md border border-[#dcb735] bg-transparent px-7 text-base font-bold text-white transition duration-300 hover:bg-[#dcb735] hover:text-black">
                <MessageCircle size={24} strokeWidth={2} />
                WHATSAPP NOW
              </button>

            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
       <div className="relative hidden min-h-[450px] lg:block lg:min-h-0">

          <img
            src="/images/granite.webp"
            alt="Luxury marble and stone property"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-black/10" />

        </div>

      </div>

    </section>
  );
}