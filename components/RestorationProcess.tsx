"use client";

import {
  ClipboardCheck,
  Droplets,
  Layers3,
  ScanLine,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const processes = [
  {
    number: "01",
    title: "SURFACE INSPECTION & ASSESSMENT",
    description:
      "Inspect the stone surface, identify its condition, and assess the treatment required.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "DEEP CLEANING",
    description:
      "Remove accumulated dirt, grime, and surface contaminants before restoration.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "GRINDING & SURFACE LEVELLING",
    description:
      "Level uneven areas and remove lippage where required.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "HONING",
    description:
      "Remove scratches and imperfections to prepare the stone for polishing.",
    icon: ScanLine,
  },
  {
    number: "05",
    title: "PROFESSIONAL POLISHING",
    description:
      "Polish the surface using premium polishing powder to enhance its natural finish.",
    icon: Sparkles,
  },
  {
    number: "06",
    title: "PROTECTION SEALER APPLICATION",
    description:
      "Apply a protective sealer when required. This treatment is optional.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "FINAL QUALITY INSPECTION",
    description:
      "Check the completed surface and verify the final finish.",
    icon: BadgeCheck,
  },
];

export default function RestorationProcess() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);

      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="workflow"
      className="bg-[#f8f8f8] px-5 py-16 font-[var(--font-montserrat)] sm:px-8 sm:py-20 lg:px-12 xl:px-20"
    >
      {/* Heading */}
      <div className="mx-auto max-w-[1400px] text-center">
        <p className="text-[14px] font-bold uppercase tracking-wide text-[#5fba28]">
          WORKFLOW
        </p>

        <h2 className="mx-auto mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-[48px]">
          OUR RESTORATION PROCESS
        </h2>

        <div className="mx-auto mt-5 h-[5px] w-[98px] rounded-full bg-[#dcb735]" />

        <p className="mx-auto mt-5 max-w-[650px] text-sm leading-6 text-[#64748b] sm:text-base">
          A structured process designed to restore the appearance and finish
          of your marble and stone surfaces.
        </p>
      </div>

      {/*
        Vertical timeline: one full-width row per step, joined by a line through the icons.
        Every row is full width, so there are no empty grid slots at all.
      */}
      <div className="mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-2xl border border-[#e4e8df] bg-white shadow-[0_14px_40px_-20px_rgba(17,17,17,0.25)] lg:mt-14">
        <div className="divide-y divide-[#edf0e8]">
          {processes.map((process, index) => {
            const Icon = process.icon;
            const isFirst = index === 0;
            const isLast = index === processes.length - 1;

            return (
              <div
                key={process.number}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group relative flex items-start gap-5 px-6 py-6 transition-colors duration-300 sm:items-center sm:gap-6 sm:px-8 lg:gap-8 lg:px-10 ${
                  isLast ? "bg-[#eef7e9]" : "hover:bg-[#f7faf4]"
                }`}
              >
                {/* Timeline line (runs through the icon centres) */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-[48px] w-px bg-[#cfe3c2] sm:left-[56px] lg:left-[64px] ${
                    isFirst
                      ? "bottom-0 top-[48px] sm:top-1/2"
                      : isLast
                      ? "top-0 h-[48px] sm:h-1/2"
                      : "bottom-0 top-0"
                  }`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-4 ring-white transition-colors duration-300 group-hover:bg-[#5fba28] ${
                    isLast
                      ? "bg-[#5fba28] ring-[#eef7e9]"
                      : "bg-[#eef7e9]"
                  }`}
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className={`transition-colors duration-300 group-hover:text-white ${
                      isLast ? "text-white" : "text-[#5fba28]"
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-10">
                  <div>
                    {/* Number (mobile only, sits above the title) */}
                    <span className="mb-2 block text-[30px] font-black leading-none text-[#dcb735] sm:hidden">
                      {process.number}
                    </span>

                    <h3 className="text-[16px] font-black uppercase leading-snug text-[#111111]">
                      {process.title}
                    </h3>

                    <div className="mt-3 h-[3px] w-10 rounded-full bg-[#dcb735]" />
                  </div>

                  <p className="mt-3 text-[13px] leading-6 text-[#64748b] lg:mt-0">
                    {process.description}
                  </p>
                </div>

                {/* Number (tablet and desktop, far right) */}
                <span
                  className={`hidden shrink-0 text-[30px] font-black leading-none transition-colors duration-300 group-hover:text-[#dcb735] sm:block ${
                    isLast ? "text-[#dcb735]" : "text-[#e4e9df]"
                  }`}
                >
                  {process.number}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process completion */}
      <div className="mx-auto mt-8 flex max-w-[1250px] items-center justify-center gap-3 text-center">
        <span className="h-px w-10 bg-[#dcb735]" />
        <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#5fba28]">
          From assessment to final finish
        </p>
        <span className="h-px w-10 bg-[#dcb735]" />
      </div>
    </section>
  );
}