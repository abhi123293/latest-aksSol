"use client";

import {
  Sparkles,
  Layers3,
  Grid3X3,
  Droplets,
  Square,
  Check,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    icon: Sparkles,
    title: "MARBLE POLISHING",
    description:
      "Resurfacing, honing, and polishing marble floors to eliminate scratches, etches, and stains, returning them to a glass-like mirror finish.",
    features: [
      "Scratch & Etch Removal",
      "High-Gloss Mirror Finish",
      "Stain Protection Sealing",
    ],
  },
  {
    icon: Layers3,
    title: "GRANITE RESTORATION",
    description:
      "Specialized grinding and polishing for ultra-hard granite surfaces. We repair cracks, remove dull spots, and restore its vibrant natural color.",
    features: [
      "Hard Stone Grinding",
      "Color Depth Restoration",
      "Surface Leveling & Honing",
    ],
  },
  {
    icon: Grid3X3,
    title: "TERRAZZO RESTORATION",
    description:
      "Patching chips and holes, removing old yellowed coatings, grinding, and sealing terrazzo to reveal its gorgeous, colorful surface.",
    features: [
      "Crack & Chip Repair",
      "Aggregates Exposure Honing",
      "Vapor-Permeable Sealing",
    ],
  },
  {
    icon: Droplets,
    title: "STONE CLEANING & SEALING",
    description:
      "Deep chemical cleaning of limestone, slate, travertine, sandstones, and grout lines. We apply protective penetrative sealers to resist stains.",
    features: [
      "Efflorescence Removal",
      "Deep Grime & Sanitization",
      "Stain Resistant Guard Application",
    ],
  },
  {
    icon: Square,
    title: "SURFACE RESTORATION",
    description:
      "Leveling uneven stone tiles (lippage removal), repair of heavy traffic areas, honing to custom satin/matte finishes, and floor grinding.",
    features: [
      "Joint Lippage Removal",
      "Luster Tuning (Matte to Gloss)",
      "Heavy Traffic Re-conditioning",
    ],
  },
];

export default function Services() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (card): card is HTMLDivElement => card !== null
      );

      if (!cards.length) return;

      /*
       * Card entrance animation
       */
      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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

    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="bg-[#f8f8f8] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20"
    >
      {/* ================= SECTION HEADING ================= */}

      <div className="mx-auto max-w-[1400px] text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-[#5fba28]">
          OUR SERVICES
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-5xl xl:text-[48px]">
          PREMIUM STONE CARE & RESTORATION
        </h2>

        <div className="mx-auto mt-5 h-[4px] w-[95px] rounded-full bg-[#dcb735]" />
      </div>

      {/* ================= SERVICE CARDS ================= */}

      <div className="mx-auto mt-16 grid max-w-[1250px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          /*
           * First 3 cards:
           * 2 columns each on desktop.
           *
           * Last 2 cards:
           * 3 columns each on desktop.
           */
          const isWide = index >= 3;

          return (
           <div
  key={service.title}
  ref={(el) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  }}
  className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4e8df] bg-white shadow-[0_1px_2px_rgba(17,17,17,0.04),0_14px_34px_-14px_rgba(17,17,17,0.14)] transition-shadow duration-500 hover:shadow-[0_26px_56px_-20px_rgba(95,186,40,0.4)] ${isWide ? "lg:col-span-3 lg:flex-row" : "lg:col-span-2"} ${index === 3 ? "lg:-translate-x-2" : ""} ${index === 4 ? "sm:col-span-2 lg:translate-x-2" : ""}`}
>
  <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eef7e9] transition-colors duration-300 group-hover:bg-[#5fba28] sm:h-16 sm:w-16">
      <Icon
        size={32}
        strokeWidth={1.8}
        className="text-[#5fba28] transition-colors duration-300 group-hover:text-white"
      />
    </div>

    <h3 className="mt-5 text-[19px] font-black uppercase leading-tight text-[#111111] sm:mt-6 sm:text-[21px]">
      {service.title}
    </h3>

    <div className="mt-3 h-[3px] w-10 rounded-full bg-[#dcb735]" />

    <p className="mt-4 text-[14px] leading-6 text-[#40516a] sm:text-[15px] sm:leading-7">
      {service.description}
    </p>
  </div>

  <div className={`flex min-w-0 flex-col border-t border-[#e6ecde] bg-[#f5f9f1] p-6 sm:p-8 ${isWide ? "lg:flex-1 lg:justify-center lg:border-l lg:border-t-0" : ""}`}>
    <ul className="divide-y divide-[#e0e8d6]">
      {service.features.map((feature) => (
        <li key={feature} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5fba28]">
            <Check size={12} strokeWidth={3} className="text-white" />
          </span>

          <span className="min-w-0 text-[13px] font-medium leading-snug text-[#33445c] sm:text-[13.5px]">
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button
      type="button"
      onClick={scrollToContact}
      className="mt-6 flex h-[46px] w-full items-center justify-center rounded-lg bg-[#111111] text-sm font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#5fba28]"
    >
      INQUIRE SERVICE
    </button>
  </div>
</div>
          );
        })}
      </div>

      {/* ================= CUSTOM SERVICE BANNER ================= */}

    <div className="relative mx-auto mt-8 flex max-w-[1250px] flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#111111] px-6 py-8 text-center sm:px-8 lg:mt-10 lg:flex-row lg:px-12 lg:text-left">
        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#5fba28]/20 blur-3xl" />

        {/* Text */}

        <div className="relative min-w-0">
          <p className="text-lg font-black uppercase text-white lg:text-xl">
            Don’t see your service?
          </p>

          <p className="mt-1 text-sm leading-6 text-[#a7b3c4]">
            Tell us what your stone needs and we will recommend the right
            treatment.
          </p>
        </div>

        {/* Custom Service Button */}

       <button
  type="button"
  onClick={scrollToContact}
  className="relative flex h-[55px] w-full shrink-0 items-center justify-center gap-4 rounded-md bg-[#5fba28] px-6 text-sm font-bold uppercase text-white shadow-lg transition-colors duration-300 hover:bg-[#4da51c] sm:w-auto sm:px-10"
>
          REQUEST A CUSTOM SERVICE

          <ArrowRight size={20} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}