"use client";

import { Sparkles, Layers3, Grid3X3, Droplets, Square, Check, ArrowRight,} from "lucide-react";
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
    const cards = cardsRef.current;

    // Card entrance animation
    gsap.fromTo(
      cards,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hover animation
    cards.forEach((card) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -10,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true,
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup listeners
      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  });

  return () => {
    ctx.revert();
  };
}, []);

  return (
    <section
      id="services"
      className="bg-[#f8f8f8] px-5 py-20 font-[var(--font-montserrat)] sm:px-8 lg:px-12 xl:px-20"
    >
      {/* Section Heading */}
      <div className="mx-auto max-w-[1400px] text-center">

        <p className="text-sm font-bold uppercase tracking-wide text-[#5fba28]">
          OUR SERVICES
        </p>

        <h2 className="mt-3 text-3xl font-black uppercase leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-5xl xl:text-[48px]">
          PREMIUM STONE CARE & RESTORATION
        </h2>

        {/* Gold underline */}
        <div className="mx-auto mt-5 h-[4px] w-[95px] rounded-full bg-[#dcb735]" />
      </div>

      {/* Service Cards */}
      <div className="mx-auto mt-20 grid max-w-[1250px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

       {services.map((service, index) => {
          const Icon = service.icon;

          return (
           <div 
  
   key={service.title}
  ref={(el) => {
    if (el) cardsRef.current[index] = el;
  }}
className="group flex h-[450px] flex-col rounded-xl border border-[#1f2937] bg-white px-7 py-6 transition-shadow duration-500 hover:shadow-xl">
              
             {/* Icon */}
<div className="flex h-[76px] w-[76px] items-center justify-center rounded-xl bg-[#eef7e9] transition-colors duration-300 group-hover:bg-[#5fba28]">
  <Icon
    size={44}
    strokeWidth={1.8}
    className="text-[#5fba28] transition-colors duration-300 group-hover:text-white"
  />
</div>

              {/* Title */}
              <h3 className="mt-8 text-[20px] font-black uppercase leading-tight text-[#111111]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-[14px] leading-6 text-[#40516a]">
                {service.description}
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-[#e5e7eb]" />

              {/* Features */}
             <div className="space-y-1">
  {service.features.map((feature) => (
    <div
      key={feature}
      className="flex items-start gap-3"
    >
      <Check
        size={18}
        strokeWidth={2}
        className="-mt-[1px] shrink-0 text-[#5fba28]"
      />

      <span className="text-[12px] leading-tight text-[#53657d]">
        {feature}
      </span>
    </div>
  ))}
</div>

              {/* Inquire button */}
              <button 
              onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
}} className="mt-auto flex h-[40px] w-full items-center justify-center rounded-md border border-[#dfe3e8] bg-white text-sm font-bold uppercase text-[#111111] transition duration-300 hover:border-[#5fba28] hover:bg-[#5fba28] hover:text-white">
                INQUIRE SERVICE
              </button>
            </div>
          );
        })}
      </div>

      {/* Custom Service Button */}
      <div className="mt-20 flex justify-center">
        <button onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
}} className="flex h-[55px] items-center justify-center gap-4 rounded-md bg-[#5fba28] px-10 text-sm font-bold uppercase text-white shadow-lg transition duration-300 hover:bg-[#4da51c]">
          REQUEST A CUSTOM SERVICE
          <ArrowRight size={20} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}